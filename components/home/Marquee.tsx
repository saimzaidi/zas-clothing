"use client";

import React from "react";
import MarqueeTrack from "@/components/motion/MarqueeTrack";

const marqueeItems = [
  "280 GSM HEAVYWEIGHT COTTON",
  "ARCHITECTURAL DROP SHOULDER",
  "CUSTOM BOX CUT SILHOUETTES",
  "HIGH-DENSITY COLLAR RIBBING",
  "NATIONWIDE EXPRESS DISPATCH",
  "ZERO COMPROMISE DRAPE",
  "INSTANT WHATSAPP CONCIERGE",
  "THE CURRENT COLLECTION IS HERE",
];

export default function Marquee() {
  return (
    <section className="relative py-4 bg-neutral-900 border-y border-neutral-800 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0d0d0f] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0d0d0f] to-transparent z-10 pointer-events-none" />

      <MarqueeTrack speedClass="animate-marquee-left">
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-8 text-xs sm:text-sm font-mono tracking-widest uppercase font-semibold text-neutral-300"
          >
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c49a45]" />
          </div>
        ))}
      </MarqueeTrack>
    </section>
  );
}
