"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Clients", href: "/clients" },
  { label: "Crisis", href: "/crisis" },
  { label: "Pacific", href: "/pacific" },
  { label: "Media Training", href: "/media-training" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

function Logo() {
  return (
    <span className="flex flex-col leading-none">
      <span className="font-heading text-brand-gold font-black text-xl lg:text-2xl">
        CRC
      </span>
      <span className="font-sans font-medium text-white text-[10px] tracking-[0.2em] uppercase mt-0.5">
        PUBLIC RELATIONS
      </span>
    </span>
  );
}

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const capabilityHref = `/downloads/${siteConfig.capabilityStatement.fileName}`;

  return (
    <>
      <header className="sticky top-0 z-50 bg-navy h-14 lg:h-16 border-b border-white/10">
        <div className="h-full max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
            <Logo />
          </Link>

          <nav
            className="hidden lg:flex items-center justify-center gap-8 flex-1"
            aria-label="Main"
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-sans text-white hover:text-brand-gold transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6 shrink-0">
            <Link
              href={capabilityHref}
              download
              className="font-sans font-medium text-brand-gold text-xs tracking-widest hover:opacity-90 transition-opacity"
            >
              DOWNLOAD CAPABILITY STATEMENT
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-brand-gold text-navy font-heading font-black text-xs uppercase tracking-widest rounded-[4px] px-4 py-2 hover:bg-gold-light transition-colors"
            >
              BOOK A CONSULTATION
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <button
              type="button"
              className="p-2 text-white hover:text-brand-gold transition-colors -ml-2"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
            <a
              href={siteConfig.phone.href}
              className="p-2 text-brand-gold hover:text-gold-light transition-colors"
              aria-label={`Call ${siteConfig.phone.display}`}
            >
              <Phone className="size-6" />
            </a>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-40 bg-navy lg:hidden pt-14 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex-1 flex flex-col px-6 pt-8 pb-6 overflow-y-auto">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-white text-lg font-heading py-3 border-b border-white/10"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="mt-auto pt-10 flex flex-col gap-4">
              <Link
                href={capabilityHref}
                download
                className="font-sans font-medium text-brand-gold text-sm tracking-widest text-center py-3"
                onClick={() => setMenuOpen(false)}
              >
                DOWNLOAD CAPABILITY STATEMENT
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-brand-gold text-navy font-heading font-black text-xs uppercase tracking-widest rounded-[4px] px-4 py-3 hover:bg-gold-light transition-colors text-center"
                onClick={() => setMenuOpen(false)}
              >
                BOOK A CONSULTATION
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
