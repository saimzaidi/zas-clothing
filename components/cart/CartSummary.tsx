import React from "react";
import { formatPrice } from "@/lib/format";
import { siteConfig } from "@/lib/config";
import { ShieldCheck, Package } from "lucide-react";

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
  itemCount: number;
}

export default function CartSummary({
  subtotal,
  shipping,
  total,
  itemCount,
}: CartSummaryProps) {
  const freeThreshold = siteConfig.shipping.freeShippingThreshold;
  const progress = Math.min(100, Math.round((subtotal / freeThreshold) * 100));
  const remainingForFree = Math.max(0, freeThreshold - subtotal);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-[#111114] border border-neutral-800 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
        <h3 className="text-sm font-mono uppercase tracking-widest font-bold text-white">
          Order Summary
        </h3>
        <span className="text-xs font-mono text-neutral-400">
          {itemCount} {itemCount === 1 ? "Item" : "Items"}
        </span>
      </div>

      {/* Free Shipping Alert */}
      <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800/80 text-xs">
        {subtotal >= freeThreshold ? (
          <p className="text-emerald-400 font-medium">
            ✓ Free Nationwide Delivery Applied
          </p>
        ) : (
          <div className="space-y-2">
            <p className="text-neutral-300">
              Add <strong className="text-white">{formatPrice(remainingForFree)}</strong> more to unlock Free Nationwide Delivery
            </p>
            <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#c49a45] h-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Cost Breakdown */}
      <div className="space-y-3 text-xs text-neutral-400">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="text-white font-mono font-semibold">
            {formatPrice(subtotal)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Nationwide Courier</span>
          <span className="text-white font-mono">
            {shipping === 0 ? (
              <span className="text-emerald-400 uppercase font-semibold">Free</span>
            ) : (
              formatPrice(shipping)
            )}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Packaging</span>
          <span className="text-neutral-300 font-mono">ZAS Archival Box (Free)</span>
        </div>
      </div>

      {/* Grand Total */}
      <div className="pt-4 border-t border-neutral-800 flex justify-between items-baseline">
        <div>
          <span className="text-sm font-bold uppercase tracking-wider text-white block">
            Grand Total
          </span>
          <span className="text-[10px] text-neutral-400 font-mono">
            All taxes included • Payable via COD or Bank Transfer
          </span>
        </div>
        <span className="text-xl sm:text-2xl font-black text-white font-mono">
          {formatPrice(total)}
        </span>
      </div>

      <div className="pt-2 flex items-center gap-2.5 text-[11px] text-neutral-400">
        <ShieldCheck className="w-4 h-4 text-[#c49a45] shrink-0" />
        <span>Pre-inspected garment dispatch with 7-day exchange window.</span>
      </div>
    </div>
  );
}
