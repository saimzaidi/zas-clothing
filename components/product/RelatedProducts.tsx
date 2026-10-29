import React from "react";
import { Product } from "@/types/product";
import ProductCard from "@/components/shop/ProductCard";
import Reveal from "@/components/motion/Reveal";

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="pt-20 sm:pt-28 border-t border-neutral-800">
      <div className="mb-10 text-center sm:text-left">
        <span className="text-xs font-mono uppercase tracking-widest text-[#c49a45] block">
          Complete the Silhouette
        </span>
        <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
          Complementary <span className="font-editorial-italic font-normal text-[#e8c373]">Garments.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, idx) => (
          <Reveal key={product.id} delay={idx * 0.08}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
