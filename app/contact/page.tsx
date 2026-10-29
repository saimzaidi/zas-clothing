"use client";

import React, { useState } from "react";
import { MessageCircle, Mail, Clock, MapPin, Send, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";
import Reveal from "@/components/motion/Reveal";
import { Input } from "@/components/ui/Input";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "Size & Styling Recommendation",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(
      `Hello ${siteConfig.name} Atelier,\n\n👤 *Name:* ${form.name}\n📱 *Contact:* ${form.phone}\n📌 *Subject:* ${form.subject}\n\n💬 *Inquiry:*\n${form.message}\n\nPlease advise at your earliest convenience.`
    );
    const phone = siteConfig.whatsapp.number.replace(/\D/g, "");
    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4 pb-12 border-b border-neutral-800">
        <Reveal>
          <span className="text-xs font-mono uppercase tracking-widest text-[#c49a45]">
            Client Relations // Studio Desk
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            Connect with <span className="font-editorial-italic font-normal text-[#e8c373]">Us.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Have questions regarding drop shoulder fit, order tracking, or styling? Our concierge team is available directly over WhatsApp and email.
          </p>
        </Reveal>
      </div>

      <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Contact Info Channels */}
        <div className="lg:col-span-5 space-y-6">
          {/* WhatsApp Primary Card */}
          <Reveal delay={0.1}>
            <div className="p-8 rounded-3xl bg-neutral-900/80 border border-neutral-800 hover:border-[#25D366]/40 transition-colors space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 font-semibold block">
                  Instant Response
                </span>
                <h3 className="text-xl font-bold uppercase tracking-tight text-white mt-1">
                  WhatsApp Concierge
                </h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Fastest way to verify sizes, check order statuses, or place bespoke batch requests.
                </p>
              </div>

              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3.5 px-6 rounded-full bg-[#25D366] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#20ba59] transition-all shadow-lg shadow-[#25D366]/20"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>

          {/* Studio Hours & Email */}
          <Reveal delay={0.2}>
            <div className="p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 space-y-6 text-xs text-neutral-400">
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-[#c49a45] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold uppercase font-mono">Operating Hours</h4>
                  <p className="mt-1">Monday – Saturday: 10:00 AM – 10:00 PM PKT</p>
                  <p>Sunday: Dispatch verification & WhatsApp support</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-neutral-800">
                <Mail className="w-5 h-5 text-[#c49a45] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold uppercase font-mono">Email Inquiries</h4>
                  <p className="mt-1 text-neutral-300">concierge@zasclothing.com</p>
                  <p className="text-[11px] text-neutral-500">Typical response within 3 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-neutral-800">
                <MapPin className="w-5 h-5 text-[#c49a45] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold uppercase font-mono">Design Studio & Fulfillment</h4>
                  <p className="mt-1">Clifton, Karachi</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: Direct Inquiry Form */}
        <div className="lg:col-span-7">
          <Reveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-[#111114] border border-neutral-800 space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Fill in your details and we will formulate an instant WhatsApp inquiry message.
                </p>
              </div>

              <div className="space-y-4">
                <Input
                  label="Your Name"
                  required
                  placeholder="e.g. Zainab Malik"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <Input
                  label="WhatsApp Number / Phone"
                  required
                  placeholder="e.g. 0300 1234567"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-neutral-400 mb-1.5">
                    Inquiry Subject
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-neutral-500 cursor-pointer"
                  >
                    <option>Size & Fit Recommendation</option>
                    <option>Order Tracking & Dispatch Query</option>
                    <option>7-Day Exchange Request</option>
                    <option>Styling & Upcoming Releases</option>
                    <option>Other Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-neutral-400 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you need help with..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-neutral-900 text-white placeholder-neutral-500 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-xl active:scale-[0.98]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send via WhatsApp Concierge</span>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
