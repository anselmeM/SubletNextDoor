import { AuthForm } from '@/components/auth/auth-form';
import { useAuthStore } from '@/lib/store/auth-store';
import { useNavigate } from 'react-router-dom';

export function LoginPage() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = async (data: any) => {
    // TODO: Implement actual API call
    // For now, simulate a successful login
    login({
      id: '1',
      email: data.email,
      name: 'John Doe',
      role: 'tenant',
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <a href="/register" className="font-medium text-blue-600 hover:text-blue-500">
            create a new account
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <AuthForm type="login" onSubmit={handleLogin} />
        </div>
      </div>
    </div>
  );
}