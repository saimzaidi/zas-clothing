import { siteConfig } from "./config";

export function formatPrice(price: number): string {
  return `${siteConfig.currency.symbol}${price.toLocaleString()}`;
}

export function formatDate(dateInput: string | Date): string {
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}
