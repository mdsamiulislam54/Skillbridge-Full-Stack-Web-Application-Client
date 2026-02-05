"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  BookOpen,
  Clock,
  CheckCircle,
  DollarSign,
  XCircle,
} from "lucide-react"

type StudentDashboardCardType = {
  totalBooking: number
  pendingBooking: number
  cancelledBooking: number
  completedBooking: number
  totalSpent: number
}

type Props = {
  card: StudentDashboardCardType
}

const StudentDashboardCard = ({ card }: Props) => {
  const stats = [
    {
      title: "Total Booking",
      value: card.totalBooking,
      description: "All bookings so far",
      icon: BookOpen,
    },
    {
      title: "Pending Booking",
      value: card.pendingBooking,
      description: "Waiting for confirmation",
      icon: Clock,
    },
    {
      title: "Cancelled Booking",
      value: card.cancelledBooking,
      description: "Bookings cancelled",
      icon: XCircle,
    },
    {
      title: "Completed Booking",
      value: card.completedBooking,
      description: "Sessions completed",
      icon: CheckCircle,
    },
    {
      title: "Total Spent",
      value: `৳ ${card.totalSpent}`,
      description: "Overall spending",
      icon: DollarSign,
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {stats.map((item) => (
        <Card
          key={item.title}
          className="border border-border hover:shadow-md transition bg-background"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              {item.title}
            </CardTitle>
            <item.icon className="h-5 w-5 text-blue-500" />
          </CardHeader>

          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {item.value}
            </div>
            <CardDescription className="mt-1 text-muted-foreground">
              {item.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default StudentDashboardCard
