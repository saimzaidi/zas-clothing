"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/format";
import { siteConfig } from "@/lib/config";
import { useHydrated } from "@/hooks/useHydrated";

export default function CartDrawer() {
  const isHydrated = useHydrated();
  const {
    isDrawerOpen,
    closeDrawer,
    getPopulatedItems,
    updateQuantity,
    removeItem,
    getSubtotal,
    getItemCount,
  } = useCartStore();

  const items = isHydrated ? getPopulatedItems() : [];
  const subtotal = isHydrated ? getSubtotal() : 0;
  const itemCount = isHydrated ? getItemCount() : 0;

  const freeShippingThreshold = siteConfig.shipping.freeShippingThreshold;
  const progressToFreeShipping = Math.min(
    100,
    Math.round((subtotal / freeShippingThreshold) * 100)
  );
  const remainingForFree = Math.max(0, freeShippingThreshold - subtotal);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isDrawerOpen) {
        closeDrawer();
      }
    };

    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDrawerOpen, closeDrawer]);

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            onClick={closeDrawer}
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-screen max-w-md bg-[#111114] border-l border-neutral-800 text-white flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-5 h-5 text-[#c49a45]" />
                  <h2 className="text-base font-bold tracking-wider uppercase">
                    Your Bag ({itemCount})
                  </h2>
                </div>
                <button
                  onClick={closeDrawer}
                  className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free Shipping Progress */}
              <div className="px-6 py-3 bg-neutral-900/80 border-b border-neutral-800 text-xs">
                {subtotal >= freeShippingThreshold ? (
                  <p className="text-emerald-400 font-medium">
                    ✓ You qualify for <span className="font-bold">Free Nationwide Shipping</span>!
                  </p>
                ) : (
                  <div>
                    <p className="text-neutral-300">
                      Add <span className="font-semibold text-white">{formatPrice(remainingForFree)}</span> more for Free Shipping
                    </p>
                    <div className="w-full bg-neutral-800 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div
                        className="bg-[#c49a45] h-full transition-all duration-300"
                        style={{ width: `${progressToFreeShipping}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {items.length === 0 ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto text-neutral-500">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-medium text-white">Your bag is empty</p>
                      <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                        Explore our heavyweight drop shoulder collection and find your silhouette.
                      </p>
                    </div>
                    <Link
                      href="/shop"
                      onClick={closeDrawer}
                      className="inline-block mt-4 text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors"
                    >
                      Shop Collection
                    </Link>
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={`${item.productId}-${item.color}-${item.size}`}
                      className="flex gap-4 p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700/80 transition-all"
                    >
                      <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-neutral-950 shrink-0">
                        <Image
                          src={item.selectedImage || item.product.images[0]}
                          alt={item.product.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="text-sm font-semibold text-white truncate">
                              <Link
                                href={`/product/${item.product.slug}`}
                                onClick={closeDrawer}
                                className="hover:underline"
                              >
                                {item.product.name}
                              </Link>
                            </h3>
                            <button
                              onClick={() => removeItem(item.productId, item.color, item.size)}
                              className="text-neutral-500 hover:text-red-400 p-1"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="flex items-center gap-2 mt-1 text-xs text-neutral-400">
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
                            <span>Size: {item.size}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-neutral-700 rounded-lg bg-neutral-950">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.productId,
                                  item.color,
                                  item.size,
                                  item.quantity - 1
                                )
                              }
                              className="p-1.5 hover:text-white text-neutral-400"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs font-semibold">{item.quantity}</span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.productId,
                                  item.color,
                                  item.size,
                                  item.quantity + 1
                                )
                              }
                              className="p-1.5 hover:text-white text-neutral-400"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="text-sm font-bold text-white">
                            {formatPrice(item.subtotal)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Summary & Actions */}
              {items.length > 0 && (
                <div className="p-6 border-t border-neutral-800 bg-[#0d0d0f] space-y-4">
                  <div className="space-y-1.5 text-xs text-neutral-400">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-white font-semibold">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-white">
                        {subtotal >= freeShippingThreshold ? (
                          <span className="text-emerald-400 uppercase font-semibold">Free</span>
                        ) : (
                          formatPrice(siteConfig.shipping.standardRate)
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-neutral-800 flex justify-between items-baseline">
                    <span className="text-sm font-bold uppercase tracking-wider text-white">
                      Estimated Total
                    </span>
                    <span className="text-lg font-bold text-white">
                      {formatPrice(
                        subtotal +
                          (subtotal >= freeShippingThreshold
                            ? 0
                            : siteConfig.shipping.standardRate)
                      )}
                    </span>
                  </div>

                  <div className="space-y-2 pt-2">
                    <Link
                      href="/cart"
                      onClick={closeDrawer}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-md active:scale-[0.98]"
                    >
                      Proceed to WhatsApp Checkout
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <button
                      onClick={closeDrawer}
                      className="w-full py-2.5 text-center text-xs uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
