"use client"
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
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import Link from "next/link"
import useSignIn from "@/hook/authentication/useSign-in"
import { Spinner } from "@/components/ui/spinner"
import { useState } from "react"
import { Eye, EyeClosed } from "lucide-react"

const formSchema = z.object({
    email: z.email().min(5, "Email must be at least 5 characters."),
    password: z.string().min(8, "Password must be at least 8 characters."),
})

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { mutate, isPending } = useSignIn();
    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        validators: {
            onSubmit: formSchema,
        },
        onSubmit: async ({ value }) => {
            mutate({ email: value.email, password: value.password });
        },
    })
    const handleShowPassword = () => setShowPassword(!showPassword);
    return (
        <Card className="w-full max-w-lg">
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                    Please enter your login details below.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form
                    id="bug-report-form"
                    onSubmit={(e) => {
                        e.preventDefault()
                        form.handleSubmit()
                    }}
                >
                    <FieldGroup>
                        <form.Field name="email">
                            {(field) => {
                                const isInvalid =
                                    field.state.meta.isTouched && !field.state.meta.isValid
                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.handleChange(e.target.value)}
                                            aria-invalid={isInvalid}
                                            placeholder="Enter Your Email"
                                            autoComplete="off"
                                        />
                                        {isInvalid && (
                                            <FieldError errors={field.state.meta.errors} />
                                        )}
                                    </Field>
                                )
                            }}
                        </form.Field>
                        <form.Field name="password">
                            {(field) => {
                                const isInvalid =
                                    field.state.meta.isTouched && !field.state.meta.isValid
                                return (
                                    <Field data-invalid={isInvalid} >
                                        <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                                        <div className="relative">
                                            <Input
                                                id={field.name}
                                                type={showPassword ? "text":"password"}
                                                name={field.name}
                                                value={field.state.value}
                                                onBlur={field.handleBlur}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.handleChange(e.target.value)}
                                                aria-invalid={isInvalid}
                                                placeholder="Enter Your Password ****"
                                                autoComplete="off"
                                                className="relative"
                                            />
                                            <button type="button" onClick={handleShowPassword} className="cursor-pointer absolute top-2 right-2 ">
                                                {
                                                    showPassword ? <EyeClosed /> : <Eye />
                                                }
                                            </button>
                                        </div>
                                        {isInvalid && (
                                            <FieldError errors={field.state.meta.errors} />
                                        )}

                                    </Field>
                                )
                            }}
                        </form.Field>

                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter>
                <Field orientation="vertical" className="w-full">

                    <Button type="submit" className="w-full" form="bug-report-form">
                        {isPending ? <span className="flex gap-2 justify-center items-center"><Spinner /> Loggin in...</span> : "Login"}
                    </Button>
                    <Button variant="outline" className="w-full mt-2 text-center">


                    </Button>
                    <FieldDescription className="text-center mt-4">
                        Do not have an account? <Link href="/auth/register" className="text-blue-600 hover:underline">Register here</Link>
                    </FieldDescription>
                </Field>
            </CardFooter>
        </Card>
    )
}

export default LoginPage
