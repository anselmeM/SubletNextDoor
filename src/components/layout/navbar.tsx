import { Home, LogIn, LogOut, Menu, Plus, User, UserPlus, MessageSquare, Bell } from 'lucide-react'; // Importing icons from lucide-react for use in the navigation bar
import { Button } from '../ui/button'; // Importing a custom Button component
import { useAuthStore } from '@/lib/store/auth-store'; // Importing custom hook to access authentication state
import { useNotificationStore } from '@/lib/store/notification-store'; // Importing custom hook to access notification state
import { Link, useNavigate } from 'react-router-dom'; // Importing Link for navigation and useNavigate for programmatic navigation
import { useState } from 'react'; // Importing useState hook for managing component state

// Navbar component to display the navigation bar with links and actions
export function Navbar() {
  // Destructuring user, isAuthenticated, and logout from the authentication store
  const { user, isAuthenticated, logout } = useAuthStore();
  // Getting the count of unread notifications for the authenticated user
  const unreadCount = useNotificationStore(
    (state) => user ? state.getUnreadCount(user.id) : 0
  );
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage the mobile menu toggle

  // Function to handle user logout and redirect to the home page
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="border-b bg-white"> {/* Navigation bar with bottom border and white background */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> {/* Container for centering content and providing responsive padding */}
        <div className="flex h-16 justify-between"> {/* Flexbox for horizontal alignment of navbar items */}
          <div className="flex"> {/* Flexbox for aligning logo and links */}
            <Link to="/" className="flex flex-shrink-0 items-center"> {/* Link to home page with logo */}
              <Home className="h-6 w-6 text-blue-600" /> {/* Home icon with styling */}
              <span className="ml-2 text-xl font-bold text-gray-900">SubletNextDoor</span> {/* Company name */}
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8"> {/* Hidden on small screens, flexbox for additional links */}
              <Link
                to="/listings"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Browse Listings
              </Link>
            </div>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4"> {/* Hidden on small screens, flexbox for user actions */}
            {isAuthenticated ? ( // Conditional rendering based on authentication status
              <>
                <Button variant="outline" onClick={() => navigate('/messages')}> {/* Button to navigate to messages */}
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Messages
                </Button>
                <Button variant="outline" onClick={() => navigate('/notifications')}> {/* Button to navigate to notifications */}
                  <Bell className="mr-2 h-4 w-4" />
                  {unreadCount > 0 && ( // Display unread count if greater than zero
                    <span className="ml-1 rounded-full bg-red-500 px-2 py-0.5 text-xs text-white">
                      {unreadCount}
                    </span>
                  )}
                </Button>
                <Button variant="outline" onClick={() => navigate('/create-listing')}> {/* Button to navigate to create listing */}
                  <Plus className="mr-2 h-4 w-4" />
                  Create Listing
                </Button>
                <Button variant="outline" onClick={() => navigate('/profile')}> {/* Button to navigate to profile */}
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button variant="outline" onClick={handleLogout}> {/* Button to log out */}
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={() => navigate('/login')}> {/* Button to navigate to login */}
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
                <Button onClick={() => navigate('/register')}> {/* Button to navigate to register */}
                  <UserPlus className="mr-2 h-4 w-4" />
                  Sign Up
                </Button>
              </>
            )}
          </div>

          <div className="flex items-center sm:hidden"> {/* Visible on small screens, button to toggle mobile menu */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && ( // Conditional rendering of mobile menu
        <div className="sm:hidden"> {/* Visible only on small screens */}
          <div className="space-y-1 pb-3 pt-2"> {/* Spacing for mobile menu items */}
            <Link
              to="/listings"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >
              Browse Listings
            </Link>
          </div>
          <div className="border-t border-gray-200 pb-3 pt-4"> {/* Top border for separation */}
            <div className="space-y-1 px-2"> {/* Spacing for mobile menu actions */}
              {isAuthenticated ? ( // Conditional rendering based on authentication status
                <>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => navigate('/messages')}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Messages
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => navigate('/notifications')}
                  >
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                    {unreadCount > 0 && ( // Display unread count if greater than zero
                      <span className="ml-2 rounded-full bg-red-500 px-2 py-0.5 text-xs text-white">
                        {unreadCount}
                      </span>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => navigate('/create-listing')}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Create Listing
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => navigate('/profile')}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => navigate('/login')}
                  >
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign In
                  </Button>
                  <Button
                    className="w-full justify-start"
                    onClick={() => navigate('/register')}
                  >
                    <UserPlus className="mr-2 h-4 w-4" />
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}