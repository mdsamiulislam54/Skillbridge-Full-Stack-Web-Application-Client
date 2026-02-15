// next.config.ts
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
    async rewrites() {
        return [
            {
                source: "/api/auth/:path*",
                destination: `${process.env.BACKEND_URL}/api/auth/:path*`,
            },
            {
                source: "/api/:path*",
                destination: `${process.env.BACKEND_URL}/api/:path*`,
            },
        ];
    },
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


};

export default nextConfig;