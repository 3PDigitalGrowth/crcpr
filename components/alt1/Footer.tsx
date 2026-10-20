import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "./chrome";
import { A1_ROUTES, NAV_LINKS, PRACTICES, SPECIALIST } from "./data";

export function Footer() {
  return (
    <footer className="tone-footer border-t border-line">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr,1fr,1fr,1fr]">
          <div>
            <Link href={A1_ROUTES.home} aria-label="CRC Public Relations home" className="inline-block">
              <Logo className="h-10" />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.address.street}, {siteConfig.address.city} {siteConfig.address.state}{" "}
              {siteConfig.address.postcode}, {siteConfig.address.country}
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">Contact</p>
            <a href={siteConfig.phone.href} className="mt-4 block text-lg font-semibold text-fg">
              {siteConfig.phone.display}
            </a>
            <p className="mt-1 text-xs text-muted">24/7 confidential crisis line</p>
            <a href={`mailto:${siteConfig.email.general}`} className="mt-4 block text-sm text-muted hover:text-fg">
              {siteConfig.email.general}
            </a>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">Services</p>
            <ul className="mt-4 space-y-2.5">
              {PRACTICES.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm text-muted hover:text-fg">
                    {p.title}
                  </Link>
                </li>
              ))}
              {SPECIALIST.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-muted hover:text-fg">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.filter((l) => l.label !== "Services").map((l) => (
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

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
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
