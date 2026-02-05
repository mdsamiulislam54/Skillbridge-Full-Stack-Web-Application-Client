import BookingTable from '@/components/modules/studentPage/BookingTable';
import PaginationControl from '@/components/ui/pagination.control';
import { studentService } from '@/services/student.service';
import { cookies } from 'next/headers'
import React from 'react'

const BookingPage = async () => {
    const cookieStore = await cookies();
    const booking = await studentService.getStudentOwnBookings(cookieStore.toString());
    return (
        <div>
            <div>
                <BookingTable booking={booking.data.result} />
            </div>
            <PaginationControl meta={booking.data.pagination} />
        </div>
    )
}

export default BookingPage