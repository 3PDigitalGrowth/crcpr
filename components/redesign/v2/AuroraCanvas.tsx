/**
 * AuroraCanvas — the continuous, seamless background for the V2 homepage.
 *
 * Soft gold/teal blobs drift behind a warm-cream base and a fine film grain sits
 * on top. Because this is a single fixed layer behind every section, the page
 * reads as one canvas with no hard colour seams between sections. Pure CSS, so it
 * stays cheap and respects prefers-reduced-motion (handled in globals.css).
 */
export function AuroraCanvas() {
  return (
    <div
      aria-hidden
      className="v2-grain pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#F5F2EC]"
    >
      <div
        className="v2-aurora-blob"
        style={{
          top: "-12%",
          left: "-8%",
          width: "55vw",
          height: "55vw",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.20), transparent 65%)",
          animationDelay: "0s",
        }}
      />
      <div
        className="v2-aurora-blob"
        style={{
          top: "28%",
          right: "-15%",
          width: "50vw",
          height: "50vw",
          background:
            "radial-gradient(circle, rgba(7,175,187,0.14), transparent 65%)",
          animationDelay: "-9s",
        }}
      />
      <div
        className="v2-aurora-blob"
        style={{
          bottom: "-18%",
          left: "20%",
          width: "48vw",
          height: "48vw",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.14), transparent 65%)",
          animationDelay: "-17s",
        }}
      />
    </div>
  );
}
