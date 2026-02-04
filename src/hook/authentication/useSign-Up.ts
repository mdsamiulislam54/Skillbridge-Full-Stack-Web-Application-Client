'use client'

import { authenticationService } from "@/services/authentication"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

function useSignUp() {
    const router = useRouter()
    return useMutation({
        mutationFn: authenticationService.register,
        onSuccess: (res) => {
            toast.success("Registration successful!", { duration: 3000 , position:'top-center'});
            router.push("/auth/login")
        },
        onError: (error) => {
            toast.error(error instanceof Error ? error.message : "Registration failed." ,{ duration: 5000 , position:'top-center'});
        }

    })

}

export default useSignUp