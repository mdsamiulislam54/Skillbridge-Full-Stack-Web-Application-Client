import { cookies } from "next/headers";
const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL as string;

export const getSession = async () => {
    try {
        const cookieStore = await cookies();
        const res = await fetch(`${BackendUrl}/api/auth/get-session`, {
            headers: {
                Cookie: cookieStore.toString(),
            },
            cache: "no-store",
        });
        const session = await res.json();
        if (session === null) {
            return { data: null, message: "No active session", status: false };
        }
        return session;
    } catch (error) {
        console.error('getSession error:', error);
        return {
            data: null,
            message: "Failed to fetch session data",
            status: false,
        };
    }
}