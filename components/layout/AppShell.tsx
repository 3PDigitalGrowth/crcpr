"use client";

import { usePathname } from "next/navigation";
import { SiteShell } from "@/components/altkit/SiteShell";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { EditModeBridge } from "@/components/admin/EditModeBridge";

/**
 * Wraps every public page in the site chrome: the approved Chambers design
 * (white option) from the concept kit. The content editor at /admin, the /alt
 * design explorations (each carries its own themed nav and footer), the /plan
 * forward planner, the email preview and the archived /redesign homepage
 * render bare.
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBare =
    pathname?.startsWith("/admin") ||
    pathname?.startsWith("/alt") ||
    pathname?.startsWith("/plan") ||
    pathname?.startsWith("/email-preview") ||
    pathname?.startsWith("/redesign");

  if (isBare) {
    return <>{children}</>;
  }

  return (
    <>
      <EditModeBridge />
      <ScrollToTop />
      <SiteShell>{children}</SiteShell>
    </>
  );
}
