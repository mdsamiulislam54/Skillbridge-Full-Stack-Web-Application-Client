export const dynamic = "force-dynamic";
import BookingTable from '@/components/modules/AdminPage/BookingTable/BookingTable';
import PaginationControl from '@/components/ui/pagination.control';
import { TutorService } from '@/services/tutor.service';
import { cookies } from 'next/headers'


const TutorBookingPage = async({searchParams}:{searchParams:Promise<{page:string}>}) => {
  const {page} = await searchParams
  const cookieStore = await cookies();
  const res = await TutorService.GetOwnBookings({page}, cookieStore.toString())
  return (
    <div className='p-4'>
      <BookingTable data={res?.data?.result}/>
      <PaginationControl meta={res?.data?.pagination}/>
    </div>
  )
}

export default TutorBookingPage