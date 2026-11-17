import type { ReactNode } from "react";
import "./altkit.css";
import { CONCEPTS } from "./concepts";
import { fontClasses } from "./fonts";
import { Header } from "./chrome";
import { Footer } from "./Footer";
import { StickyCta } from "./StickyCta";

/**
 * Chrome for the live site. Client approval, 17 Nov 2026: "Please create the
 * whole site in this version (white option)", so every public page renders
 * inside the Chambers (alt2) frame, fixed to the white background, with no
 * review-only background switch.
 */
export function SiteShell({ children }: { children: ReactNode }) {
  const base = CONCEPTS.site.base;
  return (
    <div
      id="kit-root"
      data-concept="alt2"
      data-theme="white"
      data-light-chrome=""
      data-site=""
      className={`kit ${fontClasses("site")} min-h-screen`}
    >
      <div className="kit-canvas">
        <Header base={base} />
        <main>{children}</main>
        <Footer base={base} />
        <StickyCta />
      </div>
    </div>
  );
}
