export const dynamic = "force-dynamic";
import UserTable from '@/components/modules/AdminPage/manage-user/UserTable';
import PaginationControl from '@/components/ui/pagination.control';
import { AdminService } from '@/services/admin.service';
import { cookies } from 'next/headers'


const ManageUser = async ({ searchParams }: { searchParams: Promise<{ search: string, sort: string, page: string }> }) => {
  const cookieStore = await cookies();
  const { search, sort, page } = await searchParams
  const res = await AdminService.getAllUser({ search, sort, page }, cookieStore.toString())
  return (
    <div className='m-4'>
      <UserTable data={res.data.result} />
      <PaginationControl meta={res?.data?.pagination}/>
    </div>
  )
}

export default ManageUser