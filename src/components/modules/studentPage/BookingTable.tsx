"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import Image from "next/image"

import { StudentBooking } from "@/type/student.booking.type"

interface IoBooking {
  booking: StudentBooking[]
}

const BookingTable = ({ booking }: IoBooking) => {
  return (
    <div className="rounded-xl border bg-background p-4">
      <Table>
        <TableCaption>Your booking history</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Tutor</TableHead>
            <TableHead>Student</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Mode</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead>Booking Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {booking.map((item, index) => (
            <TableRow key={index}>

              <TableCell>
                <Image
                  src={item.tutorProfile.profileImage}
                  alt="Tutor"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </TableCell>

              <TableCell className="font-medium">
                {item.user.name}
              </TableCell>

              <TableCell>{item.user.email}</TableCell>

              <TableCell>{item.tutorSlot.category}</TableCell>

              <TableCell>{item.tutorSlot.duration} min</TableCell>

              <TableCell>{item.tutorProfile.teachingMode}</TableCell>

              <TableCell>৳{item.totalPrice}</TableCell>


              <TableCell>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold
                  ${item.paymentStatus === "PAID"
                      ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                      : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                    }`}
                >
                  {item.paymentStatus}
                </span>
              </TableCell>


              <TableCell>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold
                  ${item.bookingStatus === "PENDING" &&
                    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                    }
                  ${item.bookingStatus === "CONFIRMED" &&
                    "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                    }
                  ${item.bookingStatus === "COMPLETED" &&
                    "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                    }
                  ${item.bookingStatus === "CANCELLED" &&
                    "bg-red-200 text-gray-900 dark:bg-gray-800 dark:text-gray-300"
                    }
                `}
                >
                  {item.bookingStatus}
                </span>
              </TableCell>

              <TableCell className="text-right space-x-2">
                {/* Review button */}
                {item.bookingStatus === "COMPLETED" && !item.review && (
                  <Button
                    className="cursor-pointer"
                    variant="outline"
                    size="sm"
                    onClick={() => console.log("Review booking", item)}
                  >
                    Leave Review
                  </Button>
                )}


                {item.bookingStatus === "CANCELLED" && (
                  <Button
                    className="cursor-pointer"
                    variant="destructive"
                    size="icon"
                    onClick={() => console.log("Delete booking", item)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default BookingTable
