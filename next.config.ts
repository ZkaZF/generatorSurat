import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow @react-pdf/renderer to run server-side
  serverExternalPackages: ['@react-pdf/renderer'],
  turbopack: {},
  images: {
    remotePatterns: [],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
