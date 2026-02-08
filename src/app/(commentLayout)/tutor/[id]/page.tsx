
import ReviewsCard from "@/components/modules/BrowseTutorPage/SingleTutorProfile/reviewCard";
import TutorProfileAbout from "@/components/modules/BrowseTutorPage/SingleTutorProfile/TutorProfileAbout ";

import TutorProfileHeader from "@/components/modules/BrowseTutorPage/SingleTutorProfile/TutorProfileHeader";
import TutorSlotCard from "@/components/modules/BrowseTutorPage/SingleTutorProfile/TutorProfileSlotsCard";
import { TutorService } from "@/services/tutor.service";
import { Review } from "@/type/Review.type";
const SingleTutorProfilePage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const tutor = await TutorService.getAllTutorProfileById(id);
    return (
        <div className="md:max-w-10/12 mx-auto space-y-10 min-h-screen py-10 px-4">
            <TutorProfileHeader tutor={tutor.data} />
            <TutorProfileAbout tutor={tutor.data} />
            <TutorSlotCard tutor={tutor.data} />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {
                    tutor.data.reviews.map((review:Review)=><ReviewsCard key={review.id} review={review}/>)
                }
            </div>
        </div>
    )
}

export default SingleTutorProfilePage