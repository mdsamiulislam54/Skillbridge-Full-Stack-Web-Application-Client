'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TutorDashboardCardType } from "@/type/tutorDashboardCard.type"
import {
  CalendarCheck,
  DollarSign,
  Star,
  Users,
  Clock,
} from "lucide-react"


type Props ={
  card:TutorDashboardCardType
}

const TutorDashboardCard = ({card}:Props) => {

const stats = [
  {
    title: "Total Active Session",
    value: card.totalSlot,
    description: "Sessions scheduled this week",
    icon: CalendarCheck,
  },
  {
    title: "Total Earnings",
    value: `৳ ${card.totalEarning}`,
    description: "This month",
    icon: DollarSign,
  },
  {
    title: "Average Rating",
    value: card.averageRating,
    description: "From student reviews",
    icon: Star,
  },
  {
    title: "Total Booking",
    value: card.totalBooking,
    description: "Students taught so far",
    icon: Users,
  },
  {
    title: "Availability",
    value: "Active",
    description: "You are accepting bookings",
    icon: Clock,
  },
]
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 ">
      {stats.map((item) => (
        <Card
          key={item.title}
          className="border border-border hover:shadow-md transition"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {item.title}
            </CardTitle>
            <item.icon className="h-5 w-5 text-blue-500" />
          </CardHeader>

          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {item.value}
            </div>
            <CardDescription className="mt-1">
              {item.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default TutorDashboardCard
