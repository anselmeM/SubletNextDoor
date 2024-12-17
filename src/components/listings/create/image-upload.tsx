import { Camera, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

interface ImageUploadProps {
  images: string[];
  onChange: (urls: string[]) => void;
  error?: string;
}

export function ImageUpload({ images, onChange, error: propError }: ImageUploadProps) {
  const [error, setError] = useState<string | null>(null);
  const storage = getStorage();

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const validImages = Array.from(files).filter((file) => isValidImage(file));
    if (validImages.length === 0) {
      setError('Invalid file type. Please upload PNG, JPG, or GIF images.');
      return;
    }

    if (validImages.some((file) => file.size > 10 * 1024 * 1024)) {
      setError('One or more images exceed the 10MB size limit.');
      return;
    }

    try {
      const uploadPromises = validImages.map(async (file) => {
        const storageRef = ref(storage, `images/${Date.now()}-${file.name}`); // Unique file name
        const uploadTask = uploadBytesResumable(storageRef, file);

        return new Promise<string>((resolve, reject) => {
          uploadTask.on('state_changed',
            (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
              switch (snapshot.state) {
                case 'paused':
                  console.log('Upload is paused');
                  break;
                case 'running':
                  console.log('Upload is running');
                  break;
              }
            },
            (error) => {
              // Handle unsuccessful uploads
              reject(error);
            },
            () => {
              // Handle successful uploads on complete
              // For instance, get the download URL: https://firebasestorage.googleapis.com/...
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                resolve(downloadURL);
              });
            }
          );
        });
      });

      const downloadURLs = await Promise.all(uploadPromises);
      onChange([...images, ...downloadURLs]);
      setError(null); // Clear any previous errors
    } catch (error: any) {
      console.error("Error uploading images:", error);
      setError("Error uploading images. Please try again.");
    }
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    onChange(newImages);
  };

  const isValidImage = (file: File) => file.type.startsWith('image/');

  return (
    <div className="space-y-4">
      <Label required>Photos</Label>

      {images.length > 0 && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {images.map((url, index) => (
            <div key={url} className="relative aspect-square">
              <img
                src={url}
                alt={`Property ${index + 1}`}
                className="h-full w-full rounded-lg object-cover"
              />
              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="absolute right-2 top-2"
                onClick={() => removeImage(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center rounded-lg border-2 border-dashed border-gray-300 px-6 py-10">
        <div className="text-center">
          <Camera className="mx-auto h-12 w-12 text-gray-400" />
          <div className="mt-4 flex text-sm text-gray-600">
            <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
              <span>Upload photos</span>
              <input
                type="file"
                className="sr-only"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
