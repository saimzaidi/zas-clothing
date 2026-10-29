"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag, ArrowLeft, Trash2, ArrowRight } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { useHydrated } from "@/hooks/useHydrated";
import { siteConfig } from "@/lib/config";
import CartItemRow from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import CheckoutForm from "@/components/cart/CheckoutForm";

export default function CartPage() {
  const isHydrated = useHydrated();
  const {
    getPopulatedItems,
    updateQuantity,
    removeItem,
    clearCart,
    getSubtotal,
    getItemCount,
  } = useCartStore();

  const items = isHydrated ? getPopulatedItems() : [];
  const subtotal = isHydrated ? getSubtotal() : 0;
  const itemCount = isHydrated ? getItemCount() : 0;

  const shipping =
    subtotal >= siteConfig.shipping.freeShippingThreshold || items.length === 0
      ? 0
      : siteConfig.shipping.standardRate;
  const total = subtotal + shipping;

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-neutral-800">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#c49a45] block">
            Review Bag
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-1">
            Shopping <span className="font-editorial-italic font-normal text-[#e8c373]">Bag.</span>
          </h1>
        </div>

        {items.length > 0 && (
          <button
            onClick={clearCart}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-red-400 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Bag</span>
          </button>
        )}
      </div>

      {/* Main Cart Content */}
      {items.length === 0 ? (
        <div className="text-center py-24 sm:py-32 px-4 rounded-3xl bg-neutral-900/30 border border-neutral-800 mt-8 space-y-6">
          <div className="w-20 h-20 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto text-neutral-500">
            <ShoppingBag className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white">
              Your bag is currently empty
            </h2>
            <p className="text-sm text-neutral-400 max-w-md mx-auto font-light leading-relaxed">
              Explore our maiden drop of 280 GSM heavyweight French terry tees engineered for architectural presence.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-xl"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
          {/* Left Column: Cart Items List */}
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-4">
              {items.map((item) => (
                <CartItemRow
                  key={`${item.productId}-${item.color}-${item.size}`}
                  item={item}
                  onUpdateQuantity={(qty) =>
                    updateQuantity(item.productId, item.color, item.size, qty)
                  }
                  onRemove={() =>
                    removeItem(item.productId, item.color, item.size)
                  }
                />
              ))}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Order Summary & Checkout Form */}
          <div className="lg:col-span-5 space-y-6">
            <CartSummary
              subtotal={subtotal}
              shipping={shipping}
              total={total}
              itemCount={itemCount}
            />

            <CheckoutForm items={items} />
          </div>
        </div>
      )}
    </div>
  );
}
