import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "zas-001",
    slug: "heavyweight-oversized-noir-tee",
    name: "Architectural Heavyweight Noir Tee",
    price: 3450,
    description:
      "Crafted from custom-developed 280 GSM combed cotton French terry. Features an exaggerated dropped shoulder silhouette, double-needle reinforced collar, and a boxy architectural drape that maintains its sculpture through wear.",
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: [
      {
        name: "Pitch Black",
        hex: "#0c0c0d",
        images: [
          "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Raw Charcoal",
        hex: "#26262b",
        images: [
          "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Bone White",
        hex: "#edeae3",
        images: [
          "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: {
      "Pitch Black-S": 12,
      "Pitch Black-M": 18,
      "Pitch Black-L": 14,
      "Pitch Black-XL": 8,
      "Pitch Black-XXL": 4,
      "Raw Charcoal-S": 9,
      "Raw Charcoal-M": 15,
      "Raw Charcoal-L": 11,
      "Raw Charcoal-XL": 6,
      "Raw Charcoal-XXL": 3,
      "Bone White-S": 8,
      "Bone White-M": 12,
      "Bone White-L": 10,
      "Bone White-XL": 5,
      "Bone White-XXL": 2,
    },
    tags: ["Heavyweight", "Oversized", "Drop Shoulder", "Best Seller"],
    isNew: true,
    fit: "Boxy Drop-Shoulder Relaxed",
    fabric: "100% Combed Compact Cotton (280 GSM)",
  },
  {
    id: "zas-002",
    slug: "raw-edge-drop-shoulder-sand",
    name: "Raw Hem Relic Tee",
    price: 3650,
    description:
      "A testament to brutalist deconstruction. Hand-finished raw sleeve hems paired with an ultra-wide ribbed collar. Pigment dyed and silicone enzyme washed for a buttery vintage drape.",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: [
      {
        name: "Desert Sand",
        hex: "#d1c2a5",
        images: [
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Washed Olive",
        hex: "#4f5446",
        images: [
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Obsidian",
        hex: "#151517",
        images: [
          "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: {
      "Desert Sand-S": 6,
      "Desert Sand-M": 10,
      "Desert Sand-L": 8,
      "Desert Sand-XL": 4,
      "Washed Olive-S": 7,
      "Washed Olive-M": 11,
      "Washed Olive-L": 9,
      "Washed Olive-XL": 3,
      "Obsidian-S": 10,
      "Obsidian-M": 14,
      "Obsidian-L": 12,
      "Obsidian-XL": 5,
    },
    tags: ["Raw Hem", "Vintage Wash", "Drop Shoulder"],
    isNew: true,
    fit: "Loose Streetwear Cut",
    fabric: "260 GSM French Terry",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isNew || p.isDrop).slice(0, 4);
}

export function getDropProducts(): Product[] {
  return products.filter((p) => p.isDrop);
}

export function getRelatedProducts(currentId: string, limit = 4): Product[] {
  return products.filter((p) => p.id !== currentId).slice(0, limit);
}
