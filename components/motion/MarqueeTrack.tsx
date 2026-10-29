"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MarqueeTrackProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speedClass?: string;
  className?: string;
}

export default function MarqueeTrack({
  children,
  direction = "left",
  speedClass = "animate-marquee-left",
  className = "",
}: MarqueeTrackProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <div className={`overflow-x-auto whitespace-nowrap py-3 ${className}`}>
        {children}
      </div>
    );
  }

  const anim = direction === "right" ? "animate-marquee-right" : speedClass;

  return (
    <div className={`relative flex overflow-x-hidden ${className}`}>
      <div className={`flex min-w-full shrink-0 items-center justify-around gap-8 ${anim}`}>
        {children}
      </div>
      <div
        aria-hidden="true"
        className={`flex min-w-full shrink-0 items-center justify-around gap-8 ${anim}`}
      >
        {children}
      </div>
    </div>
  );
}
