import { ListingCard } from './listing-card';

interface Listing {
  id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
  available: boolean;
}

interface ListingGridProps {
  listings: Listing[];
}

export function ListingGrid({ listings }: ListingGridProps) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {listings.map((listing) => (
        <ListingCard key={listing.id} {...listing} />
      ))}
    </div>
  );
}