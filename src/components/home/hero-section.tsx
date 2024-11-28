import { Search } from 'lucide-react';
import { Button } from '../ui/button';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Find Your Perfect
              <span className="block text-blue-600">Student Sublet</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Connect with fellow students to find or list the ideal short-term rental.
              Verified listings, secure messaging, and hassle-free booking.
            </p>

            <div className="mt-10">
              <div className="mx-auto max-w-xl rounded-full bg-white p-3 shadow-lg">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search by university, neighborhood, or address..."
                    className="w-full rounded-full px-4 focus:outline-none"
                  />
                  <Button className="rounded-full px-6">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}