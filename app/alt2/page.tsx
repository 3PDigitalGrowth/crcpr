import type { Metadata } from "next";
import { Alt2 } from "@/components/alt/Alt2";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Alt 2 | CRC PR homepage concepts",
};

export default function Alt2Page() {
  return <Alt2 />;
}
