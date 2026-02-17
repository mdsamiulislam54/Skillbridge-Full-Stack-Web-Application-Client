import { env } from "@/env";
import { cookies } from "next/headers";

export const getSession = async () => {

    try {

        const cookieStore = await cookies();

        // ✅ FIX cookie format
        const cookieHeader = cookieStore
            .getAll()
            .map((c) => `${c.name}=${c.value}`)
            .join("; ");

        const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/api/auth/get-session`,
            {
                method: "GET",

                headers: {
                    cookie: cookieHeader,
                },

                cache: "no-store",
            }
        );

        const session = await res.json();

        // console.log("SESSION:", session);

        return session;

    } catch (error) {

        console.error(error);

        return {
            data: null,
            error: { message: "Something went wrong" },
        };

    }

};
