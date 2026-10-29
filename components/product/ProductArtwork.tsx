import { Product } from "@/types/product";
import Image from "next/image";

interface ProductArtworkProps {
  product: Product;
}

export default function ProductArtwork({ product }: ProductArtworkProps) {
  return (
    <div className="product-artwork relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-[#0d0d0f]">
      <Image
        src={product.images[0]}
        alt={product.name}
        fill
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 40vw"
        className="object-cover"
      />
    </div>
  );
}
