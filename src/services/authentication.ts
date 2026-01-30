import { config } from "@/config/config"

export const authenticationService = {
    login: async (payload: { email: string, password: string }) => {
        try {
            const res = await fetch(`${config.backendUrl}/api/auth/sign-in/email`, {
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
    logout: async () => {
        // Implement logout logic here
    },
    register: async (payload: {name: string, password: string, email: string, images?: string}) => {
        try {
            const res = await fetch(`${config.backendUrl}/api/auth/sign-up/email`, {
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
    }
}