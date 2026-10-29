import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="site-footer bg-[#09090b] text-neutral-400 border-t border-neutral-800/80 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-10 border-b border-neutral-800">
          <div className="space-y-4">
            <Link href="/" aria-label="ZAS Clothing home" className="inline-flex items-center">
              <Image
                src="/brand/zas-logo.png"
                alt="ZAS Clothing — Wear Your Story"
                width={171}
                height={150}
                className="h-24 w-28 object-contain"
              />
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Everyday t-shirts, made with care in Karachi.
            </p>
            <a
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>WhatsApp Concierge: {siteConfig.whatsapp.displayNumber}</span>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col items-center gap-4 text-xs font-mono text-neutral-500">
          <p>
            © {new Date().getFullYear()} ZAS Clothing. Made by{" "}
            <a
              href="https://instagram.com/saimzaidi89"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit-link"
            >
              Saim Zaidi
            </a>
          </p>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ZAS Clothing on Instagram"
              className="footer-social-link"
            >
              <Instagram className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ZAS Clothing on Facebook"
              className="footer-social-link"
            >
              <Facebook className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
