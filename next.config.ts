// next.config.ts
// import { env } from "@/env";
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
    // async rewrites() {
    //     return [
    //         {
    //             source: "/api/auth/:path*",
    //             destination: `${env.BACKEND_URL}/api/auth/:path*`,
    //         },
    //         {
    //             source: "/api/:path*",
    //             destination: `${env.BACKEND_URL}/api/:path*`,
    //         },
    //         {
    //             source: "/about/y",
    //             destination: `https://www.youtube.com/watch?v=xuFBmJGDDS0`,
    //         },
    //     ];
    // },
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