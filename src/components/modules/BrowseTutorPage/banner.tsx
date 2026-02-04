'use client'
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const TutorBanner = () => {
  const searchParams = useSearchParams();
  const router = useRouter()

  const handleSearch = (search: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('search', search.toString());
    router.push(`?${params.toString()}`)

  }
  return (
    <div
      className="relative h-72 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-photo/coworking-space-freelance-elearning-concept-top-view-male-hands-holding-cup-coffee-using_1258-314363.jpg")`,
      }}
    >

      <div className="absolute inset-0 bg-black/60" />


      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-white text-3xl md:text-4xl font-semibold">
          Browse All Tutors
        </h1>

        <p className="text-gray-200 mt-2 max-w-xl text-sm md:text-base">
          Search tutors by subject, category, or teaching mode
        </p>

        <div className="relative mt-6 w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black h-4 w-4" />
          <Input
            onChange={(e) => {
              handleSearch(e.target.value)
            }}
            placeholder="Search tutor, subject, or category..."
            className="pl-10 bg-white/90 backdrop-blur-md"
          />
        </div>
      </div>
    </div>
  );
};

export default TutorBanner;
