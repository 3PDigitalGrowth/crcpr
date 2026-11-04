import type { Metadata } from "next";
import { KitLayout } from "@/components/altkit/KitLayout";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <KitLayout id="alt9">{children}</KitLayout>;
}
