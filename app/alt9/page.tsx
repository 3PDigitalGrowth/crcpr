import type { Metadata } from "next";
import { Alt9 } from "@/components/alt/Alt9";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Alt 9 | CRC PR homepage concepts",
};

export default function Alt9Page() {
  return <Alt9 />;
}
