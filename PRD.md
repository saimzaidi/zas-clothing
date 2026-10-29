# ZAS Clothing — Product Requirements

## 1. Overview
ZAS Clothing is a premium online clothing store, launching with drop shoulder t-shirts. The storefront is design-led and animation-rich. Customers browse, build a cart, and place their order through WhatsApp. The site is built for production and deployed on Vercel.

## 2. Design Reference
Reference site: https://texart.com/

Follow its structure and feel: bold sans-serif headings with italic serif accents, bento-style feature sections, scrolling marquee strip, rounded product cards with colour swatches, lifestyle imagery, testimonials block, and a countdown-driven drop section. Use ZAS Clothing's own logo, copy, and imagery. Do not copy Texart's brand assets or text.

## 3. Pages
| Route | Purpose |
|---|---|
| `/` | Home |
| `/shop` | Product listing |
| `/product/[slug]` | Product detail |
| `/cart` | Full cart view |
| `/about` | Brand story |
| `/contact` | Contact details and WhatsApp link |
| `/shipping-returns` | Policies |
| `/faq` | Common questions |
| 404 | Branded not-found page |

## 4. Features

**Home:** hero with CTA, marquee strip, featured products, brand values (bento), lookbook, testimonials, drop countdown, footer with links and socials.

**Shop:** product grid, filters (size, colour, price), sorting, search.

**Product page:** image gallery with zoom, colour and size selection, size guide, add to cart, add to wishlist, related products.

**Cart:** slide-in drawer plus full page, quantity update, remove item, running total. Persisted in localStorage.

**Wishlist:** save and remove products, persisted in localStorage.

**Checkout via WhatsApp:**
1. Customer fills a short form: name, phone, city, full address, optional note.
2. The site generates a pre-filled message containing order items (name, colour, size, quantity), total, and customer details.
3. The message opens through a `wa.me` link to the store's WhatsApp number.
4. The cart clears after the order is sent.

The WhatsApp number lives in a single config file.

## 5. Product Data
Products are stored in a typed local file (no CMS, no database). Fields: `id`, `slug`, `name`, `price`, `description`, `images`, `colors`, `sizes`, `stock`, `tags`, `isNew`, `isDrop`.

Initial catalogue: placeholder drop shoulder t-shirts (about 12 products, 3–5 colours, sizes S–XL). Images sit in `/public/products` and are swappable without code changes.

## 6. Animation
- Smooth scrolling across the site
- Scroll-triggered reveals for sections and cards
- Page transitions between routes
- Hover and press states on cards, buttons, and swatches
- Cart drawer open/close motion
- Marquee and countdown
- Animate `transform` and `opacity` only; respect `prefers-reduced-motion`

## 7. Technical Requirements
- Stack and structure are defined in `Architecture.md`
- Mobile-first and fully responsive
- Lighthouse 90+ on performance, accessibility, and SEO
- Optimised images with lazy loading
- Per-page metadata, Open Graph tags, sitemap, robots.txt
- Keyboard navigable, semantic HTML, alt text on all images

## 8. Content Rules
All copy is written for ZAS Clothing. No lorem ipsum, no placeholder wording, no development notes visible on the site.

## 9. Out of Scope
Admin panel, payment gateway, user accounts, product reviews system, CMS, database, newsletter, multi-language, multi-currency.

## 10. Done Criteria
- All pages built, responsive, and visually consistent with the reference
- Cart, wishlist, and WhatsApp checkout work end to end
- Build passes with no errors or warnings
- Performance targets met
- Deployed on Vercel
