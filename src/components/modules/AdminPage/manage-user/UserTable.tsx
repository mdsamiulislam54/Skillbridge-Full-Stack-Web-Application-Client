"use client";

import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Search, UserMinus, UserPlus } from "lucide-react";
import { User } from "@/type/user.type";
import { Card, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { SidebarGroup, SidebarGroupContent, SidebarInput } from "@/components/ui/sidebar";
import { Label } from "@/components/ui/label";
import { useRouter, useSearchParams } from "next/navigation";



type UserTableProps = { data: User[]; };

const UserTable: React.FC<UserTableProps> = ({ data }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState({
        search: '',
        sort: "all"
    });

    useEffect(() => {
        const params = new URLSearchParams(searchParams);

        if (formData.search) params.set("search", formData.search);
        if (formData.sort && formData.sort !== "all") params.set("sort", formData.sort);

        router.push(`?${params.toString()}`);
    }, [formData.search, formData.sort, router])



    return (
        <Card className="overflow-x-auto p-2">
            <form className="flex justify-between items-center">

                <div>
                    <SidebarGroup className="py-0">
                        <SidebarGroupContent className="relative">
                            <Label htmlFor="search" className="sr-only">
                                Search
                            </Label>
                            <SidebarInput
                                id="search"
                                onChange={(e) => setFormData({ ...formData, search: e.target.value })}
                                placeholder="Search Id, Email, Name"
                                className="pl-8"
                            />
                            <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
                        </SidebarGroupContent>
                    </SidebarGroup>
                </div>
                <Select
                    onValueChange={(value) => setFormData({ ...formData, sort: value })}
                >
                    <SelectTrigger className="">
                        <SelectValue placeholder="Select sorted by value" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Default</SelectLabel>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="STUDENT">All Student</SelectItem>
                            <SelectItem value="TUTOR">All Tutor</SelectItem>
                            <SelectItem value="ADMIN">All Admin</SelectItem>
                            <SelectItem value="ACTIVE">All Active User</SelectItem>
                            <SelectItem value="BAN">All Ban User</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

            </form>
            <Table className="min-w-full">
                <TableHeader className="">
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((user) => (
                        <TableRow key={user.id} className="">
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>{user.status}</TableCell>
                            <TableCell className="flex flex-col justify-end">
                                <Button
                                    variant={user.status === "ACTIVE" ? "destructive" : "default"}
                                    size="sm"
                                    className="flex items-center gap-2"
                                >
                                    {user.status === "ACTIVE" ? <UserMinus size={16} /> : <UserPlus size={16} />}
                                    {user.status === "ACTIVE" ? "Ban" : "Unban"}
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
};

export default UserTable;
