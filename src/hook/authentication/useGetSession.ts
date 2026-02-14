// src/hook/authentication/useGetSession.ts
import { config } from "@/config/config";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const getSession = async () => {
    try {
        const cookieStore = await cookies();

        const res = await fetch(
            `${config.backendUrl}/api/auth/get-session`,
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Cookie": cookieStore.toString(),
                },
                credentials:"include",
                cache: "no-store",
            }
        );

        if (!res.ok) {
            return null;
        }

        const data = await res.json();
        console.log("Get Session:", data)
        return data;

    } catch (error) {
        console.error('getSession error:', error);
        return null;
    }
};