type Booking = {
  id: string;
  userId: string;
  tutorProfileId: string;
  categoryId: string | null;
  tutorSlotsId: string;
  bookingStatus: BookingStatus;
  totalPrice: number;
  paymentStatus: PaymentStatus;
  createdAt: Date;
  updatedAt: Date;
}
enum BookingStatus {
  PENDING,
  CONFIRMED,
  COMPLETED,
  CANCELLED
}

enum PaymentStatus {
  UNPAID,
  PAID,
  REFUNDED
}


export type BookingType = {
  userId: string
  tutorProfileId: string
  tutorSlotsId: string
  totalPrice: number
}