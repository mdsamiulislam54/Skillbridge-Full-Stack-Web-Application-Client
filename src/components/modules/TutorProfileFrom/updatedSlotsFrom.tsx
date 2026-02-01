'use client'

import { useEffect, useState } from "react"
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
import { AdminService } from "@/services/admin.service"
import { Spinner } from "@/components/ui/spinner"
import { Category } from "@/type/category.type"
import { X } from "lucide-react"
import { TutorSlot } from "@/type/tutor.slot.type"
import useTutorSlotsUpdate from "@/hook/tutorProfile/useTutorSlotsUpdate"

type Props = {
    onClose: () => void
    selectedSlot: TutorSlot
}

const UpdateSlotsFrom = ({ onClose, selectedSlot }: Props) => {
    const [formData, setFormData] = useState({
        startTime: selectedSlot.startTime,
        endTime: selectedSlot.endTime,
        duration: selectedSlot.duration,
        teachingMode: selectedSlot.teachingMode,
        maxStudent: selectedSlot.maxStudent,
        isActive: selectedSlot.isActive,
        category: selectedSlot.category,
        hourlyRate: selectedSlot.hourlyRate,
    })

    const [categoryOptions, setCategoryOptions] = useState<Category[]>([])
    const { mutate, isPending } = useTutorSlotsUpdate()

    useEffect(() => {
        const fetchCategories = async () => {
            const res = await AdminService.getCategory()
            setCategoryOptions(res.data?.data || [])
        }
        fetchCategories()
    }, [])

    const handleChange = (field: string, value:any) => {
        setFormData(prev => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const payload = {
            startTime: formData.startTime,
            endTime: formData.endTime,
            duration: formData.duration,
            teachingMode: formData.teachingMode,
            maxStudent: Number(formData.maxStudent),
            isActive: Boolean(formData.isActive),
            category: formData.category,
            hourlyRate: Number(formData.hourlyRate),
        }

        mutate(
            { id: selectedSlot.id, payload },
            {
                onSuccess: () => onClose(),
            }
        )
    }

    return (
        <div className="">
            <Button
                size="sm"
                variant="outline"
                className="absolute top-5 right-5 cursor-pointer"
                onClick={onClose}
            >
                <X className="w-4 h-4" />
            </Button>

            <Card className="max-w-2xl mx-auto my-5">
                <CardHeader>
                    <CardTitle>Update Slot</CardTitle>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Time */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <Label>Start Time</Label>
                                <Input
                                    type="time"
                                    value={formData.startTime}
                                    onChange={e => handleChange("startTime", e.target.value)}
                                />
                            </div>
                            <div>
                                <Label>End Time</Label>
                                <Input
                                    type="time"
                                    value={formData.endTime}
                                    onChange={e => handleChange("endTime", e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Duration & Students */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <Label>Duration (min)</Label>
                                <Input
                                    type="number"
                                    value={formData.duration}
                                    onChange={e => handleChange("duration", e.target.value)}
                                />
                            </div>
                            <div>
                                <Label>Max Students</Label>
                                <Input
                                    type="number"
                                    min={1}
                                    value={formData.maxStudent}
                                    onChange={e => handleChange("maxStudents", e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Mode & Category */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <Label>Teaching Mode</Label>
                                <Select
                                    value={formData.teachingMode}
                                    onValueChange={v => handleChange("teachingMode", v)}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="ONLINE">Online</SelectItem>
                                        <SelectItem value="OFFLINE">Offline</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Label>Category</Label>
                                <Select
                                    value={formData.category}
                                    onValueChange={v => handleChange("category", v)}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categoryOptions.map(cat => (
                                            <SelectItem key={cat.id} value={cat.name}>
                                                {cat.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Active */}
                        <div className="flex items-center justify-between border p-3 rounded">
                            <Label>Slot Active</Label>
                            <Switch
                                checked={formData.isActive}
                                onCheckedChange={v => handleChange("isActive", v)}
                            />
                        </div>

                        {/* Rate */}
                        <div>
                            <Label>Hourly Rate</Label>
                            <Input
                                type="number"
                                value={formData.hourlyRate}
                                onChange={e => handleChange("hourlyRate", e.target.value)}
                            />
                        </div>

                        <Button type="submit" className="w-full" disabled={isPending}>
                            {isPending ? <Spinner /> : "Update Slot"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default UpdateSlotsFrom
