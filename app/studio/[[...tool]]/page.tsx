import type { Metadata } from "next";
import { cmsConfigured } from "@/sanity/env";
import { Studio } from "./Studio";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Content Studio | CRC Public Relations",
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  if (!cmsConfigured) {
    return (
      <main className="min-h-screen bg-off-white flex items-center justify-center px-6">
        <div className="max-w-xl bg-white border border-brand-border rounded-lg p-8">
          <h1 className="font-heading font-black text-navy text-2xl mb-4">
            Content Studio is not connected yet
          </h1>
          <p className="text-charcoal text-sm leading-relaxed mb-3">
            The CMS needs a Sanity project ID before this page can load. Add
            NEXT_PUBLIC_SANITY_PROJECT_ID (and optionally
            NEXT_PUBLIC_SANITY_DATASET) to the environment, then redeploy.
          </p>
          <p className="text-charcoal-mid text-sm leading-relaxed">
            Full instructions live in CMS-SETUP.md in the site repository.
          </p>
        </div>
      </main>
    );
  }

  return <Studio />;
}
