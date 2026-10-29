import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "outline" | "subtle";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "sm",
  className = "",
}: BadgeProps) {
  const base =
    "inline-flex items-center uppercase font-mono tracking-wider font-semibold rounded-full";

  const sizeStyles = {
    sm: "text-[10px] px-2.5 py-0.5",
    md: "text-xs px-3 py-1",
  };

  const variantStyles = {
    default: "bg-white text-black",
    gold: "bg-[#c49a45]/20 text-[#e6b95d] border border-[#c49a45]/40",
    outline: "border border-neutral-700 text-neutral-300 bg-neutral-900/50",
    subtle: "bg-neutral-800 text-neutral-300",
  };

  return (
    <span
      className={`${base} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
