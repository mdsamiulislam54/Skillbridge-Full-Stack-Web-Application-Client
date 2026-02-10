export const dynamic = "force-dynamic";
import { TutorProfileTable } from "@/components/modules/TutorProfileFrom/tutorProfileTable";
import { TutorService } from "@/services/tutor.service";
import { cookies } from "next/headers";

export default async function TutorProfileList() {
  const cookieStore = await cookies()
  const profiles = await TutorService.getTutorProfileById(cookieStore.toString());

  return (
    <div>
      <TutorProfileTable
        profiles={profiles.data.data}

      />
    </div>
  );
}
