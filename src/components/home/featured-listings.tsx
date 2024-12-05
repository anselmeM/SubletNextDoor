import { useListingStore } from '@/lib/store/listing-store';
import { ListingGrid } from '../listings/listing-grid';

export function FeaturedListings() {
  const listings = useListingStore((state) => 
    state.listings
      .filter(listing => listing.available)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 6)
  );

  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Listings
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover our most recent student sublets
          </p>
        </div>
        {listings.length > 0 ? (
          <ListingGrid listings={listings} />
        ) : (
          <div className="mt-8 text-center text-gray-500">
            <p>No listings available yet. Be the first to list your property!</p>
          </div>
        )}
      </div>
    </section>
  );
}