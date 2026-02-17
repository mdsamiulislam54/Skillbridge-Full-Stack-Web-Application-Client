
import TutorBanner from '@/components/modules/BrowseTutorPage/banner'
import FilterByCategory from '@/components/modules/BrowseTutorPage/filterByCategory'
import TutorProfileCard from '@/components/modules/BrowseTutorPage/tutorProfileCard'
import PaginationControl from '@/components/ui/pagination.control'

import { TutorService } from '@/services/tutor.service'
import { TutorProfile } from '@/type/tutorProfile'


const TutorPage = async ({ searchParams }: { searchParams: Promise<{ page: string, search: string, filter: string }> }) => {
  const { page, search, filter } = await searchParams;

  const tutorProfile = await TutorService.getAllTutorProfile({ page, search, filter });
  const pagination = tutorProfile.data?.pagination || {
    limit: 10,
    page: 1,
    total: 0,
    totalPages: 1,
  }

  return (
    <div className='space-y-10 min-h-screen '>

      <TutorBanner />
      <div className='flex justify-end  w-full px-4'>
        <FilterByCategory />
      </div>
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