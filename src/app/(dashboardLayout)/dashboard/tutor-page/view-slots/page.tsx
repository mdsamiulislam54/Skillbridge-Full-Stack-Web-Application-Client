import TutorSlotTable from '@/components/modules/TutorProfileFrom/TutorSlotTable'
import { TutorService } from '@/services/tutor.service'
import {cookies} from 'next/headers'

const ViewSlots = async () => {
const cookieStore = await cookies()
const {data} = await TutorService.getTutorSlots(cookieStore.toString());
  
  return (
    <div className='p-4'>
       
       <TutorSlotTable slots={data?.data}/>
    </div>
  )
}

export default ViewSlots