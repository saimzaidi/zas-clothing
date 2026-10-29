import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Layers, MessageCircle, ShieldCheck, Shirt, Sparkles } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About ZAS Clothing",
  description: "Learn about ZAS Clothing and our everyday t-shirt collection.",
};

export default function AboutPage() {
  const pillars = [
    {
      icon: Shirt,
      title: "Everyday T-Shirts",
      description: "Simple tees for daily plans, outings, and time at home.",
    },
    {
      icon: Layers,
      title: "Relaxed Fits",
      description: "Easy-to-wear styles with room to move.",
    },
    {
      icon: Compass,
      title: "Easy-to-Wear Colors",
      description: "Choose shades that work with clothes you already own.",
    },
    {
      icon: ShieldCheck,
      title: "Clear Size Guide",
      description: "Check the size guide to choose the fit that works for you.",
    },
    {
      icon: Sparkles,
      title: "Simple Styles",
      description: "Find plain and graphic tees that are easy to style.",
    },
    {
      icon: MessageCircle,
      title: "Easy WhatsApp Orders",
      description: "Choose a tee and place your order through WhatsApp.",
    },
  ];

  return (
    <div className="about-page pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Editorial Header */}
      <div className="about-intro max-w-4xl space-y-6 pb-16 border-b border-neutral-800">
        <Reveal>
          <span className="text-xs font-mono uppercase tracking-widest text-[#c49a45]">
            ABOUT ZAS CLOTHING
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
            Everyday T-Shirts. <br />
            Easy to <span className="font-editorial-italic font-normal text-[#e8c373]">Wear.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-base sm:text-xl text-neutral-300 font-light leading-relaxed max-w-2xl">
            ZAS makes simple t-shirts for everyday plans, with relaxed fits and easy-to-wear styles.
          </p>
        </Reveal>
      </div>

      {/* Narrative Section with Editorial Image */}
      <div className="py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="about-story-copy lg:col-span-6 space-y-6">
          <Reveal>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              01 // WHY WE STARTED
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white mt-2">
              T-Shirts for Everyday Life.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              We started ZAS to make t-shirts that are simple to choose and comfortable to wear.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              From plain tees to graphic styles, our collection is made for everyday outfits.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={0.2}>
            <div className="about-story-photo relative aspect-[5/4] rounded-2xl overflow-hidden border">
              <Image
                src="https://images.unsplash.com/photo-1513188447171-ecf00455f051?q=85&w=1200&auto=format&fit=crop"
                alt="Two people wearing relaxed graphic t-shirts"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* What matters to us */}
      <div className="about-standards py-20 border-t">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <span className="about-standards-eyebrow text-xs font-mono uppercase tracking-widest">
              What We Care About
            </span>
            <h2 className="about-standards-title text-3xl sm:text-4xl font-black tracking-tight mt-1">
              Good T-Shirts, <span className="font-editorial-italic font-normal">Made Simple.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {pillars.map((pillar, idx) => (
            <Reveal key={pillar.title} delay={idx * 0.1}>
              <div className="about-standard-card p-6 sm:p-7 rounded-2xl border h-full">
                <div className="space-y-4">
                  <div className="about-standard-icon w-11 h-11 rounded-xl flex items-center justify-center">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="about-standard-description text-sm leading-relaxed">
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
        <div className="about-collection-cta mt-16 p-8 sm:p-14 rounded-3xl border text-center space-y-6">
          <span className="about-cta-eyebrow text-xs font-mono uppercase tracking-widest">
            THE COLLECTION
          </span>
          <h3 className="about-cta-title text-3xl sm:text-5xl font-black tracking-tight">
            Find a T-Shirt You Like.
          </h3>
          <div className="pt-2">
            <Link
              href="/shop"
              className="about-cta-button inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all"
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
