import BookingTable from '@/components/modules/AdminPage/BookingTable/BookingTable';
import PaginationControl from '@/components/ui/pagination.control';
import { AdminService } from '@/services/admin.service';
import { cookies } from 'next/headers';
import React from 'react'

const ManageUser = async ({ searchParams }: { searchParams: Promise<{ page: string }> }) => {
    const { page } = await searchParams;
    const cookieStore = await cookies();
    const res = await AdminService.getAllBooking({ page }, cookieStore.toString())
    return (
        <div className='p-4'>
            <div>
                <BookingTable data={res.data.result} />
                <PaginationControl meta={res?.data?.pagination}/>
            </div>
        </div>
    )
}

export default ManageUser