import { X, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { formatCurrency } from '@/lib/utils/format';

interface FiltersDialogProps {
  isOpen: boolean;
  onClose: () => void;
  filters: ListingFilters;
  onApplyFilters: (filters: ListingFilters) => void;
}

export interface ListingFilters {
  priceRange: [number, number];
  propertyType: string[];
  amenities: string[];
}

const PROPERTY_TYPES = ['Studio', '1 Bedroom', '2 Bedrooms', '3+ Bedrooms', 'Shared Room'];
const AMENITIES = ['Furnished', 'WiFi', 'Parking', 'Laundry', 'Air Conditioning', 'Gym'];

export function FiltersDialog({ isOpen, onClose, filters, onApplyFilters }: FiltersDialogProps) {
  if (!isOpen) return null;

  const handlePropertyTypeChange = (type: string) => {
    const updatedTypes = filters.propertyType.includes(type)
      ? filters.propertyType.filter(t => t !== type)
      : [...filters.propertyType, type];
    onApplyFilters({ ...filters, propertyType: updatedTypes });
  };

  const handleAmenityChange = (amenity: string) => {
    const updatedAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter(a => a !== amenity)
      : [...filters.amenities, amenity];
    onApplyFilters({ ...filters, amenities: updatedAmenities });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Filters</h2>
          <Button variant="outline" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-6">
          <h3 className="font-medium">Price Range</h3>
          <div className="mt-2 flex items-center space-x-4">
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={filters.priceRange[1]}
              onChange={(e) => onApplyFilters({ 
                ...filters, 
                priceRange: [0, parseInt(e.target.value)] 
              })}
              className="w-full"
            />
            <span className="text-sm text-gray-600">
              Up to {formatCurrency(filters.priceRange[1])}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-medium">Property Type</h3>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {PROPERTY_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => handlePropertyTypeChange(type)}
                className={`flex items-center rounded-md border p-2 text-sm ${
                  filters.propertyType.includes(type)
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {filters.propertyType.includes(type) && (
                  <Check className="mr-2 h-4 w-4" />
                )}
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-medium">Amenities</h3>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {AMENITIES.map((amenity) => (
              <button
                key={amenity}
                onClick={() => handleAmenityChange(amenity)}
                className={`flex items-center rounded-md border p-2 text-sm ${
                  filters.amenities.includes(amenity)
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {filters.amenities.includes(amenity) && (
                  <Check className="mr-2 h-4 w-4" />
                )}
                {amenity}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          <Button
            variant="outline"
            onClick={() => onApplyFilters({
              priceRange: [0, 5000],
              propertyType: [],
              amenities: [],
            })}
          >
            Reset
          </Button>
          <Button onClick={onClose}>Apply Filters</Button>
        </div>
      </div>
    </div>
  );
}