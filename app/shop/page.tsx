"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { SlidersHorizontal, Heart, Sparkles } from "lucide-react";
import { products } from "@/data/products";
import { Product, ProductSize } from "@/types/product";
import ProductGrid from "@/components/shop/ProductGrid";
import Filters, { FilterState } from "@/components/shop/Filters";
import SortSelect, { SortOption } from "@/components/shop/SortSelect";
import SearchBar from "@/components/shop/SearchBar";
import { useWishlistStore } from "@/store/wishlist";
import { useHydrated } from "@/hooks/useHydrated";

function ShopContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isHydrated = useHydrated();
  const wishlistIds = useWishlistStore((s) => s.itemIds);

  const initialSearch = searchParams.get("q") || "";
  const initialSize = (searchParams.get("size") as ProductSize) || "all";
  const initialColor = searchParams.get("color") || "";
  const initialTag = searchParams.get("tag") || "";
  const isWishlistMode = searchParams.get("wishlist") === "true";

  const [search, setSearch] = useState(initialSearch);
  const [sort, setSort] = useState<SortOption>("featured");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Available unique sizes and colors
  const availableSizes: ProductSize[] = ["S", "M", "L", "XL", "XXL"];
  const availableColors = useMemo(() => {
    const map = new Map<string, string>();
    products.forEach((p) => {
      p.colors.forEach((c) => {
        if (!map.has(c.name)) {
          map.set(c.name, c.hex);
        }
      });
    });
    return Array.from(map.entries()).map(([name, hex]) => ({ name, hex }));
  }, []);

  const minPrice = useMemo(() => Math.min(...products.map((p) => p.price)), []);
  const maxCatalogPrice = useMemo(() => Math.max(...products.map((p) => p.price)), []);

  const [filters, setFilters] = useState<FilterState>({
    size: initialSize,
    color: initialColor,
    maxPrice: maxCatalogPrice,
    tag: initialTag,
  });

  const handleResetFilters = () => {
    setSearch("");
    setFilters({
      size: "all",
      color: "",
      maxPrice: maxCatalogPrice,
      tag: "",
    });
    router.push("/shop");
  };

  // Filter and sort items
  const filteredProducts = useMemo(() => {
    if (isWishlistMode) {
      return isHydrated
        ? products.filter((product) => wishlistIds.includes(product.id))
        : [];
    }

    return products
      .filter((product) => {
        // Search query
        if (search.trim()) {
          const query = search.toLowerCase();
          const matchName = product.name.toLowerCase().includes(query);
          const matchDesc = product.description.toLowerCase().includes(query);
          const matchTag = product.tags.some((t) => t.toLowerCase().includes(query));
          const matchColor = product.colors.some((c) =>
            c.name.toLowerCase().includes(query)
          );
          if (!matchName && !matchDesc && !matchTag && !matchColor) return false;
        }

        // Size filter
        if (filters.size !== "all") {
          if (!product.sizes.includes(filters.size)) return false;
        }

        // Color filter
        if (filters.color) {
          if (!product.colors.some((c) => c.name === filters.color)) return false;
        }

        // Price filter
        if (product.price > filters.maxPrice) {
          return false;
        }

        // Tag filter
        if (filters.tag && !product.tags.includes(filters.tag)) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sort === "price-low") return a.price - b.price;
        if (sort === "price-high") return b.price - a.price;
        if (sort === "newest") return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        if (sort === "name") return a.name.localeCompare(b.name);
        return 0; // featured default
      });
  }, [filters, search, sort, isWishlistMode, isHydrated, wishlistIds]);

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-800">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#c49a45] block">
            {isWishlistMode ? "Personal Archive" : "Autumn / Winter 01"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-1">
            {isWishlistMode ? (
              <>
                Saved <span className="font-editorial-italic font-normal text-[#e8c373]">Silhouettes.</span>
              </>
            ) : (
              <>
                Drop Shoulder <span className="font-editorial-italic font-normal text-[#e8c373]">Catalogue.</span>
              </>
            )}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          {isWishlistMode ? (
            <button
              onClick={() => router.push("/shop")}
              className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono uppercase text-white hover:bg-neutral-800"
            >
              Show All Garments
            </button>
          ) : (
            <button
              onClick={() => router.push("/shop?wishlist=true")}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono uppercase text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <Heart className="w-3.5 h-3.5 text-[#c49a45]" />
              <span>Wishlist ({isHydrated ? wishlistIds.length : 0})</span>
            </button>
          )}
        </div>
      </div>

      {/* Control Bar: Search, Mobile Filter Toggle, Sort */}
      {!isWishlistMode && (
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:max-w-md">
            <SearchBar value={search} onChange={setSearch} />
          </div>

          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-3">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono uppercase tracking-wider text-white"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#c49a45]" />
              <span>Filters</span>
            </button>

            <SortSelect value={sort} onChange={setSort} />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
        {/* Desktop Sidebar Filters */}
        {!isWishlistMode && (
          <aside className="hidden lg:block lg:col-span-3 sticky top-24">
            <Filters
              filters={filters}
              onChange={setFilters}
              onReset={handleResetFilters}
              availableColors={availableColors}
              availableSizes={availableSizes}
              minPrice={minPrice}
              maxCatalogPrice={maxCatalogPrice}
              totalFiltered={filteredProducts.length}
            />
          </aside>
        )}

        {/* Mobile Filters Drawer Modal */}
        {!isWishlistMode && mobileFilterOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-md p-4 flex items-center justify-center">
            <div className="w-full max-w-md max-h-[90vh] overflow-y-auto">
              <Filters
                filters={filters}
                onChange={setFilters}
                onReset={handleResetFilters}
                availableColors={availableColors}
                availableSizes={availableSizes}
                minPrice={minPrice}
                maxCatalogPrice={maxCatalogPrice}
                totalFiltered={filteredProducts.length}
              />
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full mt-3 py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider text-center"
              >
                Apply Filters ({filteredProducts.length})
              </button>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className={isWishlistMode ? "lg:col-span-12" : "lg:col-span-9"}>
          <ProductGrid
            products={filteredProducts}
            onResetFilters={handleResetFilters}
            isWishlistMode={isWishlistMode}
          />
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-36 pb-24 text-center text-xs font-mono text-neutral-400">
          Loading ZAS Collection...
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
