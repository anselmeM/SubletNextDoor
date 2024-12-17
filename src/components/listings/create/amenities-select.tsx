import { Check } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { AMENITIES } from '@/types/listing';

interface AmenitiesSelectProps {
  value: string[];
  onChange: (value: string[]) => void;
  error?: string;
}

export function AmenitiesSelect({ value, onChange, error }: AmenitiesSelectProps) {
  const toggleAmenity = (amenity: string) => {
    const newValue = value.includes(amenity)
      ? value.filter((a) => a !== amenity)
      : [...value, amenity];
    onChange(newValue);
  };

  return (
    <div className="space-y-2">
      <Label required>Amenities</Label>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {AMENITIES.map((amenity) => (
          <button
            key={amenity}
            type="button"
            onClick={() => toggleAmenity(amenity)}
            className={`flex items-center rounded-md border p-2 text-sm ${
              value.includes(amenity)
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            aria-label={`${amenity} amenity. ${value.includes(amenity) ? 'Selected' : 'Not selected'}`} // Accessibility
            aria-pressed={value.includes(amenity)} // Accessibility
          >
            {value.includes(amenity) && <Check className="mr-2 h-4 w-4" />}
            {amenity}
          </button>
        ))}
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
