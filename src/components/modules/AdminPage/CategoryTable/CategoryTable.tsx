'use client'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Category } from "@/type/category.type";
import { useState } from "react";
import CategoryForm from "../CategoryFrom/CategoryFrom";
import { X } from "lucide-react";
import UpdateCategoryForm from "../UpdateCategoryFrom/UpdateCategoryFrom";



type Props = {
    data: Category[];
};




export default function CategoryTable({ data }: Props) {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<Category| null>(null)

    const handleToggle = () => setIsOpen(!isOpen);
    const handleUpdateCategory = (data: Category) => {
        handleToggle();
        setSelectedCategory(data)
        console.log(data)
    }
    return (
        <div className="rounded-md border bg-background dark:border-zinc-800 relative">
            <Table>
                <TableHeader>
                    <TableRow className="dark:hover:bg-zinc-900">
                        <TableHead>Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Sort Order</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {data.map((item) => (
                        <TableRow
                            key={item.id}
                            className="dark:hover:bg-zinc-900"
                        >
                            <TableCell className="font-medium">
                                {item.name}
                            </TableCell>

                            <TableCell className="text-muted-foreground">
                                {item.description}
                            </TableCell>

                            <TableCell>{item.sortOrder}</TableCell>

                            <TableCell>
                                <Button
                                    size="sm"
                                    variant={item.isActive ? "default" : "destructive"}
                                >
                                    {item.isActive ? "Active" : "Inactive"}
                                </Button>
                            </TableCell>

                            <TableCell className="text-right">
                                <Button
                                    onClick={() => handleUpdateCategory(item)}
                                    size="sm" variant="outline">
                                    Edit
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {
                isOpen && selectedCategory && <div className="absolute inset-0 ">
                    <Button onClick={handleToggle} className="absolute top-0 right-4"><X/></Button>
                    <UpdateCategoryForm data={selectedCategory} onClose={handleToggle}/>
                </div>
            }
        </div>
    );
}
