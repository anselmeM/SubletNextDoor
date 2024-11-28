import { AuthForm } from '@/components/auth/auth-form';
import { useAuthStore } from '@/lib/store/auth-store';
import { useNavigate } from 'react-router-dom';

export function RegisterPage() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleRegister = async (data: any) => {
    // TODO: Implement actual API call
    // For now, simulate a successful registration
    login({
      id: '1',
      email: data.email,
      name: data.name,
      role: data.role,
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Sign in
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <AuthForm type="register" onSubmit={handleRegister} />
        </div>
      </div>
    </div>
  );
}