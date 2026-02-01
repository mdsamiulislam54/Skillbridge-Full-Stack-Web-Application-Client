"use client";

import React, { useState } from "react";
import { Copy, Trash2, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";
import Image from "next/image";
import UpdatedTutorProfileFrom from "./updateTutorProfileFrom";
import useTutorProfileDelete from "@/hook/tutorProfile/tutorProfileDetele";
import { Spinner } from "@/components/ui/spinner";

export type TutorProfileType = {
    id: string;
    userId: string;
    name: string;
    categories: string[];
    hourlyRate: number;
    isAvailable: boolean;
    profileImage: string
    education: string
    bio?: string
    experienceYears?: string
    teachingMode?: string

};

type TutorProfileTableProps = {
    profiles: TutorProfileType[];

};

export const TutorProfileTable: React.FC<TutorProfileTableProps> = ({ profiles, }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedProfile, SetSelectedProfile] = useState<TutorProfileType | null>(null);
    const { mutate, isPending } = useTutorProfileDelete()

    const copyId = (id: string) => {
        navigator.clipboard.writeText(id);
        toast.success("ID copied to clipboard");
    };
    const handleToggle = () => setIsOpen(!isOpen)

    const handleOnDelete = (id: string) => {
        mutate(id)
    }
    const handleOnUpdate = (profile: TutorProfileType) => {
        handleToggle()
        SetSelectedProfile(profile)
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <Table className="min-w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Profile Images</TableHead>
                            <TableHead>ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Education</TableHead>
                            <TableHead>Available</TableHead>
                            <TableHead className="text-center">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {profiles.map((profile) => (
                            <TableRow key={profile.id}>
                                <TableCell>
                                    <Image src={profile.profileImage?.trimEnd()} width={50} height={50} alt="profile images" className="border rounded-2xl shadow-xl p-1" />
                                </TableCell>
                                <TableCell className="flex items-center gap-2">
                                    {profile.id}
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant="ghost" size="sm" onClick={() => copyId(profile.id)}>
                                                <Copy className="w-4 h-4" />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>Copy ID</TooltipContent>
                                    </Tooltip>
                                </TableCell>
                                <TableCell>{profile.name}</TableCell>
                                <TableCell>{profile.education}</TableCell>


                                <TableCell>{profile.isAvailable ? "Yes" : "No"}</TableCell>
                                <TableCell className="flex justify-center gap-2">

                                    <Button variant="outline" size="sm" onClick={() => handleOnUpdate(profile)}>
                                        <Edit2 className="w-4 h-4" />
                                    </Button>


                                    <Button variant="destructive" size="sm"  onClick={() => handleOnDelete(profile.id)}>
                                        {isPending ? <Spinner /> : <Trash2 className="w-4 h-4 cursor-pointer" />}
                                    </Button>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {
                isOpen && selectedProfile != null && <div className="absolute inset-0 bg-black/30 flex justify-center items-center ">
                    <UpdatedTutorProfileFrom onClose={handleToggle} profiles={selectedProfile} />
                </div>
            }

        </div>
    );
};
