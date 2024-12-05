import { ReactNode } from 'react'; // Importing ReactNode type for defining the type of children prop
import { Navigate, useLocation } from 'react-router-dom'; // Importing Navigate for redirecting and useLocation for accessing the current location
import { useAuthStore } from '@/lib/store/auth-store'; // Importing custom hook to access authentication state

interface ProtectedRouteProps {
  children: ReactNode; // Defining the type for children prop, which will be ReactNode
}

// ProtectedRoute component to guard routes based on authentication status
export function ProtectedRoute({ children }: ProtectedRouteProps) {
  // Accessing the authentication state from the auth store
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  // Getting the current location to redirect back after successful login
  const location = useLocation();

  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If authenticated, render the children components
  return <>{children}</>;
}