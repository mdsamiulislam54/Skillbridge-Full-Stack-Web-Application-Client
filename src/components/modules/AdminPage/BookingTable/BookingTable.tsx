"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { BookingItem } from "@/type/booking.type";
import { to12HourWithPeriod } from "@/hook/use12HourWithPeriod/use12HourWithPeriod";

type BookingTableProps = {
  data: BookingItem[];
};

const BookingTable = ({ data }: BookingTableProps) => {
  return (
    <Card className="p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student Email</TableHead>
            <TableHead>Tutor</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Mode</TableHead>
            <TableHead>Booking Status</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.user.email}</TableCell>
              <TableCell>{item.tutorProfile.name}</TableCell>
              <TableCell>{item.tutorSlot.duration} min</TableCell>
              <TableCell>
                {to12HourWithPeriod(item.tutorSlot.startTime)} - {to12HourWithPeriod(item.tutorSlot.endTime)}
              </TableCell>
              <TableCell>
                <Badge variant="outline">
                  {item.tutorSlot.teachingMode}
                </Badge>
              </TableCell>

              <TableCell>
                <Badge
                  variant={
                    item.bookingStatus === "COMPLETED"
                      ? "default"
                      : item.bookingStatus === "CANCELLED"
                      ? "destructive"
                      : "secondary"
                  }
                >
                  {item.bookingStatus}
                </Badge>
              </TableCell>

              <TableCell>
                <Badge
                  variant={
                    item.paymentStatus === "PAID"
                      ? "default"
                      : "destructive"
                  }
                >
                  {item.paymentStatus}
                </Badge>
              </TableCell>

              <TableCell className="text-right font-semibold">
                ৳{item.totalPrice}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default BookingTable;
