import Image from "next/image";
import type { ReactNode } from "react";

export interface ImageTextRowProps {
  imageSrc: string;
  imageAlt: string;
  /** Desktop column order: image on left or right */
  imagePosition?: "left" | "right";
  /** Tailwind aspect ratio class, e.g. aspect-[3/2] or aspect-[4/3] */
  aspectClass?: string;
  children: ReactNode;
}

export function ImageTextRow({
  imageSrc,
  imageAlt,
  imagePosition = "left",
  aspectClass = "aspect-[3/2]",
  children,
}: ImageTextRowProps) {
  const imageOrder =
    imagePosition === "left" ? "order-1 md:order-1" : "order-1 md:order-2";
  const textOrder =
    imagePosition === "left" ? "order-2 md:order-2" : "order-2 md:order-1";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div
        className={`relative w-full overflow-hidden rounded-lg shadow-sm shadow-navy/10 ${aspectClass} ${imageOrder}`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className={textOrder}>{children}</div>
    </div>
  );
}
