"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { TutorProfile } from "@/type/tutorProfile"
import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Props = {
    tutorProfile: TutorProfile
}

const TutorProfileCard = ({ tutorProfile }: Props) => {
    return (
        <Card className=" p-0 w-full overflow-hidden rounded-2xl border hover:shadow-xl transition-all duration-300">


            <CardHeader className="p-0 relative">
                <Image
                    src={tutorProfile.profileImage}
                    width={400}
                    height={300}
                    alt={tutorProfile.name}
                    className="h-55 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />


                <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    {tutorProfile.averageRating ?? "N/A"}
                </div>
            </CardHeader>


            <CardContent className="relative -mt-12 mx-3 mb-3 rounded-xl bg-transparent  backdrop-blur-md p-4 shadow">


                <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white truncate">
                    {tutorProfile.name}
                </h3>


                <div className="mt-3 space-y-2 text-sm text-gray-700 dark:text-white ">

                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Experience</span>
                        <span className="font-medium">
                            {tutorProfile.experienceYears} yrs
                        </span>
                    </div>

                    <div className="flex justify-between gap-2">
                        <span className="text-muted-foreground">Education</span>
                        <span className="font-medium line-clamp-1 text-right">
                            {tutorProfile.education}
                        </span>
                    </div>
                </div>


                <Link href={`/tutor/${tutorProfile.id}`}>
                    <Button className="m-0 mt-5 w-full cursor-pointer">
                        View Profile
                    </Button>
                </Link>
            </CardContent>
        </Card>
    )
}

export default TutorProfileCard
