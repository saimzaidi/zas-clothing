export interface Testimonial {
  id: string;
  author: string;
  city: string;
  role: string;
  quote: string;
  product: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    author: "Zainab Malik",
    city: "Lahore",
    role: "Architectural Designer",
    quote:
      "The collar structure and the 280 GSM weight hold up like high-end Japanese streetwear. It doesn't lose form even after weeks of continuous rotation. Outstanding craftsmanship.",
    product: "Architectural Heavyweight Noir Tee",
    rating: 5,
  },
  {
    id: "test-2",
    author: "Hamza Tariq",
    city: "Karachi",
    role: "Creative Director",
    quote:
      "Finally, a Pakistani brand that understands drop-shoulder drape and armhole proportions instead of just sizing up regular tees. The mineral wash finish is incredible.",
    product: "Raw Hem Relic Tee",
    rating: 5,
  },
  {
    id: "test-3",
    author: "Daniyal Shah",
    city: "Islamabad",
    role: "Sound Producer",
    quote:
      "Seamless WhatsApp ordering made checkout effortless. Received the parcel in Islamabad within 48 hours. The packaging and heavyweight cotton exceeded expectations.",
    product: "Raw Hem Relic Tee",
    rating: 5,
  },
  {
    id: "test-4",
    author: "Ayesha Qureshi",
    city: "Rawalpindi",
    role: "Visual Stylist",
    quote:
      "The boxy cut sits identically to Balenciaga and Fear of God silhouettes. Dense weave, zero see-through on the bone white, and flawless stitching.",
    product: "Architectural Heavyweight Noir Tee",
    rating: 5,
  },
];
