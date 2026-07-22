"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { MyPRPartnerCTA } from "@/components/shared/MyPRPartnerCTA";

const serviceLinks = [
  { label: "Corporate communications", slug: "corporate-communications" },
  { label: "Media relations & strategy", slug: "media-strategy" },
  { label: "Reputation management", slug: "reputation-management" },
  { label: "Crisis communications", slug: "crisis-communications" },
  { label: "Issues management", slug: "issues-management" },
  { label: "Digital media", slug: "digital-media" },
] as const;

const quickLinks = [
  { label: "Crisis", href: "/services/crisis-communications" },
  { label: "Pacific", href: "/pacific" },
  { label: "Industry Associations", href: "/clients/industry-associations" },
  { label: "Case studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Insights", href: "/insights" },
] as const;

function Logo() {
  return (
    <Image
      src="/images/crc-logo.png"
      alt="CRC Public Relations"
      width={555}
      height={140}
      className="h-9 w-auto"
    />
  );
}

export function Footer() {
  const { street, city, state, postcode, country } = siteConfig.address;

  return (
    <footer className="bg-charcoal py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo />
            <p className="text-sm text-white/60 leading-relaxed mt-4">
              Boutique corporate PR firm trusted by CEOs, directors, and
              executives across Australia, the Pacific, and internationally.
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
            </div>
          </div>

          <div>
            <h4 className="text-xs font-sans font-medium text-brand-gold mb-4">
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
            <h4 className="text-xs font-sans font-medium text-brand-gold mb-4">
              Quick links
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
            <h4 className="text-xs font-sans font-medium text-brand-gold mb-4">
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

        <div className="border-t border-white/10 pt-8 mt-8">
          <p className="text-white/40 text-xs font-medium mb-4">
            The CRC Public Relations group ecosystem
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-white font-heading font-black text-sm mb-1">CRC Public Relations</p>
              <p className="text-white/50 text-xs leading-relaxed mb-2">
                Boutique corporate PR, reputation management and crisis communications.
              </p>
              <span className="text-brand-gold text-xs font-medium">You are here</span>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-white font-heading font-black text-sm mb-1">Crisis Communications Australia</p>
              <p className="text-white/50 text-xs leading-relaxed mb-2">
                24/7 crisis support.
              </p>
              <a href={siteConfig.crisisCommsAuUrl} target="_blank" rel="noopener noreferrer" className="text-brand-teal text-xs font-medium hover:underline">
                crisiscommunications.com.au →
              </a>
            </div>
            <MyPRPartnerCTA
              variant="dark"
              compact
              title="My PR Partner"
              description="CRC Public Relations' training platform for communications professionals, workshops, and practical crisis communications education."
              buttonLabel="Visit My PR Partner"
              className="h-full"
            />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center flex-wrap gap-4">
          <p className="text-xs text-white/30">
            © {siteConfig.copyrightYear} CRC Public Relations. All rights reserved.{" "}
            <a href="https://www.3pdigital.com.au" target="_blank" rel="noopener" className="hover:text-white/50 transition-colors">Proudly supported by 3P Digital</a>
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/30">
            <Link href={siteConfig.privacyPolicyUrl} className="hover:text-white/50 transition-colors">
              Privacy Policy
            </Link>
            <Link href={siteConfig.termsUrl} className="hover:text-white/50 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
