"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    BadgeCheck,
    Users,
    Clock,
    ShieldCheck,
} from "lucide-react";
import SeemoreButton from "../TutorProfile/SeemoreButton";
const Support = () => {
    const supportCards = [
        {
            icon: BadgeCheck,
            title: "Certified Mentor",
            description: "All mentors are verified and professionally certified.",
        },
        {
            icon: Users,
            title: "Trusted Community",
            description: "Thousands of students learn with confidence every day.",
        },
        {
            icon: Clock,
            title: "Flexible Schedule",
            description: "Book sessions at your convenient time.",
        },
        {
            icon: ShieldCheck,
            title: "Secure Platform",
            description: "Your data and payments are fully protected.",
        },
    ];
    return (
        <div className="py-10  px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex justify-center items-center">

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold"> ___Best resources for find tutor</h3>
                        <p className=" text-5xl font-bold">If the perfect tutor do not exists, then what we are? </p>
                        <p className="text-base">
                            Let say you think that perfect tutor is not exists then what do you think we are?
                        </p>

                        <SeemoreButton/>
                    </div>

                </div>
                <div className="grid gap-6 sm:grid-cols-2 ">
                    {supportCards.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <Card
                                key={index}
                                className="bg-background dark:border-zinc-800 hover:shadow-md transition m-0 p-4"
                            >
                                <div className="flex flex-col items-start gap-4 p-6">
                                    <div className="rounded-full bg-gray-500 text-white  p-3">
                                        <Icon className="h-6 w-6 " />
                                    </div>

                                    <h3 className="text-lg font-semibold">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Support