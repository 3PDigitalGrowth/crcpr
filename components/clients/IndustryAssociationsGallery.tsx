"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

const ITEMS: GalleryItem[] = [
  {
    src: "/images/clients/industry-associations/gallery/01-trade-hall.png",
    alt: "Industry trade hall in full activity with members visiting exhibitor stands",
    caption: "Industry trade hall in full activity",
  },
  {
    src: "/images/clients/industry-associations/gallery/02-carbine.png",
    alt: "Member exhibitor showcase featuring Carbine product display at an industry event",
    caption: "Member exhibitor showcase",
  },
  {
    src: "/images/clients/industry-associations/gallery/03-mcgrathlocks.png",
    alt: "Delegates gathered around exhibitor displays at a national industry event",
    caption: "Exhibitor displays at a national industry event",
  },
  {
    src: "/images/clients/industry-associations/gallery/04-cmi-safes.png",
    alt: "Members engaging with the CMI Safe Co. exhibit on the trade floor",
    caption: "Trade floor engagement at an association event",
  },
  {
    src: "/images/clients/industry-associations/gallery/05-sglock.png",
    alt: "Member-to-member engagement at the SGLOCK & Security exhibit",
    caption: "Member-to-member engagement on the trade floor",
  },
  {
    src: "/images/clients/industry-associations/gallery/06-lockton.png",
    alt: "Industry product showcase with Lockton displays at an association conference",
    caption: "Product showcase, industry conference",
  },
  {
    src: "/images/clients/industry-associations/gallery/07-zanda.png",
    alt: "Exhibitor conversations at the Zanda Architectural Hardware booth",
    caption: "Exhibitor discussions, association event",
  },
  {
    src: "/images/clients/industry-associations/gallery/08-codelocks.png",
    alt: "Delegates networking on the exhibition floor at an industry event",
    caption: "Networking on the exhibition floor",
  },
  {
    src: "/images/clients/industry-associations/gallery/09-roamlock.png",
    alt: "Hands-on demonstration at the Roamlock booth during an industry event",
    caption: "Hands-on demonstration at an industry event",
  },
  {
    src: "/images/clients/industry-associations/gallery/10-panel-discussion.png",
    alt: "Panel discussion in progress at an association conference with delegates seated at round tables",
    caption: "Panel discussion, association event",
  },
  {
    src: "/images/clients/industry-associations/gallery/11-networking.png",
    alt: "Delegates networking between sessions in a conference foyer",
    caption: "Delegates networking between sessions",
  },
  {
    src: "/images/clients/industry-associations/gallery/12-trade-floor.png",
    alt: "Busy industry trade floor with members visiting branded exhibitor stands",
    caption: "Busy trade floor at a national industry event",
  },
];

export function IndustryAssociationsGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbStripRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchDeltaXRef = useRef(0);

  const total = ITEMS.length;
  const current = ITEMS[activeIndex];

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      const visible = containerRef.current.getBoundingClientRect();
      const onScreen =
        visible.top < window.innerHeight && visible.bottom > 0;
      if (!onScreen) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  useEffect(() => {
    if (!thumbStripRef.current) return;
    const activeThumb = thumbStripRef.current.querySelector<HTMLButtonElement>(
      `[data-thumb-index="${activeIndex}"]`,
    );
    if (activeThumb) {
      activeThumb.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0]?.clientX ?? null;
    touchDeltaXRef.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const x = e.touches[0]?.clientX ?? touchStartXRef.current;
    touchDeltaXRef.current = x - touchStartXRef.current;
  };

  const handleTouchEnd = () => {
    const threshold = 40;
    if (touchDeltaXRef.current <= -threshold) goNext();
    else if (touchDeltaXRef.current >= threshold) goPrev();
    touchStartXRef.current = null;
    touchDeltaXRef.current = 0;
  };

  return (
    <div ref={containerRef} className="w-full">
      <div
        className="relative aspect-[3/2] md:aspect-[16/9] rounded-lg overflow-hidden border border-brand-border bg-navy shadow-md shadow-navy/10"
        role="region"
        aria-roledescription="carousel"
        aria-label="Industry association events gallery"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {ITEMS.map((item, idx) => (
          <div
            key={item.src}
            className={`absolute inset-0 transition-opacity duration-500 ease-out ${
              idx === activeIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={idx !== activeIndex}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1200px"
              priority={idx === 0}
            />
          </div>
        ))}

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/55 via-navy/0 to-navy/0"
          aria-hidden
        />

        <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-navy/65 backdrop-blur-sm px-3 py-1 text-[11px] font-sans tracking-[0.16em] uppercase text-white/80">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" aria-hidden />
          Industry events
        </div>

        <div className="absolute top-4 right-4 rounded-full bg-navy/65 backdrop-blur-sm px-3 py-1 text-xs font-sans font-medium text-white/85 tabular-nums">
          {String(activeIndex + 1).padStart(2, "0")}{" "}
          <span className="text-white/40">/ {String(total).padStart(2, "0")}</span>
        </div>

        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous image"
          className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white text-navy flex items-center justify-center shadow-md shadow-navy/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next image"
          className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white text-navy flex items-center justify-center shadow-md shadow-navy/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <p
          className="absolute bottom-4 left-4 right-4 md:left-6 md:right-6 text-white text-sm md:text-base font-sans font-medium drop-shadow"
          aria-live="polite"
        >
          {current.caption}
        </p>
      </div>

      <div
        ref={thumbStripRef}
        className="mt-4 flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 [scrollbar-width:thin]"
        role="tablist"
        aria-label="Choose image"
      >
        {ITEMS.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={item.src}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to image ${idx + 1}: ${item.caption}`}
              data-thumb-index={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative aspect-[3/2] w-20 md:w-24 flex-shrink-0 rounded overflow-hidden border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${
                isActive
                  ? "border-brand-gold opacity-100 ring-2 ring-brand-gold/60"
                  : "border-brand-border opacity-55 hover:opacity-90"
              }`}
            >
              <Image
                src={item.src}
                alt=""
                fill
                className="object-cover"
                sizes="120px"
              />
            </button>
          );
        })}
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-charcoal-mid">
        <span>
          Use the arrows or swipe to browse. Keyboard arrow keys also work.
        </span>
        <span className="hidden md:inline tabular-nums">
          {activeIndex + 1} of {total}
        </span>
      </div>
    </div>
  );
}
