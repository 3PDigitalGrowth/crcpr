import type { Metadata } from "next";
import { Alt1 } from "@/components/alt/Alt1";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Alt 1 | CRC PR homepage concepts",
};

export default function Alt1Page() {
  return <Alt1 />;
}
