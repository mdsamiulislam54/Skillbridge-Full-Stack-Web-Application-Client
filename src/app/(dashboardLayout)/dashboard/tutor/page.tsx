export const dynamic = "force-dynamic";
import SlotChart from '@/components/modules/TutorProfileFrom/tutorChart';
import TutorDashboardCard from '@/components/modules/TutorProfileFrom/TutorDashboardCard'
import { TutorService } from '@/services/tutor.service';
import { cookies } from 'next/headers'

const TutorDashboard = async() => {
  const cookieStore = await cookies();
  const [cardData,slotChartData] = await Promise.all([
    TutorService.getDashboardCard(cookieStore.toString()),
    TutorService.getChartData(cookieStore.toString()),
  ])
  
  return (
    <div className='p-4'>
      <TutorDashboardCard card={cardData.data.data}/>
      <SlotChart data={slotChartData.data.data}/>
    </div>
  )
}

export default TutorDashboard