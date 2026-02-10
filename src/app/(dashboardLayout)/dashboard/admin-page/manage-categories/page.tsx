export const dynamic = "force-dynamic";
import CategoryTable from '@/components/modules/AdminPage/CategoryTable/CategoryTable'
import { AdminService } from '@/services/admin.service'
const CategoryManage = async() => {
    const res = await AdminService.getCategory()
  return (
    <div className='p-4'>
        <CategoryTable data={res.data}/>
    </div>
  )
}

export default CategoryManage