import { siteConfig } from "./config";
import { formatPrice } from "./format";
import { PopulatedCartItem, CustomerInfo } from "@/types/cart";

export function buildWhatsAppOrderMessage(
  items: PopulatedCartItem[],
  customer: CustomerInfo,
  orderNumber: string
): string {
  const subtotal = items.reduce((sum, item) => sum + item.subtotal, 0);
  const shipping =
    subtotal >= siteConfig.shipping.freeShippingThreshold
      ? 0
      : siteConfig.shipping.standardRate;
  const total = subtotal + shipping;

  const itemLines = items
    .map(
      (item, idx) =>
        `${idx + 1}. *${item.product.name}*\n   • Color: ${item.color}\n   • Size: ${item.size}\n   • Qty: ${item.quantity}\n   • Price: ${formatPrice(item.subtotal)}`
    )
    .join("\n\n");

  const message = `🛍️ *NEW ORDER — ${siteConfig.name.toUpperCase()}*
Ref: #${orderNumber}

━━━━━━━━━━━━━━━━━━━━
*CUSTOMER DETAILS*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${customer.name}
📱 *Phone:* ${customer.phone}
📍 *City:* ${customer.city}
🏠 *Address:* ${customer.address}${customer.note ? `\n📝 *Note:* ${customer.note}` : ""}

━━━━━━━━━━━━━━━━━━━━
*ORDER SUMMARY*
━━━━━━━━━━━━━━━━━━━━
${itemLines}

━━━━━━━━━━━━━━━━━━━━
*Subtotal:* ${formatPrice(subtotal)}
*Shipping:* ${shipping === 0 ? "FREE" : formatPrice(shipping)}
*Grand Total:* ${formatPrice(total)}
━━━━━━━━━━━━━━━━━━━━

Please confirm my order and share estimated dispatch details. Thank you!`;

  return message;
}

export function generateWhatsAppCheckoutUrl(
  items: PopulatedCartItem[],
  customer: CustomerInfo,
  orderNumber: string
): string {
  const message = buildWhatsAppOrderMessage(items, customer, orderNumber);
  const encoded = encodeURIComponent(message);
  const phone = siteConfig.whatsapp.number.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encoded}`;
}
