import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

export default function DropCountdown() {
  return (
    <section className="border-t border-neutral-800 bg-gradient-to-b from-[#0d0d0f] via-neutral-950 to-[#0d0d0f] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c49a45]/30 bg-[#c49a45]/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-[#e6b95d]">
            <Sparkles className="h-3.5 w-3.5 text-[#c49a45]" />
            <span>The next release</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mx-auto max-w-3xl text-3xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
            Made with intent.
            <span className="mt-1 block font-editorial-italic font-normal text-[#e8c373]">
              Coming soon.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light text-neutral-400 sm:text-base">
            We are working on the next limited release. Explore the current
            collection while it takes shape.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/drop"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-black shadow-xl transition-all hover:bg-neutral-200 active:scale-[0.98] sm:w-auto"
            >
              <span>Explore what&apos;s next</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/shop"
              className="inline-flex w-full items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-neutral-300 transition-all hover:bg-neutral-800 hover:text-white sm:w-auto"
            >
              Shop the collection
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
