"use client";

import React, { useState, useMemo } from "react";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";
import { faqs, FAQItem } from "@/data/faq";
import { siteConfig } from "@/lib/config";
import Reveal from "@/components/motion/Reveal";

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openIds, setOpenIds] = useState<string[]>([faqs[0].id, faqs[1].id]);
  const [search, setSearch] = useState("");

  const categories = ["All", "Ordering & WhatsApp", "Sizing & Fit", "Shipping & Delivery", "Care & Fabric"];

  const toggleAccordion = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchCategory = selectedCategory === "All" || faq.category === selectedCategory;
      const matchSearch =
        search.trim() === "" ||
        faq.question.toLowerCase().includes(search.toLowerCase()) ||
        faq.answer.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, search]);

  return (
    <div className="pt-28 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4 pb-12 border-b border-neutral-800">
        <Reveal>
          <span className="text-xs font-mono uppercase tracking-widest text-[#c49a45]">
            Knowledge Base // Atelier Q&A
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            Frequently <span className="font-editorial-italic font-normal text-[#e8c373]">Asked.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Everything you need to know about our heavyweight 280 GSM cotton, architectural drop shoulder tailoring, and instant WhatsApp ordering.
          </p>
        </Reveal>
      </div>

      {/* Category Pills */}
      <div className="py-8 flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
              selectedCategory === cat
                ? "bg-white text-black font-bold shadow-md"
                : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-4 pt-2">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 text-neutral-400 text-sm">
            No questions match your filter. Feel free to contact our WhatsApp concierge directly.
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="rounded-3xl bg-[#111114] border border-neutral-800/80 overflow-hidden transition-colors hover:border-neutral-700"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#c49a45] block">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 text-neutral-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm text-neutral-300 font-light leading-relaxed border-t border-neutral-800/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still Have Questions CTA */}
      <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-neutral-900/60 border border-neutral-800 text-center space-y-4">
        <HelpCircle className="w-8 h-8 text-[#c49a45] mx-auto" />
        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
          Still Have Questions?
        </h3>
        <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-md mx-auto">
          Our verified concierge desk is online daily from 10 AM to 10 PM PKT to assist you with live sizing advice and order queries.
        </p>
        <div className="pt-2">
          <a
            href={siteConfig.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#20ba59] transition-all shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
