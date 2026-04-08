import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Terms of Use",
  description: "CRC Public Relations terms of use.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="The terms that govern use of the CRC Public Relations website, including content use, acceptable use, liability, and contact pathways."
        ctaLabel="Contact CRC Public Relations"
        ctaHref="/contact"
      />

      <PageProofStrip
        title="These terms are designed to be clear, practical, and consistent with a professional-services website."
        items={[
          {
            label: "Use",
            value: "General information",
            detail:
              "Site content is intended as general information and does not create a professional relationship by itself.",
          },
          {
            label: "Rights",
            value: "Protected content",
            detail:
              "CRC Public Relations content, branding, and materials remain protected by copyright and other applicable rights.",
          },
          {
            label: "Contact",
            value: "Ask directly",
            detail:
              "If a term is unclear, contact CRC Public Relations directly rather than making assumptions about its application.",
          },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-charcoal-mid text-[15px] leading-relaxed">
            These terms explain how the CRC Public Relations website may be used and the basis on
            which its content is provided. They are written to be readable, not merely
            comprehensive, so users can understand the practical boundaries quickly.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-black prose-headings:text-navy prose-p:text-charcoal prose-p:leading-relaxed prose-a:text-brand-gold prose-strong:text-charcoal prose-li:text-charcoal">
          <p className="lead text-charcoal-mid">
            These terms govern your use of the CRC Public Relations website
            located at{" "}
            <a
              href={siteConfig.crcPrUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.crcPrUrl}
            </a>{" "}
            (&quot;Site&quot;). By accessing or using the Site, you agree to
            these terms. If you do not agree, please do not use the Site.
          </p>

          <h2>Professional services</h2>
          <p>
            Content on this Site is for general information only and does not
            constitute legal, financial, or other professional advice. A
            client relationship is not formed by browsing the Site or sending
            an enquiry. Any engagement of CRC Public Relations is subject to a separate
            agreement and our professional obligations.
          </p>

          <h2>Intellectual property</h2>
          <p>
            Unless otherwise stated, text, graphics, logos, and other materials
            on the Site are owned by or licensed to CRC Public Relations and are protected by
            copyright and other intellectual property laws. You may view and
            print pages for personal, non-commercial use. You must not copy,
            reproduce, distribute, or create derivative works without our prior
            written consent.
          </p>

          <h2>Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>
              use the Site in any way that violates applicable laws or
              regulations;
            </li>
            <li>
              attempt to gain unauthorised access to our systems, networks, or
              data;
            </li>
            <li>
              introduce malware, scrape the Site in bulk, or interfere with
              the Site&apos;s operation; or
            </li>
            <li>
              use the Site to harass, defame, or misrepresent CRC Public Relations or third
              parties.
            </li>
          </ul>

          <h2>Third-party links</h2>
          <p>
            The Site may contain links to third-party websites. Those sites are
            not under our control; we are not responsible for their content or
            privacy practices. External links open in a new tab where
            indicated; you should review the terms and policies of any site you
            visit.
          </p>

          <h2>Disclaimer and limitation of liability</h2>
          <p>
            The Site and its content are provided &quot;as is&quot; without
            warranties of any kind, to the fullest extent permitted by law. To
            the extent permitted by law, CRC Public Relations and its directors, employees,
            and contractors are not liable for any indirect, consequential, or
            special loss arising from your use of the Site or reliance on its
            content.
          </p>

          <h2>Privacy</h2>
          <p>
            Our collection and use of personal information is described in our{" "}
            <Link href={siteConfig.privacyPolicyUrl}>Privacy Policy</Link>.
          </p>

          <h2>Changes</h2>
          <p>
            We may update these terms from time to time. The revised terms will
            be posted on this page with an updated effective date. Continued
            use of the Site after changes constitutes acceptance of the revised
            terms.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of Queensland, Australia. You
            submit to the non-exclusive jurisdiction of the courts of
            Queensland and the Commonwealth of Australia.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms can be directed via our{" "}
            <Link href="/contact">contact page</Link> or{" "}
            <a href={`mailto:${siteConfig.email.general}`}>
              {siteConfig.email.general}
            </a>
            .
          </p>

          <p className="text-sm text-charcoal-mid">
            Effective: March 2026.
          </p>
        </div>
      </section>

      <PageClosingCTA
        title="Need clarification on these terms?"
        body="If you have a question about how these terms apply to your use of the site or a potential engagement, contact CRC Public Relations directly and we will clarify the appropriate position."
        primaryLabel="Contact CRC Public Relations"
      />
    </>
  );
}
