import { Building, Calendar, MapPin, Users } from 'lucide-react';
import { formatCurrency } from '@/lib/utils/format';
import type { ListingFormData } from '@/lib/utils/validation';

interface ListingPreviewProps {
  data: Partial<ListingFormData>;
}

export function ListingPreview({ data }: ListingPreviewProps) {
  if (!data.title) {
    return (
      <div className="rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
        <p className="text-gray-500">
          Fill out the form to see a preview of your listing
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
      {data.images?.length ? (
        <div className="relative aspect-video">
          <img
            src={data.images[0]}
            alt={data.title}
            className="h-full w-full object-cover"
          />
          {data.images.length > 1 && (
            <div className="absolute inset-x-0 bottom-4 flex justify-center">
              <div className="flex space-x-2">
                {data.images.slice(0, 4).map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full ${
                      index === 0 ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="aspect-video bg-gray-100" />
      )}

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{data.title}</h3>

        {data.location && (
          <div className="mt-2 flex items-center text-gray-500">
            <MapPin className="mr-2 h-5 w-5" />
            {data.location}
          </div>
        )}

        {data.description && (
          <p className="mt-4 text-gray-600">
            {data.description.length > 200
              ? `${data.description.slice(0, 200)}...`
              : data.description}
          </p>
        )}

        <div className="mt-6 grid grid-cols-2 gap-4 border-t pt-6 sm:grid-cols-4">
          {data.price && (
            <div>
              <dt className="text-sm font-medium text-gray-500">Price</dt>
              <dd className="mt-1 text-lg font-semibold text-blue-600">
                {formatCurrency(data.price)}/mo
              </dd>
            </div>
          )}

          {data.propertyType && (
            <div>
              <dt className="text-sm font-medium text-gray-500">Type</
