import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { generateId } from '../utils/id';
import type { Listing } from '@/types/listing';
import type { ListingFormData } from '../utils/validation';

interface ListingState {
  listings: Listing[];
  addListing: (data: ListingFormData) => Listing;
  getListing: (id: string) => Listing | undefined;
  updateListing: (id: string, data: Partial<ListingFormData>) => void;
  deleteListing: (id: string) => void;
}

export const useListingStore = create<ListingState>()(
  persist(
    (set, get) => ({
      listings: [],
      
      addListing: (data) => {
        const newListing: Listing = {
          id: generateId(),
          ...data,
          available: true,
          createdAt: new Date().toISOString(),
          rating: undefined,
        };

        set((state) => ({
          listings: [newListing, ...state.listings],
        }));

        return newListing;
      },

      getListing: (id) => {
        return get().listings.find((listing) => listing.id === id);
      },

      updateListing: (id, data) => {
        set((state) => ({
          listings: state.listings.map((listing) =>
            listing.id === id ? { ...listing, ...data } : listing
          ),
        }));
      },

      deleteListing: (id) => {
        set((state) => ({
          listings: state.listings.filter((listing) => listing.id !== id),
        }));
      },
    }),
    {
      name: 'listing-storage',
    }
  )
);