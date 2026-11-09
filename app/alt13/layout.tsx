import type { Metadata } from "next";
import { KitLayout } from "@/components/altkit/KitLayout";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function LetterheadLayout({ children }: { children: React.ReactNode }) {
  return <KitLayout id="alt13">{children}</KitLayout>;
}
