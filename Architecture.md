# ZAS Clothing — Technical Architecture

## 1. Stack
| Layer | Choice |
|---|---|
| Framework | Next.js (App Router), TypeScript (strict) |
| Styling | Tailwind CSS with design tokens in `tailwind.config` / CSS variables |
| UI animation | Framer Motion |
| Scroll animation | GSAP + ScrollTrigger |
| Smooth scroll | Lenis |
| State | Zustand with `persist` middleware (localStorage) |
| Fonts | `next/font` (bold sans for headings/body, italic serif for accents) |
| Images | `next/image`, assets in `/public` |
| Hosting | Vercel |

No CMS, database, or backend API. All data is local and typed.

## 2. Folder Structure
```
/app
  layout.tsx            # fonts, providers, header, footer, cart drawer
  template.tsx          # page transition wrapper
  page.tsx              # Home
  /shop/page.tsx
  /product/[slug]/page.tsx
  /cart/page.tsx
  /about /contact /faq /shipping-returns
  not-found.tsx
  sitemap.ts, robots.ts
/components
  /layout               # Header, Footer, MobileMenu, CartDrawer
  /home                 # Hero, Marquee, FeaturedGrid, BentoValues, Lookbook, Testimonials, DropCountdown
  /shop                 # ProductCard, ProductGrid, Filters, SortSelect, SearchBar
  /product              # Gallery, VariantSelector, SizeGuide, RelatedProducts
  /cart                 # CartItem, CartSummary, CheckoutForm
  /motion               # Reveal, PageTransition, SmoothScroll, MarqueeTrack
  /ui                   # Button, Badge, Modal, Swatch, Input
/data
  products.ts           # typed product catalogue
  testimonials.ts, faq.ts, lookbook.ts
/lib
  config.ts             # store name, currency, WhatsApp number, drop end date
  whatsapp.ts           # order message builder + wa.me URL
  format.ts             # price and date formatting
  motion.ts             # shared easing, durations, variants
/store
  cart.ts, wishlist.ts
/hooks
  useReducedMotion.ts, useHydrated.ts
/types
  product.ts, cart.ts
/public
  /products /lookbook /brand
```

## 3. Data Model
```ts
type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  colors: { name: string; hex: string; images: string[] }[];
  sizes: ("S" | "M" | "L" | "XL" | "XXL")[];
  stock: Record<string, number>;   // key: `${colorName}-${size}`
  tags: string[];
  isNew?: boolean;
  isDrop?: boolean;
};

type CartItem = {
  productId: string;
  color: string;
  size: string;
  quantity: number;
};
```
The cart stores only references and variant choices. Name, price, and image are resolved from `products.ts` at render, so price changes never leave stale cart data.

## 4. Rendering Strategy
- Pages are Server Components by default; interactive parts are isolated Client Components.
- `/product/[slug]` uses `generateStaticParams` for static generation.
- `/shop` filters, sort, and search live in URL search params, which keeps views shareable and back/forward friendly. Filtering runs client-side over the local catalogue.
- Metadata via `generateMetadata` per page, including Open Graph images.

## 5. State Management
- **Cart store:** add, remove, update quantity, clear, derived totals. Persisted under one localStorage key.
- **Wishlist store:** toggle and list of product IDs. Persisted.
- **UI state:** cart drawer and mobile menu open/close.
- Persisted state renders only after hydration (`useHydrated`) to avoid server/client mismatch.
- Stock is validated against `products.ts` before quantity increases.

## 6. WhatsApp Checkout Flow
1. Cart → `CheckoutForm` (name, phone, city, address, optional note), validated client-side.
2. `lib/whatsapp.ts` builds the message: order lines (name, colour, size, quantity, line total), grand total, customer details.
3. Message is URL-encoded into `https://wa.me/<number>?text=...`.
4. Link opens in a new tab; cart clears after the user confirms they sent the order.
5. Number is read from `lib/config.ts` (single source of truth).

## 7. Animation Architecture
- `SmoothScroll` (Lenis) mounts once in the root layout and syncs with GSAP's ticker.
- `Reveal` wraps sections and cards for in-view entrance, built on Framer Motion variants from `lib/motion.ts`.
- `template.tsx` handles route transitions.
- GSAP + ScrollTrigger is used only for scroll-driven sequences (hero, lookbook, pinned sections). All triggers are cleaned up on unmount.
- Marquee and countdown are CSS/JS driven with no layout thrash.
- Rules: animate `transform` and `opacity` only; a single shared motion config for easing and duration; every animation falls back to a static state under `prefers-reduced-motion`.

## 8. Performance
- `next/image` with explicit sizes, `priority` on the hero only, lazy loading elsewhere.
- Fonts self-hosted through `next/font` with `display: swap`.
- Dynamic import for heavy client components (gallery zoom, lookbook).
- GSAP and plugins loaded only where used.
- Target: Lighthouse 90+ across performance, accessibility, SEO.

## 9. SEO and Accessibility
- Semantic landmarks, one `h1` per page, descriptive alt text.
- Product structured data (JSON-LD) on product pages.
- Generated `sitemap.xml` and `robots.txt`.
- Focus trapping and Escape-to-close on drawer and modals; visible focus states; full keyboard support.

## 10. Configuration and Deployment
- `lib/config.ts` holds brand and WhatsApp settings; environment-specific values go in `.env.local` (`NEXT_PUBLIC_*`).
- Deploy from GitHub to Vercel; every push builds a preview, `main` goes to production.
- Build must pass type-check and lint with no errors.
