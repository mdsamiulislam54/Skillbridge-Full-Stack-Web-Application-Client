
import { createAuthClient } from "better-auth/react"
import { inferAdditionalFields } from "better-auth/client/plugins";
import { config } from "@/config/config";
export const authClient = createAuthClient({
    baseURL: config.backendUrl,
    credentials: 'include',
    fetchOptions: {
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'skillbridge-server-inky'
        },
     
    },
    plugins: [inferAdditionalFields({
        user: {
            role: {
                type: "string"
            }
        }
    })],


})


