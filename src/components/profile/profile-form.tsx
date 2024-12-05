import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Save } from 'lucide-react';
import { Button } from '../ui/button';
import { FormField } from '../ui/form-field';
import type { ProfileFormData } from '@/types/user';
import { profileSchema } from '@/lib/utils/validation';

interface ProfileFormProps {
  initialData: Partial<ProfileFormData>;
  onSubmit: (data: ProfileFormData) => void;
  isSubmitting?: boolean;
}

export function ProfileForm({ initialData, onSubmit, isSubmitting }: ProfileFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormField
        label="Full Name"
        required
        error={errors.name?.message}
        inputProps={{
          ...register('name'),
          placeholder: 'Your full name',
        }}
      />

      <FormField
        label="Email"
        required
        error={errors.email?.message}
        inputProps={{
          ...register('email'),
          type: 'email',
          placeholder: 'your.email@example.com',
        }}
      />

      <FormField
        label="Phone Number"
        error={errors.phone?.message}
        inputProps={{
          ...register('phone'),
          placeholder: '+1 (555) 123-4567',
        }}
      />

      <FormField
        label="University"
        error={errors.university?.message}
        inputProps={{
          ...register('university'),
          placeholder: 'Your university name',
        }}
      />

      <FormField
        label="Bio"
        type="textarea"
        error={errors.bio?.message}
        helperText="Tell others about yourself"
        textareaProps={{
          ...register('bio'),
          placeholder: 'Write a short bio...',
          rows: 4,
        }}
      />

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Housing Preferences</h3>
        
        <FormField
          label="Maximum Monthly Rent"
          error={errors.preferences?.maxRent?.message}
          inputProps={{
            ...register('preferences.maxRent', { valueAsNumber: true }),
            type: 'number',
            min: 0,
            placeholder: '0',
          }}
        />

        <FormField
          label="Preferred Move-in Date"
          error={errors.preferences?.moveInDate?.message}
          inputProps={{
            ...register('preferences.moveInDate'),
            type: 'date',
          }}
        />

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            {...register('preferences.roommates')}
            className="rounded border-gray-300"
          />
          <label className="text-sm text-gray-700">
            Open to having roommates
          </label>
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>
          <Save className="mr-2 h-4 w-4" />
          {isSubmitting ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>
    </form>
  );
}