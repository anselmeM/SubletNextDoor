import { useState } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ListingGrid } from '../components/listings/listing-grid';
import { FiltersDialog } from '../components/listings/filters-dialog';
import { SearchBar } from '../components/listings/search-bar';
import { SortSelect } from '../components/listings/sort-select';
import { ListingFilters, SortOption } from '@/types/listing';
import { sortListings } from '@/lib/utils/listings';
import { useListingStore } from '@/lib/store/listing-store';

const INITIAL_FILTERS: ListingFilters = {
  priceRange: [0, 5000],
  propertyType: [],
  amenities: [],
};

export function ListingsPage() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<ListingFilters>(INITIAL_FILTERS);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('date-desc');
  
  const listings = useListingStore((state) => state.listings);

  const filteredListings = listings.filter((listing) => {
    const matchesSearch = searchQuery === '' || 
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPrice = listing.price <= filters.priceRange[1];
    
    const matchesPropertyType = filters.propertyType.length === 0 || 
      filters.propertyType.includes(listing.propertyType);

    const matchesAmenities = filters.amenities.length === 0 || 
      filters.amenities.every(amenity => listing.amenities.includes(amenity));

    return matchesSearch && matchesPrice && matchesPropertyType && matchesAmenities;
  });

  const sortedListings = sortListings(filteredListings, sortOption);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center space-y-6">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Available Listings</h1>
          <Button variant="outline" onClick={() => setIsFiltersOpen(true)}>
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="flex w-full flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-x-4 sm:space-y-0">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={() => {/* Implement search logic */}}
          />
          <SortSelect value={sortOption} onChange={setSortOption} />
        </div>

        <div className="flex w-full flex-wrap gap-2">
          {filters.propertyType.map((type) => (
            <div key={type} className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
              {type}
            </div>
          ))}
          {filters.amenities.map((amenity) => (
            <div key={amenity} className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
              {amenity}
            </div>
          ))}
        </div>

        <ListingGrid listings={sortedListings} />
      </div>

      <FiltersDialog
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
        filters={filters}
        onApplyFilters={setFilters}
      />
    </div>
  );
}