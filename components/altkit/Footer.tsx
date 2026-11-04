import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "./chrome";
import { navLinks, practices, SPECIALIST } from "./data";

export function Footer({ base }: { base: string }) {
  return (
    <footer className="tone-footer border-t border-line">
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr,1fr,1fr,1fr]">
          <div>
            <Link href={base} aria-label="CRC Public Relations home" className="inline-block">
              <Logo className="h-9" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.address.street}, {siteConfig.address.city} {siteConfig.address.state}{" "}
              {siteConfig.address.postcode}, {siteConfig.address.country}
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Contact</p>
            <a href={siteConfig.phone.href} className="mt-4 block text-base font-semibold text-fg">
              {siteConfig.phone.display}
            </a>
            <p className="mt-1 text-xs text-muted">24/7 confidential crisis line</p>
            <a href={`mailto:${siteConfig.email.general}`} className="mt-3 block text-sm text-muted hover:text-fg">
              {siteConfig.email.general}
            </a>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Services</p>
            <ul className="mt-4 space-y-2">
              {[...practices(base), ...SPECIALIST].map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm text-muted hover:text-fg">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Navigate</p>
            <ul className="mt-4 space-y-2">
              {navLinks(base)
                .filter((l) => l.label !== "Services")
                .map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-muted hover:text-fg">
                      {l.label}
                    </Link>
                  </li>
                ))}
              <li>
                <Link href="/faq" className="text-sm text-muted hover:text-fg">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-7 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>&copy; {siteConfig.copyrightYear} CRC Public Relations. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href={siteConfig.privacyPolicyUrl} className="hover:text-fg">
              Privacy policy
            </Link>
            <Link href={siteConfig.termsUrl} className="hover:text-fg">
              Terms
            </Link>
            <a
              href="https://www.3pdigital.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-fg"
            >
              Proudly supported by <span className="font-semibold">3P Digital</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
