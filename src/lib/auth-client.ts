
import { createAuthClient } from "better-auth/react"
import { inferAdditionalFields } from "better-auth/client/plugins";
export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
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


