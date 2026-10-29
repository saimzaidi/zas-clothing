"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingBag, Check } from "lucide-react";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/format";
import ProductArtwork from "@/components/product/ProductArtwork";
import { Swatch } from "@/components/ui/Swatch";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";
import { useHydrated } from "@/hooks/useHydrated";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isHydrated = useHydrated();
  const addItem = useCartStore((s) => s.addItem);
  const isInWishlist = useWishlistStore((s) => s.isInWishlist(product.id));
  const toggleWishlist = useWishlistStore((s) => s.toggleWishlist);
  const isWishlisted = isHydrated && isInWishlist;

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [justAdded, setJustAdded] = useState(false);

  const activeColor = product.colors[selectedColorIndex] || product.colors[0];

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Default to 'M' size or first available size
    const targetSize = product.sizes.includes("M") ? "M" : product.sizes[0];
    const success = addItem({
      productId: product.id,
      color: activeColor.name,
      size: targetSize,
      quantity: 1,
      selectedImage: activeColor?.images?.[0] || product.images[0],
    });

    if (success) {
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 1500);
    }
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div
      className="product-card group relative flex flex-col rounded-3xl bg-[#131317] border border-neutral-800/80 p-3 sm:p-4 hover:border-neutral-700/80 transition-all duration-300 hover:shadow-xl hover:shadow-black/40"
    >
      {/* Text-only product panel */}
      <Link
        href={`/product/${product.slug}`}
        aria-label={`View ${product.name}`}
        className="relative block w-full"
      >
        <ProductArtwork product={product} />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {product.isNew && (
            <span className="px-2.5 py-0.5 rounded-full bg-white text-black text-[10px] font-bold tracking-wider uppercase font-mono">
              New
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-all ${
            isWishlisted
              ? "bg-[#c49a45] text-black"
              : "bg-black/40 text-neutral-300 hover:text-white hover:bg-black/70"
          }`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={isWishlisted}
        >
          <Heart
            className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`}
          />
        </button>

        {/* Quick Add overlay button */}
        <div className="absolute bottom-3 inset-x-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={handleQuickAdd}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/95 backdrop-blur-md text-black font-semibold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg active:scale-98"
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Quick Add (Size M)</span>
              </>
            )}
          </button>
        </div>
      </Link>

      {/* Product Details */}
      <div className="pt-4 pb-1 px-1 flex-1 flex flex-col justify-between">
        <div>
          {/* Swatches */}
          <div className="flex items-center gap-2 mb-2.5">
            {product.colors.map((color, idx) => (
              <Swatch
                key={color.name}
                color={color.hex}
                name={color.name}
                isSelected={selectedColorIndex === idx}
                onClick={() => setSelectedColorIndex(idx)}
                size="sm"
              />
            ))}
            <span className="text-[11px] text-neutral-400 font-mono pl-1">
              {activeColor.name}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-[#c49a45] transition-colors line-clamp-1">
            <Link href={`/product/${product.slug}`}>{product.name}</Link>
          </h3>

          <p className="text-xs text-neutral-400 line-clamp-1 mt-0.5">
            {product.fit || "Everyday T-Shirt"}
          </p>
        </div>

        {/* Price & Size preview */}
        <div className="mt-3 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
          <span className="text-sm sm:text-base font-bold text-white tracking-wide">
            {formatPrice(product.price)}
          </span>

          <div className="flex items-center gap-1">
            {product.sizes.slice(0, 4).map((size) => (
              <span
                key={size}
                className="text-[10px] font-mono text-neutral-500 uppercase px-1 py-0.5 rounded bg-neutral-900 border border-neutral-800"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
