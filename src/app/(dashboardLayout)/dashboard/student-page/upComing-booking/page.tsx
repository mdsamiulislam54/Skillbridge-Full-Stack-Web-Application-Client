import BookingTable from '@/components/modules/studentPage/BookingTable';
import { studentService } from '@/services/student.service';
import { cookies } from 'next/headers'
import React from 'react'

const UpComingBooking = async () => {
    const cookeStore = await cookies();
    const res = await studentService.upComingBooking(cookeStore.toString());

    return (
        <div className='p-4'>

            <BookingTable booking={res.data} />
        </div>
    )
}

export default UpComingBooking