import { config } from "@/config/config"
import { BookingType } from "@/type/booking.type"
import { GetParams } from "./tutor.service"
import { Review, ReviewForm } from "@/type/Review.type"

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

    getStudentOwnBookings: async (params:GetParams, cookie?: string) => {
        try {

            const url = new URL(`${config.backendUrl}/api/student/booking`);

            if (params) {
                Object.entries(params).forEach(([key, value]) => {
                    if (value !== undefined && value !== null && value !== '') {
                        url.searchParams.append(key, value)
                    }
                })
            }
            const res = await fetch(url, {
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

    getDashboardChartData: async (cookie?: string) => {
        try {

            const res = await fetch(`${config.backendUrl}/api/student/dashboard/chart`, {
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
    createReview: async (data:ReviewForm,cookie?: string) => {
        try {
            const res = await fetch(`${config.backendUrl}/api/student/review`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(cookie ? { cookie } : {}),
                },
                credentials: "include",
                body:JSON.stringify(data)
            });
            return await res.json();
        } catch (error) {
            throw error
        }
    },
}