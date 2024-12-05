import { ReactNode } from 'react'; // Importing ReactNode type for defining the type of children prop
import { Navbar } from './navbar'; // Importing Navbar component for displaying the navigation bar
import { Footer } from './footer'; // Importing Footer component for displaying the footer section

interface LayoutProps {
  children: ReactNode; // Defining the type for children prop, which will be ReactNode
}

// Layout component to provide a consistent layout structure for the application
export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50"> {/* Full-height container with flexbox layout and background color */}
      <Navbar /> {/* Rendering the Navbar component at the top */}
      <main className="flex-grow">{children}</main> {/* Main content area that grows to fill available space */}
      <Footer /> {/* Rendering the Footer component at the bottom */}
    </div>
  );
}