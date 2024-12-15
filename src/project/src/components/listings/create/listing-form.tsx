import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FormField } from '@/components/ui/form-field';
import { ImageUpload } from './image-upload';
import { PropertyTypeSelect } from './property-type-select';
import { AmenitiesSelect } from './amenities-select';
import type { ListingFormData } from '@/lib/utils/validation';
import { useListingForm } from './use-listing-form';
import { useEffect } from 'react';

interface ListingFormProps {
  onSubmit: (data: ListingFormData) => void;
  onChange?: (data: Partial<ListingFormData>) => void;
  isSubmitting?: boolean;
}

export function ListingForm({ onSubmit, onChange, isSubmitting }: ListingFormProps) {
  const {
    form: {
      register,
      handleSubmit,
      formState: { errors },
      watch,
    },
    handleFormChange,
    handleImageUpload,
    handleAmenitiesChange,
  } = useListingForm({ onChange });

  useEffect(() => {
    const subscription = watch(handleFormChange);
    return () => subscription.unsubscribe();
  }, [watch, handleFormChange]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        label="Listing Title"
        required
        error={errors.title?.message}
        helperText="Create a catchy title that highlights key features"
        inputProps={{
          ...register('title'),
          placeholder: 'e.g., Cozy Studio Near Campus',
        }}
      />

      <FormField
        label="Description"
        required
        type="textarea"
        error={errors.description?.message}
        helperText="Describe your property in detail, including unique features"
        textareaProps={{
          ...register('description'),
          placeholder: 'Describe your property...',
          rows: 4,
        }}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          label="Monthly Rent"
          required
          error={errors.price?.message}
          inputProps={{
            ...register('price', { valueAsNumber: true }),
            type: 'number',
            min: 0,
            placeholder: '0',
            className: 'pl-7',
          }}
        />

        <FormField
          label="Location"
          required
          error={errors.location?.message}
          inputProps={{
            ...register('location'),
            placeholder: 'e.g., 123 University Ave',
          }}
        />
      </div>

      <PropertyTypeSelect
        error={errors.propertyType?.message}
        {...register('propertyType')}
      />

      <AmenitiesSelect
        error={errors.amenities?.message}
        value={watch('amenities')}
        onChange={handleAmenitiesChange}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          label="Available From"
          required
          error={errors.availableFrom?.message}
          inputProps={{
            ...register('availableFrom'),
            type: 'date',
            min: new Date().toISOString().split('T')[0],
          }}
        />

        <FormField
          label="Available Until"
          required
          error={errors.availableTo?.message}
          inputProps={{
            ...register('availableTo'),
            type: 'date',
            min: watch('availableFrom') || new Date().toISOString().split('T')[0],
          }}
        />
      </div>

      <FormField
        label="Maximum Tenants"
        required
        error={errors.maxTenants?.message}
        inputProps={{
          ...register('maxTenants', { valueAsNumber: true }),
          type: 'number',
          min: 1,
          max: 10,
        }}
      />

      <ImageUpload
        images={watch('images')}
        onChange={handleImageUpload}
        error={errors.images?.message}
      />

      <div className="flex justify-end space-x-4">
        <Button variant="outline" type="button">
          Save as Draft
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          <Upload className="mr-2 h-4 w-4" />
          {isSubmitting ? 'Publishing...' : 'Publish Listing'}
        </Button>
      </div>
    </form>
  );
}