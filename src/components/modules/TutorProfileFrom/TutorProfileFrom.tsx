'use client'

import { useForm } from "@tanstack/react-form"
import * as z from "zod"
import { toast } from "sonner"

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
    FieldDescription,
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

const tutorSchema = z.object({
    name: z.string().min(2),
    bio: z.string().min(10),
    education: z.string(),
    experienceYears: z.string(),
    teachingMode: z.string(),
    isAvailable: z.boolean(),
    profileImage: z.string().optional(),
    languages: z.array(z.string()).min(1),
})

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
            console.log('formdata', formData)
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
                        <div className="grid sm:grid-cols-2 gap-4">
                            {/* Name */}
                            <form.Field name="name">{(field) => (
                                <Field>
                                    <FieldLabel>Full Name</FieldLabel>
                                    <Input value={field.state.value} onChange={(e) => field.setValue(e.target.value)} />
                                    <FieldError errors={field.state.meta.errors} />
                                </Field>
                            )}</form.Field>
                            {/* Education */}
                            <form.Field name="education">{(field) => (
                                <Field>
                                    <FieldLabel>Education</FieldLabel>
                                    <Input value={field.state.value} onChange={(e) => field.setValue(e.target.value)} />
                                </Field>
                            )}</form.Field>
                        </div>


                        {/* Bio */}
                        <form.Field name="bio">{(field) => (
                            <Field>
                                <FieldLabel>Bio</FieldLabel>
                                <Textarea value={field.state.value} onChange={(e) => field.setValue(e.target.value)} className="min-h-[120px]" />
                                <FieldError errors={field.state.meta.errors} />
                            </Field>
                        )}</form.Field>

                        <div className="grid sm:grid-cols-3 gap-4">
                            {/* Experience Years */}
                            <form.Field name="experienceYears">{(field) => (
                                <Field>
                                    <FieldLabel>Experience Years</FieldLabel>
                                    <Input value={field.state.value} onChange={(e) => field.setValue(e.target.value)} />
                                </Field>
                            )}</form.Field>



                            {/* Teaching Mode */}
                            <form.Field name="teachingMode">{(field) => (
                                <Field>
                                    <FieldLabel>Teaching Mode</FieldLabel>
                                    <Input value={field.state.value} onChange={(e) => field.setValue(e.target.value)} />
                                </Field>
                            )}</form.Field>




                            {/* Languages */}
                            <form.Field name="languages">{(field) => (
                                <Field>
                                    <FieldLabel>Languages</FieldLabel>
                                    <div className="flex flex-wrap gap-2">
                                        {languagesOptions.map((lang) => {
                                            const selected = field.state.value.includes(lang)
                                            return (
                                                <Badge key={lang} variant={selected ? "default" : "outline"} className="cursor-pointer"
                                                    onClick={() => {
                                                        if (selected) field.setValue(field.state.value.filter(v => v !== lang))
                                                        else field.setValue([...field.state.value, lang])
                                                    }}>
                                                    {lang}
                                                </Badge>
                                            )
                                        })}
                                    </div>
                                </Field>
                            )}</form.Field>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {/* Is Available */}
                            <form.Field name="isAvailable">{(field) => (
                                <Field className="">
                                    <FieldLabel className="flex gap-4 p-2 rounded-xl">
                                        Available for Booking

                                    </FieldLabel>
                                    <Switch checked={field.state.value} onCheckedChange={field.setValue} />
                                </Field>
                            )}</form.Field>
                            {/* Profile Image */}
                            <form.Field name="profileImage">{(field) => (
                                <Field>
                                    <FieldLabel>Profile Image URL</FieldLabel>
                                    <Input value={field.state.value} onChange={(e) => field.setValue(e.target.value)} placeholder="https://..." />
                                </Field>
                            )}</form.Field>

                        </div>

                    </FieldGroup>
                </form>
            </CardContent>

            <CardFooter>
                <Button type="submit" form="tutor-profile-form" className="w-full bg-blue-500 hover:bg-blue-600">
                    {
                        isPending ? <Spinner /> : " Create Tutor Profile"
                    }
                </Button>
            </CardFooter>
        </Card>
    )
}

export default CreateProfile