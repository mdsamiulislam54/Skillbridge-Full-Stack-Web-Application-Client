
import TutorBanner from '@/components/modules/BrowseTutorPage/banner'
import TutorProfileCard from '@/components/modules/BrowseTutorPage/tutorProfileCard'
import PaginationControl from '@/components/ui/pagination.control'

import { TutorService } from '@/services/tutor.service'
import { TutorProfile } from '@/type/tutorProfile'


const TutorPage = async ({ searchParams }: { searchParams: Promise<{ page: string }> }) => {


  const { page } = await searchParams;

  const tutorProfile = await TutorService.getAllTutorProfile({ page });
  const pagination = tutorProfile.data?.pagination || {
    limit: 10,
    page: 1,
    total: 0,
    totalPages: 1,
  }

  return (
    <div className='space-y-10 min-h-screen '>
      
      <TutorBanner />
      <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5  grid-cols-1 max-w-10/12 mx-auto'>
        {
          tutorProfile?.data?.result.map((profile: TutorProfile) => <TutorProfileCard tutorProfile={profile} key={profile.id}></TutorProfileCard>)
        }
      </div>
      <PaginationControl meta={pagination} />
    </div>

  )
}

export default TutorPage