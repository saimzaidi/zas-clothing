import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartItem, PopulatedCartItem } from "@/types/cart";
import { getProductById } from "@/data/products";

interface CartState {
  items: CartItem[];
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  addItem: (item: { productId: string; color: string; size: string; quantity?: number }) => boolean;
  removeItem: (productId: string, color: string, size: string) => void;
  updateQuantity: (productId: string, color: string, size: string, quantity: number) => boolean;
  clearCart: () => void;
  getPopulatedItems: () => PopulatedCartItem[];
  getItemCount: () => number;
  getSubtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isDrawerOpen: false,

      openDrawer: () => set({ isDrawerOpen: true }),
      closeDrawer: () => set({ isDrawerOpen: false }),
      toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),

      addItem: ({ productId, color, size, quantity = 1 }) => {
        const product = getProductById(productId);
        if (!product) return false;

        const stockKey = `${color}-${size}`;
        const maxStock = product.stock[stockKey] ?? 0;

        const currentItems = get().items;
        const existingIndex = currentItems.findIndex(
          (i) => i.productId === productId && i.color === color && i.size === size
        );

        let newQuantity = quantity;
        if (existingIndex > -1) {
          newQuantity = currentItems[existingIndex].quantity + quantity;
        }

        if (newQuantity > maxStock) {
          return false;
        }

        if (existingIndex > -1) {
          const updated = [...currentItems];
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: newQuantity,
          };
          set({ items: updated, isDrawerOpen: true });
        } else {
          set({
            items: [...currentItems, { productId, color, size, quantity: newQuantity }],
            isDrawerOpen: true,
          });
        }
        return true;
      },

      removeItem: (productId, color, size) => {
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.productId === productId && i.color === color && i.size === size)
          ),
        }));
      },

      updateQuantity: (productId, color, size, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId, color, size);
          return true;
        }

        const product = getProductById(productId);
        if (!product) return false;

        const stockKey = `${color}-${size}`;
        const maxStock = product.stock[stockKey] ?? 0;

        if (quantity > maxStock) {
          return false;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId && item.color === color && item.size === size
              ? { ...item, quantity }
              : item
          ),
        }));
        return true;
      },

      clearCart: () => set({ items: [] }),

      getPopulatedItems: (): PopulatedCartItem[] => {
        const { items } = get();
        const result: PopulatedCartItem[] = [];
        for (const item of items) {
          const product = getProductById(item.productId);
          if (product) {
            const colorObj = product.colors.find((c) => c.name === item.color);
            const image =
              colorObj?.images?.[0] || product.images[0] || "/placeholder-tee.jpg";
            const subtotal = product.price * item.quantity;
            result.push({
              productId: item.productId,
              color: item.color,
              size: item.size,
              quantity: item.quantity,
              product,
              selectedColorHex: colorObj?.hex,
              selectedImage: image,
              subtotal,
            });
          }
        }
        return result;
      },

      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        const populated = get().getPopulatedItems();
        return populated.reduce((total, item) => total + item.subtotal, 0);
      },
    }),
    {
      name: "zas_cart_storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
    }
  )
);
