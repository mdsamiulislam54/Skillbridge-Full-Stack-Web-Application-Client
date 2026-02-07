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


  return (
    <div className="grid sm:grid-cols-1 grid-cols-4 w-full gap-4 ">
      
    </div>
  )
}

export default DashboardStatsCards
