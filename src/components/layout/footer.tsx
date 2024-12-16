import { Home, Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
              <Home className="h-6 w-6 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">SubletNextDoor</span>
            </div>
            <p className="mt-4 text-gray-600">
              Making student housing simple and accessible for everyone.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-gray-900">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="/safety-guide" className="text-gray-600 hover:text-gray-900">
                  Safety Guide
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-gray-900">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-600 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-600 hover:text-gray-900">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:support@subletnextdoor.com" className="ml-3 text-gray-600">
                  support@subletnextdoor.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400" />
                <a href="tel:1-800-SUBLET" className="ml-3 text-gray-600">
                  1-800-SUBLET
                </a>
              </li>
            </ul>
          </div> 
        </div> 

          {/* Newsletter Signup */}
          <div className="mt-8 border-t border-gray-200 pt-8">
          <h3 className="text-center text-lg font-medium text-gray-900">
            Subscribe to our newsletter
          </h3>
          <form className="mt-4 sm:flex sm:max-w-md mx-auto">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-base leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3">
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-blue-600 border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center space-x-6"> 
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-gray-600">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-gray-600">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-gray-600">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
       



        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} SubletNextDoor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}