import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactFormSection } from "@/components/contact/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact CRC Public Relations",
  description:
    "Contact CRC Public Relations for a confidential consultation. Corporate communications, reputation management, crisis response, and media training.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT US"
        title="Let's discuss your needs."
        description="Every conversation with CRC PR begins with listening. Tell us about your situation and we'll respond promptly — with confidentiality guaranteed."
      />
      <ContactFormSection />
    </>
  );
}
