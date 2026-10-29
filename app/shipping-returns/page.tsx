import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Truck, RefreshCw, ShieldCheck, CheckCircle2, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Shipping & Returns Policy — ZAS Clothing",
  description:
    "Nationwide express courier dispatch timelines, Cash on Delivery details, and 7-day exchange policies for ZAS Clothing.",
};

export default function ShippingReturnsPage() {
  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4 pb-12 border-b border-neutral-800">
        <Reveal>
          <span className="text-xs font-mono uppercase tracking-widest text-[#c49a45]">
            Customer Assurance & Policies
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            Shipping & <span className="font-editorial-italic font-normal text-[#e8c373]">Returns.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Transparent, customer-centric fulfillment from Karachi. Every garment is inspected and packed before dispatch.
          </p>
        </Reveal>
      </div>

      <div className="py-12 space-y-16">
        {/* Shipping Overview */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#c49a45]/20 text-[#c49a45] flex items-center justify-center">
              <Truck className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white">
              Nationwide Delivery Timelines & Rates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 space-y-3">
              <h3 className="text-base font-bold text-white uppercase font-mono">
                Major Metropolitan Hubs
              </h3>
              <p className="text-2xl font-black text-white font-mono">2–3 Days</p>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Karachi orders receive prioritized courier transit with next-day dispatch.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 space-y-3">
              <h3 className="text-base font-bold text-white uppercase font-mono">
                All Other Cities
              </h3>
              <p className="text-2xl font-black text-white font-mono">3–5 Days</p>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Express insured door-to-door transit for all regional districts and suburban hubs nationwide.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 space-y-3">
              <h3 className="text-base font-bold text-white uppercase font-mono">
                Courier Rates
              </h3>
              <p className="text-2xl font-black text-white font-mono">
                FREE <span className="text-xs text-neutral-400 font-normal">over Rs. 5,000</span>
              </p>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Standard flat courier fee of Rs. 250 applies on orders below Rs. 5,000. Free on all orders containing 2 or more tees.
              </p>
            </div>
          </div>
        </section>

        {/* 7-Day Exchange Policy */}
        <section className="space-y-6 pt-12 border-t border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-800 text-white flex items-center justify-center">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white">
              7-Day Hassle-Free Exchange Policy
            </h2>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#111114] border border-neutral-800 space-y-6">
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              We stand firmly behind the tailoring and fit of every silhouette. If you need a different size or notice any manufacturing anomaly, we offer a straightforward 7-day exchange window from the date of parcel receipt.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-neutral-800/80">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#c49a45] uppercase">Step 01</span>
                <h4 className="text-sm font-bold text-white uppercase">Contact Concierge</h4>
                <p className="text-xs text-neutral-400 font-light">
                  Message our WhatsApp desk with your Order Reference Number and preferred exchange size.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#c49a45] uppercase">Step 02</span>
                <h4 className="text-sm font-bold text-white uppercase">Parcel Verification</h4>
                <p className="text-xs text-neutral-400 font-light">
                  Ensure the tee is unworn, unwashed, with the original swing tags and archival box intact.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#c49a45] uppercase">Step 03</span>
                <h4 className="text-sm font-bold text-white uppercase">Replacement Dispatch</h4>
                <p className="text-xs text-neutral-400 font-light">
                  We schedule a reverse pickup or direct replacement dispatch within 24–48 hours.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-800/80 text-xs">
              <span className="text-neutral-400">
                Ready to request a size swap? Connect directly with our team:
              </span>
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-black font-bold uppercase tracking-wider text-xs hover:bg-[#20ba59] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Open WhatsApp Exchange Desk</span>
              </a>
            </div>
          </div>
        </section>

        {/* Accepted Payment Methods */}
        <section className="space-y-6 pt-12 border-t border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-800 text-[#c49a45] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white">
              Payment Flexibility
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 space-y-2">
              <h4 className="text-sm font-bold uppercase text-white font-mono">Cash on Delivery (COD)</h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Pay in cash directly to the courier rider upon package handoff at your doorstep in Karachi.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 space-y-2">
              <h4 className="text-sm font-bold uppercase text-white font-mono">Raast / Instant Bank</h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Direct zero-fee Raast ID or IBAN bank transfer with instant payment proof verification over WhatsApp.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 space-y-2">
              <h4 className="text-sm font-bold uppercase text-white font-mono">JazzCash & Easypaisa</h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Mobile wallet payments verified immediately during order processing.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
