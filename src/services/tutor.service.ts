
import { config } from "@/config/config"
import { TutorFormValues } from "@/lib/validator/tutor.schema"
import { SlotsType, UpdateSlotsType } from "@/type/slots.type";

interface GetParams {
    page?: string,
    limit?: string
    search?: string
}



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
    getTutorProfileById: async (cookie?: string) => {
        try {

            const res = await fetch(`${config.backendUrl}/api/tutor/get-profile`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    ...(cookie ? { cookie } : {}),
                },
                credentials: "include"

            })
            const data = await res.json();

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
    },

    getTutorSlots: async (cookie?: string) => {
        try {

            const res = await fetch(`${config.backendUrl}/api/tutor/slots`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    ...(cookie ? { cookie } : {}),
                },
                credentials: "include"

            })
            const data = await res.json();

            return { success: true, data }
        } catch (error) {
            console.log(error)
            throw error
        }
    },
    getDashboardCard: async (cookie?: string) => {
        try {

            const res = await fetch(`${config.backendUrl}/api/tutor/dashboard`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    ...(cookie ? { cookie } : {}),
                },
                credentials: "include"

            })
            const data = await res.json();

            return { success: true, data }
        } catch (error) {

            throw error
        }
    },
    getChartData: async (cookie?: string) => {
        try {

            const res = await fetch(`${config.backendUrl}/api/tutor/dashboard/chart-data`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    ...(cookie ? { cookie } : {}),
                },
                credentials: "include"

            })
            const data = await res.json();

            return { success: true, data }
        } catch (error) {

            throw error
        }
    },
    slotsDelete: async (id: string) => {
        try {

            const res = await fetch(`${config.backendUrl}/api/tutor/slots/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"

                },
                credentials: "include"

            })
            const data = await res.json();

            return { success: true, data }
        } catch (error) {

            throw error
        }
    },
    slotsUpdate: async (id: string, payload: UpdateSlotsType) => {
        try {

            const res = await fetch(`${config.backendUrl}/api/tutor/slots/update/${id}`, {
                "cache": "no-store",
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(payload)
            })
            const data = await res.json();

            return { success: true, data }
        } catch (error) {

            throw error
        }
    },
    tutorProfileUpdate: async (id: string, payload: TutorFormValues) => {
        try {

            const res = await fetch(`${config.backendUrl}/api/tutor/profile/update/${id}`, {
                "cache": "no-store",
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(payload)
            })
            const data = await res.json();

            return { success: true, data }
        } catch (error) {

            throw error
        }
    },

    profileDelete: async (id: string) => {
        try {

            const res = await fetch(`${config.backendUrl}/api/tutor/profile/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"

                },
                credentials: "include"

            })
            const data = await res.json();

            return { success: true, data }
        } catch (error) {

            throw error
        }
    },
    getAllTutorProfile: async (params: GetParams) => {
        try {
            const url = new URL(`${config.backendUrl}/api/tutor`);

            if (params) {
                Object.entries(params).forEach(([key, value]) => {
                    if (value !== undefined && value !== null && value !== '') {
                        url.searchParams.append(key, value)
                    }
                })
            }

            const res = await fetch(url)
            return await res.json();

        } catch (error) {
            throw error
        }
    },
}