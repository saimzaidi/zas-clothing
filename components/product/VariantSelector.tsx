"use client";

import React, { useState } from "react";
import { Product, ProductSize } from "@/types/product";
import { Swatch } from "@/components/ui/Swatch";
import { formatPrice } from "@/lib/format";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";
import { useHydrated } from "@/hooks/useHydrated";
import { ShoppingBag, Heart, MessageCircle, Check, AlertCircle, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import SizeGuide from "./SizeGuide";
import { siteConfig } from "@/lib/config";
import { generateWhatsAppCheckoutUrl } from "@/lib/whatsapp";

interface VariantSelectorProps {
  product: Product;
}

export default function VariantSelector({ product }: VariantSelectorProps) {
  const isHydrated = useHydrated();
  const addItem = useCartStore((s) => s.addItem);
  const isInWishlist = useWishlistStore((s) => s.isInWishlist(product.id));
  const toggleWishlist = useWishlistStore((s) => s.toggleWishlist);

  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "");
  const [selectedSize, setSelectedSize] = useState<ProductSize>(product.sizes[0] || "M");
  const [quantity, setQuantity] = useState(1);
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [stockError, setStockError] = useState("");

  const currentStockKey = `${selectedColor}-${selectedSize}`;
  const currentAvailableStock = product.stock[currentStockKey] ?? 0;

  const handleColorChange = (colorName: string) => {
    setSelectedColor(colorName);
    setStockError("");
  };

  const handleSizeChange = (size: ProductSize) => {
    setSelectedSize(size);
    setStockError("");
  };

  const handleAddToCart = () => {
    if (currentAvailableStock <= 0) {
      setStockError("Selected size and color combination is currently sold out.");
      return;
    }

    const success = addItem({
      productId: product.id,
      color: selectedColor,
      size: selectedSize,
      quantity,
    });

    if (success) {
      setAddedSuccess(true);
      setStockError("");
      setTimeout(() => setAddedSuccess(false), 2000);
    } else {
      setStockError("Cannot add more than available stock limit.");
    }
  };

  // Direct fast WhatsApp order for this single item
  const handleInstantWhatsApp = () => {
    const colorObj = product.colors.find((c) => c.name === selectedColor);
    const directItem = {
      productId: product.id,
      color: selectedColor,
      size: selectedSize,
      quantity,
      product,
      selectedColorHex: colorObj?.hex,
      selectedImage: colorObj?.images?.[0] || product.images[0],
      subtotal: product.price * quantity,
    };

    const text = encodeURIComponent(
      `Hello ${siteConfig.name}, I want to order:\n\n• *${product.name}*\n• Color: *${selectedColor}*\n• Size: *${selectedSize}*\n• Quantity: *${quantity}*\n• Price: *${formatPrice(product.price * quantity)}*\n\nPlease confirm availability and payment details. Thank you!`
    );
    const phone = siteConfig.whatsapp.number.replace(/\D/g, "");
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <div className="space-y-8">
      {/* Product Title, Price & Badges */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {product.isDrop && (
            <span className="px-3 py-1 rounded-full bg-[#c49a45] text-black text-[10px] font-mono uppercase tracking-widest font-bold">
              Drop 01 // Limited
            </span>
          )}
          {product.isNew && !product.isDrop && (
            <span className="px-3 py-1 rounded-full bg-white text-black text-[10px] font-mono uppercase tracking-widest font-bold">
              New Arrival
            </span>
          )}
          <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-[10px] font-mono uppercase">
            280 GSM French Terry
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
          {product.name}
        </h1>

        <div className="mt-3 flex items-baseline gap-4">
          <span className="text-2xl font-bold text-white tracking-wide">
            {formatPrice(product.price)}
          </span>
          <span className="text-xs font-mono text-emerald-400">
            ✓ Taxes included • Free Shipping on orders over Rs. 5,000
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="pt-2">
        <p className="text-sm text-neutral-300 font-light leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Color Selection */}
      <div className="space-y-3 pt-4 border-t border-neutral-800">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase font-mono tracking-wider text-neutral-400">
            Selected Color: <strong className="text-white">{selectedColor}</strong>
          </span>
        </div>

        <div className="flex items-center gap-3">
          {product.colors.map((color) => (
            <Swatch
              key={color.name}
              color={color.hex}
              name={color.name}
              isSelected={selectedColor === color.name}
              onClick={() => handleColorChange(color.name)}
              size="lg"
            />
          ))}
        </div>
      </div>

      {/* Size Selection & Guide */}
      <div className="space-y-3 pt-4 border-t border-neutral-800">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase font-mono tracking-wider text-neutral-400">
            Select Size
          </span>
          <SizeGuide />
        </div>

        <div className="grid grid-cols-5 gap-2.5">
          {product.sizes.map((size) => {
            const stockForSize = product.stock[`${selectedColor}-${size}`] ?? 0;
            const isOutOfStock = stockForSize <= 0;
            const isSelected = selectedSize === size;

            return (
              <button
                key={size}
                type="button"
                disabled={isOutOfStock}
                onClick={() => handleSizeChange(size)}
                className={`py-3 rounded-2xl text-xs font-mono uppercase font-bold transition-all relative ${
                  isSelected
                    ? "bg-white text-black shadow-lg"
                    : isOutOfStock
                    ? "bg-neutral-900/40 text-neutral-600 border border-neutral-800/40 line-through cursor-not-allowed"
                    : "bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-neutral-600 hover:text-white"
                }`}
              >
                {size}
                {stockForSize > 0 && stockForSize <= 4 && (
                  <span className="absolute -top-1.5 -right-1 px-1.5 py-0.2 rounded-full bg-amber-500/90 text-black text-[9px] font-bold">
                    {stockForSize}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Stock Status Bar */}
        <div className="pt-1 flex items-center gap-2 text-xs font-mono">
          {currentAvailableStock > 5 ? (
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              In Stock — Dispatches within 24 Hours
            </span>
          ) : currentAvailableStock > 0 ? (
            <span className="text-amber-400 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              Low Stock Warning: Only {currentAvailableStock} pieces remaining in Size {selectedSize}
            </span>
          ) : (
            <span className="text-red-400 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              Sold Out in Size {selectedSize}
            </span>
          )}
        </div>
      </div>

      {/* Quantity & Action Buttons */}
      <div className="space-y-4 pt-4 border-t border-neutral-800">
        {stockError && (
          <div className="p-3 rounded-xl bg-red-950/60 border border-red-800 text-xs text-red-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>{stockError}</span>
          </div>
        )}

        <div className="flex items-center gap-4">
          {/* Quantity selector */}
          <div className="flex items-center border border-neutral-800 rounded-full bg-neutral-900 px-3 py-2">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-2 text-neutral-400 hover:text-white text-base font-bold disabled:opacity-40"
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="px-3 text-xs font-mono font-bold text-white">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity(Math.min(currentAvailableStock, quantity + 1))}
              className="px-2 text-neutral-400 hover:text-white text-base font-bold disabled:opacity-40"
              disabled={quantity >= currentAvailableStock}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          {/* Add to Bag Button */}
          <button
            type="button"
            disabled={currentAvailableStock <= 0}
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-xl active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
          >
            {addedSuccess ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag • {formatPrice(product.price * quantity)}</span>
              </>
            )}
          </button>

          {/* Wishlist Button */}
          <button
            type="button"
            onClick={() => toggleWishlist(product.id)}
            className={`p-4 rounded-full border transition-all ${
              isHydrated && isInWishlist
                ? "bg-[#c49a45] border-[#c49a45] text-black"
                : "border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-white hover:border-neutral-700"
            }`}
            aria-label="Toggle wishlist"
          >
            <Heart className={`w-5 h-5 ${isHydrated && isInWishlist ? "fill-current" : ""}`} />
          </button>
        </div>

        {/* WhatsApp Instant Checkout Button */}
        <button
          type="button"
          onClick={handleInstantWhatsApp}
          className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 font-bold text-xs uppercase tracking-widest hover:bg-[#25D366] hover:text-black transition-all active:scale-[0.98]"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Instant Order via WhatsApp Concierge</span>
        </button>
      </div>

      {/* Value Badges Accordion / Highlights */}
      <div className="pt-6 border-t border-neutral-800 space-y-3 text-xs text-neutral-400">
        <div className="flex items-center gap-3">
          <Truck className="w-4 h-4 text-[#c49a45]" />
          <span>Nationwide Delivery: 3-5 business days across Pakistan.</span>
        </div>
        <div className="flex items-center gap-3">
          <RefreshCw className="w-4 h-4 text-[#c49a45]" />
          <span>7-Day Hassle-Free Exchange for sizing and fit.</span>
        </div>
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-4 h-4 text-[#c49a45]" />
          <span>100% Pre-Shrunk 280 GSM French Terry Cotton.</span>
        </div>
      </div>
    </div>
  );
}
