import type { Metadata } from "next";
import { Alt15Home } from "@/components/altkit/Alt15Home";
import { CONCEPTS } from "@/components/altkit/concepts";
import { getA1Posts, toCard } from "@/components/altkit/insights";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Alt 15 Linework | CRC PR homepage concepts",
};

export default function LineworkPage() {
  return <Alt15Home posts={getA1Posts(CONCEPTS.alt15.base).map(toCard)} />;
}
