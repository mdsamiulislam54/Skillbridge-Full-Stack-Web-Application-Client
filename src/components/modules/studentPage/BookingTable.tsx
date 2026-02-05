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
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {booking.map((item, index) => (
            <TableRow key={index}>
              {/* Profile Image */}
              <TableCell>
                <div className="flex items-center gap-3">
                  <Image
                    src={item.tutorProfile.profileImage}
                    alt="Tutor"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                </div>
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
                  ${
                    item.paymentStatus === "PAID"
                      ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                      : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                  }`}
                >
                  {item.paymentStatus}
                </span>
              </TableCell>

              <TableCell className="text-right">
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => console.log("Delete booking")}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default BookingTable
