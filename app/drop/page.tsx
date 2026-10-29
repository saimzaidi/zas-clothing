import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductGrid from "@/components/shop/ProductGrid";
import { getDropProducts } from "@/data/products";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "The Drop — Limited ZAS Silhouettes",
  description:
    "Explore the limited ZAS Clothing drop: heavyweight 280 GSM cotton tees with architectural drop-shoulder cuts.",
};

export default function DropPage() {
  const dropProducts = getDropProducts();

  return (
    <main className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="pb-10 sm:pb-14 border-b border-neutral-800">
        <Reveal>
          <span className="text-xs font-mono uppercase tracking-widest text-[#c49a45]">
            Limited Production // Drop 01
          </span>
          <h1 className="mt-3 text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            The <span className="font-editorial-italic font-normal text-[#e8c373]">Drop.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-neutral-400">
            A focused release of heavyweight silhouettes, engineered in 280 GSM
            cotton and produced in limited quantities.
          </p>
        </Reveal>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
            {dropProducts.length} limited silhouettes
          </span>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 transition-colors hover:text-white"
          >
            Browse the full collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="pt-8">
        <ProductGrid products={dropProducts} />
      </div>
    </main>
  );
}
