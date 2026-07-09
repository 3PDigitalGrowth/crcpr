"use client";

import { usePathname } from "next/navigation";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/shared/MobileCallBar";
import { DesktopStickyBar } from "@/components/layout/DesktopStickyBar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

/**
 * Wraps every page in the site chrome, except the embedded Sanity Studio at
 * /studio which needs the full viewport to itself.
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <ScrollToTop />
      <Nav />
      <DesktopStickyBar />
      <main>{children}</main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
