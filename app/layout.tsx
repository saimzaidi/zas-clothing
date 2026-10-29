import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import SmoothScroll from "@/components/motion/SmoothScroll";
import { siteConfig } from "@/lib/config";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/brand/zas-logo-dark.png",
    shortcut: "/brand/zas-logo-dark.png",
    apple: "/brand/zas-logo-dark.png",
  },
  keywords: [
    "ZAS Clothing",
    "drop shoulder t-shirts",
    "heavyweight t-shirts",
    "streetwear Karachi",
    "280 GSM cotton",
    "oversized tee",
    "Karachi streetwear",
  ],
  authors: [{ name: siteConfig.name }],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — Heavyweight Drop-Shoulder Streetwear`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontSerif.variable}`}>
      <body className="zas-theme bg-[#0d0d0f] text-neutral-100 font-sans selection:bg-[#c49a45] selection:text-black">
        <SmoothScroll>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CartDrawer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
