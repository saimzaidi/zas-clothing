"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";
import { siteConfig } from "@/lib/config";
import Reveal from "@/components/motion/Reveal";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function DropCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 3,
    hours: 14,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const target = new Date(siteConfig.drop.targetDate).getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINS", value: timeLeft.minutes },
    { label: "SECS", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#0d0d0f] via-neutral-950 to-[#0d0d0f] border-t border-neutral-800">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#c49a45]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c49a45]/10 border border-[#c49a45]/30 text-[#e6b95d] text-xs font-mono tracking-widest uppercase mb-6">
            <Flame className="w-3.5 h-3.5 text-[#c49a45]" />
            <span>LIMITED PRODUCTION DROP</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white max-w-3xl mx-auto">
            {siteConfig.drop.title}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light max-w-xl mx-auto">
            {siteConfig.drop.subtitle}. Once this limited allocation sells through, these silhouettes enter our permanent archive.
          </p>
        </Reveal>

        {/* Countdown units */}
        <Reveal delay={0.3}>
          <div className="flex items-center justify-center gap-3 sm:gap-6 my-10 sm:my-14">
            {timeBlocks.map((block) => (
              <div
                key={block.label}
                className="w-20 sm:w-28 p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-neutral-900/90 border border-neutral-800 backdrop-blur-md shadow-xl flex flex-col items-center"
              >
                <span className="text-2xl sm:text-4xl md:text-5xl font-black font-mono text-white">
                  {String(block.value).padStart(2, "0")}
                </span>
                <span className="text-[9px] sm:text-[11px] font-mono tracking-widest uppercase text-neutral-400 mt-1">
                  {block.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/shop?isDrop=true"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-xl active:scale-[0.98]"
            >
              <span>Claim Drop Silhouette</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/shop"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 font-semibold text-xs uppercase tracking-widest hover:text-white hover:bg-neutral-800 transition-all active:scale-[0.98]"
            >
              <span>Browse All (12 Pieces)</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
