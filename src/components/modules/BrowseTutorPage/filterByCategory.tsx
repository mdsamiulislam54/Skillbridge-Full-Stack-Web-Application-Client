"use client"

import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AdminService } from "@/services/admin.service"
import { Category } from "@/type/category.type"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const FilterByCategory = () => {
    const [categoryOptions, setCategoryOptions] = useState<Category[]>([]);
    const router = useRouter()

    useEffect(() => {
        const fetch = async () => {
            const res = await AdminService.getCategory()
            setCategoryOptions(res.data || [])
        }
        fetch()
    }, [])
    const handleSubmit = (category: string) => {
        console.log("__________", category);
        router.push(`?filter=${category.trim().toLocaleLowerCase()}`)
    }
    return (
        <div className="flex items-center gap-3">
            <Label>
                Sort By Category
            </Label>
            <div className="space-y-1">

                <Select

                    onValueChange={(value) => handleSubmit(value)}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select categories" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Sell All Tutor</SelectItem>
                        {categoryOptions.map(cat => (
                            <SelectItem key={cat.id} value={cat.name}>
                                {cat.name}
                            </SelectItem>
                        ))}


                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

export default FilterByCategory