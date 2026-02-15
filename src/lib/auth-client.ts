
import { createAuthClient } from "better-auth/react"
import { inferAdditionalFields } from "better-auth/client/plugins";
import { env } from "@/env";
export const authClient = createAuthClient({
    baseURL: `${env.NEXT_PUBLIC_AUTH_URL}/api/auth`,

    fetchOptions: {
        credentials: 'include',
    },
    plugins: [inferAdditionalFields({
        user: {
            role: {
                type: "string"
            }
        }
    })],


})


