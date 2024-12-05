import { Home, Mail, Phone } from 'lucide-react'; // Importing icons for home, mail, and phone from lucide-react
import { Link } from 'react-router-dom'; // Importing Link component for navigation between routes

// Footer component to display the footer section of the website
export function Footer() {
  return (
    <footer className="bg-white border-t"> {/* Footer with white background and top border */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"> {/* Container for centering content and providing responsive padding */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"> {/* Responsive grid layout for footer sections */}
          
          {/* Company Information Section */}
          <div>
            <div className="flex items-center"> {/* Flexbox for aligning icon and text horizontally */}
              <Home className="h-6 w-6 text-blue-600" /> {/* Home icon with styling */}
              <span className="ml-2 text-xl font-bold text-gray-900">SubletNextDoor</span> {/* Company name */}
            </div>
            <p className="mt-4 text-gray-600">
              Making student housing simple and accessible for everyone. {/* Company tagline */}
            </p>
          </div>
          
          {/* Resources Links Section */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Resources</h3> {/* Section title */}
            <ul className="mt-4 space-y-4"> {/* List of resource links */}
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-gray-900"> {/* Link to How it Works page */}
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="/safety-guide" className="text-gray-600 hover:text-gray-900"> {/* Link to Safety Guide page */}
                  Safety Guide
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-gray-900"> {/* Link to FAQs page */}
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal Links Section */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Legal</h3> {/* Section title */}
            <ul className="mt-4 space-y-4"> {/* List of legal links */}
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900"> {/* Link to Privacy Policy page */}
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-600 hover:text-gray-900"> {/* Link to Terms of Service page */}
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-600 hover:text-gray-900"> {/* Link to Cookie Policy page */}
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information Section */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Contact</h3> {/* Section title */}
            <ul className="mt-4 space-y-4"> {/* List of contact information */}
              <li className="flex items-center"> {/* Flexbox for aligning icon and text horizontally */}
                <Mail className="h-5 w-5 text-gray-400" /> {/* Mail icon with styling */}
                <span className="ml-3 text-gray-600">support@subletnextdoor.com</span> {/* Email address */}
              </li>
              <li className="flex items-center"> {/* Flexbox for aligning icon and text horizontally */}
                <Phone className="h-5 w-5 text-gray-400" /> {/* Phone icon with styling */}
                <span className="ml-3 text-gray-600">1-800-SUBLET</span> {/* Phone number */}
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-200 pt-8"> {/* Top border and padding for separation */}
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} SubletNextDoor. All rights reserved. {/* Copyright notice with dynamic year */}
          </p>
        </div>
      </div>
    </footer>
  );
}