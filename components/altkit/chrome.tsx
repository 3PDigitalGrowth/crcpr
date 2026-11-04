"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { themeKey, type ConceptId, type Theme } from "./concepts";
import { navLinks, practices, SPECIALIST } from "./data";

function applyTheme(theme: Theme) {
  document.getElementById("kit-root")?.setAttribute("data-theme", theme);
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`relative block ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/crc-2026/crc-logo-white.png"
        alt="CRC Public Relations"
        width={555}
        height={140}
        className="logo-for-dark h-full w-auto"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/crc-2026/crc-logo-ink.png"
        alt="CRC Public Relations"
        width={555}
        height={140}
        className="logo-for-light h-full w-auto"
      />
    </span>
  );
}

export function Header({ base }: { base: string }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const links = navLinks(base);
  const practiceList = practices(base);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header className="kit-header sticky top-0 z-50">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-4 py-3 sm:px-6 md:px-8">
        <Link href={base} aria-label="CRC Public Relations home" className="shrink-0">
          <Logo className="h-8 md:h-9" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {links.map((l) =>
            l.label === "Services" ? (
              <div
                key={l.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className="kit-nav-link flex items-center gap-1 font-medium text-muted transition-colors hover:text-fg"
                  aria-expanded={servicesOpen}
                  aria-controls="kit-services-menu"
                  onClick={() => setServicesOpen((v) => !v)}
                >
                  {l.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
                {servicesOpen && (
                  <div id="kit-services-menu" className="absolute left-1/2 top-full w-[600px] -translate-x-1/2 pt-4">
                    <div className="glass-strong kit-r grid grid-cols-[1.25fr,1fr] gap-5 p-5">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                          Our practice areas
                        </p>
                        <ul className="mt-2 space-y-0.5">
                          {practiceList.map((s) => (
                            <li key={s.href}>
                              <Link href={s.href} className="block rounded-xl px-3 py-2 transition-colors hover:bg-[var(--line)]">
                                <span className="block text-sm font-semibold text-fg">{s.title}</span>
                                <span className="mt-0.5 block text-xs leading-relaxed text-muted">{s.blurb}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="border-l border-line pl-5">
                        <ul className="space-y-0.5">
                          {SPECIALIST.map((s) => (
                            <li key={s.href}>
                              <Link href={s.href} className="block rounded-xl px-3 py-2 transition-colors hover:bg-[var(--line)]">
                                <span className="block text-sm font-semibold text-fg">{s.title}</span>
                                <span className="mt-0.5 block text-xs text-muted">{s.blurb}</span>
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link
                              href="/media-training"
                              className="block rounded-xl px-3 py-2 text-sm font-semibold text-fg transition-colors hover:bg-[var(--line)]"
                            >
                              Media Training
                            </Link>
                          </li>
                        </ul>
                        <Link href="/services" className="mt-2 inline-block px-3 text-xs font-semibold text-accent">
                          View all services
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className={`kit-nav-link font-medium transition-colors hover:text-fg ${
                  pathname?.startsWith(l.href) ? "text-fg" : "text-muted"
                }`}
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={siteConfig.phone.href} className="flex items-center gap-2 text-sm font-semibold text-fg">
            <Phone className="h-4 w-4 text-accent" aria-hidden />
            {siteConfig.phone.display}
          </a>
          <Link href="/contact" className="btn btn-primary !px-4 !py-2.5">
            Book a consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-fg lg:hidden"
          aria-label={open ? "Close" : "Menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line px-4 pb-8 pt-3 sm:px-6 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="border-b border-line py-3 text-base font-medium text-fg">
                {l.label}
              </Link>
            ))}
            {practiceList.map((p) => (
              <Link key={p.href} href={p.href} className="border-b border-line py-2.5 pl-4 text-sm text-muted">
                {p.title}
              </Link>
            ))}
          </nav>
          <a href={siteConfig.phone.href} className="mt-6 flex items-center gap-2 text-base font-semibold text-fg">
            <Phone className="h-4 w-4 text-accent" aria-hidden />
            {siteConfig.phone.display}
          </a>
          <Link href="/contact" className="btn btn-primary mt-4 w-full">
            Book a consultation
          </Link>
        </div>
      )}
    </header>
  );
}

/**
 * Review-only control: flips the concept between its dark and white
 * background. The choice is remembered per concept and can be shared with
 * ?theme=white or ?theme=dark.
 */
export function ThemeSwitch({ id, defaultTheme }: { id: ConceptId; defaultTheme: Theme }) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const current = document.getElementById("kit-root")?.getAttribute("data-theme");
    if (current === "white" || current === "dark") setTheme(current);
  }, []);

  function choose(next: Theme) {
    setTheme(next);
    applyTheme(next);
    try {
      window.localStorage.setItem(themeKey(id), next);
      const url = new URL(window.location.href);
      url.searchParams.set("theme", next);
      window.history.replaceState(window.history.state, "", url.toString());
    } catch {
      /* storage blocked: the switch still works for this page view */
    }
  }

  return (
    <div className="tone-deep fixed bottom-3 left-3 z-[60] rounded-full !bg-transparent sm:bottom-4 sm:left-4">
      <div className="glass-strong flex items-center gap-1 rounded-full p-1 text-xs font-semibold">
        <span className="hidden px-3 text-muted sm:inline">Background</span>
        {(["dark", "white"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => choose(t)}
            aria-pressed={theme === t}
            className={`rounded-full px-3.5 py-2 capitalize transition-colors ${
              theme === t ? "bg-[#1c74bc] text-white" : "text-fg hover:bg-[var(--line)]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
