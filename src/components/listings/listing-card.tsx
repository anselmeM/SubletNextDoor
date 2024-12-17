import { MapPin, Building, Calendar } from 'lucide-react';
import { formatCurrency } from '@/lib/utils/format';
import { formatDate } from '@/lib/utils/date'; // Import formatDate if you have it
import { Link } from 'react-router-dom';
import type { Listing } from '@/types/listing';

interface ListingCardProps {
  listing: Listing;
}

export function ListingCard({ listing }: ListingCardProps) {
  const {
    id,
    title,
    location,
    price,
    images,
    available,
    availableFrom,
    propertyType,
  } = listing;

  return (
    <Link to={`/listings/${id}`}>
      <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={images?.[0] || 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=2070&h=1200'}
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
          {!available && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-semibold px-4 py-2 rounded-full bg-black/50">
                Not Available
              </span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
            {title}
          </h3>
          <div className="mt-2 flex items-center text-sm text-gray-500" aria-label={`Location: ${location}`}> {/* Accessibility */}
            <MapPin className="mr-1 h-4 w-4" aria-hidden="true" /> {/* Hide icon from screen readers */}
            {location}
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-500" aria-label={`Property Type: ${propertyType}`}> {/* Accessibility */}
              <Building className="mr-1 h-4 w-4" aria-hidden="true"/> {/* Hide icon from screen readers */}
              {propertyType}
            </div>
            <span className="font-semibold text-blue-600">
              {formatCurrency(price)}/mo
            </span>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500" aria-label={`Available from: ${formatDate ? formatDate(availableFrom) : new Date(availableFrom).toLocaleDateString()}`}> {/* Accessibility */}
            <Calendar className="mr-1 h-4 w-4" aria-hidden="true"/> {/* Hide icon from screen readers */}
            Available from {formatDate ? formatDate(availableFrom) : new Date(availableFrom).toLocaleDateString()}
          </div>
        </div>
      </div>
    </Link>
  );
}
