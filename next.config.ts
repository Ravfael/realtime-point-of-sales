import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  devIndicators: false,
  images: {
    domains: ["https://yhliafevlqliqinjmoux.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yhliafevlqliqinjmoux.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
