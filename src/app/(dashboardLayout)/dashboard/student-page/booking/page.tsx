import BookingTable from '@/components/modules/studentPage/BookingTable';
import PaginationControl from '@/components/ui/pagination.control';
import { studentService } from '@/services/student.service';
import { cookies } from 'next/headers'
import React from 'react'

const BookingPage = async ({searchParams}:{searchParams:Promise<{page:string}>}) => {
    const {page} = await searchParams
    const cookieStore = await cookies();
    const booking = await studentService.getStudentOwnBookings({page},cookieStore.toString());
    const pagination = booking.data?.pagination || {
        limit: 10,
        page: 1,
        total: 0,
        totalPages: 1,
    }
    return (
        <div className='min-h-screen'>
            <div className='p-4'>
                <BookingTable booking={booking.data.result} />
            </div>
            <PaginationControl meta={pagination} />
        </div>
    )
}

export default BookingPage