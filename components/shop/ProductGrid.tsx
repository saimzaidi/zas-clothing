import React from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import Reveal from "@/components/motion/Reveal";

interface ProductGridProps {
  products: Product[];
  onResetFilters?: () => void;
  isWishlistMode?: boolean;
}

export default function ProductGrid({ products, onResetFilters, isWishlistMode = false }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-24 px-4 rounded-3xl bg-neutral-900/40 border border-neutral-800 space-y-4">
        <h3 className="text-lg font-bold uppercase tracking-wider text-white">
          {isWishlistMode ? "No saved pieces yet" : "No matching silhouettes found"}
        </h3>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-sm mx-auto font-light">
          {isWishlistMode
            ? "Tap the heart on any piece to keep it here."
            : "Try expanding your price range, clearing size filters, or searching for broader terms."}
        </p>
        {isWishlistMode ? (
          <div className="pt-2">
            <Link
              href="/shop"
              className="inline-flex px-6 py-2.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
            >
              Explore the collection
            </Link>
          </div>
        ) : onResetFilters ? (
          <div className="pt-2">
            <button
              onClick={onResetFilters}
              className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, idx) => (
        <Reveal key={product.id} delay={Math.min(idx * 0.05, 0.3)}>
          <ProductCard product={product} />
        </Reveal>
      ))}
    </div>
  );
}
