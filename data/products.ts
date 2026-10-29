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
    isDrop: true,
    fit: "Boxy Drop-Shoulder Relaxed",
    fabric: "100% Combed Compact Cotton (280 GSM)",
  },
  {
    id: "zas-002",
    slug: "raw-edge-drop-shoulder-sand",
    name: "Raw Hem Relic Drop Tee",
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
    isDrop: true,
    fit: "Loose Streetwear Cut",
    fabric: "260 GSM French Terry",
  },
  {
    id: "zas-003",
    slug: "acid-wash-vintage-monolith",
    name: "Monolith Mineral Wash Tee",
    price: 3850,
    description:
      "Individually hand-treated with mineral wash distressing, giving each tee an exclusive celestial stone patina. Seamless sides and dropped armholes engineered for effortless layering.",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: [
      {
        name: "Mineral Smoke",
        hex: "#3e3d45",
        images: [
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Midnight Indigo",
        hex: "#222738",
        images: [
          "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: {
      "Mineral Smoke-S": 5,
      "Mineral Smoke-M": 8,
      "Mineral Smoke-L": 6,
      "Mineral Smoke-XL": 4,
      "Mineral Smoke-XXL": 2,
      "Midnight Indigo-S": 6,
      "Midnight Indigo-M": 9,
      "Midnight Indigo-L": 7,
      "Midnight Indigo-XL": 3,
      "Midnight Indigo-XXL": 2,
    },
    tags: ["Mineral Wash", "Limited Drop", "Oversized"],
    isDrop: true,
    fit: "Relaxed Boxy Fit",
    fabric: "300 GSM Heavyweight Cotton",
  },
  {
    id: "zas-004",
    slug: "clean-minimalist-box-tee",
    name: "Minimalist Atelier Box Tee",
    price: 3200,
    description:
      "The quintessential everyday luxury tee. Understated tonal embroidered atelier logo on the nape, clean bound collar, and engineered drop shoulder seams tailored for an impeccable drape.",
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: [
      {
        name: "Cloud Off-White",
        hex: "#f3f1ec",
        images: [
          "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Shadow Grey",
        hex: "#56585c",
        images: [
          "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Deep Black",
        hex: "#0e0e10",
        images: [
          "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: {
      "Cloud Off-White-S": 15,
      "Cloud Off-White-M": 20,
      "Cloud Off-White-L": 18,
      "Cloud Off-White-XL": 10,
      "Shadow Grey-S": 10,
      "Shadow Grey-M": 14,
      "Shadow Grey-L": 12,
      "Shadow Grey-XL": 6,
      "Deep Black-S": 18,
      "Deep Black-M": 22,
      "Deep Black-L": 19,
      "Deep Black-XL": 12,
    },
    tags: ["Essential", "Minimalist", "Everyday Luxury"],
    isNew: false,
    fit: "Contemporary Box Fit",
    fabric: "240 GSM Ring-Spun Cotton",
  },
  {
    id: "zas-005",
    slug: "back-print-sculptural-tee",
    name: "Brutalist Typography Graphic Tee",
    price: 3750,
    description:
      "Featuring high-density puff screen printing with architectural coordinates across the back spine. Built on our signature drop shoulder silhouette with high-tensile ribbing.",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: [
      {
        name: "Pitch Black",
        hex: "#0c0c0d",
        images: [
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Vintage Taupe",
        hex: "#b8a898",
        images: [
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: {
      "Pitch Black-S": 8,
      "Pitch Black-M": 12,
      "Pitch Black-L": 10,
      "Pitch Black-XL": 6,
      "Pitch Black-XXL": 3,
      "Vintage Taupe-S": 5,
      "Vintage Taupe-M": 9,
      "Vintage Taupe-L": 7,
      "Vintage Taupe-XL": 4,
      "Vintage Taupe-XXL": 2,
    },
    tags: ["Graphic", "Puff Print", "Drop Shoulder"],
    isNew: true,
    fit: "Oversized Street Drape",
    fabric: "280 GSM Heavy Cotton",
  },
  {
    id: "zas-006",
    slug: "washed-sage-oversized-tee",
    name: "Sage Botanical Dye Drop Tee",
    price: 3500,
    description:
      "Cold-pad batch dyed with organic botanical sage pigments. Subtle tonal fading along the seams and collar. Breathable, heavy drape ideal for transitional climate wear.",
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: [
      {
        name: "Muted Sage",
        hex: "#82917d",
        images: [
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Bone Cream",
        hex: "#e8e5dc",
        images: [
          "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: {
      "Muted Sage-S": 7,
      "Muted Sage-M": 14,
      "Muted Sage-L": 11,
      "Muted Sage-XL": 5,
      "Bone Cream-S": 9,
      "Bone Cream-M": 13,
      "Bone Cream-L": 10,
      "Bone Cream-XL": 4,
    },
    tags: ["Botanical Dye", "Organic", "Drop Shoulder"],
    isNew: false,
    fit: "Relaxed Boxy Fit",
    fabric: "250 GSM Combed Cotton",
  },
  {
    id: "zas-007",
    slug: "deconstructed-seam-mock-tee",
    name: "Reverse Inset Seam Tee",
    price: 3900,
    description:
      "Exposed reverse overlock stitching with asymmetrical side split vents. Tailored for elevated silhouette definition with a slightly higher structured neckband.",
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: [
      {
        name: "Concrete Ash",
        hex: "#505054",
        images: [
          "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Solid Jet",
        hex: "#0e0e0e",
        images: [
          "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: {
      "Concrete Ash-S": 6,
      "Concrete Ash-M": 10,
      "Concrete Ash-L": 8,
      "Concrete Ash-XL": 3,
      "Concrete Ash-XXL": 2,
      "Solid Jet-S": 8,
      "Solid Jet-M": 12,
      "Solid Jet-L": 10,
      "Solid Jet-XL": 5,
      "Solid Jet-XXL": 3,
    },
    tags: ["Deconstructed", "Reverse Seam", "Statement"],
    isDrop: true,
    fit: "Architectural Box Cut",
    fabric: "290 GSM Heavy Jersey",
  },
  {
    id: "zas-008",
    slug: "heavyweight-rust-drop-tee",
    name: "Burnt Ochre Heavyweight Tee",
    price: 3600,
    description:
      "Deep terracotta pigment treatment with subtle enzyme abrasion on the neckline and cuff trims. Pairs a dramatic dropped shoulder with balanced body length.",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: [
      {
        name: "Burnt Ochre",
        hex: "#9e4c31",
        images: [
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Pitch Black",
        hex: "#0c0c0d",
        images: [
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: {
      "Burnt Ochre-S": 5,
      "Burnt Ochre-M": 8,
      "Burnt Ochre-L": 7,
      "Burnt Ochre-XL": 4,
      "Pitch Black-S": 9,
      "Pitch Black-M": 14,
      "Pitch Black-L": 11,
      "Pitch Black-XL": 6,
    },
    tags: ["Warm Tone", "Pigment Dyed", "Drop Shoulder"],
    isNew: true,
    fit: "Oversized Silhouette",
    fabric: "275 GSM Organic Cotton",
  },
  {
    id: "zas-009",
    slug: "raw-clay-boxy-tee",
    name: "Raw Terracotta Studio Tee",
    price: 3350,
    description:
      "Warm clay earthy tones formulated exclusively for the ZAS maiden drop. Features double-folded collar rib and extended sleeve lengths for authentic streetwear styling.",
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: [
      {
        name: "Raw Clay",
        hex: "#b8705c",
        images: [
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Off-White",
        hex: "#eae7df",
        images: [
          "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: {
      "Raw Clay-S": 6,
      "Raw Clay-M": 10,
      "Raw Clay-L": 8,
      "Raw Clay-XL": 3,
      "Off-White-S": 8,
      "Off-White-M": 12,
      "Off-White-L": 9,
      "Off-White-XL": 5,
    },
    tags: ["Earth Tones", "Heavyweight", "Studio Edition"],
    isNew: false,
    fit: "Relaxed Studio Fit",
    fabric: "260 GSM Cotton",
  },
  {
    id: "zas-010",
    slug: "slate-minimalist-drop-tee",
    name: "Nordic Slate Drop-Shoulder Tee",
    price: 3400,
    description:
      "A cool slate tone crafted for neutral monochrome wardrobing. Finished with blind stitching at sleeves and bottom hem for a clean architectural aesthetic.",
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: [
      {
        name: "Nordic Slate",
        hex: "#444a52",
        images: [
          "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Pitch Black",
        hex: "#0c0c0d",
        images: [
          "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: {
      "Nordic Slate-S": 7,
      "Nordic Slate-M": 11,
      "Nordic Slate-L": 9,
      "Nordic Slate-XL": 4,
      "Nordic Slate-XXL": 2,
      "Pitch Black-S": 10,
      "Pitch Black-M": 15,
      "Pitch Black-L": 12,
      "Pitch Black-XL": 6,
      "Pitch Black-XXL": 3,
    },
    tags: ["Minimalist", "Monochrome", "Drop Shoulder"],
    isNew: true,
    fit: "Relaxed Boxy Fit",
    fabric: "270 GSM Heavy Cotton",
  },
  {
    id: "zas-011",
    slug: "heavy-rib-collar-ivory",
    name: "Architectural High-Collar Ivory Tee",
    price: 3600,
    description:
      "Engineered with a dense 1.25-inch high mock rib collar that never sags. Heavy 290 GSM combed yarn woven with high twist count for crisp structure.",
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: [
      {
        name: "Warm Ivory",
        hex: "#f5f3ec",
        images: [
          "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Graphite",
        hex: "#343538",
        images: [
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: {
      "Warm Ivory-S": 8,
      "Warm Ivory-M": 12,
      "Warm Ivory-L": 10,
      "Warm Ivory-XL": 5,
      "Graphite-S": 6,
      "Graphite-M": 10,
      "Graphite-L": 8,
      "Graphite-XL": 4,
    },
    tags: ["High Collar", "Heavy Rib", "Drop Shoulder"],
    isDrop: true,
    fit: "Structured Drop Shoulder",
    fabric: "290 GSM High-Twist Cotton",
  },
  {
    id: "zas-012",
    slug: "vintage-washed-charcoal-tee",
    name: "Acid Stone Vintage Charcoal Tee",
    price: 3800,
    description:
      "Hand-washed with volcanic pumice stone for authentic marbling. Subtle micro-frayed edging along the cuffs and bottom hem gives an archival collector feel.",
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: [
      {
        name: "Stone Charcoal",
        hex: "#2b2c30",
        images: [
          "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop",
        ],
      },
      {
        name: "Washed Moss",
        hex: "#434b3e",
        images: [
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: {
      "Stone Charcoal-S": 6,
      "Stone Charcoal-M": 11,
      "Stone Charcoal-L": 9,
      "Stone Charcoal-XL": 5,
      "Stone Charcoal-XXL": 2,
      "Washed Moss-S": 5,
      "Washed Moss-M": 8,
      "Washed Moss-L": 6,
      "Washed Moss-XL": 3,
      "Washed Moss-XXL": 1,
    },
    tags: ["Stone Wash", "Archival", "Drop Shoulder"],
    isNew: true,
    fit: "Oversized Boxy Fit",
    fabric: "280 GSM Combed French Terry",
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
