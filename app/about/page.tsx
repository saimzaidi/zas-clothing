import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/config";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About Atelier — Architectural Silhouettes & Craft",
  description:
    "The genesis and philosophy of ZAS Clothing. Engineered 280 GSM French terry drop shoulder silhouettes built in Pakistan.",
};

export default function AboutPage() {
  const pillars = [
    {
      icon: Layers,
      title: "280 GSM Heavy French Terry",
      description:
        "We reject paper-thin streetwear blanks. Our textiles are woven with high-twist combed cotton yarns to produce a heavy drape that stands away from the torso.",
    },
    {
      icon: Compass,
      title: "The Architectural Drop",
      description:
        "Every curve and seam offset was drafted from scratch. Dropping the shoulder point 3.5 inches produces an authentic oversized profile without adding excess waist bunching.",
    },
    {
      icon: Sparkles,
      title: "Volcanic & Enzyme Patina",
      description:
        "Our mineral wash and pigment dye lines undergo artisanal stonewash baths with volcanic pumice to produce subtle seam distress and celestial marble tonality.",
    },
    {
      icon: ShieldCheck,
      title: "Zero-Compromise Construction",
      description:
        "Double-needle reinforced topstitching, 1.25-inch high-recovery Lycra neckbands, and pre-shrunk sanitization guarantee that your garment maintains its form forever.",
    },
  ];

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Editorial Header */}
      <div className="max-w-4xl space-y-6 pb-16 border-b border-neutral-800">
        <Reveal>
          <span className="text-xs font-mono uppercase tracking-widest text-[#c49a45]">
            Atelier Manifesto // Est. 2026
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
            Architecture <br />
            You Can <span className="font-editorial-italic font-normal text-[#e8c373]">Wear.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-base sm:text-xl text-neutral-300 font-light leading-relaxed max-w-2xl">
            ZAS was founded on a singular obsession: to create the ultimate heavyweight drop-shoulder silhouette that bridges architectural brutalism with modern everyday comfort.
          </p>
        </Reveal>
      </div>

      {/* Narrative Section with Editorial Image */}
      <div className="py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 space-y-6">
          <Reveal>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              01 // The Rejection of Thin Blanks
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white mt-2">
              Mass Production Lost the Soul of the Silhouette.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Standard commercial tees rely on lightweight 160–180 GSM jersey. They cling to the body, collapse at the collar after two washes, and lack the sculptural presence demanded by modern streetwear enthusiasts.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              At ZAS, we spent eight months developing our proprietary 280 GSM combed cotton French terry. It holds structural volume, allows airflow through its looped interior, and drapes with an imposing silhouette whether styled solo or layered.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={0.2}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800">
              <Image
                src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop"
                alt="ZAS Atelier Textile Craft"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#c49a45] block">
                  Studio Archive 01
                </span>
                <p className="text-sm font-semibold uppercase text-white mt-0.5">
                  Hand-Finished Mineral Patina Treatment
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* 4 Pillars Grid */}
      <div className="py-20 border-t border-neutral-800">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <span className="text-xs font-mono uppercase tracking-widest text-[#c49a45]">
              Core Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
              Engineered <span className="font-editorial-italic font-normal text-[#e8c373]">Without Compromise</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <Reveal key={pillar.title} delay={idx * 0.1}>
              <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/60 border border-neutral-800 h-full flex flex-col justify-between hover:border-neutral-700 transition-colors">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#c49a45]/20 text-[#c49a45] flex items-center justify-center">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* CTA Bottom Banner */}
      <Reveal delay={0.2}>
        <div className="mt-16 p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-[#171410] border border-neutral-800 text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#c49a45]">
            Current Collection
          </span>
          <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Experience the Architectural Silhouette.
          </h3>
          <div className="pt-2">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-xl"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
