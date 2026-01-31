
import { config } from "@/config/config"
import { TutorFormValues } from "@/lib/validator/tutor.schema"
import { SlotsType } from "@/type/slots.type";




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
                throw new Error(errorData.message || 'Profile Create  failed');
            }

            return res
        } catch (error) {
            console.log(error)
            throw error
        }
    },
    tutorSlotsCreate: async (payload: SlotsType) => {
        try {
            const res = await fetch(`${config.backendUrl}/api/tutor/create/slots`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify(payload)
            })


            if (!res.ok) {
                const errorData = await res.json();

                throw new Error(errorData.message || 'Slots Create  failed');
            }

            return res
        } catch (error) {
            console.log(error)
            throw error
        }
    },
    getTutorProfile: async (cookie?: string) => {
        try {
       
            const res = await fetch(`${config.backendUrl}/api/tutor/get-profile`, {
                method:"GET",
                headers: {
                    "Content-Type": "application/json",
                    ...(cookie ? { cookie } : {}),
                },
                credentials:"include"

            })
            const data = await res.json();
            console.log(data)
            return { success: true, data }
        } catch (error) {
            console.log(error)
            throw error
        }
    },
    getTutorProfileAll: async () => {
        try {
            const res = await fetch(`${config.backendUrl}/api/tutor/get-profile/all`)
            const data = await res.json();
            return { success: true, data }
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}