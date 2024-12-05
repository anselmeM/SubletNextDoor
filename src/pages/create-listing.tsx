import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListingForm } from '@/components/listings/create/listing-form';
import { ListingPreview } from '@/components/listings/create/listing-preview';
import { useListingStore } from '@/lib/store/listing-store';
import type { ListingFormData } from '@/lib/utils/validation';

export function CreateListingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<ListingFormData>>({});
  const addListing = useListingStore((state) => state.addListing);
  const navigate = useNavigate();

  const handleSubmit = async (data: ListingFormData) => {
    try {
      setIsSubmitting(true);
      const newListing = addListing(data);
      navigate(`/listings/${newListing.id}`);
    } catch (error) {
      console.error('Failed to create listing:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900">Create a New Listing</h1>
      <p className="mt-2 text-gray-600">
        Fill out the details below to list your property.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-lg border bg-white p-6">
            <ListingForm
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              onChange={setFormData}
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-8">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            Preview Your Listing
          </h2>
          <ListingPreview data={formData} />
        </div>
      </div>
    </div>
  );
}