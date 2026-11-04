import type { Metadata } from "next";
import { Alt3Home } from "@/components/altkit/Alt3Home";
import { CONCEPTS } from "@/components/altkit/concepts";
import { getA1Posts, toCard } from "@/components/altkit/insights";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Alt 3 Ember | CRC PR homepage concepts",
};

export default function EmberPage() {
  return <Alt3Home posts={getA1Posts(CONCEPTS.alt3.base).map(toCard)} />;
}
