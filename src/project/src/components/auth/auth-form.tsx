import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";
import { LogIn, UserPlus } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export function AuthForm({ type, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <div className="mt-1">
          <input
            type="email"
            id="email"
            {...register("email")}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.email?.message && typeof errors.email.message === "string" && (
            <p className="text-red-500 text-xs mt-1">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="mt-1">
          <input
            type="password"
            id="password"
            {...register("password")}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.password?.message &&
            typeof errors.password.message === "string" && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
        </div>
      </div>
      <div>
        <Button type="submit">
          {type === "login" ? (
            <>
              <LogIn className="mr-2 h-4 w-4" />
              Sign in
            </>
          ) : (
            <>
              <UserPlus className="mr-2 h-4 w-4" />
              Sign up
            </>
          )}
        </Button>
      </div>
    </form>
  );
}