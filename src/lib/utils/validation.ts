import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const registerSchema = loginSchema.extend({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  role: z.enum(['tenant', 'landlord']),
});

export const listingSchema = z.object({
  title: z.string().min(10, 'Title must be at least 10 characters'),
  description: z.string().min(50, 'Description must be at least 50 characters'),
  price: z.number().min(1, 'Price must be greater than 0'),
  location: z.string().min(5, 'Location is required'),
  propertyType: z.enum(['Studio', '1 Bedroom', '2 Bedrooms', '3+ Bedrooms', 'Shared Room']),
  amenities: z.array(z.string()).min(1, 'Select at least one amenity'),
  images: z.array(z.string()).min(1, 'At least one image is required'),
  availableFrom: z.string(),
  availableTo: z.string(),
  maxTenants: z.number().min(1, 'Maximum tenants must be at least 1'),
});

export const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  role: z.enum(['tenant', 'landlord']),
  avatar: z.string().optional(),
  university: z.string().optional(),
  bio: z.string().max(500, 'Bio must be less than 500 characters').optional(),
  phone: z.string().regex(/^\+?[\d\s-()]+$/, 'Invalid phone number').optional(),
  preferences: z.object({
    maxRent: z.number().min(0).optional(),
    preferredLocations: z.array(z.string()).optional(),
    moveInDate: z.string().optional(),
    roommates: z.boolean().optional(),
  }).optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type ListingFormData = z.infer<typeof listingSchema>;
export type ProfileFormData = z.infer<typeof profileSchema>;