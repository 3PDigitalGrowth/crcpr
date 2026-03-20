import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Privacy Policy",
  description: "CRC Public Relations privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL"
        title="Privacy Policy"
        description="How CRC Public Relations collects, uses, and protects personal information in connection with this website and our professional services."
        ctaLabel="CONTACT CRC PR"
        ctaHref="/contact"
      />

      <PageProofStrip
        title="Privacy is treated as a trust issue, not an administrative afterthought."
        items={[
          {
            label: "Purpose",
            value: "Clear handling",
            detail:
              "This policy explains what information we collect, why we collect it, and how it is used.",
          },
          {
            label: "Standard",
            value: "Australian context",
            detail:
              "Our approach is framed around the Australian Privacy Principles and our wider duty of professional discretion.",
          },
          {
            label: "Action",
            value: "Questions welcome",
            detail:
              "If you need clarification, the right next step is to contact CRC PR directly.",
          },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-charcoal-mid text-[15px] leading-relaxed">
            CRC PR works in environments where confidentiality, discretion, and trust
            are central to the relationship. This page sets out how personal
            information is handled in a way that is clear, practical, and consistent
            with those expectations.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-black prose-headings:text-navy prose-p:text-charcoal prose-p:leading-relaxed prose-a:text-brand-gold prose-strong:text-charcoal prose-li:text-charcoal">
          <p className="lead text-charcoal-mid">
            This privacy policy describes how CRC Public Relations (&quot;CRC
            PR&quot;, &quot;we&quot;, &quot;us&quot;) collects, uses, and
            protects personal information in connection with this website and
            our professional services, in line with the Australian Privacy
            Principles under the <em>Privacy Act 1988</em> (Cth).
          </p>

          <h2>Information we collect</h2>
          <p>
            We may collect personal information that you voluntarily provide
            when you contact us, subscribe to updates, request resources, or
            engage our services. This may include your name, organisation, job
            title, email address, phone number, and the content of your enquiry
            or correspondence.
          </p>
          <p>
            We may also collect limited technical information when you use our
            website, such as IP address, browser type, device information, and
            pages visited, to maintain security and understand how the site is
            used.
          </p>

          <h2>How we use information</h2>
          <p>We use personal information to:</p>
          <ul>
            <li>respond to enquiries and provide professional services;</li>
            <li>
              send information or resources you have requested, where you have
              agreed to receive them;
            </li>
            <li>manage our client relationships and improve our services;</li>
            <li>comply with legal and regulatory obligations; and</li>
            <li>maintain the security and integrity of our website.</li>
          </ul>
          <p>
            We do not sell your personal information. Marketing communications
            are sent only where permitted by law and, where required, with your
            consent.
          </p>

          <h2>Information sharing</h2>
          <p>
            We may share personal information with trusted service providers
            who assist us (for example, email, hosting, or analytics providers)
            under strict confidentiality and only to the extent needed to
            perform their functions. We may also disclose information where
            required by law, to protect our rights, or in connection with a
            business transaction subject to appropriate safeguards.
          </p>

          <h2>Data security</h2>
          <p>
            We take reasonable steps to protect personal information from
            misuse, interference, loss, and unauthorised access, modification,
            or disclosure. No method of transmission over the internet is
            completely secure; you provide information at your own risk to the
            extent inherent in online communications.
          </p>

          <h2>Cookies and similar technologies</h2>
          <p>
            Our website may use cookies and similar technologies to remember
            preferences, measure site performance, and improve user experience.
            You can control cookies through your browser settings. Where we use
            analytics or third-party tools, we aim to configure them in line
            with applicable privacy requirements.
          </p>

          <h2>Your rights</h2>
          <p>
            Subject to applicable law, you may request access to the personal
            information we hold about you and ask us to correct inaccurate
            information. You may also withdraw consent for certain uses where
            consent is the legal basis, or complain about our handling of your
            information. We will respond to requests within a reasonable
            timeframe.
          </p>

          <h2>Contact us about privacy</h2>
          <p>
            For privacy questions, access requests, or complaints, please contact
            us using the details on our{" "}
            <Link href="/contact">contact page</Link> or email{" "}
            <a href={`mailto:${siteConfig.email.general}`}>
              {siteConfig.email.general}
            </a>
            . If you are not satisfied with our response, you may contact the
            Office of the Australian Information Commissioner (OAIC).
          </p>

          <p className="text-sm text-charcoal-mid">
            Last updated: March 2026. We may update this policy from time to
            time; the current version will always be published on this page.
          </p>
        </div>
      </section>

      <PageClosingCTA
        title="Need clarification on privacy or data handling?"
        body="If you have a privacy question, access request, or concern about how information is handled, contact CRC PR directly and we will point you to the right next step."
        primaryLabel="CONTACT CRC PR"
      />
    </>
  );
}
