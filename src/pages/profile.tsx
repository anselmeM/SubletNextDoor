import { Settings, Heart, Building, Bell } from 'lucide-react';
import { Button } from '../components/ui/button';

export function ProfilePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex items-center">
          <img
            className="h-16 w-16 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
          />
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
            <p className="text-gray-600">Student at State University</p>
          </div>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border bg-white p-6">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-red-500" />
            <h2 className="ml-3 text-lg font-semibold text-gray-900">Saved Listings</h2>
          </div>
          <p className="mt-2 text-sm text-gray-600">View and manage your saved listings</p>
          <p className="mt-2 text-2xl font-bold text-gray-900">12</p>
        </div>

        <div className="rounded-lg border bg-white p-6">
          <div className="flex items-center">
            <Building className="h-8 w-8 text-blue-500" />
            <h2 className="ml-3 text-lg font-semibold text-gray-900">My Listings</h2>
          </div>
          <p className="mt-2 text-sm text-gray-600">Manage your property listings</p>
          <p className="mt-2 text-2xl font-bold text-gray-900">3</p>
        </div>

        <div className="rounded-lg border bg-white p-6">
          <div className="flex items-center">
            <Bell className="h-8 w-8 text-yellow-500" />
            <h2 className="ml-3 text-lg font-semibold text-gray-900">Notifications</h2>
          </div>
          <p className="mt-2 text-sm text-gray-600">View your recent notifications</p>
          <p className="mt-2 text-2xl font-bold text-gray-900">5</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
        <div className="mt-4 rounded-lg border bg-white">
          <div className="divide-y">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div key={idx} className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">
                      {idx % 2 === 0 ? 'Viewed a listing' : 'Saved a listing'}
                    </p>
                    <p className="text-sm text-gray-600">2 hours ago</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}