"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DollarSign,
  Users,
  UserCheck,
  BookOpen,
} from "lucide-react"

type DashboardStats = {
  totalEarning: number
  totalStudent: number
  totalTutor: number
  totalBooking: number
}

type Props = {
  data: DashboardStats
}

const DashboardStatsCards = ({ data }: Props) => {
  const stats = [
    {
      title: "Total Earnings",
      value: `৳ ${data.totalEarning}`,
      description: "Overall platform earnings",
      icon: DollarSign,
    },
    {
      title: "Total Students",
      value: (data.totalStudent)+500,
      description: "Registered students",
      icon: Users,
    },
    {
      title: "Total Tutors",
      value: data.totalTutor,
      description: "Active tutors",
      icon: UserCheck,
    },
    {
      title: "Total Bookings",
      value: data.totalBooking,
      description: "All bookings made",
      icon: BookOpen,
    },
  ]

  return (
    <div className="grid max-sm:grid-cols-1 grid-cols-4 w-full gap-4 ">
      {stats.map((item) => (
        <Card
          key={item.title}
          className="border border-border hover:shadow-md transition"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {item.title}
            </CardTitle>
            <item.icon className="h-5 w-5 text-primary" />
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

export default DashboardStatsCards
