import type { Metadata } from "next";
import { InsightsHub } from "@/components/altkit/pages/InsightsHub";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Insights | Gallery | CRC Public Relations",
  description: "Insights, commentary, and crisis thinking from Lyall Mercer and the CRC Public Relations team.",
};

export default function GalleryInsightsPage() {
  return <InsightsHub id="alt9" />;
}
