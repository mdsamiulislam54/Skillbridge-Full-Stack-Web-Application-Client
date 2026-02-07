

import MixBarChart from '@/components/modules/AdminPage/MixBarChart/MixbarChart';
import { AdminService } from '@/services/admin.service';
import { cookies } from 'next/headers'
import {
  DollarSign,
  Users,
  UserCheck,
  BookOpen,
} from "lucide-react"

const AdminDashboard = async () => {
  const cookieStore = await cookies();
  const [card, chart] = await Promise.all([
    AdminService.getAdminDashboardCard(cookieStore.toString()),
    AdminService.getAdminChartData(cookieStore.toString())
  ])

  const data = card.data || [];

  const stats = [
    {
      title: "Total Earnings",
      value: `৳ ${data.totalEarning}`,
      description: "Overall platform earnings",
      icon: DollarSign,
    },
    {
      title: "Total Students",
      value: data.totalStudent + 500,
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
    <div className="p-4 min-h-screen bg-background text-foreground space-y-6 w-full">

      {/* Stats Grid */}
      <div className=" w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="flex flex-col justify-between border border-border rounded-lg p-4 hover:shadow-lg transition-colors bg-card dark:bg-card-dark"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-sm font-medium">{item.title}</h2>
              <item.icon className="h-6 w-6 text-primary" />
            </div>

            {/* Content */}
            <div className="mt-auto">
              <div className="text-2xl font-bold">{item.value}</div>
              <p className="text-sm mt-1 text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="w-full h-[400px] mt-6">
        <MixBarChart data={chart.data} />
      </div>
    </div>
  )
}

export default AdminDashboard;
