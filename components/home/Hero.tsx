"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import Reveal from "@/components/motion/Reveal";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#c49a45]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-neutral-800/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle architectural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700/60 text-neutral-300 text-xs font-mono tracking-widest uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#c49a45] animate-pulse" />
                <span>DROP 01 // 280 GSM HEAVYWEIGHT SILHOUETTES</span>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
                Heavyweight <br />
                <span className="font-editorial-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#e8c373] via-[#c49a45] to-[#f5f3ec]">
                  Drape.
                </span>{" "}
                Sculpted Cut.
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                Engineered from custom-spun 280 GSM combed cotton. Featuring exaggerated dropped shoulder seams, reinforced collar ribbing, and an architectural drape that retains form through every wear.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/shop"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-xl shadow-white/5 active:scale-[0.98]"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={siteConfig.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-neutral-900/80 border border-neutral-700/80 text-white font-semibold text-xs uppercase tracking-widest hover:border-neutral-500 hover:bg-neutral-800 transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </Reveal>

            {/* Quick Metrics */}
            <Reveal delay={0.5}>
              <div className="grid grid-cols-3 gap-4 pt-6 sm:pt-8 border-t border-neutral-800/80 max-w-lg mx-auto lg:mx-0 text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">280 <span className="text-xs font-mono text-[#c49a45]">GSM</span></div>
                  <div className="text-xs text-neutral-400 mt-0.5">Heavy French Terry</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">100%</div>
                  <div className="text-xs text-neutral-400 mt-0.5">Combed Cotton</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">24H</div>
                  <div className="text-xs text-neutral-400 mt-0.5">Nationwide Dispatch</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Editorial Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={0.3} yOffset={36}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Garment Image Card */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800/90 shadow-2xl group">
                  <Image
                    src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop"
                    alt="ZAS Architectural Heavyweight Drop Shoulder Tee"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Top Garment Pill */}
                  <div className="absolute top-5 left-5 right-5 flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white font-mono text-[10px] uppercase tracking-wider">
                      ZAS-001 // NOIR
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#c49a45]/90 text-black font-bold text-[10px] uppercase tracking-wider">
                      IN STOCK
                    </span>
                  </div>

                  {/* Bottom Information overlay */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                        Noir Drop Tee
                      </h3>
                      <p className="text-xs text-neutral-400 font-mono">Boxy Street Drape</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-white">Rs. 3,450</div>
                      <span className="text-[10px] text-emerald-400 font-medium">Free Delivery</span>
                    </div>
                  </div>
                </div>

                {/* Floating Aesthetic Accent Card */}
                <div className="hidden sm:flex absolute -bottom-6 -left-8 p-4 rounded-2xl bg-[#141418]/90 backdrop-blur-xl border border-neutral-700/80 shadow-2xl items-center gap-3 max-w-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#c49a45]/20 flex items-center justify-center text-[#c49a45] shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Architectural Collar</p>
                    <p className="text-[10px] text-neutral-400">Dense 1.25" rib that never deforms</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
