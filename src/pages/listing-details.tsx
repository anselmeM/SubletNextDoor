import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Building, Calendar, Users, Wifi, Home, Car, DollarSign, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock data - would come from API in real app
const LISTING_DATA = {
  id: '1',
  title: 'Modern Studio Apartment',
  description: 'Beautiful, fully furnished studio apartment perfect for students. Features modern amenities, great natural light, and a prime location near campus. Includes utilities and high-speed internet.',
  location: 'Downtown Campus Area',
  price: 1200,
  images: [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200&h=800',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200&h=800',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200&h=800',
  ],
  amenities: ['Furnished', 'WiFi', 'Parking', 'Laundry', 'Air Conditioning'],
  availableFrom: '2024-04-01',
  maxTenants: 2,
  landlord: {
    name: 'Sarah Johnson',
    rating: 4.8,
    responseTime: '< 24 hours',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
};

export function ListingDetailsPage() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Image Gallery */}
          <div className="overflow-hidden rounded-lg">
            <img
              src={LISTING_DATA.images[selectedImage]}
              alt={LISTING_DATA.title}
              className="h-[400px] w-full object-cover"
            />
            <div className="mt-4 flex gap-4">
              {LISTING_DATA.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative h-20 w-20 overflow-hidden rounded-lg ${
                    selectedImage === idx ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`View ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Listing Details */}
          <div className="mt-8">
            <h1 className="text-3xl font-bold text-gray-900">{LISTING_DATA.title}</h1>
            <div className="mt-4 flex items-center text-gray-500">
              <MapPin className="mr-2 h-5 w-5" />
              {LISTING_DATA.location}
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900">Description</h2>
              <p className="mt-2 text-gray-600">{LISTING_DATA.description}</p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900">Details</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-gray-400" />
                  <span>Available {new Date(LISTING_DATA.availableFrom).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-gray-400" />
                  <span>Up to {LISTING_DATA.maxTenants} tenants</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="mr-2 h-5 w-5 text-gray-400" />
                  <span>${LISTING_DATA.price}/month</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900">Amenities</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {LISTING_DATA.amenities.map((amenity) => (
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
            <div className="flex items-center">
              <img
                src={LISTING_DATA.landlord.image}
                alt={LISTING_DATA.landlord.name}
                className="h-12 w-12 rounded-full"
              />
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900">{LISTING_DATA.landlord.name}</h3>
                <div className="mt-1 flex items-center">
                  <span className="text-sm text-gray-500">
                    Response time: {LISTING_DATA.landlord.responseTime}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button className="w-full">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Landlord
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