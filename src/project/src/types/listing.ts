export interface Listing extends ListingFormData {
  id: string;
  available: boolean;
  createdAt: string;
  rating?: number;
}

export interface ListingFilters {
  priceRange: [number, number];
  propertyType: string[];
  amenities: string[];
}

export type SortOption = 'price-asc' | 'price-desc' | 'date-desc' | 'rating-desc';

export const PROPERTY_TYPES = ['Studio', '1 Bedroom', '2 Bedrooms', '3+ Bedrooms', 'Shared Room'];
export const AMENITIES = ['Furnished', 'WiFi', 'Parking', 'Laundry', 'Air Conditioning', 'Gym'];