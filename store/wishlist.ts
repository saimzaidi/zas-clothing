import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { getProductById } from "@/data/products";

interface WishlistState {
  itemIds: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      itemIds: [],
      toggleWishlist: (productId: string) => {
        const current = get().itemIds;
        if (current.includes(productId)) {
          set({ itemIds: current.filter((id) => id !== productId) });
        } else {
          set({ itemIds: [...current, productId] });
        }
      },
      isInWishlist: (productId: string) => {
        return get().itemIds.includes(productId);
      },
      clearWishlist: () => set({ itemIds: [] }),
    }),
    {
      name: "zas_wishlist_storage",
      storage: createJSONStorage(() => localStorage),
      merge: (persistedState, currentState) => {
        const persistedItemIds = (
          persistedState as Partial<WishlistState> | undefined
        )?.itemIds;

        return {
          ...currentState,
          itemIds: Array.isArray(persistedItemIds)
            ? persistedItemIds.filter((id) => getProductById(id))
            : currentState.itemIds,
        };
      },
    }
  )
);
