import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { listingSchema, type ListingFormData } from '@/lib/utils/validation';

interface UseListingFormProps {
  onChange?: (data: Partial<ListingFormData>) => void;
}

export function useListingForm({ onChange }: UseListingFormProps) {
  const form = useForm<ListingFormData>({
    resolver: zodResolver(listingSchema),
    defaultValues: {
      images: [],
      amenities: [],
    },
  });

  const { watch, setValue } = form;
  const formData = watch();

  const handleFormChange = useCallback(() => {
    if (onChange) {
      const currentData = form.getValues();
      onChange(currentData);
    }
  }, [onChange, form]);

  const handleImageUpload = useCallback((urls: string[]) => {
    setValue('images', urls, { shouldValidate: true });
  }, [setValue]);

  const handleAmenitiesChange = useCallback((amenities: string[]) => {
    setValue('amenities', amenities, { shouldValidate: true });
  }, [setValue]);

  return {
    form,
    formData,
    handleFormChange,
    handleImageUpload,
    handleAmenitiesChange,
  };
}