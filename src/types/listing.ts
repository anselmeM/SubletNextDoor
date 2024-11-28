export interface Listing {
  id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
  available: boolean;
  propertyType: string;
  amenities: string[];
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