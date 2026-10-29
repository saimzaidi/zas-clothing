import React from "react";

interface SwatchProps {
  color: string;
  name: string;
  isSelected?: boolean;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

export function Swatch({
  color,
  name,
  isSelected,
  onClick,
  size = "md",
}: SwatchProps) {
  const sizeMap = {
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-7 h-7",
  };

  return (
    <button
      type="button"
      title={name}
      onClick={onClick}
      className={`group relative rounded-full p-0.5 transition-all duration-200 focus:outline-none ${
        isSelected
          ? "ring-2 ring-white ring-offset-2 ring-offset-[#0d0d0f] scale-110"
          : "hover:scale-110 ring-1 ring-white/20"
      }`}
      aria-label={`Select color ${name}`}
      aria-pressed={isSelected}
    >
      <span
        className={`block rounded-full border border-black/20 ${sizeMap[size]}`}
        style={{ backgroundColor: color }}
      />
    </button>
  );
}
