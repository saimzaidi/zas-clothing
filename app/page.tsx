import React from "react";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import FeaturedGrid from "@/components/home/FeaturedGrid";
import BentoValues from "@/components/home/BentoValues";
import Lookbook from "@/components/home/Lookbook";
import Testimonials from "@/components/home/Testimonials";
import DropCountdown from "@/components/home/DropCountdown";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Marquee />
      <FeaturedGrid />
      <BentoValues />
      <Lookbook />
      <Testimonials />
      <DropCountdown />
    </div>
  );
}
