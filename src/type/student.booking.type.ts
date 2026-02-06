export type StudentBooking = {
    totalPrice: number
    createdAt: string
    paymentStatus: "PAID" | "UNPAID"
    bookingStatus: "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED"

    user: {
        name: string
        email: string
    }

    tutorProfile: {
        profileImage: string
        teachingMode: "ONLINE" | "OFFLINE"
    }

    tutorSlot: {
        category: string
        duration: string
    }

    review: {
        id:string
        userId:string
        tutorProfileId:string
        bookingId:string
        comment:string
        rating:number
        createdAt:string
    }
}

enum BookingStatus {
    PENDING,
    CONFIRMED,
    COMPLETED,
    CANCELLED,
}
