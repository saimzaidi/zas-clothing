"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import Reveal from "@/components/motion/Reveal";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-copy">
          <Reveal delay={0.1}>
            <p className="hero-eyebrow">ZAS CLOTHING &nbsp; / &nbsp; EVERYDAY ESSENTIALS</p>
          </Reveal>

          <Reveal delay={0.2}>
            <h1>
              Made to move.
              <br />
              Made to <span className="font-editorial-italic">wear.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="hero-description">
              Everyday comfort, considered details, and a fit that feels like you. Find your next favourite in the ZAS collection.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="hero-actions">
              <Link href="/shop" className="hero-cta hero-cta-primary">
                <span>Shop collection</span>
                <ArrowRight aria-hidden="true" />
              </Link>
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta hero-cta-secondary"
              >
                <MessageCircle aria-hidden="true" />
                <span>Chat with us</span>
              </a>
            </div>
          </Reveal>
        </div>

        <div className="hero-visual">
          <Reveal delay={0.3} yOffset={24}>
            <div className="hero-photo">
              <Image
                src="https://images.unsplash.com/photo-1678892538101-73ff0e531145?auto=format&fit=crop&fm=jpg&q=80&w=1400"
                alt="Model in a green plaid jacket outdoors in warm afternoon light"
                fill
                priority
                unoptimized
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
