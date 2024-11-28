import { MapPin, Building } from 'lucide-react';
import { formatCurrency } from '@/lib/utils/format';
import { Link } from 'react-router-dom';

interface ListingCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
  available: boolean;
}

export function ListingCard({ id, title, location, price, imageUrl, available }: ListingCardProps) {
  return (
    <Link to={`/listings/${id}`}>
      <div className="overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={imageUrl}
            alt={title}
            className="h-48 w-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <MapPin className="mr-1 h-4 w-4" />
            {location}
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-500">
              <Building className="mr-1 h-4 w-4" />
              {available ? 'Available Now' : 'Coming Soon'}
            </div>
            <span className="font-semibold text-blue-600">{formatCurrency(price)}/mo</span>
          </div>
        </div>
      </div>
    </Link>
  );
}