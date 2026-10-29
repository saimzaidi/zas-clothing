import { Product } from "@/types/product";
import ProductArtwork from "./ProductArtwork";

interface GalleryProps {
  product: Product;
}

export default function Gallery({ product }: GalleryProps) {
  return <ProductArtwork product={product} />;
}
