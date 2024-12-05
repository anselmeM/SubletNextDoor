import { useListingStore } from '@/lib/store/listing-store'; // Importing custom hook to access the listing store
import { ListingGrid } from '../listings/listing-grid'; // Importing ListingGrid component to display listings

// FeaturedListings component to display a section of featured listings
export function FeaturedListings() {
  // Accessing the listings from the listing store, filtering for available listings,
  // sorting them by creation date in descending order, and taking the top 6
  const listings = useListingStore((state) => 
    state.listings
      .filter(listing => listing.available) // Filter to include only available listings
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) // Sort listings by creation date, newest first
      .slice(0, 6) // Limit the listings to the top 6
  );

  return (
    <section className="py-12 bg-gray-50"> {/* Section with padding and background color */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> {/* Container for centering content */}
        <div className="text-center"> {/* Centered text for the section header */}
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Listings
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover our most recent student sublets
          </p>
        </div>
        {listings.length > 0 ? ( // Conditional rendering based on the availability of listings
          <ListingGrid listings={listings} /> // Render the ListingGrid component with the listings
        ) : (
          <div className="mt-8 text-center text-gray-500"> {/* Message when no listings are available */}
            <p>No listings available yet. Be the first to list your property!</p>
          </div>
        )}
      </div>
    </section>
  );
}