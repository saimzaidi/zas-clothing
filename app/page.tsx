import React from "react";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function HomePage() {
  return (
    <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-center items-center text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs uppercase tracking-widest mb-6">
        <span className="w-2 h-2 rounded-full bg-[#c49a45] animate-pulse" />
        {siteConfig.drop.title}
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white max-w-4xl leading-[1.05]">
        Heavyweight <span className="font-editorial-italic font-normal text-[#e8c373]">Drape.</span> Architectural Form.
      </h1>

      <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-xl mx-auto font-light leading-relaxed">
        Custom-tailored 280 GSM French terry drop shoulder silhouettes. Built for structure, permanence, and minimalist presence.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-xl"
        >
          Explore Collection
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/shop?isDrop=true"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neutral-900 border border-neutral-800 text-white font-semibold text-sm uppercase tracking-wider hover:bg-neutral-800 transition-all"
        >
          View The Drop
        </Link>
      </div>
    </div>
  );
}
