"use client";
import { useEffect, useState } from "react";
import { TutorService } from "@/services/tutor.service";
import { TutorProfileTable } from "@/components/modules/TutorProfileFrom/tutorProfileTable";
import { toast } from "sonner";
export default function TutorProfileList() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    TutorService.getTutorProfile()
      .then((res) => setProfiles(res.data.data))
      .catch((err) => toast.error(err.message || "Failed to load"))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = (id: string) => console.log("Delete profile:", id);
  const handleUpdate = (id: string) => console.log("Update profile:", id);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
        {/* {JSON.stringify(profiles)} */}
      <TutorProfileTable
        profiles={profiles}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
}
