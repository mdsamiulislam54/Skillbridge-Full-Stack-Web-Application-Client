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
    }
}