import React from "react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import Reveal from "@/components/motion/Reveal";

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-[#09090b] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <Reveal>
            <span className="text-xs font-mono uppercase tracking-widest text-[#c49a45]">
              Customer Dialogue
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-2">
              Worn by the <span className="font-editorial-italic font-normal text-[#e8c373]">Discerning</span> Few.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-sm text-neutral-400 font-light">
              Real feedback from creatives, stylists, and collectors across Pakistan.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.1}>
              <div className="h-full p-8 sm:p-10 rounded-3xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 transition-colors">
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-[#c49a45]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-base sm:text-lg text-neutral-200 font-light leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                      {item.author}
                    </h4>
                    <p className="text-xs text-neutral-500 font-mono mt-0.5">
                      {item.role} • {item.city}
                    </p>
                  </div>

                  <span className="text-[11px] font-mono text-[#c49a45] bg-[#c49a45]/10 px-3 py-1 rounded-full border border-[#c49a45]/20">
                    {item.product}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
