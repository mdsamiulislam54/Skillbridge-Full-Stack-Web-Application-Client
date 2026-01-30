import { config } from "@/config/config"
import { TutorFormValues } from "@/lib/validator/tutor.schema"

export const TutorService = {
    tutorProfileCreate: async (payload: TutorFormValues) => {
        try {
            const res = await fetch(`${config.backendUrl}/api/tutor/create`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify(payload)
            })


            if (!res.ok) {
                const errorData = await res.json();
                console.log(errorData)
                throw new Error(errorData.message || 'Profile Create  failed');
            }

            return res
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}