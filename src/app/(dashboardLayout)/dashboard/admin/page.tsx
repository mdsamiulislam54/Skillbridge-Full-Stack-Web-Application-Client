import DashboardStatsCards from '@/components/modules/AdminPage/DashboardStatsCards/DashboardStatsCards';
import MixBarChart from '@/components/modules/AdminPage/MixBarChart/MixbarChart';

import { AdminService } from '@/services/admin.service';
import { cookies } from 'next/headers'


const AdminDashboard = async () => {
  const cookieStore = await cookies();
  const [card, chart] = await Promise.all([
    AdminService.getAdminDashboardCard(cookieStore.toString()),
    AdminService.getAdminChartData(cookieStore.toString())
  ])
  return (
    <div className='p-4 min-h-screen'>

      <div className='w-full'>
        <DashboardStatsCards data={card?.data} />

      </div>
      <div className="w-full">
        <MixBarChart data={chart.data} />
      </div>
    </div>
  )
}

export default AdminDashboard