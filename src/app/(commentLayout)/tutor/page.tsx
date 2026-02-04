
import TutorBanner from '@/components/modules/BrowseTutorPage/banner'
import TutorProfileCard from '@/components/modules/BrowseTutorPage/tutorProfileCard'
import { TutorService } from '@/services/tutor.service'
import { TutorProfile } from '@/type/tutorProfile'


const TutorPage = async () => {
  const tutorProfile = await TutorService.getAllTutorProfile()
  return (
    <div className='space-y-4 '>
      {/* {JSON.stringify(tutorProfile)} */}
      <TutorBanner />
      <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5  grid-cols-1 max-w-10/12 mx-auto'>
        {
          tutorProfile?.data.map((profile: TutorProfile) => <TutorProfileCard tutorProfile={profile} key={profile.id}></TutorProfileCard>)
        }
      </div>
    </div>
  )
}

export default TutorPage