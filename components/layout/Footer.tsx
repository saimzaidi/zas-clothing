import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowUpRight, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-[#09090b] text-neutral-400 border-t border-neutral-800/80 pt-16 pb-12">
      {/* Guarantees bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-3xl bg-neutral-900/40 border border-neutral-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-neutral-800/80 flex items-center justify-center text-[#c49a45] shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Nationwide Express Delivery</h4>
              <p className="text-xs text-neutral-400 mt-0.5">Dispatched within 24h via insured courier</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-neutral-800/80 flex items-center justify-center text-[#c49a45] shrink-0">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">7-Day Hassle-Free Exchange</h4>
              <p className="text-xs text-neutral-400 mt-0.5">Easy size swaps & quality warranty</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-neutral-800/80 flex items-center justify-center text-[#c49a45] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Heavyweight 280 GSM Cotton</h4>
              <p className="text-xs text-neutral-400 mt-0.5">Pre-shrunk custom architectural drape</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-1.5">
              <span className="text-2xl font-black tracking-widest text-white uppercase">
                ZAS
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c49a45]" />
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Architectural streetwear crafted in Pakistan. Engineered silhouettes, heavyweight 280 GSM cotton, and minimalist luxury designed for enduring presence.
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 text-xs font-semibold hover:bg-[#25D366] hover:text-black transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp Concierge: {siteConfig.whatsapp.displayNumber}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white">Collection</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  All T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/drop" className="hover:text-white transition-colors">
                  Limited Drops
                </Link>
              </li>
              <li>
                <Link href="/shop?tag=Heavyweight" className="hover:text-white transition-colors">
                  Heavyweight Series
                </Link>
              </li>
              <li>
                <Link href="/shop?tag=Mineral+Wash" className="hover:text-white transition-colors">
                  Mineral Washed
                </Link>
              </li>
            </ul>
          </div>

          {/* Brand & Editorial */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white">Atelier</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Brand Story
                </Link>
              </li>
              <li>
                <Link href="/#lookbook" className="hover:text-white transition-colors">
                  Lookbook 01
                </Link>
              </li>
              <li>
                <Link href="/shipping-returns" className="hover:text-white transition-colors">
                  Shipping & Exchange
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Frequently Asked
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials & Dispatch */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white">Connect</h4>
            <p className="text-xs text-neutral-400">
              Follow our studio drops, backstage production, and editorial lookbooks.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between text-xs text-neutral-300 hover:text-white transition-colors group"
              >
                <span>Instagram @zasclothing</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between text-xs text-neutral-300 hover:text-white transition-colors group"
              >
                <span>TikTok @zasclothing</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>© {new Date().getFullYear()} ZAS Clothing. Engineered in Pakistan.</p>
          <div className="flex items-center gap-6">
            <Link href="/shipping-returns" className="hover:text-neutral-300 transition-colors">
              Terms & Privacy
            </Link>
            <Link href="/shipping-returns" className="hover:text-neutral-300 transition-colors">
              Refund Policy
            </Link>
            <span className="text-neutral-600">COD / Raast / Bank</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
