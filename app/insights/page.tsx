import type { Metadata } from "next";
import { InsightsHub } from "@/components/altkit/pages/InsightsHub";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Insights, commentary, and crisis thinking from Lyall Mercer and the CRC Public Relations team.",
};

export default function InsightsPage() {
  return <InsightsHub id="site" />;
}
