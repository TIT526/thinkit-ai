import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages compatible
  images: {
    unoptimized: true,
  },
  experimental: {
    // Ensure Node.js runtime for auth routes
  },
};

export default nextConfig;
