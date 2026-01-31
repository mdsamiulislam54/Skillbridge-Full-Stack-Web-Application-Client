"use client";

import React from "react";
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

export type TutorProfileType = {
    id: string;
    userId: string;
    name: string;
    categories: string[];
    hourlyRate: number;
    isAvailable: boolean;
    profileImage: string
};

type TutorProfileTableProps = {
    profiles: TutorProfileType[];
    onDelete?: (id: string) => void;
    onUpdate?: (id: string) => void;
};

export const TutorProfileTable: React.FC<TutorProfileTableProps> = ({
    profiles,
    onDelete,
    onUpdate,
}) => {
    const copyId = (id: string) => {
        navigator.clipboard.writeText(id);
        toast.success("ID copied to clipboard");
    };

    return (
        <div className="overflow-x-auto">
            <Table className="min-w-full">
                <TableHeader>
                    <TableRow>
                        <TableHead>Profile Images</TableHead>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Available</TableHead>
                        <TableHead className="text-center">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {profiles.map((profile) => (
                        <TableRow key={profile.id}>
                            <TableCell>
                                <Image src={profile.profileImage?.trimEnd()} width={50} height={50} alt="profile images" className="border rounded-2xl shadow-xl p-1"/>
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

                           
                            <TableCell>{profile.isAvailable ? "Yes" : "No"}</TableCell>
                            <TableCell className="flex justify-center gap-2">
                                {onUpdate && (
                                    <Button variant="outline" size="sm" onClick={() => onUpdate(profile.id)}>
                                        <Edit2 className="w-4 h-4" />
                                    </Button>
                                )}
                                {onDelete && (
                                    <Button variant="destructive" size="sm" onClick={() => onDelete(profile.id)}>
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
