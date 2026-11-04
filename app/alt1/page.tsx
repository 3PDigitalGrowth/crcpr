import type { Metadata } from "next";
import { Alt1Home } from "@/components/altkit/Alt1Home";
import { CONCEPTS } from "@/components/altkit/concepts";
import { getA1Posts, toCard } from "@/components/altkit/insights";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Alt 1 Signal | CRC PR homepage concepts",
};

export default function SignalPage() {
  return <Alt1Home posts={getA1Posts(CONCEPTS.alt1.base).map(toCard)} />;
}
