import { Product, ProductSize } from "@/types/product";

const sizes: ProductSize[] = ["S", "M", "L", "XL"];

function stockFor(color: string, availableSizes: ProductSize[]) {
  const quantities = [12, 18, 14, 8, 4];
  return Object.fromEntries(
    availableSizes.map((size, index) => [`${color}-${size}`, quantities[index]])
  );
}

function catalogProduct({
  id,
  slug,
  name,
  price,
  description,
  image,
  color,
  hex,
  tags,
}: {
  id: string;
  slug: string;
  name: string;
  price: number;
  description: string;
  image: string;
  color: string;
  hex: string;
  tags: string[];
}): Product {
  return {
    id,
    slug,
    name,
    price,
    description,
    images: [image],
    colors: [{ name: color, hex, images: [image] }],
    sizes,
    stock: stockFor(color, sizes),
    tags,
    isNew: true,
    fit: "Everyday fit",
    fabric: "Cotton T-Shirt",
  };
}

const unsplash = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&q=85&w=1200`;

export const products: Product[] = [
  {
    id: "zas-001",
    slug: "heavyweight-oversized-noir-tee",
    name: "Classic Cream Tee",
    price: 3450,
    description: "A clean cream t-shirt with an easy, everyday look.",
    images: ["/products/zas-001-cream-tee.png"],
    colors: [
      {
        name: "Cream",
        hex: "#eee7df",
        images: ["/products/zas-001-cream-tee.png"],
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: {
      "Cream-S": 12,
      "Cream-M": 18,
      "Cream-L": 14,
      "Cream-XL": 8,
      "Cream-XXL": 4,
    },
    tags: ["T-Shirt", "Everyday"],
    isNew: true,
    fit: "Everyday fit",
    fabric: "Cotton T-Shirt",
  },
  {
    id: "zas-002",
    slug: "raw-edge-drop-shoulder-sand",
    name: "No Baker Graphic Tee",
    price: 3650,
    description: "A white t-shirt finished with a bakery-inspired chest graphic.",
    images: ["/products/zas-002-bakery-tee.png"],
    colors: [
      {
        name: "White",
        hex: "#f3f0ea",
        images: ["/products/zas-002-bakery-tee.png"],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: {
      "White-S": 6,
      "White-M": 10,
      "White-L": 8,
      "White-XL": 4,
    },
    tags: ["T-Shirt", "Graphic"],
    isNew: true,
    fit: "Everyday fit",
    fabric: "Cotton T-Shirt",
  },
  catalogProduct({
    id: "zas-003",
    slug: "lilac-oversized-tee",
    name: "Lilac Oversized Tee",
    price: 3550,
    description: "A relaxed purple tee styled with a simple everyday look.",
    image: unsplash("photo-1780566759977-ff8b5d53731c"),
    color: "Lilac",
    hex: "#9477a7",
    tags: ["T-Shirt", "Oversized"],
  }),
  catalogProduct({
    id: "zas-004",
    slug: "black-outdoor-tee",
    name: "Black Everyday Tee",
    price: 3450,
    description: "A black tee photographed in a colorful outdoor setting.",
    image: unsplash("photo-1534005838849-be732cec0a01"),
    color: "Black",
    hex: "#171717",
    tags: ["T-Shirt", "Everyday"],
  }),
  catalogProduct({
    id: "zas-005",
    slug: "bandana-graphic-tee",
    name: "Bandana Graphic Tee",
    price: 3750,
    description: "A graphic tee styled with a bandana and streetwear accessories.",
    image: unsplash("photo-1759972524882-40b484cc1585"),
    color: "Black",
    hex: "#242424",
    tags: ["T-Shirt", "Graphic"],
  }),
  catalogProduct({
    id: "zas-006",
    slug: "studio-black-tee",
    name: "Studio Black Tee",
    price: 3450,
    description: "A black t-shirt and denim look in a clean editorial portrait.",
    image: unsplash("photo-1768696082704-c4e5593d9f27"),
    color: "Black",
    hex: "#191919",
    tags: ["T-Shirt", "Everyday"],
  }),
  catalogProduct({
    id: "zas-007",
    slug: "good-luck-graphic-tee",
    name: "Good Luck Graphic Tee",
    price: 3750,
    description: "A white tee with a blue printed message across the front.",
    image: unsplash("photo-1778426140719-26f148a046ce"),
    color: "White",
    hex: "#f3f1eb",
    tags: ["T-Shirt", "Graphic"],
  }),
  catalogProduct({
    id: "zas-008",
    slug: "black-portrait-tee",
    name: "Black Essential Tee",
    price: 3450,
    description: "A black t-shirt in a relaxed outdoor portrait.",
    image: unsplash("photo-1549913772-820279f909b7"),
    color: "Black",
    hex: "#171717",
    tags: ["T-Shirt", "Everyday"],
  }),
  catalogProduct({
    id: "zas-009",
    slug: "red-oversized-tee",
    name: "Red Oversized Tee",
    price: 3550,
    description: "A relaxed red tee styled for a simple streetwear look.",
    image: unsplash("photo-1753707407169-cdf147e6ff30"),
    color: "Red",
    hex: "#9c3031",
    tags: ["T-Shirt", "Oversized"],
  }),
  catalogProduct({
    id: "zas-010",
    slug: "white-wall-tee",
    name: "White Wall Tee",
    price: 3450,
    description: "A clean white t-shirt photographed against a light wall.",
    image: unsplash("photo-1722310752951-4d459d28c678"),
    color: "White",
    hex: "#f3f0ea",
    tags: ["T-Shirt", "Everyday"],
  }),
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isNew).slice(0, 4);
}

export function getRelatedProducts(currentId: string, limit = 4): Product[] {
  return products.filter((p) => p.id !== currentId).slice(0, limit);
}
