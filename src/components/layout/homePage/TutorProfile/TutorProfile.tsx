import TutorProfileCard from '@/components/modules/BrowseTutorPage/tutorProfileCard'
import { TutorService } from '@/services/tutor.service'
import type { TutorProfile } from '@/type/tutorProfile'
import SeemoreButton from './SeemoreButton'


const TutorProfile = async () => {
    const res = await TutorService.getAllTutorProfile({ page: "1", limit: "3" })
    return (
        <div className='space-y-10 py-10 px-4'>
            <h2 className='text-2xl md:text-3xl font-bold '>Browse Tutor</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 '>
                {
                    res?.data?.result.map((profile: TutorProfile) => <TutorProfileCard tutorProfile={profile} key={profile.id}></TutorProfileCard>)
                }


            </div>
            <div className='w-full flex justify-center items-center'>
                <SeemoreButton />
            </div>
        </div>
    )
}

export default TutorProfile