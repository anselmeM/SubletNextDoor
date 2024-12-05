import { Search } from 'lucide-react'; // Importing the Search icon from lucide-react for use in the search button
import { Button } from '../ui/button'; // Importing a custom Button component for use in the search input

// HeroSection component to display a prominent introductory section with a search feature
export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white"> {/* Background gradient for visual appeal */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> {/* Container to center content and provide responsive padding */}
        <div className="py-16 sm:py-24"> {/* Vertical padding for spacing */}
          <div className="text-center"> {/* Center-aligning text content */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Find Your Perfect
              <span className="block text-blue-600">Student Sublet</span> {/* Highlighted text for emphasis */}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Connect with fellow students to find or list the ideal short-term rental.
              Verified listings, secure messaging, and hassle-free booking. {/* Description of the service */}
            </p>

            <div className="mt-10"> {/* Margin for spacing above the search input */}
              <div className="mx-auto max-w-xl rounded-full bg-white p-3 shadow-lg"> {/* Styling for the search input container */}
                <div className="flex"> {/* Flexbox for aligning input and button horizontally */}
                  <input
                    type="text"
                    placeholder="Search by university, neighborhood, or address..." // Placeholder text for search input
                    className="w-full rounded-full px-4 focus:outline-none" // Styling for the search input
                  />
                  <Button className="rounded-full px-6"> {/* Button component for triggering search */}
                    <Search className="mr-2 h-4 w-4" /> {/* Search icon inside the button */}
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