import { Product } from "@/types/product";

interface ProductArtworkProps {
  product: Product;
}

export default function ProductArtwork({ product }: ProductArtworkProps) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-[#0d0d0f]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,154,69,0.12),transparent_68%)]"
      />
      <div
        className="absolute inset-4 rounded-xl border border-neutral-800/70"
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-500">
          ZAS / {product.id.replace("zas-", "")}
        </span>
        <span className="mt-5 text-5xl font-black tracking-[0.16em] text-white sm:text-6xl">
          ZAS
        </span>
        <span className="mt-2 max-w-[14rem] text-[10px] font-mono uppercase tracking-[0.2em] text-[#e8c373]">
          {product.fit || "Heavyweight Drop Shoulder"}
        </span>
        <span className="mt-6 h-px w-10 bg-[#c49a45]/70" aria-hidden="true" />
        <span className="mt-3 text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-500">
          {product.fabric || "280 GSM Cotton"}
        </span>
      </div>
    </div>
  );
}
