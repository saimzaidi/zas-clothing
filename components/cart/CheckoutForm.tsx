"use client";

import React, { useState } from "react";
import { MessageCircle, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { PopulatedCartItem, CustomerInfo } from "@/types/cart";
import { generateWhatsAppCheckoutUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/config";
import { useCartStore } from "@/store/cart";

interface CheckoutFormProps {
  items: PopulatedCartItem[];
}

export default function CheckoutForm({ items }: CheckoutFormProps) {
  const clearCart = useCartStore((s) => s.clearCart);

  const [formData, setFormData] = useState<CustomerInfo>({
    name: "",
    phone: "",
    city: "",
    address: "",
    note: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CustomerInfo, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [lastOrderRef, setLastOrderRef] = useState("");

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof CustomerInfo, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Active phone/WhatsApp number is required";
    } else if (formData.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Please enter a valid 10-11 digit phone number";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required for courier routing";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Complete street address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    if (items.length === 0) return;

    setIsSubmitting(true);

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderRef = `ZAS-${new Date().getFullYear()}-${randomSuffix}`;
    setLastOrderRef(orderRef);

    // Build WhatsApp URL
    const url = generateWhatsAppCheckoutUrl(items, formData, orderRef);

    // Open WhatsApp in a new tab
    window.open(url, "_blank");

    // Clear cart and display confirmation
    clearCart();
    setIsSubmitting(false);
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-[#111114] border border-[#c49a45]/40 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#c49a45]">
            Order Ref: #{lastOrderRef}
          </span>
          <h3 className="text-2xl font-black uppercase tracking-tight text-white">
            WhatsApp Order Sent!
          </h3>
          <p className="text-sm text-neutral-300 font-light max-w-md mx-auto leading-relaxed">
            Your pre-filled order has been opened in WhatsApp. Please send the message to our concierge to finalize delivery confirmation.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 max-w-sm mx-auto space-y-1">
          <p className="font-semibold text-white">Need to reopen your chat?</p>
          <a
            href={siteConfig.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 underline font-mono"
          >
            Click here to chat directly with concierge
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-3xl bg-[#111114] border border-neutral-800 space-y-6"
    >
      <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
        <div>
          <h3 className="text-sm font-mono uppercase tracking-widest font-bold text-white">
            Delivery & WhatsApp Checkout
          </h3>
          <p className="text-xs text-neutral-400 mt-0.5">
            Quick 1-step verification. No account or password required.
          </p>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
          <MessageCircle className="w-4 h-4" />
        </div>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <Input
          label="Full Name"
          required
          placeholder="e.g. Daniyal Tariq"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={errors.name}
        />

        {/* Phone / WhatsApp */}
        <Input
          label="Phone / WhatsApp Number"
          required
          placeholder="e.g. 0300 1234567"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          error={errors.phone}
          helperText="We will contact you on this number to confirm COD delivery."
        />

        {/* City */}
        <Input
          label="Destination City"
          required
          placeholder="e.g. Lahore, Karachi, Islamabad..."
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          error={errors.city}
        />

        {/* Complete Address */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-medium text-neutral-400 mb-1.5">
            Full Delivery Address <span className="text-amber-500">*</span>
          </label>
          <textarea
            rows={3}
            placeholder="House/Plot #, Street, Sector/Block, Area..."
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className={`w-full bg-neutral-900/90 text-white placeholder-neutral-500 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-colors ${
              errors.address ? "border-red-500" : ""
            }`}
          />
          {errors.address && (
            <p className="text-xs text-red-400 mt-1">{errors.address}</p>
          )}
        </div>

        {/* Optional Note */}
        <Input
          label="Delivery Note / Special Instructions (Optional)"
          placeholder="e.g. Call before arrival, leave with security..."
          value={formData.note || ""}
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={items.length === 0 || isSubmitting}
          className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#25D366] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#20ba59] transition-all shadow-xl shadow-[#25D366]/20 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
        >
          <MessageCircle className="w-4 h-4 fill-black" />
          <span>Confirm & Order via WhatsApp</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <p className="text-center text-[11px] font-mono text-neutral-500 mt-3">
          Instant order dispatch • Cash on Delivery & Bank Transfer accepted
        </p>
      </div>
    </form>
  );
}
