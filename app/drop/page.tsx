import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "The Drop — Coming Soon",
  description:
    "The next limited ZAS Clothing release is in development. Explore the current collection while you wait.",
};

export default function DropPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
      <section className="relative isolate overflow-hidden rounded-[2rem] border border-neutral-800 bg-[#111114] px-6 py-16 sm:px-12 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full bg-[#c49a45]/10 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-48 -left-24 -z-10 h-96 w-96 rounded-full bg-neutral-700/20 blur-[120px]"
        />

        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#c49a45]/30 bg-[#c49a45]/10 px-4 py-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#e8c373] sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Next release in development</span>
            </div>

            <h1 className="text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
              The Drop
              <span className="mt-2 block font-editorial-italic font-normal text-[#e8c373]">
                is coming soon.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-neutral-400 sm:text-base">
              We are shaping the next limited release with the same focus on
              fabric, fit, and finish. It will be here when it is ready.
            </p>

            <Link
              href="/shop"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-neutral-200"
            >
              Shop the current collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
