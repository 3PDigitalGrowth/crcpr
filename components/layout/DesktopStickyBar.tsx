"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function DesktopStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-section");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`hidden md:flex fixed top-0 left-0 right-0 z-40 bg-navy/95 backdrop-blur-sm border-b border-white/10 items-center justify-between px-6 py-2 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <p className="text-white/60 text-xs font-medium tracking-wide">
        CRC Public Relations | Corporate PR, Reputation &amp; Crisis Advisory
      </p>
      <div className="flex items-center gap-4">
        <a
          href={siteConfig.phone.href}
          className="text-brand-gold text-xs font-medium tracking-wide hover:text-white transition-colors"
        >
          {siteConfig.phone.display}
        </a>
        <Link
          href="/contact"
          className="bg-brand-gold text-navy font-heading font-black text-xs px-4 py-2 rounded hover:bg-gold-light transition-colors"
        >
          Book a consultation →
        </Link>
      </div>
    </div>
  );
}
