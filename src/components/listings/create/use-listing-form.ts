import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect } from 'react';
import { listingSchema, type ListingFormData } from '@/lib/utils/validation';
import debounce from 'lodash.debounce'; // Import debounce

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

  const { watch, setValue, trigger } = form;

  // Debounced handleFormChange
  const debouncedHandleFormChange = useCallback(
    debounce((currentData) => {
      onChange?.(currentData); // Simplified optional check
    }, 300), // Adjust debounce delay as needed
    [onChange]
  );

  useEffect(() => {
    const subscription = watch((data) => {
        debouncedHandleFormChange(data)
    });
    return () => {
        subscription.unsubscribe();
        debouncedHandleFormChange.cancel();
    }
  }, [watch, debouncedHandleFormChange]);

  const handleImageUpload = useCallback(
    (urls: string[]) => {
      setValue('images', urls, { shouldValidate: true });
      trigger("images")
    },
    [setValue, trigger]
  );

  const handleAmenitiesChange = useCallback(
    (amenities: string[]) => {
      setValue('amenities', amenities, { shouldValidate: true });
      trigger("amenities")
    },
    [setValue, trigger]
  );

  return {
    form,
    handleFormChange: debouncedHandleFormChange,
    handleImageUpload,
    handleAmenitiesChange,
  };
}
