import { Camera, X } from 'lucide-react'; // Importing Camera and X icons from lucide-react for use in the image upload interface
import { Button } from '@/components/ui/button'; // Importing a custom Button component for actions
import { Label } from '@/components/ui/label'; // Importing a custom Label component for form labeling

// Interface defining the props for the ImageUpload component
interface ImageUploadProps {
  images: string[]; // Array of image URLs
  onChange: (urls: string[]) => void; // Function to handle changes in the image list
  error?: string; // Optional error message to display
}

// ImageUpload component for uploading and displaying images
export function ImageUpload({ images, onChange, error }: ImageUploadProps) {
  // Function to handle image file selection and create object URLs
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files; // Accessing the selected files
    if (!files) return; // Exit if no files are selected

    // Create object URLs for the selected files and update the image list
    const urls = Array.from(files).map((file) => URL.createObjectURL(file));
    onChange([...images, ...urls]); // Call the onChange handler with the updated image list
  };

  // Function to remove an image from the list by index
  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index); // Filter out the image at the specified index
    onChange(newImages); // Call the onChange handler with the updated image list
  };

  return (
    <div className="space-y-4"> {/* Vertical spacing between elements */}
      <Label required>Photos</Label> {/* Label for the image upload section */}
      
      {images.length > 0 && ( // Conditional rendering if there are images to display
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"> {/* Grid layout for displaying images */}
          {images.map((url, index) => (
            <div key={url} className="relative aspect-square"> {/* Container for each image with aspect ratio */}
              <img
                src={url} // Image source URL
                alt={`Property ${index + 1}`} // Alt text for accessibility
                className="h-full w-full rounded-lg object-cover" // Styling for the image
              />
              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="absolute right-2 top-2" // Positioning the remove button
                onClick={() => removeImage(index)} // Remove image on button click
              >
                <X className="h-4 w-4" /> {/* X icon for the remove button */}
              </Button>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center rounded-lg border-2 border-dashed border-gray-300 px-6 py-10"> {/* Styling for the upload area */}
        <div className="text-center"> {/* Centered content for the upload area */}
          <Camera className="mx-auto h-12 w-12 text-gray-400" /> {/* Camera icon for visual indication */}
          <div className="mt-4 flex text-sm text-gray-600"> {/* Styling for the upload instructions */}
            <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500"> {/* Styling for the upload label */}
              <span>Upload photos</span> {/* Text for the upload label */}
              <input
                type="file"
                className="sr-only" // Visually hidden file input
                multiple // Allow multiple file selection
                accept="image/*" // Accept only image files
                onChange={handleImageUpload} // Handle file selection
              />
            </label>
            <p className="pl-1">or drag and drop</p> {/* Additional instruction for drag and drop */}
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p> {/* File format and size instructions */}
        </div>
      </div>
      
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>} {/* Display error message if present */}
    </div>
  );
}