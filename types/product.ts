export type ProductSize = "S" | "M" | "L" | "XL" | "XXL";

export type ProductColor = {
  name: string;
  hex: string;
  images: string[];
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  colors: ProductColor[];
  sizes: ProductSize[];
  stock: Record<string, number>; // key: `${colorName}-${size}`
  tags: string[];
  isNew?: boolean;
  fit?: string;
  fabric?: string;
};
