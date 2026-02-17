'use client'

import { useForm } from "@tanstack/react-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import useTutorProfileCreate from "@/hook/tutorProfile/useCreateTutorProfile"
import { Spinner } from "@/components/ui/spinner"
import { useClientSession } from "@/hook/authentication/useClientSession"

const languagesOptions = ["English", "Bangla", "Hindi", "Spanish"]

export const tutorSchema = z.object({
    name: z.string()
        .min(2, { message: "Name must be at least 2 characters long" })
        .max(50, { message: "Name cannot exceed 50 characters" }),
    
    bio: z.string()
        .min(10, { message: "Bio must be at least 10 characters long" })
        .max(500, { message: "Bio cannot exceed 500 characters" }),
    
    education: z.string()
        .min(2, { message: "Education details are required" })
        .max(100, { message: "Education details too long" }),

    experienceYears: z.string()
        .regex(/^\d+$/, { message: "Experience years must be a valid number" })
        .min(1, { message: "Experience years are required" }),
    
    teachingMode: z.string()
        .min(2, { message: "Teaching mode is required" }),
    
    isAvailable: z.boolean(),
    
    profileImage: z.string()
        .min(0,{ message: "Please enter a valid image URL" })
        .optional()
        .or(z.literal("")),

    languages: z.array(z.string())
        .min(1, { message: "At least one language is required" })
        .max(10, { message: "Cannot add more than 10 languages" }),
});

type TutorFormValues = z.infer<typeof tutorSchema>

