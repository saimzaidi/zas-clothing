export interface FAQItem {
  id: string;
  category: "Ordering & WhatsApp" | "Sizing & Fit" | "Shipping & Delivery" | "Care & Fabric";
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "Ordering & WhatsApp",
    question: "How does ordering through WhatsApp work?",
    answer:
      "Simply choose your preferred drop-shoulder tees, pick your color and size, and head to checkout. When you click 'Confirm Order via WhatsApp', your browser opens a direct chat with our verified concierge team with your order summary pre-filled. We confirm your delivery address and dispatch immediately.",
  },
  {
    id: "faq-2",
    category: "Ordering & WhatsApp",
    question: "What payment methods are supported?",
    answer:
      "We accept Cash on Delivery (COD) nationwide across Pakistan, as well as Direct Bank Transfer, Raast, and JazzCash. You can specify your preferred payment mode during the quick WhatsApp confirmation.",
  },
  {
    id: "faq-3",
    category: "Sizing & Fit",
    question: "What makes the ZAS drop shoulder fit unique?",
    answer:
      "Our patterns are engineered from ground up: dropped shoulder seams by 3 to 4 inches, broader chest boxiness, elongated half-sleeves that drape past the elbow bend, and an architectural length that prevents bunching at the waist.",
  },
  {
    id: "faq-4",
    category: "Sizing & Fit",
    question: "Should I order true-to-size or size down?",
    answer:
      "Order your true size for our signature oversized, relaxed streetwear drape. If you prefer a more tailored standard boxy fit, we recommend selecting one size down. Refer to our detailed chest and length measurements on each product page.",
  },
  {
    id: "faq-5",
    category: "Shipping & Delivery",
    question: "How long does nationwide shipping take?",
    answer:
      "Orders are processed within 24 hours. Delivery takes 2–3 business days for major hubs (Lahore, Karachi, Islamabad/Rawalpindi) and 3–5 business days for all other nationwide destinations.",
  },
  {
    id: "faq-6",
    category: "Shipping & Delivery",
    question: "What is your exchange and return policy?",
    answer:
      "We offer a hassle-free 7-day exchange window for any sizing issues or manufacturing defects. Items must be unworn, unwashed, and retained with original tags and packaging intact.",
  },
  {
    id: "faq-7",
    category: "Care & Fabric",
    question: "How should I wash and care for heavyweight 280 GSM cotton?",
    answer:
      "Machine wash cold inside-out with similar dark colors using mild detergent. Avoid bleach or heavy tumble drying; line dry in the shade to maintain rib elasticity and fabric density.",
  },
];
