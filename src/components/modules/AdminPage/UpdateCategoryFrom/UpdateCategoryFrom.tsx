
'use client'

import { useForm } from '@tanstack/react-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Spinner } from '@/components/ui/spinner'
import { Category } from '@/type/category.type'
import useCategoryUpdate from '@/hook/admin/useCategoryUpdate'

const categorySchema = z.object({
    name: z.string().min(1, 'Category name is required'),
    icon: z.string().optional(),
    description: z.string().optional(),
    sortOrder: z.number().optional(),
    isActive: z.boolean(),
})

type CategoryProps = {
    data: Category,
    onClose: () => void
}

const UpdateCategoryForm = ({ data, onClose }: CategoryProps) => {
    const { mutate, isPending } = useCategoryUpdate();

    const form = useForm({
        defaultValues: {
            name: data.name,
            icon: data.icon,
            description: data.description,
            sortOrder: data.sortOrder.toString(),
            isActive: true,
        },
        onSubmit: async ({ value }) => {

            const categoryData = {

                name: value.name,
                icon: value.icon,
                description: value.description,
                sortOrder: Number(value.sortOrder),
                isActive: value.isActive,
            }
            mutate({ id: data.id || '', data: categoryData }, {
                onSuccess: () => {
                    onClose()
                }
            })
        },
    })

    return (
        <Card className="max-w-2xl mx-auto my-4">
            <CardHeader>
                <CardTitle>Create Category</CardTitle>
            </CardHeader>

            <CardContent>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        form.handleSubmit()
                    }}
                    className="space-y-5"
                >
                    <form.Field
                        name="name"
                        validators={{
                            onChange: categorySchema.shape.name,
                        }}
                    >
                        {(field) => (
                            <div className="space-y-1">
                                <Label>Category Name *</Label>
                                <Input
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                {field.state.meta.errors && (
                                    <p className="text-sm text-red-500">
                                        {field.state.meta.errors[0]?.message}
                                    </p>
                                )}
                            </div>
                        )}
                    </form.Field>


                    <form.Field name="icon">
                        {(field) => (
                            <div className="space-y-1">
                                <Label>Icon URL</Label>
                                <Input
                                    placeholder="lucide-react / image url"
                                    value={field.state.value || ''}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                            </div>
                        )}
                    </form.Field>


                    <form.Field name="description">
                        {(field) => (
                            <div className="space-y-1">
                                <Label>Description</Label>
                                <Textarea
                                    value={field.state.value || ''}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                            </div>
                        )}
                    </form.Field>


                    <form.Field name="sortOrder">
                        {(field) => (
                            <div className="space-y-1">
                                <Label>Sort Order</Label>
                                <Input
                                    type="text"
                                    value={field.state.value ?? ''}
                                    onChange={(e) =>
                                        field.handleChange(
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        )}
                    </form.Field>


                    <form.Field name="isActive">
                        {(field) => (
                            <div className="flex items-center justify-between rounded-lg border p-4">
                                <Label>Active Status</Label>
                                <Switch
                                    checked={field.state.value}
                                    onCheckedChange={field.handleChange}
                                />
                            </div>
                        )}
                    </form.Field>


                    <Button type="submit" className="w-full">
                        {
                            isPending ? <Spinner /> : "Update Category"
                        }
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default UpdateCategoryForm
