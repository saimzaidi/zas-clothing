"use client";

import React from "react";
import { ArrowUpDown } from "lucide-react";

export type SortOption = "featured" | "price-low" | "price-high" | "newest" | "name";

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <div className="relative inline-flex items-center">
      <ArrowUpDown className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400 pointer-events-none" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="appearance-none bg-neutral-900 border border-neutral-800 text-white rounded-full pl-9 pr-8 py-2.5 text-xs font-mono uppercase tracking-wider focus:outline-none focus:border-neutral-500 cursor-pointer transition-colors"
      >
        <option value="featured">Sort: Featured</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="newest">Newest Arrivals</option>
        <option value="name">Name (A-Z)</option>
      </select>
    </div>
  );
}
