import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Layers, Scissors, ShieldAlert, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";
import Reveal from "@/components/motion/Reveal";

export default function BentoValues() {
  return (
    <section className="values-section py-20 sm:py-28 bg-[#09090b] border-y border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Reveal>
            <span className="text-xs font-mono uppercase tracking-widest text-[#c49a45]">
              Atelier Engineering
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-2">
              Built on <span className="font-editorial-italic font-normal text-[#e8c373]">Sculptural</span> Integrity.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              We rejected generic blank tees. Every ZAS garment is patterned from raw yarn, tuned for precise shoulder drape, and finished with heavyweight permanence.
            </p>
          </Reveal>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: 280 GSM French Terry Architecture (Span 7) */}
          <div className="md:col-span-7">
            <Reveal delay={0.1} className="h-full">
              <div className="values-card-lime h-full relative overflow-hidden rounded-3xl bg-neutral-900/60 border border-neutral-800 p-8 sm:p-10 flex flex-col justify-between group hover:border-neutral-700 transition-colors">
                <div className="relative z-10 space-y-4 max-w-lg">
                  <div className="w-12 h-12 rounded-2xl bg-[#c49a45]/20 flex items-center justify-center text-[#c49a45]">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                    280 GSM Heavyweight <span className="font-editorial-italic font-normal text-[#e8c373]">Knit</span>
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">
                    Custom-spun from 100% long-staple combed cotton. Double-faced dense loopback French terry ensures a crisp architectural drape that never clings and maintains its sculpture even in warm seasons.
                  </p>
                </div>

                <div className="relative z-10 mt-8 pt-6 border-t border-neutral-800 flex flex-wrap gap-4 text-xs font-mono text-neutral-400">
                  <span className="px-3 py-1 rounded-full bg-neutral-800/80 text-white">Pre-shrunk 0% Shrinkage</span>
                  <span className="px-3 py-1 rounded-full bg-neutral-800/80 text-white">Silicon Enzyme Softness</span>
                  <span className="px-3 py-1 rounded-full bg-neutral-800/80 text-white">Zero Transparency</span>
                </div>

                {/* Subtle background glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#c49a45]/5 rounded-full blur-3xl pointer-events-none" />
              </div>
            </Reveal>
          </div>

          {/* Card 2: Engineered Drop Shoulder Pattern (Span 5) */}
          <div className="md:col-span-5">
            <Reveal delay={0.2} className="h-full">
              <div className="values-card-sky h-full relative overflow-hidden rounded-3xl bg-neutral-900/60 border border-neutral-800 p-8 sm:p-10 flex flex-col justify-between group hover:border-neutral-700 transition-colors">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-800 flex items-center justify-center text-white">
                    <Scissors className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                    Engineered <span className="font-editorial-italic font-normal text-[#e8c373]">Drop Silhouette</span>
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">
                    Shoulder seams are offset 3.5 inches with deepened armholes. Half-sleeves fall past the elbow crease, delivering an authentic oversized streetwear profile without looking oversized by accident.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-800">
                  <div className="text-xs font-mono text-[#c49a45]">
                    +3.5" SHOULDER DROP OFFSET // RELAXED ELBOW LENGTH
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Card 3: Indestructible Rib Collar (Span 5) */}
          <div className="md:col-span-5">
            <Reveal delay={0.3} className="h-full">
              <div className="values-card-lilac h-full relative overflow-hidden rounded-3xl bg-neutral-900/60 border border-neutral-800 p-8 sm:p-10 flex flex-col justify-between group hover:border-neutral-700 transition-colors">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-800 flex items-center justify-center text-[#c49a45]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                    1.25" High-Tensile <span className="font-editorial-italic font-normal text-[#e8c373]">Collar</span>
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">
                    Engineered with high-recovery Lycra ribbing and internal herringbone neck taping. Remains structured, tight, and pristine wash after wash.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-800">
                  <div className="text-xs font-mono text-neutral-400">
                    HERRINGBONE TAPED // ANTI-SAG RECOVERY RIB
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Card 4: WhatsApp Concierge Experience (Span 7) */}
          <div className="md:col-span-7">
            <Reveal delay={0.4} className="h-full">
              <div className="values-card-lime h-full relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900/90 to-[#101912] border border-neutral-800 p-8 sm:p-10 flex flex-col justify-between group hover:border-emerald-500/40 transition-colors">
                <div className="space-y-4 max-w-lg">
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                    Instant <span className="font-editorial-italic font-normal text-emerald-400">WhatsApp Checkout</span>
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">
                    No clunky account creation or checkout redirects. One tap formats your complete order bag and opens a direct chat with our verified concierge for seamless dispatch and real-time support.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs font-mono text-neutral-300">
                    COD / RAAST / DIRECT BANK // DISPATCH CONFIRMATION
                  </div>
                  <a
                    href={siteConfig.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>Connect Concierge</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
