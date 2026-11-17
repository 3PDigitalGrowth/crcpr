"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { themeKey, type ConceptId, type Theme } from "./concepts";
import {
  ABOUT_MENU,
  CLIENTS_ALL,
  CLIENTS_MENU,
  navLinks,
  practices,
  SPECIALIST,
  type MenuItem,
  type NavItem,
} from "./data";

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

function MenuLink({ title, blurb, href }: { title: string; blurb?: string; href: string }) {
  return (
    <Link href={href} className="block rounded-xl px-3 py-2 transition-colors hover:bg-[var(--line)]">
      <span className="block text-sm font-semibold text-fg">{title}</span>
      {blurb ? <span className="mt-0.5 block text-xs leading-relaxed text-muted">{blurb}</span> : null}
    </Link>
  );
}

function ServicesMenu({ base }: { base: string }) {
  return (
    <div className="glass-strong kit-r grid w-[600px] grid-cols-[1.25fr,1fr] gap-5 p-5">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Our practice areas</p>
        <ul className="mt-2 space-y-0.5">
          {practices(base).map((s) => (
            <li key={s.href}>
              <MenuLink title={s.title} blurb={s.blurb} href={s.href} />
            </li>
          ))}
        </ul>
      </div>
      <div className="border-l border-line pl-5">
        <ul className="space-y-0.5">
          {SPECIALIST.map((s) => (
            <li key={s.href}>
              <MenuLink title={s.title} blurb={s.blurb} href={s.href} />
            </li>
          ))}
          <li>
            <MenuLink title="Media Training" href="/media-training" />
          </li>
        </ul>
        <Link href="/services" className="mt-2 inline-block px-3 text-xs font-semibold text-accent">
          View all services
        </Link>
      </div>
    </div>
  );
}

function ListMenu({ items, footer }: { items: MenuItem[]; footer?: { label: string; href: string } }) {
  return (
    <div className="glass-strong kit-r w-[360px] p-3">
      <ul className="space-y-0.5">
        {items.map((s) => (
          <li key={s.href}>
            <MenuLink title={s.title} blurb={s.blurb} href={s.href} />
          </li>
        ))}
      </ul>
      {footer ? (
        <Link href={footer.href} className="mt-1 inline-block px-3 pb-1 text-xs font-semibold text-accent">
          {footer.label}
        </Link>
      ) : null}
    </div>
  );
}

function subLinks(menu: NavItem["menu"], base: string): { title: string; href: string }[] {
  if (menu === "services") {
    return [...practices(base), ...SPECIALIST, { title: "Media Training", href: "/media-training" }];
  }
  if (menu === "about") return ABOUT_MENU;
  if (menu === "clients") return CLIENTS_MENU;
  return [];
}

type MenuKey = NonNullable<NavItem["menu"]>;

export function Header({ base }: { base: string }) {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState<MenuKey | null>(null);
  const pathname = usePathname();
  const links = navLinks(base);

  useEffect(() => {
    setOpen(false);
    setMenuOpen(null);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // The live site's six-item nav needs the full row: it collapses to the menu below 1280px.
  const wide = base === "";
  const isActive = (href: string) => (href === "/" ? pathname === "/" : Boolean(pathname?.startsWith(href)));

  return (
    <header className="kit-header sticky top-0 z-50">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-4 py-3 sm:px-6 md:px-8">
        <Link href={base || "/"} aria-label="CRC Public Relations home" className="shrink-0">
          <Logo className="h-8 md:h-9" />
        </Link>

        <nav className={`hidden items-center gap-6 xl:gap-7 ${wide ? "xl:flex" : "lg:flex"}`} aria-label="Main">
          {links.map((l) => {
            const menu = l.menu;
            if (!menu) {
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`kit-nav-link whitespace-nowrap font-medium transition-colors hover:text-fg ${
                    isActive(l.href) ? "text-fg" : "text-muted"
                  }`}
                >
                  {l.label}
                </Link>
              );
            }
            return (
              <div
                key={l.href}
                className="relative"
                onMouseEnter={() => setMenuOpen(menu)}
                onMouseLeave={() => setMenuOpen(null)}
              >
                <button
                  type="button"
                  className={`kit-nav-link flex items-center gap-1 font-medium transition-colors hover:text-fg ${
                    isActive(l.href) ? "text-fg" : "text-muted"
                  }`}
                  aria-expanded={menuOpen === menu}
                  aria-controls={`kit-menu-${menu}`}
                  onClick={() => setMenuOpen((v) => (v === menu ? null : menu))}
                >
                  {l.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${menuOpen === menu ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
                {menuOpen === menu && (
                  <div id={`kit-menu-${menu}`} className="absolute left-1/2 top-full -translate-x-1/2 pt-4">
                    {menu === "services" ? (
                      <ServicesMenu base={base} />
                    ) : menu === "about" ? (
                      <ListMenu items={ABOUT_MENU} />
                    ) : (
                      <ListMenu items={CLIENTS_MENU} footer={CLIENTS_ALL} />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className={`hidden items-center gap-5 ${wide ? "xl:flex" : "lg:flex"}`}>
          <a href={siteConfig.phone.href} className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-fg">
            <Phone className="h-4 w-4 text-accent" aria-hidden />
            {siteConfig.phone.display}
          </a>
          <Link href="/contact" className="btn btn-primary whitespace-nowrap !px-4 !py-2.5">
            Book a consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`text-fg ${wide ? "xl:hidden" : "lg:hidden"}`}
          aria-label={open ? "Close" : "Menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className={`max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line px-4 pb-8 pt-3 sm:px-6 ${wide ? "xl:hidden" : "lg:hidden"}`}>
          <nav className="flex flex-col" aria-label="Mobile">
            {links.map((l) => (
              <div key={l.href}>
                <Link href={l.href} className="block border-b border-line py-3 text-base font-medium text-fg">
                  {l.label}
                </Link>
                {subLinks(l.menu, base).map((p) => (
                  <Link key={p.href} href={p.href} className="block border-b border-line py-2.5 pl-4 text-sm text-muted">
                    {p.title}
                  </Link>
                ))}
              </div>
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
