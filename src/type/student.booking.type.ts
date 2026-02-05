export type StudentBooking = {
  totalPrice: number
  createdAt: string 
  paymentStatus: "PAID" | "UNPAID"

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
}
