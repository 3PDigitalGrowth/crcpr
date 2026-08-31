import type { Metadata } from "next";
import { Alt5 } from "@/components/alt/Alt5";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Alt 5 | CRC PR homepage concepts",
};

export default function Alt5Page() {
  return <Alt5 />;
}
