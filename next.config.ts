import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "tuitionterminal.com.bd",
      },
    ],
  }
  /* config options here */
};

export default nextConfig;
