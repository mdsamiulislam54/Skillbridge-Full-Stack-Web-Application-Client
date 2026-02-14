
import { createAuthClient } from "better-auth/react"
import { inferAdditionalFields } from "better-auth/client/plugins";

export const authClient = createAuthClient({
    baseURL: typeof window !== "undefined" ? window.location.origin : "",
    basePath: "/api/auth",
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


