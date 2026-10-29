import React from "react";
import Hero from "@/components/home/Hero";
import FeaturedGrid from "@/components/home/FeaturedGrid";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedGrid />
    </div>
  );
}
