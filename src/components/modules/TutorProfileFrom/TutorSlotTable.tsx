"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { TutorSlot } from "@/type/tutor.slot.type"
import { Button } from "@/components/ui/button"
import { Edit2, Trash2 } from "lucide-react"


type Props = {
    slots: TutorSlot[],
}

const TutorSlotTable = ({ slots}: Props) => {
    if (!slots?.length) {
        return (
            <p className="text-center text-muted-foreground py-10">
                No slots found
            </p>
        )
    }
    const handleDelete = (id: string) => console.log("Delete profile:", id);
    const handleUpdate = (id: string) => console.log("Update profile:", id);
    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Tutor</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead>Mode</TableHead>
                        <TableHead>Students</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Rate</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>

                    </TableRow>
                </TableHeader>

                <TableBody>
                    {slots.map((slot) => (
                        <TableRow key={slot.id}>
                            <TableCell className="font-medium">
                                {slot.tutorProfile?.name}
                            </TableCell>

                            <TableCell>
                                {slot.startTime} - {slot.endTime}
                            </TableCell>

                            <TableCell>{slot.duration} min</TableCell>

                            <TableCell>
                                <Badge variant={slot.teachingMode === "ONLINE" ? "default" : "secondary"}>
                                    {slot.teachingMode}
                                </Badge>
                            </TableCell>

                            <TableCell>{slot.maxStudent}</TableCell>
                            <TableCell>{slot.category}</TableCell>

                            <TableCell>৳ {slot.hourlyRate}</TableCell>

                            <TableCell>
                                <Switch checked={slot.isActive} color="blue" />
                            </TableCell>
                            <TableCell className="flex justify-center gap-2">
                            
                                    <Button variant="outline" size="sm" onClick={() => handleUpdate(slot.id)}>
                                        <Edit2 className="w-4 h-4" />
                                    </Button>
                               
                           
                                    <Button variant="destructive" size="sm" onClick={() => handleDelete(slot.id)}>
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default TutorSlotTable
