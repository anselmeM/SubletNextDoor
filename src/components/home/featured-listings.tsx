import { ListingGrid } from '../listings/listing-grid';

const FEATURED_LISTINGS = [
  {
    id: '1',
    title: 'Modern Studio Apartment',
    location: 'Downtown Campus Area',
    price: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600&h=400',
    available: true,
  },
  {
    id: '2',
    title: 'Cozy 2-Bedroom Suite',
    location: 'University Heights',
    price: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=600&h=400',
    available: true,
  },
  {
    id: '3',
    title: 'Luxury Student Loft',
    location: 'College District',
    price: 2200,
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=600&h=400',
    available: false,
  }
];

export function FeaturedListings() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Featured Listings</h2>
        <p className="mt-2 text-gray-600">Discover our most popular student sublets</p>
        <ListingGrid listings={FEATURED_LISTINGS} />
      </div>
    </section>
  );
}