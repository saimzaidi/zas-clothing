"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingBag, Heart, Menu } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";
import { useHydrated } from "@/hooks/useHydrated";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const pathname = usePathname();
  const isHydrated = useHydrated();
  const openDrawer = useCartStore((s) => s.openDrawer);
  const itemCount = useCartStore((s) => s.getItemCount());
  const wishlistCount = useWishlistStore((s) => s.itemIds.length);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Collection", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`site-header fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0d0d0f]/90 backdrop-blur-md border-b border-neutral-800/80 py-3.5 shadow-lg"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile menu trigger */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-neutral-300 hover:text-white rounded-lg hover:bg-neutral-800/60"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Logo */}
          <Link href="/" aria-label="ZAS Clothing home" className="flex shrink-0 items-center group">
            <Image
              src="/brand/zas-logo-dark.png"
              alt="ZAS Clothing — Wear Your Story"
              width={114}
              height={100}
              priority
              className="h-14 w-16 object-contain transition-transform group-hover:scale-[1.03] sm:h-[4.5rem] sm:w-[5.25rem]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-white ${
                    isActive ? "text-white font-semibold" : "text-neutral-400"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/shop?wishlist=true"
              className="relative p-2.5 text-neutral-300 hover:text-white rounded-full hover:bg-neutral-800/60 transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {isHydrated && wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#c49a45] text-black text-[10px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <button
              onClick={openDrawer}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-semibold tracking-wider transition-all"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-4 h-4 text-[#c49a45]" />
              <span className="hidden sm:inline">Bag</span>
              <span className="w-5 h-5 rounded-full bg-white text-black text-[10px] font-bold flex items-center justify-center">
                {isHydrated ? itemCount : 0}
              </span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
