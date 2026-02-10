
import { Card } from "@/components/ui/card";
import { SingleTutorProfile } from "@/type/single.tutor.type";
import Image from "next/image";

const TutorProfileHeader = ({ tutor }: { tutor: SingleTutorProfile }) => {
  return (
    <Card className="p-0">

      <div className="relative h-56 w-full">
        <Image
          src="https://img.freepik.com/free-photo/coworking-space-freelance-elearning-concept-top-view-male-hands-holding-cup-coffee-using_1258-314363.jpg"
          alt="Cover"
          fill
          className="object-cover"
        />
      </div>


      <div className="relative px-6 pb-6">
        <div className="-mt-16">
          <Image
            src={tutor.profileImage}
            alt={tutor.name}
            width={200}
            height={200}
            className="rounded-full border-4 w-40 h-40 object-cover border-white shadow"
          />
        </div>

        <h1 className="text-3xl font-semibold mt-4">{tutor.name}</h1>
        <p className="text-sm ">{tutor.education}</p>

        <div className="flex gap-2 mt-3">
          <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
            {tutor.teachingMode}
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
            {tutor.isAvailable ? "Available" : "Unavailable"}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default TutorProfileHeader;
