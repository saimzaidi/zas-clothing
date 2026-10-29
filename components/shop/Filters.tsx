"use client";

import React from "react";
import { Filter, X, RotateCcw } from "lucide-react";
import { ProductSize } from "@/types/product";
import { Swatch } from "@/components/ui/Swatch";

export interface FilterState {
  size: ProductSize | "all";
  color: string;
  maxPrice: number;
  tag: string;
}

interface FiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onReset: () => void;
  availableColors: { name: string; hex: string }[];
  availableSizes: ProductSize[];
  minPrice: number;
  maxCatalogPrice: number;
  totalFiltered: number;
}

export default function Filters({
  filters,
  onChange,
  onReset,
  availableColors,
  availableSizes,
  minPrice,
  maxCatalogPrice,
  totalFiltered,
}: FiltersProps) {
  const isFiltered =
    filters.size !== "all" ||
    filters.color !== "" ||
    filters.maxPrice < maxCatalogPrice ||
    filters.tag !== "";

  return (
    <div className="space-y-6 p-6 rounded-3xl bg-[#111114] border border-neutral-800 text-white">
      <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#c49a45]" />
          <h3 className="text-xs font-mono uppercase tracking-widest font-semibold text-white">
            Filter Garments
          </h3>
          <span className="text-xs font-mono text-neutral-400">({totalFiltered})</span>
        </div>

        {isFiltered && (
          <button
            onClick={onReset}
            className="flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            Reset
          </button>
        )}
      </div>

      {/* Size Filter */}
      <div className="space-y-2.5">
        <label className="block text-xs uppercase tracking-wider font-mono text-neutral-400">
          Size
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onChange({ ...filters, size: "all" })}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase transition-colors ${
              filters.size === "all"
                ? "bg-white text-black font-bold"
                : "bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-neutral-700"
            }`}
          >
            All
          </button>
          {availableSizes.map((size) => (
            <button
              key={size}
              onClick={() => onChange({ ...filters, size })}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase transition-colors ${
                filters.size === size
                  ? "bg-white text-black font-bold"
                  : "bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-neutral-700"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <label className="block text-xs uppercase tracking-wider font-mono text-neutral-400">
            Color Palette
          </label>
          {filters.color && (
            <span className="text-[11px] font-mono text-[#c49a45]">{filters.color}</span>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          {availableColors.map((color) => (
            <Swatch
              key={color.name}
              color={color.hex}
              name={color.name}
              isSelected={filters.color === color.name}
              onClick={() =>
                onChange({
                  ...filters,
                  color: filters.color === color.name ? "" : color.name,
                })
              }
              size="md"
            />
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
          <span>Max Price</span>
          <span className="text-white font-semibold">
            Rs. {filters.maxPrice.toLocaleString()}
          </span>
        </div>
        <input
          type="range"
          min={minPrice}
          max={maxCatalogPrice}
          step={50}
          value={filters.maxPrice}
          onChange={(e) =>
            onChange({ ...filters, maxPrice: Number(e.target.value) })
          }
          className="w-full accent-[#c49a45] bg-neutral-800 h-1.5 rounded-lg cursor-pointer"
        />
        <div className="flex justify-between text-[10px] font-mono text-neutral-500">
          <span>Rs. {minPrice.toLocaleString()}</span>
          <span>Rs. {maxCatalogPrice.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
