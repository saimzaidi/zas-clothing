import Image from "next/image";

interface GalleryProps {
  image: string;
  productName: string;
}

export default function Gallery({ image, productName }: GalleryProps) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900">
      <Image
        src={image}
        alt={productName}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}
