import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Building, Calendar, Users, Wifi, Home, Car, DollarSign, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useListingStore } from '@/lib/store/listing-store';
import { formatDate } from '@/lib/utils/format';

export function ListingDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const listing = useListingStore((state) => state.getListing(id!));

  if (!listing) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Listing Not Found</h1>
          <p className="mt-2 text-gray-600">
            The listing you're looking for doesn't exist or has been removed.
          </p>
          <Button
            className="mt-4"
            onClick={() => navigate('/listings')}
          >
            Back to Listings
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Image Gallery */}
          <div className="overflow-hidden rounded-lg">
            {listing.images.length > 0 ? (
              <>
                <img
                  src={listing.images[0]}
                  alt={listing.title}
                  className="h-[400px] w-full object-cover"
                />
                <div className="mt-4 flex gap-4">
                  {listing.images.map((image, idx) => (
                    <div
                      key={idx}
                      className="relative h-20 w-20 overflow-hidden rounded-lg"
                    >
                      <img
                        src={image}
                        alt={`View ${idx + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex h-[400px] items-center justify-center bg-gray-100">
                <p className="text-gray-500">No images available</p>
              </div>
            )}
          </div>

          {/* Listing Details */}
          <div className="mt-8">
            <h1 className="text-3xl font-bold text-gray-900">{listing.title}</h1>
            <div className="mt-4 flex items-center text-gray-500">
              <MapPin className="mr-2 h-5 w-5" />
              {listing.location}
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900">Description</h2>
              <p className="mt-2 text-gray-600">{listing.description}</p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900">Details</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-gray-400" />
                  <span>Available from {formatDate(listing.availableFrom)}</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-gray-400" />
                  <span>Up to {listing.maxTenants} tenants</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="mr-2 h-5 w-5 text-gray-400" />
                  <span>${listing.price}/month</span>
                </div>
                <div className="flex items-center">
                  <Home className="mr-2 h-5 w-5 text-gray-400" />
                  <span>{listing.propertyType}</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900">Amenities</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {listing.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center">
                    {amenity === 'WiFi' && <Wifi className="mr-2 h-5 w-5 text-gray-400" />}
                    {amenity === 'Furnished' && <Home className="mr-2 h-5 w-5 text-gray-400" />}
                    {amenity === 'Parking' && <Car className="mr-2 h-5 w-5 text-gray-400" />}
                    {amenity === 'Laundry' && <Building className="mr-2 h-5 w-5 text-gray-400" />}
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 rounded-lg border bg-white p-6 shadow-sm">
            <div className="mt-6">
              <Button className="w-full">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Owner
              </Button>
            </div>

            <div className="mt-6 border-t pt-6">
              <h3 className="font-semibold text-gray-900">Safety Tips</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Only pay through our secure platform</li>
                <li>• Meet in a public place for viewings</li>
                <li>• Report suspicious behavior</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}