import { config } from "@/config/config"
import { BookingType } from "@/type/booking.type"

export const studentService = {
    createBooking: async (payload: BookingType) => {
        try {
            const res = await fetch(`${config.backendUrl}/api/booking`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"

                },

                credentials: "include",
                body: JSON.stringify(payload)
            })

            return res

        } catch (error) {
            throw error
        }
    },

    getStudentOwnBookings: async (cookie?: string) => {
        try {

            const res = await fetch(`${config.backendUrl}/api/student/booking`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    ...(cookie ? { cookie } : {}),
                },
                credentials: "include"

            })
            return await res.json();

        } catch (error) {
            console.log(error)
            throw error
        }
    },
    getStudentDashboardData: async (cookie?: string) => {
        try {

            const res = await fetch(`${config.backendUrl}/api/student/dashboard`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    ...(cookie ? { cookie } : {}),
                },
                credentials: "include"

            })
            return await res.json();

        } catch (error) {
           
            throw error
        }
    },
}