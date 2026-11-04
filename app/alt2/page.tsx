import type { Metadata } from "next";
import { Alt2Home } from "@/components/altkit/Alt2Home";
import { CONCEPTS } from "@/components/altkit/concepts";
import { getA1Posts, toCard } from "@/components/altkit/insights";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Alt 2 Chambers | CRC PR homepage concepts",
};

export default function ChambersPage() {
  return <Alt2Home posts={getA1Posts(CONCEPTS.alt2.base).map(toCard)} />;
}
