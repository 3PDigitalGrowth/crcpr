import type { Metadata } from "next";
import { Alt4 } from "@/components/alt/Alt4";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Alt 4 | CRC PR homepage concepts",
};

export default function Alt4Page() {
  return <Alt4 />;
}
