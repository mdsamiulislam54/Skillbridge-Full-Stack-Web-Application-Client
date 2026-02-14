// next.config.ts
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
    },
    async rewrites() {
        return [
            {
                source: "/api/auth/:path*",
                destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/:path*`,
            },
        ];
    },

};

export default nextConfig;