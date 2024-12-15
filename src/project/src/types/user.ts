export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'tenant' | 'landlord';
  avatar?: string;
  university?: string;
  bio?: string;
  phone?: string;
  preferences?: {
    maxRent?: number;
    preferredLocations?: string[];
    moveInDate?: string;
    roommates?: boolean;
  };
}

export type ProfileFormData = Omit<UserProfile, 'id'>;