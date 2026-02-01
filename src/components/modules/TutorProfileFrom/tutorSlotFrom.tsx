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
import { SlotsType } from "@/type/slots.type"
import useTutorSlotsCreate from "@/hook/tutorProfile/useTutorSlotsCreate"
import { useClientSession } from "@/hook/authentication/useClientSession"
import { Spinner } from "@/components/ui/spinner"
import { Category } from "@/type/category.type"

const AvailabilitySlotForm = () => {
    const [formData, setFormData] = useState({
        startTime: "",
        endTime: "",
        duration: "60",
        teachingMode: "",
        maxStudents: "1",
        isActive: true,
        categories: '',
        hourlyRate: ''
    })

    const [categoryOptions, setCategoryOptions] = useState<Category[]>([])

    useEffect(() => {
        const fetch = async () => {
            const res = await AdminService.getCategory()
            setCategoryOptions(res.data?.data || [])
        }
        fetch()
    }, [])

    const { user } = useClientSession()
    const { mutate, isPending } = useTutorSlotsCreate()

    const handleChange = (field: string, value: string | boolean | string[]) => {
        setFormData(prev => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const payload: SlotsType = {
            startTime: formData.startTime,
            endTime: formData.endTime,
            duration: formData.duration,
            teachingMode: formData.teachingMode,
            maxStudents: Number(formData.maxStudents),
            isActive: formData.isActive,
            tutorId: user?.id,
            categories: formData.categories,
            hourlyRate: Number(formData.hourlyRate)
        }
        console.log(user?.id)
        mutate(payload)
    }

    console.log(categoryOptions)
    return (
        <Card className="max-w-2xl mx-auto my-5">
            <CardHeader>
                <CardTitle>Create Availability Slot</CardTitle>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <Label>Start Time</Label>
                            <Input
                                type="time"
                                value={formData.startTime}
                                onChange={e => handleChange("startTime", e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-1">
                            <Label>End Time</Label>
                            <Input
                                type="time"
                                value={formData.endTime}
                                onChange={e => handleChange("endTime", e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <Label>Session Duration (minutes)</Label>
                            <Input
                                type="number"
                                placeholder="60"
                                value={formData.duration}
                                onChange={e => handleChange("duration", e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-1">
                            <Label>Max Students</Label>
                            <Input
                                type="number"
                                min={1}
                                value={formData.maxStudents}
                                onChange={e => handleChange("maxStudents", e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <Label>Teaching Mode</Label>
                            <Select
                                onValueChange={value => handleChange("teachingMode", value)}
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

                        <div className="space-y-1">
                            <Label>Categories</Label>
                            <Select
                                value={formData.categories}
                                onValueChange={values => handleChange("categories", values)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select categories" />
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

                
                    <div className="flex items-center justify-between rounded-lg border p-3">
                        <Label>Slot Active</Label>
                        <Switch
                            checked={formData.isActive}
                            onCheckedChange={value => handleChange("isActive", value)}
                        />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-2">
                    
                        <div className="space-y-1">
                            <Label>HourlyRate</Label>
                            <Input
                                type="text"
                                placeholder="Enter Your HourlyRate"
                                value={formData.hourlyRate}
                                onChange={e => handleChange("hourlyRate", e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <Button type="submit" className="w-full" disabled={isPending}>
                        {
                            isPending ? <Spinner/>:"Create Slot"
                        }
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default AvailabilitySlotForm
