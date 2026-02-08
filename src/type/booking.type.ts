export type BookingItem = {
  bookingStatus: "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED";
  paymentStatus: "PAID" | "UNPAID" | "REFUNDED";
  totalPrice: number;

  tutorProfile: {
    name: string;
  };

  tutorSlot: {
    duration: string;     
    startTime: string;     
    endTime: string;       
    teachingMode: "ONLINE" | "OFFLINE";
  };

  user: {
    email: string;
  };
};


export type BookingType = {
  userId: string
  tutorProfileId: string
  tutorSlotsId: string
  totalPrice: number
}