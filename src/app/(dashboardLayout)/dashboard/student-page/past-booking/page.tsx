export const dynamic = "force-dynamic";
import BookingTable from '@/components/modules/studentPage/BookingTable';
import { studentService } from '@/services/student.service';
import { cookies } from 'next/headers';


const PastBooking = async() => {
     const cookeStore = await cookies();
        const res = await studentService.pastBooking(cookeStore.toString());
    return (
        <div className='p-4'>
            <BookingTable booking={res?.data}/>
        </div>
    )
}

export default PastBooking