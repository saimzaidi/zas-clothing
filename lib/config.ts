export const siteConfig = {
  name: "ZAS Clothing",
  tagline: "Architectural Streetwear & Heavyweight Drop-Shoulder Silhouettes",
  description:
    "Premium design-led streetwear engineered with heavyweight French terry and custom drop-shoulder tailoring.",
  url: "https://zasclothing.com",
  currency: {
    code: "PKR",
    symbol: "Rs. ",
    format: (amount: number) => `Rs. ${amount.toLocaleString()}`,
  },
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923001234567",
    displayNumber: "+92 300 1234567",
  },
  socials: {
    instagram: "https://instagram.com/zasclothing",
    tiktok: "https://tiktok.com/@zasclothing",
    whatsapp: "https://wa.me/923001234567",
  },
  shipping: {
    standardRate: 250,
    freeShippingThreshold: 5000,
    deliveryDays: "3-5 Business Days Nationwide",
  },
};
