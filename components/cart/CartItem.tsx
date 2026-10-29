"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Minus, Trash2 } from "lucide-react";
import { PopulatedCartItem } from "@/types/cart";
import { formatPrice } from "@/lib/format";

interface CartItemProps {
  item: PopulatedCartItem;
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
}

export default function CartItemRow({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  const stockKey = `${item.color}-${item.size}`;
  const maxStock = item.product.stock[stockKey] ?? 0;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700/80 transition-all">
      <div className="flex items-center gap-4 min-w-0">
        {/* Product Image */}
        <div className="relative w-20 h-24 rounded-2xl overflow-hidden bg-neutral-950 shrink-0 border border-neutral-800">
          <Image
            src={item.selectedImage || item.product.images[0]}
            alt={item.product.name}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-1 min-w-0">
          <h3 className="text-sm sm:text-base font-semibold text-white truncate">
            <Link
              href={`/product/${item.product.slug}`}
              className="hover:text-[#c49a45] transition-colors"
            >
              {item.product.name}
            </Link>
          </h3>

          <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
            <span className="flex items-center gap-1.5">
              {item.selectedColorHex && (
                <span
                  className="w-2.5 h-2.5 rounded-full inline-block border border-neutral-600"
                  style={{ backgroundColor: item.selectedColorHex }}
                />
              )}
              {item.color}
            </span>
            <span>•</span>
            <span className="px-1.5 py-0.5 rounded bg-neutral-800 border border-neutral-700/60 text-white font-bold">
              Size: {item.size}
            </span>
          </div>

          <div className="text-xs text-neutral-400 font-mono">
            Unit Price: {formatPrice(item.product.price)}
          </div>
        </div>
      </div>

      {/* Quantity & Line Total */}
      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-800">
        {/* Quantity Controls */}
        <div className="flex items-center border border-neutral-700 rounded-xl bg-neutral-950">
          <button
            type="button"
            onClick={() => onUpdateQuantity(item.quantity - 1)}
            disabled={item.quantity <= 1}
            className="p-2 hover:text-white text-neutral-400 disabled:opacity-30"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="px-3 text-xs font-mono font-bold text-white">
            {item.quantity}
          </span>
          <button
            type="button"
            onClick={() => onUpdateQuantity(item.quantity + 1)}
            disabled={item.quantity >= maxStock}
            className="p-2 hover:text-white text-neutral-400 disabled:opacity-30"
            aria-label="Increase quantity"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Subtotal */}
        <div className="text-right min-w-[90px]">
          <span className="text-base font-bold text-white tracking-wide block">
            {formatPrice(item.subtotal)}
          </span>
        </div>

        {/* Delete */}
        <button
          type="button"
          onClick={onRemove}
          className="p-2 text-neutral-500 hover:text-red-400 transition-colors"
          aria-label="Remove item"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
