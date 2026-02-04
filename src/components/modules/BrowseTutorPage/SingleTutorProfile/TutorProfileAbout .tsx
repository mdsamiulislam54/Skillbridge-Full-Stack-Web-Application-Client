// components/tutor/ProfileAbout.tsx
import { Card } from "@/components/ui/card";
import { SingleTutorProfile } from "@/type/single.tutor.type";
import { Clock, Globe, GraduationCap } from "lucide-react";

const TutorProfileAbout = ({ tutor }: { tutor: SingleTutorProfile }) => {
  return (
    <Card className="p-4">
      
      <h2 className="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100">
        Intro
      </h2>

      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        {tutor.bio}
      </p>

      <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
        <p className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          <span>{tutor.education}</span>
        </p>

        <p className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          <span>Languages: {tutor.languages.join(", ")}</span>
        </p>

        <p className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          <span>Experience: {tutor.experienceYears} years</span>
        </p>
      </div>

    </Card>
  );
};

export default TutorProfileAbout;
