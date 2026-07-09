import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";
import { siteConfig } from "@/config/site";
import { T } from "@/components/editable";

export const metadata = {
  title: "Terms of Use",
  description: "CRC Public Relations terms of use.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero copyId="terms"
        asidePreset="legalNeutral"
        eyebrow="Legal"
        title="Terms of Use"
        description="The terms that govern use of the CRC Public Relations website, including content use, acceptable use, liability, and contact pathways."
        ctaLabel="Contact CRC Public Relations"
        ctaHref="/contact"
      />

      <PageProofStrip copyId="terms"
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
            <T id="terms.t1">
            These terms explain how the CRC Public Relations website may be used and the basis on
            which its content is provided. They are written to be readable, not merely
            comprehensive, so users can understand the practical boundaries quickly.
            </T>
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

          <h2><T id="terms.t13">Professional services</T></h2>
          <p>
            <T id="terms.t2">
            Content on this Site is for general information only and does not
            constitute legal, financial, or other professional advice. A
            client relationship is not formed by browsing the Site or sending
            an enquiry. Any engagement of CRC Public Relations is subject to a separate
            agreement and our professional obligations.
            </T>
          </p>

          <h2><T id="terms.t14">Intellectual property</T></h2>
          <p>
            <T id="terms.t3">
            Unless otherwise stated, text, graphics, logos, and other materials
            on the Site are owned by or licensed to CRC Public Relations and are protected by
            copyright and other intellectual property laws. You may view and
            print pages for personal, non-commercial use. You must not copy,
            reproduce, distribute, or create derivative works without our prior
            written consent.
            </T>
          </p>

          <h2><T id="terms.t15">Acceptable use</T></h2>
          <p><T id="terms.t16">You agree not to:</T></p>
          <ul>
            <li>
              <T id="terms.t4">
              use the Site in any way that violates applicable laws or
              regulations;
              </T>
            </li>
            <li>
              <T id="terms.t5">
              attempt to gain unauthorised access to our systems, networks, or
              data;
              </T>
            </li>
            <li>
              <T id="terms.t6">
              introduce malware, scrape the Site in bulk, or interfere with
              the Site&apos;s operation; or
              </T>
            </li>
            <li>
              <T id="terms.t7">
              use the Site to harass, defame, or misrepresent CRC Public Relations or third
              parties.
              </T>
            </li>
          </ul>

          <h2><T id="terms.t17">Third-party links</T></h2>
          <p>
            <T id="terms.t8">
            The Site may contain links to third-party websites. Those sites are
            not under our control; we are not responsible for their content or
            privacy practices. External links open in a new tab where
            indicated; you should review the terms and policies of any site you
            visit.
            </T>
          </p>

          <h2><T id="terms.t18">Disclaimer and limitation of liability</T></h2>
          <p>
            <T id="terms.t9">
            The Site and its content are provided &quot;as is&quot; without
            warranties of any kind, to the fullest extent permitted by law. To
            the extent permitted by law, CRC Public Relations and its directors, employees,
            and contractors are not liable for any indirect, consequential, or
            special loss arising from your use of the Site or reliance on its
            content.
            </T>
          </p>

          <h2><T id="terms.t19">Privacy</T></h2>
          <p>
            Our collection and use of personal information is described in our{" "}
            <Link href={siteConfig.privacyPolicyUrl}><T id="terms.t20">Privacy Policy</T></Link>.
          </p>

          <h2><T id="terms.t21">Changes</T></h2>
          <p>
            <T id="terms.t10">
            We may update these terms from time to time. The revised terms will
            be posted on this page with an updated effective date. Continued
            use of the Site after changes constitutes acceptance of the revised
            terms.
            </T>
          </p>

          <h2><T id="terms.t22">Governing law</T></h2>
          <p>
            <T id="terms.t11">
            These terms are governed by the laws of Queensland, Australia. You
            submit to the non-exclusive jurisdiction of the courts of
            Queensland and the Commonwealth of Australia.
            </T>
          </p>

          <h2><T id="terms.t23">Contact</T></h2>
          <p>
            Questions about these terms can be directed via our{" "}
            <Link href="/contact"><T id="terms.t24">contact page</T></Link> or{" "}
            <a href={`mailto:${siteConfig.email.general}`}>
              {siteConfig.email.general}
            </a>
            .
          </p>

          <p className="text-sm text-charcoal-mid">
            <T id="terms.t12">
            Effective: March 2026.
            </T>
          </p>
        </div>
      </section>

      <PageClosingCTA copyId="terms"
        title="Need clarification on these terms?"
        body="If you have a question about how these terms apply to your use of the site or a potential engagement, contact us directly and we will clarify the appropriate position."
        primaryLabel="Contact CRC Public Relations"
      />
    </>
  );
}
