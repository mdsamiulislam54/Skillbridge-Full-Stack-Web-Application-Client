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
import useTutorSlotsDelete from "@/hook/tutorProfile/useTutorSlotsDelete"
import { Spinner } from "@/components/ui/spinner"
import { useState } from "react"
import UpdateSlotsFrom from "./updatedSlotsFrom"


type Props = {
    slots: TutorSlot[],
}

const TutorSlotTable = ({ slots }: Props) => {
    const { mutate, isPending } = useTutorSlotsDelete();
    const [updateSlotsFrom, setUpdateSlotsFrom] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState<TutorSlot | null>(null);


    const handleUpdateFromToggle = () => {
        setUpdateSlotsFrom(!updateSlotsFrom)
    }

    const handleDelete = (id: string) => {
        mutate(id)
    };
    const handleUpdate = (slot:TutorSlot) => {
        setSelectedSlot(slot)
        handleUpdateFromToggle()
    }

    if (!slots?.length) {
        return (
            <p className="text-center text-muted-foreground py-10">
                No slots found
            </p>
        )
    }
    return (
        <div className="rounded-md border ">
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

                                <Button variant="outline" size="sm" onClick={() => handleUpdate(slot)}>
                                    <Edit2 className="w-4 h-4" />
                                </Button>


                                <Button variant="destructive" size="sm" onClick={() => handleDelete(slot.id)}>
                                    {isPending ? <Spinner /> : <Trash2 className="w-4 h-4" />}
                                </Button>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>


            {updateSlotsFrom && selectedSlot && (
                <div className="absolute inset-0 bg-black/30 flex justify-center items-center">
                    <UpdateSlotsFrom onClose={() => setUpdateSlotsFrom(false)} selectedSlot={selectedSlot} />
                </div>
            )}
        </div>
    )
}

export default TutorSlotTable
