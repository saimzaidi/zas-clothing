import { Product } from "./product";

export type CartItem = {
  productId: string;
  color: string;
  size: string;
  quantity: number;
  selectedImage?: string;
};

export type PopulatedCartItem = CartItem & {
  product: Product;
  selectedColorHex?: string;
  selectedImage?: string;
  subtotal: number;
};

export type CustomerInfo = {
  name: string;
  phone: string;
  city: string;
  address: string;
  note?: string;
};
