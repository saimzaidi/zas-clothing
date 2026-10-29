import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { lookbookItems } from "@/data/lookbook";
import Reveal from "@/components/motion/Reveal";

export default function Lookbook() {
  return (
    <section id="lookbook" className="lookbook-section py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <Reveal>
            <span className="text-xs font-mono uppercase tracking-widest text-[#c49a45]">
              Editorial 01
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-1">
              The <span className="font-editorial-italic font-normal text-[#e8c373]">Lookbook</span> Archive.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xs font-light">
            Captured on location across brutalist industrial spaces and raw concrete monoliths.
          </p>
        </Reveal>
      </div>

      {/* Lookbook Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Large Feature 1 */}
        <div className="md:col-span-8">
          <Reveal delay={0.1}>
            <div className="lookbook-photo-card group relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800">
              <Image
                src={lookbookItems[0].image}
                alt={lookbookItems[0].title}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#c49a45] block">
                    {lookbookItems[0].season}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold uppercase text-white mt-1">
                    {lookbookItems[0].title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">{lookbookItems[0].location}</p>
                </div>

                <Link
                  href="/shop"
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shrink-0 hover:scale-110 transition-transform"
                  aria-label="Shop look"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Tall Feature 2 */}
        <div className="md:col-span-4">
          <Reveal delay={0.2}>
            <div className="lookbook-photo-card group relative aspect-[3/4] sm:aspect-auto md:h-full min-h-[380px] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800">
              <Image
                src={lookbookItems[1].image}
                alt={lookbookItems[1].title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#c49a45] block">
                  {lookbookItems[1].season}
                </span>
                <h3 className="text-lg font-bold uppercase text-white mt-1">
                  {lookbookItems[1].title}
                </h3>
                <p className="text-xs text-neutral-400 mt-1">{lookbookItems[1].location}</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Feature 3 */}
        <div className="md:col-span-4">
          <Reveal delay={0.3}>
            <div className="lookbook-photo-card group relative aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800">
              <Image
                src={lookbookItems[2].image}
                alt={lookbookItems[2].title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#c49a45] block">
                  {lookbookItems[2].season}
                </span>
                <h3 className="text-lg font-bold uppercase text-white mt-1">
                  {lookbookItems[2].title}
                </h3>
                <p className="text-xs text-neutral-400 mt-1">{lookbookItems[2].location}</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Feature 4 */}
        <div className="md:col-span-8">
          <Reveal delay={0.4}>
            <div className="lookbook-photo-card group relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800">
              <Image
                src={lookbookItems[3].image}
                alt={lookbookItems[3].title}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#c49a45] block">
                    {lookbookItems[3].season}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold uppercase text-white mt-1">
                    {lookbookItems[3].title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">{lookbookItems[3].location}</p>
                </div>

                <Link
                  href="/shop"
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shrink-0 hover:scale-110 transition-transform"
                  aria-label="Shop look"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
