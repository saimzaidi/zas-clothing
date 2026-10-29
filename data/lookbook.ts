export interface LookbookItem {
  id: string;
  season: string;
  title: string;
  location: string;
  image: string;
  photographer: string;
  aspect: "portrait" | "landscape" | "tall";
}

export const lookbookItems: LookbookItem[] = [
  {
    id: "look-01",
    season: "ZAS COLLECTION // AUTUMN-WINTER",
    title: "Brutalist Monolith in Charcoal",
    location: "Concrete Pavilions, Sector F-8",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
    photographer: "ZAS Visual Atelier",
    aspect: "tall",
  },
  {
    id: "look-02",
    season: "ZAS COLLECTION // AUTUMN-WINTER",
    title: "Raw Edges & Shadowed Silhouettes",
    location: "Industrial Corridor, Old Harbor",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200&auto=format&fit=crop",
    photographer: "ZAS Visual Atelier",
    aspect: "portrait",
  },
  {
    id: "look-03",
    season: "ZAS COLLECTION // AUTUMN-WINTER",
    title: "Minimalist Atelier Architecture",
    location: "Studio Loft White Space",
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1200&auto=format&fit=crop",
    photographer: "ZAS Visual Atelier",
    aspect: "landscape",
  },
  {
    id: "look-04",
    season: "ZAS COLLECTION // AUTUMN-WINTER",
    title: "Mineral Distress & Heavy Cotton Drape",
    location: "Quarry Outpost No. 4",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
    photographer: "ZAS Visual Atelier",
    aspect: "tall",
  },
];
