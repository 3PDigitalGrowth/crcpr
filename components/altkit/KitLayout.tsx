import type { ReactNode } from "react";
import "./altkit.css";
import { CONCEPTS, themeKey, type ConceptId } from "./concepts";
import { fontClasses } from "./fonts";
import { Header, ThemeSwitch } from "./chrome";
import { Footer } from "./Footer";

/** Runs before first paint so the chosen background never flashes the other one. */
function themeScript(id: ConceptId, fallback: string) {
  const key = themeKey(id);
  return `(function(){try{var r=document.getElementById('kit-root');var q=new URLSearchParams(location.search).get('theme');var s=null;try{s=localStorage.getItem('${key}')}catch(e){}var t=(q==='white'||q==='dark')?q:s;if(q){try{localStorage.setItem('${key}',q)}catch(e){}}r.setAttribute('data-theme',t==='white'||t==='dark'?t:'${fallback}');}catch(e){}})();`;
}

export function KitLayout({ id, children }: { id: ConceptId; children: ReactNode }) {
  const c = CONCEPTS[id];
  return (
    <div
      id="kit-root"
      data-concept={id}
      data-theme={c.defaultTheme}
      data-dark-base={c.darkBase ? "" : undefined}
      data-light-chrome={c.lightChrome ? "" : undefined}
      suppressHydrationWarning
      className={`kit ${fontClasses(id)} min-h-screen`}
    >
      <script dangerouslySetInnerHTML={{ __html: themeScript(id, c.defaultTheme) }} />
      <div className="kit-canvas">
        <Header base={c.base} />
        <main>{children}</main>
        <Footer base={c.base} />
      </div>
      <ThemeSwitch id={id} defaultTheme={c.defaultTheme} />
    </div>
  );
}
