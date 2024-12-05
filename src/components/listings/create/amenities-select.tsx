import { Check } from 'lucide-react'; // Importing the Check icon from lucide-react for indicating selected amenities
import { Label } from '@/components/ui/label'; // Importing a custom Label component for form labeling
import { AMENITIES } from '@/types/listing'; // Importing a list of available amenities from the listing types

// Interface defining the props for the AmenitiesSelect component
interface AmenitiesSelectProps {
  value: string[]; // Array of selected amenities
  onChange: (value: string[]) => void; // Function to handle changes in selected amenities
  error?: string; // Optional error message to display
}

// AmenitiesSelect component for selecting amenities from a predefined list
export function AmenitiesSelect({ value, onChange, error }: AmenitiesSelectProps) {
  // Function to toggle the selection of an amenity
  const toggleAmenity = (amenity: string) => {
    // If the amenity is already selected, remove it; otherwise, add it to the selection
    const newValue = value.includes(amenity)
      ? value.filter((a) => a !== amenity)
      : [...value, amenity];
    onChange(newValue); // Call the onChange handler with the updated selection
  };

  return (
    <div className="space-y-2"> {/* Vertical spacing between elements */}
      <Label required>Amenities</Label> {/* Label for the amenities selection */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3"> {/* Grid layout for amenity buttons */}
        {AMENITIES.map((amenity) => (
          <button
            key={amenity} // Unique key for each amenity button
            type="button"
            onClick={() => toggleAmenity(amenity)} // Toggle selection on button click
            className={`flex items-center rounded-md border p-2 text-sm ${
              value.includes(amenity)
                ? 'border-blue-500 bg-blue-50 text-blue-700' // Styling for selected amenities
                : 'border-gray-200 hover:border-gray-300' // Styling for unselected amenities
            }`}
          >
            {value.includes(amenity) && <Check className="mr-2 h-4 w-4" />} {/* Display check icon if selected */}
            {amenity} {/* Display the amenity name */}
          </button>
        ))}
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>} {/* Display error message if present */}
    </div>
  );
}