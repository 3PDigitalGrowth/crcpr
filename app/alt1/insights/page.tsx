import type { Metadata } from "next";
import { InsightsHub } from "@/components/altkit/pages/InsightsHub";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Insights | Signal | CRC Public Relations",
  description: "Insights, commentary, and crisis thinking from Lyall Mercer and the CRC Public Relations team.",
};

export default function SignalInsightsPage() {
  return <InsightsHub id="alt1" />;
}
