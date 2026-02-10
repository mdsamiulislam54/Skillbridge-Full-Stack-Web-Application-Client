import { createAuthClient } from "better-auth/react"
import { inferAdditionalFields } from "better-auth/client/plugins";
import { config } from "@/config/config";
export const authClient = createAuthClient({
    baseURL: config.backendUrl,
    credentials: 'include',
    plugins: [inferAdditionalFields({
        user: {
            role: {
                type: "string"
            }
        }
    })],

})


