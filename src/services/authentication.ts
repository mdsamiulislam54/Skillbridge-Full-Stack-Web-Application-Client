import { env } from "@/env";

export const  authenticationService = {
    login: async (payload: { email: string, password: string }) => {
        try {
            const res = await fetch(`${env.NEXT_PUBLIC_AUTH_URL}/api/auth/sign-in/email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(payload)

            })

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Login failed');
            }

            const data = await res.json();

            return data.user;

        } catch (error) {
            throw error;
        }
    },
    signOut: async () => {

        try {
            const res = await fetch(`${env.NEXT_PUBLIC_AUTH_URL}/api/auth/sign-out`, {
                method: "POST",
                credentials: "include"
            })
            if (!res.ok) {
                throw new Error("Sign out failed");
            }
            return res
        } catch (error) {
            throw error
        }
    },

    register: async (payload: { name: string, password: string, email: string, images?: string, role: string }) => {
        try {
            const res = await fetch(`${env.NEXT_PUBLIC_AUTH_URL}/api/auth/sign-up/email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(payload)

            })

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Registration failed');
            }

            const data = await res.json();

            return data.user;

        } catch (error) {
            throw error;
        }
    },

  
}