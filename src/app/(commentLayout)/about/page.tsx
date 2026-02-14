'use client'
import Image from "next/image";
import Images from '@/media/teaching.svg'
import Link from "next/link";
import { useSession } from "@/components/Provider/SessionProvider";

export default function AboutPage() {
   const {session} = useSession()
    return (
        <section className="w-full bg-background py-16">
            {JSON.stringify(session)}
            <div
                className="relative h-40 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url("https://img.freepik.com/free-photo/coworking-space-freelance-elearning-concept-top-view-male-hands-holding-cup-coffee-using_1258-314363.jpg")`,
                }}
            >

                <div className="absolute inset-0 bg-black/60" />


                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
                    <h1 className="text-white text-3xl md:text-4xl font-semibold">
                        About Us
                    </h1>




                </div>
            </div>
            <div className="py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Image */}
                    <div className="w-full flex justify-center items-center">
                        <Image
                            src={Images}
                            alt="About us"
                            width={400}
                            height={400}
                            className="w-100 h-auto rounded-xl object-cover shadow-md"
                            priority
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-5">
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                            About Our Platform
                        </h1>

                        <p className="text-muted-foreground text-base leading-relaxed">
                            We are a modern learning platform dedicated to connecting students
                            with experienced and verified tutors. Our mission is to make
                            quality education accessible, flexible, and effective for
                            everyone.
                        </p>

                        <p className="text-muted-foreground text-base leading-relaxed">
                            Whether you prefer online or offline learning, we ensure a smooth
                            booking experience, transparent pricing, and trusted mentors to
                            guide you every step of the way.
                        </p>

                        <p className="text-muted-foreground text-base leading-relaxed">
                            Whether you prefer online or offline learning, we ensure a smooth
                            booking experience, transparent pricing, and trusted mentors to
                            guide you every step of the way.
                        </p>

                        <Link href={'/tutor'} className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
                            Learn More
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
