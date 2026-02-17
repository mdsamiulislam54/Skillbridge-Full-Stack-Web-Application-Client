
import { BookingType } from "@/type/booking.type"
import { GetParams } from "./tutor.service"
import { ReviewForm } from "@/type/Review.type"
import { env } from "@/env"


export const studentService = {
    createBooking: async (payload: BookingType) => {
        try {
            const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/api/booking`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"

                },

                credentials: "include",
                body: JSON.stringify(payload)
            })
            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || "API Error");
            }

            return await res.json()

        } catch (error) {
            throw error
        }
    },

    getStudentOwnBookings: async (params: GetParams, cookie?: string) => {
        try {

            const url = new URL(`${env.BACKEND_URL}/api/student/booking`);

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
            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || "API Error");
            }
            return await res.json();

        } catch (error) {
            console.log(error)
            throw error
        }
    },
    getStudentDashboardData: async (cookie?: string) => {
        try {

            const res = await fetch(`${env.BACKEND_URL}/api/student/dashboard`, {
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

            const res = await fetch(`${env.BACKEND_URL}/api/student/dashboard/chart`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    ...(cookie ? { cookie } : {}),
                },
                credentials: "include"

            })
            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || "API Error");
            }
            return await res.json();

        } catch (error) {

            throw error
        }
    },
    createReview: async (data: ReviewForm) => {
        try {
            const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/api/student/review`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(data)
            });
            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || "API Error");
            }
            return await res.json();
        } catch (error) {
            throw error
        }
    },
    upComingBooking: async (cookie?: string) => {
        try {

            const res = await fetch(`${env.BACKEND_URL}/api/student/upcoming/booking`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    ...(cookie ? { cookie } : {}),
                },
                credentials: "include"

            })
            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || "API Error");
            }
            return await res.json();

        } catch (error) {

            throw error
        }
    },
    pastBooking: async (cookie?: string) => {
        try {

            const res = await fetch(`${env.BACKEND_URL}/api/student/past/booking`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    ...(cookie ? { cookie } : {}),
                },
                credentials: "include"

            })
            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || "API Error");
            }
            return await res.json();

        } catch (error) {

            throw error
        }
    },
}