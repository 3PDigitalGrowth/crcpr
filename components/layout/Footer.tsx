import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { siteConfig } from "@/config/site";

const serviceLinks = [
  { label: "Corporate Communications", slug: "corporate-communications" },
  { label: "Reputation Management", slug: "reputation-management" },
  { label: "Issues Management", slug: "issues-management" },
  { label: "Crisis Communications", slug: "crisis-communications" },
  { label: "Media Strategy", slug: "media-strategy" },
  { label: "Digital Media", slug: "digital-media" },
] as const;

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Clients", href: "/clients" },
  { label: "Media Training", href: "/media-training" },
  { label: "Pacific", href: "/pacific" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

function Logo() {
  return (
    <div className="flex flex-col leading-none">
      <span className="font-heading text-brand-gold font-black text-2xl">CRC</span>
      <span className="font-sans font-medium text-white text-[10px] tracking-[0.2em] uppercase mt-0.5">
        PUBLIC RELATIONS
      </span>
    </div>
  );
}

export function Footer() {
  const { street, city, state, postcode, country } = siteConfig.address;

  return (
    <footer className="bg-navy py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Logo />
            <p className="text-sm text-white/60 leading-relaxed mt-4">
              Boutique corporate PR firm trusted by companies, governments, and
              organisations across Australia, the Pacific, and internationally.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={siteConfig.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-brand-gold transition-colors"
                aria-label="CRC Public Relations on LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
              <a
                href={siteConfig.lyallTwitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-brand-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="size-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-sans font-medium text-brand-gold tracking-[0.14em] uppercase mb-4">
              Services
            </h4>
            <ul>
              {serviceLinks.map(({ label, slug }) => (
                <li key={slug}>
                  <Link
                    href={`/services/${slug}`}
                    className="text-sm text-white/60 hover:text-white py-1.5 block transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-sans font-medium text-brand-gold tracking-[0.14em] uppercase mb-4">
              Quick Links
            </h4>
            <ul>
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-white py-1.5 block transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-sans font-medium text-brand-gold tracking-[0.14em] uppercase mb-4">
              Contact
            </h4>
            <a
              href={siteConfig.phone.href}
              className="text-brand-gold font-heading font-black text-lg block hover:opacity-90 transition-opacity"
            >
              {siteConfig.phone.display}
            </a>
            <a
              href={`mailto:${siteConfig.email.general}`}
              className="text-sm text-white/60 hover:text-white mt-2 inline-block transition-colors"
            >
              {siteConfig.email.general}
            </a>
            <address className="text-sm text-white/40 mt-4 not-italic">
              {street}
              <br />
              {city} {state} {postcode}
              <br />
              {country}
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center flex-wrap gap-4">
          <p className="text-xs text-white/30">
            © {siteConfig.copyrightYear} CRC Public Relations. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/30">
            <Link href={siteConfig.privacyPolicyUrl} className="hover:text-white/50 transition-colors">
              Privacy Policy
            </Link>
            <Link href={siteConfig.termsUrl} className="hover:text-white/50 transition-colors">
              Terms
            </Link>
            <span>Part of the CRC PR ecosystem</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
