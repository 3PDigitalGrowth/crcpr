"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

/**
 * Phones and tablets only (below xl, where the header hides its phone number
 * and "Book a consultation" button behind the menu). Once the reader scrolls
 * past the hero, the same two actions sit pinned to the foot of the screen.
 *
 * Not on /contact (the form is the page) and not on articles, which carry
 * their own pinned bar below lg. Renders a footer-coloured spacer after the
 * footer in both cases so a pinned bar never covers the footer's last lines.
 */
export function StickyCta() {
  const pathname = usePathname() ?? "/";
  const isArticle = /^\/insights\/[^/]+/.test(pathname);
  const enabled = !isArticle && pathname !== "/contact";
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const onScroll = () => setShown(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [enabled, pathname]);

  if (isArticle) return <div className="tone-footer h-[4.5rem] lg:hidden" aria-hidden />;
  if (!enabled) return null;

  return (
    <>
      <div className="tone-footer h-[4.5rem] xl:hidden" aria-hidden />
      <div
        className={`tone-base fixed inset-x-0 bottom-0 z-40 border-t border-line px-4 py-3 shadow-[0_-12px_32px_-18px_rgba(11,18,32,0.35)] transition-transform duration-300 sm:px-6 md:px-8 xl:hidden ${
          shown ? "translate-y-0" : "pointer-events-none translate-y-full"
        }`}
        aria-hidden={!shown}
      >
        <div className="mx-auto flex max-w-[1200px] items-center gap-3 md:flex-row-reverse md:justify-start">
          <Link
            href="/contact"
            className="btn btn-primary flex-1 whitespace-nowrap md:flex-none"
            tabIndex={shown ? 0 : -1}
          >
            Book a consultation
          </Link>
          <a
            href={siteConfig.phone.href}
            className="btn btn-quiet shrink-0 whitespace-nowrap"
            aria-label={`Call ${siteConfig.phone.display}`}
            tabIndex={shown ? 0 : -1}
          >
            <Phone className="h-4 w-4 text-accent" aria-hidden />
            <span className="hidden min-[400px]:inline">{siteConfig.phone.display}</span>
          </a>
        </div>
      </div>
    </>
  );
}
