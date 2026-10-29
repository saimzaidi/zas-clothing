"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: "Shop All", href: "/shop" },
  { name: "About Atelier", href: "/about" },
  { name: "Shipping & Policy", href: "/shipping-returns" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact Concierge", href: "/contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Sliding panel */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-[#111114] border-r border-neutral-800 p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                <Link
                  href="/"
                  onClick={onClose}
                  aria-label="ZAS Clothing home"
                  className="inline-flex items-center"
                >
                  <Image
                    src="/brand/zas-logo.png"
                    alt="ZAS Clothing — Wear Your Story"
                    width={86}
                    height={75}
                    className="h-16 w-[4.6rem] object-contain"
                  />
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={onClose}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`flex items-center justify-between py-2 text-lg font-medium transition-colors group ${
                      pathname === link.href
                        ? "text-[#e8c373]"
                        : "text-neutral-200 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-4 pt-6 border-t border-neutral-800">
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 text-sm font-semibold hover:bg-[#25D366] hover:text-black transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Concierge
              </a>

              <p className="text-center text-xs text-neutral-500 font-mono">
                © {new Date().getFullYear()} ZAS CLOTHING. ALL RIGHTS RESERVED.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
