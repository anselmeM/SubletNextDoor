import { ReactNode, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/lib/store/auth-store';

interface ProtectedRouteProps {
  children: ReactNode;
  redirectPath?: string; 
}

export function ProtectedRoute({ children, redirectPath = '/login' }: ProtectedRouteProps) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      // Use Navigate component for redirection
      <Navigate to={redirectPath} state={{ from: location }} replace /> 
    }
  }, [isAuthenticated, location, redirectPath]); 

  if (typeof isAuthenticated === 'undefined') {
    return <div>Loading...</div>; 
  }

  return <>{children}</>;
}