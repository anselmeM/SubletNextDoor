import { useForm } from 'react-hook-form'; // Importing useForm hook from react-hook-form for form handling
import { zodResolver } from '@hookform/resolvers/zod'; // Importing zodResolver to integrate Zod schema validation with react-hook-form
import { z } from 'zod'; // Importing Zod for schema validation
import { Button } from '../ui/button'; // Importing a custom Button component
import { LogIn, UserPlus } from 'lucide-react'; // Importing icons from lucide-react

// Define a schema for login form validation using Zod
const loginSchema = z.object({
  email: z.string().email('Invalid email address'), // Email must be a valid email format
  password: z.string().min(8, 'Password must be at least 8 characters'), // Password must be at least 8 characters
});

// Extend the login schema for registration form validation
const registerSchema = loginSchema.extend({
  name: z.string().min(2, 'Name must be at least 2 characters'), // Name must be at least 2 characters
  role: z.enum(['tenant', 'landlord']), // Role must be either 'tenant' or 'landlord'
});

// Define TypeScript types for form data based on the schemas
type LoginFormData = z.infer<typeof loginSchema>;
type RegisterFormData = z.infer<typeof registerSchema>;

// Define props for the AuthForm component
interface AuthFormProps {
  type: 'login' | 'register'; // Type of form, either 'login' or 'register'
  onSubmit: (data: LoginFormData | RegisterFormData) => void; // Function to handle form submission
}

// AuthForm component for handling authentication forms
export function AuthForm({ type, onSubmit }: AuthFormProps) {
  // Initialize form handling with react-hook-form and Zod validation
  const {
    register, // Function to register input fields
    handleSubmit, // Function to handle form submission
    formState: { errors, isSubmitting }, // Form state including errors and submission status
  } = useForm({
    resolver: zodResolver(type === 'login' ? loginSchema : registerSchema), // Use appropriate schema based on form type
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Conditionally render name input for registration form */}
      {type === 'register' && (
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            {...register('name')} // Register the name input field
            type="text"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p> // Display error message for name
          )}
        </div>
      )}

      {/* Email input field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          {...register('email')} // Register the email input field
          type="email"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p> // Display error message for email
        )}
      </div>

      {/* Password input field */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          {...register('password')} // Register the password input field
          type="password"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p> // Display error message for password
        )}
      </div>

      {/* Conditionally render role selection for registration form */}
      {type === 'register' && (
        <div>
          <label className="block text-sm font-medium text-gray-700">I am a...</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                {...register('role')} // Register the role input field
                type="radio"
                value="tenant"
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Tenant</span>
            </label>
            <label className="inline-flex items-center">
              <input
                {...register('role')} // Register the role input field
                type="radio"
                value="landlord"
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Landlord</span>
            </label>
          </div>
          {errors.role && (
            <p className="mt-1 text-sm text-red-600">{errors.role.message}</p> // Display error message for role
          )}
        </div>
      )}

      {/* Submit button with conditional rendering for login/register */}
      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting} // Disable button while submitting
      >
        {type === 'login' ? (
          <>
            <LogIn className="mr-2 h-4 w-4" /> {/* Login icon */}
            Sign In
          </>
        ) : (
          <>
            <UserPlus className="mr-2 h-4 w-4" /> {/* Register icon */}
            Create Account
          </>
        )}
      </Button>
    </form>
  );
}