/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Keep static assets out of serverless function bundles. public/ is
    // served from the CDN; without this, any route the tracer over-includes
    // drags ~116 MB of images into its function and can breach the 250 MB
    // Vercel function limit.
    outputFileTracingExcludes: {
      "*": ["./public/**", "./images/**", "./Presentations/**"],
    },
  },
};

export default nextConfig;
