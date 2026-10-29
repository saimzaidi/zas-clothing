import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";
import Reveal from "@/components/motion/Reveal";

export default function FeaturedGrid() {
  const featured = getFeaturedProducts();

  return (
    <section className="featured-grid py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <Reveal>
            <span className="text-xs font-mono uppercase tracking-widest text-[#c49a45]">
              THE COLLECTION
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-1">
              The <span className="font-editorial-italic font-normal text-[#e8c373]">Gallery.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-neutral-300 hover:text-white transition-colors group"
          >
            <span>View collection</span>
            <ArrowRight className="w-4 h-4 text-[#c49a45] group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {featured.map((product, idx) => (
          <Reveal key={product.id} delay={idx * 0.08}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
