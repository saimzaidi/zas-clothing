"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";

interface GalleryProps {
  images: string[];
  productName: string;
}

export default function Gallery({ images, productName }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const activeImage = images[selectedIndex] || images[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0 shrink-0">
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSelectedIndex(idx)}
            className={`relative w-16 h-20 sm:w-20 sm:h-24 rounded-2xl overflow-hidden bg-neutral-900 border transition-all shrink-0 ${
              selectedIndex === idx
                ? "border-white ring-2 ring-white/20 scale-102"
                : "border-neutral-800 opacity-60 hover:opacity-100"
            }`}
            aria-label={`View image ${idx + 1}`}
          >
            <Image
              src={img}
              alt={`${productName} thumbnail ${idx + 1}`}
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image with Zoom Container */}
      <div
        className="relative flex-1 aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 group cursor-crosshair select-none"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <Image
          src={activeImage}
          alt={productName}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-transform duration-300 ${
            isZoomed ? "scale-150" : "scale-100"
          }`}
          style={
            isZoomed
              ? {
                  transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                }
              : undefined
          }
        />

        {/* Ambient hint pill */}
        <div className="absolute bottom-4 right-4 z-10 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5 pointer-events-none opacity-80 group-hover:opacity-0 transition-opacity">
          <ZoomIn className="w-3.5 h-3.5 text-[#c49a45]" />
          <span>Hover to Zoom</span>
        </div>
      </div>
    </div>
  );
}
