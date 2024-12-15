import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { generateId } from '../utils/id';
import type { Listing } from '@/types/listing';
import type { ListingFormData } from '../utils/validation';
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'; 
import { db } from '../firebase'; 

interface ListingState {
  listings: Listing[];
  isLoading: boolean; 
  error: Error | null; 
  addListing: (data: ListingFormData) => Promise<void>; // Make addListing async
  getListing: (id: string) => Promise<Listing | undefined>; // Make getListing async
  updateListing: (id: string, data: Partial<ListingFormData>) => Promise<void>; // Make updateListing async
  deleteListing: (id: string) => Promise<void>; // Make deleteListing async
}

export const useListingStore = create<ListingState>()(
  persist(
    (set, get) => ({
      listings: [],
      isLoading: false, 
      error: null, 

      addListing: async (data) => {
        try {
          const newListing: Listing = {
            id: generateId(),
            ...data,
            available: true,
            createdAt: new Date().toISOString(),
            rating: undefined,
          };

          // Add listing to Firestore
          const listingsCollection = collection(db, 'listings'); // 'listings' is your collection name
          const docRef = await addDoc(listingsCollection, newListing);
          console.log('Listing added with ID:', docRef.id);

          // Update Zustand store (optional, you might fetch from Firestore instead)
          set((state) => ({
            listings: [newListing, ...state.listings],
          }));
        } catch (error) {
          console.error('Error adding listing:', error);
          // ... handle error (e.g., in your UI) ...
        }
      },

      getListing: async (id) => {
        try {
          const listingRef = doc(db, 'listings', id);
          const listingSnap = await getDoc(listingRef);

          if (listingSnap.exists()) {
            return { id: listingSnap.id, ...listingSnap.data() } as Listing;
          } else {
            return undefined; 
          }
        } catch (error) {
          console.error('Error getting listing:', error);
          // ... handle error ...
        }
      },

      updateListing: async (id, data) => {
        try {
          const listingRef = doc(db, 'listings', id);
          await updateDoc(listingRef, data);

          // Update Zustand store (optional)
          set((state) => ({
            listings: state.listings.map((listing) =>
              listing.id === id ? { ...listing, ...data } : listing
            ),
          }));
        } catch (error) {
          console.error('Error updating listing:', error);
          // ... handle error ...
        }
      },

      deleteListing: async (id) => {
        try {
          const listingRef = doc(db, 'listings', id);
          await deleteDoc(listingRef);

          // Update Zustand store (optional)
          set((state) => ({
            listings: state.listings.filter((listing) => listing.id !== id),
          }));
        } catch (error) {
          console.error('Error deleting listing:', error);
          // ... handle error ...
        }
      },
    }),
    {
      name: 'listing-storage', // You might want to change this name
    }
  )
);