function CreateProfile() {
    const { mutate, isPending } = useTutorProfileCreate();
    const { user } = useClientSession()
    
    const form = useForm({
        defaultValues: {
            name: "",
            bio: "",
            education: "",
            experienceYears: "",
            teachingMode: "",
            isAvailable: true,
            profileImage: "",
            languages: [],
        } as TutorFormValues,
        validators: {
            onSubmit: tutorSchema,
        },
        onSubmit: async ({ value }) => {
            const formData = {
                ...value,
                userId: user?.id,
                profileImage: value.profileImage || ""
            }
          
            mutate(formData)
        },
    })

    return (
        <Card className="max-w-full mx-auto m-4">
            <CardHeader>
                <CardTitle>Create Tutor Profile</CardTitle>
                <CardDescription>Fill in the tutor details below</CardDescription>
            </CardHeader>

            <CardContent>
                <form
                    id="tutor-profile-form"
                    onSubmit={(e) => {
                        e.preventDefault()
                        form.handleSubmit()
                    }}
                >
                    <FieldGroup>
                        {/* Row 1: Name and Education */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {/* Name Field */}
                            <form.Field name="name">
                                {(field) => {
                                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                                    return (
                                        <Field>
                                            <FieldLabel>Full Name</FieldLabel>
                                            <Input
                                                value={field.state.value}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                                onBlur={field.handleBlur}
                                                className={isInvalid ? "border-red-500" : ""}
                                            />
                                            {isInvalid && (
                                                <FieldError errors={field.state.meta.errors} />
                                            )}
                                        </Field>
                                    )
                                }}
                            </form.Field>

                            {/* Education Field */}
                            <form.Field name="education">
                                {(field) => {
                                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                                    return (
                                        <Field>
                                            <FieldLabel>Education</FieldLabel>
                                            <Input
                                                value={field.state.value}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                                onBlur={field.handleBlur}
                                                className={isInvalid ? "border-red-500" : ""}
                                            />
                                            {isInvalid && (
                                                <FieldError errors={field.state.meta.errors} />
                                            )}
                                        </Field>
                                    )
                                }}
                            </form.Field>
                        </div>

                        {/* Bio Field */}
                        <form.Field name="bio">
                            {(field) => {
                                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                                return (
                                    <Field>
                                        <FieldLabel>Bio</FieldLabel>
                                        <Textarea
                                            value={field.state.value}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            onBlur={field.handleBlur}
                                            className={`min-h-[120px] ${isInvalid ? "border-red-500" : ""}`}
                                        />
                                        {isInvalid && (
                                            <FieldError errors={field.state.meta.errors} />
                                        )}
                                        <span className="text-xs text-gray-500 mt-1">
                                            {field.state.value.length}/500 characters
                                        </span>
                                    </Field>
                                )
                            }}
                        </form.Field>

                        {/* Row 2: Experience Years, Teaching Mode, Languages */}
                        <div className="grid sm:grid-cols-3 gap-4">
                            {/* Experience Years Field */}
                            <form.Field name="experienceYears">
                                {(field) => {
                                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                                    return (
                                        <Field>
                                            <FieldLabel>Experience Years</FieldLabel>
                                            <Input
                                                type="number"
                                                min="1"
                                                value={field.state.value}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                                onBlur={field.handleBlur}
                                                className={isInvalid ? "border-red-500" : ""}
                                            />
                                            {isInvalid && (
                                                <FieldError errors={field.state.meta.errors} />
                                            )}
                                        </Field>
                                    )
                                }}
                            </form.Field>

                            {/* Teaching Mode Field */}
                            <form.Field name="teachingMode">
                                {(field) => {
                                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                                    return (
                                        <Field>
                                            <FieldLabel>Teaching Mode</FieldLabel>
                                            <Input
                                                value={field.state.value}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                                onBlur={field.handleBlur}
                                                className={isInvalid ? "border-red-500" : ""}
                                            />
                                            {isInvalid && (
                                                <FieldError errors={field.state.meta.errors} />
                                            )}
                                        </Field>
                                    )
                                }}
                            </form.Field>

                            {/* Languages Field */}
                            <form.Field name="languages">
                                {(field) => {
                                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                                    return (
                                        <Field>
                                            <FieldLabel>Languages</FieldLabel>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {languagesOptions.map((lang) => {
                                                    const selected = field.state.value.includes(lang)
                                                    return (
                                                        <Badge
                                                            key={lang}
                                                            variant={selected ? "default" : "outline"}
                                                            className={`cursor-pointer ${selected ? 'bg-blue-500' : ''} ${isInvalid ? 'border-red-500' : ''}`}
                                                            onClick={() => {
                                                                if (selected) {
                                                                    field.handleChange(field.state.value.filter(v => v !== lang))
                                                                } else {
                                                                    field.handleChange([...field.state.value, lang])
                                                                }
                                                            }}
                                                        >
                                                            {lang}
                                                        </Badge>
                                                    )
                                                })}
                                            </div>
                                            {isInvalid && (
                                                <FieldError errors={field.state.meta.errors} />
                                            )}
                                            <span className="text-xs text-gray-500 mt-1">
                                                {field.state.value.length} languages selected
                                            </span>
                                        </Field>
                                    )
                                }}
                            </form.Field>
                        </div>

                        {/* Row 3: Availability and Profile Image */}
                        <div className="grid sm:grid-cols-2 gap-4 mt-4">
                            {/* Availability Field */}
                            <form.Field name="isAvailable">
                                {(field) => (
                                    <Field className="flex items-center justify-between p-4 border rounded-lg">
                                        <FieldLabel className="mb-0">Available for Booking</FieldLabel>
                                        <Switch
                                            checked={field.state.value}
                                            onCheckedChange={field.handleChange}
                                        />
                                    </Field>
                                )}
                            </form.Field>

                            {/* Profile Image Field */}
                            <form.Field name="profileImage">
                                {(field) => {
                                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                                    return (
                                        <Field>
                                            <FieldLabel>Profile Image URL (Optional)</FieldLabel>
                                            <Input
                                                value={field.state.value}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                                onBlur={field.handleBlur}
                                                placeholder="https://example.com/image.jpg"
                                                className={isInvalid ? "border-red-500" : ""}
                                            />
                                            {isInvalid && (
                                                <FieldError errors={field.state.meta.errors} />
                                            )}
                                        </Field>
                                    )
                                }}
                            </form.Field>
                        </div>
                    </FieldGroup>
                </form>
            </CardContent>

            <CardFooter>
                <Button
                    type="submit"
                    form="tutor-profile-form"
                    className="w-full"
                    disabled={isPending}
                >
                    {isPending ? <Spinner /> : "Create Tutor Profile"}
                </Button>
            </CardFooter>
        </Card>
    )
}

export default CreateProfile