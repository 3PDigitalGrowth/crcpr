/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // The file tracer includes a whole-project glob for the /admin routes
    // (trigger unknown; the compiled admin chunks contain no fs/cwd calls).
    // Without these excludes each admin serverless function packs .git,
    // .next/cache and public/ and breaches Vercel's 250 MB function limit.
    // With them the traced size is ~5 MB. Static assets in public/ are
    // served from the CDN and never needed inside a function.
    outputFileTracingExcludes: {
      "*": [
        "./.git/**",
        "./.next/cache/**",
        "./public/**",
        "./images/**",
        "./Presentations/**",
        "./.gstack/**",
        "./.vscode/**",
        "./node_modules/@next/swc*/**",
        "./node_modules/typescript/**",
        "./node_modules/@esbuild/**",
        "./node_modules/prettier/**",
        "./node_modules/@img/**",
      ],
    },
  },
};

export default nextConfig;
