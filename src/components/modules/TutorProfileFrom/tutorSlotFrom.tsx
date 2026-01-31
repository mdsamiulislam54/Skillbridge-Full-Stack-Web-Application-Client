"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useClientSession } from "@/hook/authentication/useClientSession"
import useTutorSlotsCreate from "@/hook/tutorProfile/useTutorSlotsCreate"
import { SlotsType } from "@/type/slots.type"


const AvailabilitySlotForm = () => {
    const [formData, setFormData] = useState({
        tutorProfileId: "",
        startTime: "",
        endTime: "",
        duration: "",
        teachingMode: "",
        maxStudents: "1",
        isActive: true,
    })

    const { user } = useClientSession();
    const { mutate, isPending } = useTutorSlotsCreate()

    const handleChange = (
        field: string,
        value: string | boolean
    ) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const payload: SlotsType = {

            startTime: formData.startTime,
            endTime: formData.endTime,
            duration: formData.duration,
            teachingMode: formData.teachingMode,
            maxStudents: formData.maxStudents,
            isActive: formData.isActive,
            tutorId: formData.tutorProfileId,
            userId: user?.id
        }

        mutate(payload)
    }

    return (
        <Card className="max-w-2xl mx-auto my-5">
            <CardHeader>
                <CardTitle>Create Availability Slot</CardTitle>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                        {/* Start Time */}
                        <div className="space-y-1">
                            <Label>Start Time</Label>
                            <Input
                                type="time"
                                value={formData.startTime}
                                onChange={(e) => handleChange("startTime", e.target.value)}
                                required
                            />
                        </div>
                        {/* Start Time */}
                        <div className="space-y-1">
                            <Label>End Time</Label>
                            <Input
                                type="time"
                                value={formData.endTime}
                                onChange={(e) => handleChange("endTime", e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Duration */}
                    <div className="grid sm:grid-cols-2 gap-2">
                        <div className="space-y-1">
                            <Label>Session Duration (minutes)</Label>
                            <Input
                                type="number"
                                placeholder="60"
                                value={formData.duration}
                                onChange={(e) => handleChange("duration", e.target.value)}
                                required
                            />
                        </div>
                        {/* Max Students */}
                        <div className="space-y-1">
                            <Label>Max Students</Label>
                            <Input
                                type="number"
                                min={1}
                                value={formData.maxStudents}
                                onChange={(e) =>
                                    handleChange("maxStudents", e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                        {/* Teaching Mode */}
                        <div className="space-y-1">
                            <Label>Teaching Mode</Label>
                            <Select
                                onValueChange={(value) =>
                                    handleChange("teachingMode", value)
                                }

                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select mode" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ONLINE">Online</SelectItem>
                                    <SelectItem value="OFFLINE">Offline</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-1 w-full">
                            <Label>Select Category</Label>
                            <Select
                            
                                onValueChange={(value) =>
                                    handleChange("teachingMode", value)
                                }
                                
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select mode" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ONLINE">Online</SelectItem>
                                    <SelectItem value="OFFLINE">Offline</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>


                    </div>
                    {/* Active */}
                    <div className="flex items-center justify-between rounded-lg border p-3">
                        <Label>Slot Active</Label>
                        <Switch
                            checked={formData.isActive}
                            onCheckedChange={(value) =>
                                handleChange("isActive", value)
                            }
                        />
                    </div>

                    {/* Duration */}
                    <div className="space-y-1">
                        <Label>Tutor Profile Id</Label>
                        <Input
                            type="text"
                            placeholder="Jfhwfhfh38nchfsdhcsnhfks"
                            value={formData.tutorProfileId}
                            onChange={(e) => handleChange("tutorProfileId", e.target.value)}
                            required
                        />
                    </div>

                    <Button type="submit" className="w-full">
                        Create Slot
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default AvailabilitySlotForm
