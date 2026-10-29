import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import { siteConfig } from "@/lib/config";
import Gallery from "@/components/product/Gallery";
import VariantSelector from "@/components/product/VariantSelector";
import RelatedProducts from "@/components/product/RelatedProducts";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} — Heavyweight Drop Shoulder Tee`,
    description: product.description,
    openGraph: {
      title: `${product.name} | ${siteConfig.name}`,
      description: product.description,
      images: [
        {
          url: product.images[0],
          width: 1200,
          height: 1500,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product.id, 4);

  // Schema.org JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/product/${product.slug}`,
      priceCurrency: siteConfig.currency.code,
      price: product.price,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
  };

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 mb-8 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
        <Link href="/shop" className="hover:text-white transition-colors">
          Collection
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
        <span className="text-white truncate">{product.name}</span>
      </nav>

      {/* Product Grid: Left Gallery, Right Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Gallery */}
        <div className="lg:col-span-7 sticky top-24">
          <Gallery image={product.images[0]} productName={product.name} />
        </div>

        {/* Product Details & Variant Selector */}
        <div className="lg:col-span-5">
          <VariantSelector product={product} />
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts products={related} />
    </div>
  );
}
