'use client'

import { authenticationService } from "@/services/authentication"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

function useSignIn() {
    const router = useRouter()
    return useMutation({
        mutationFn: authenticationService.login,
        onSuccess: (res) => {
            toast.success("Login successful!", { duration: 3000 , position:'top-center'});
            router.push("/")
            console.log("Login response:", res);
        },
        onError: (error) => {
            toast.error(error instanceof Error ? error.message : "Login failed." ,{ duration: 5000 , position:'top-center'});
        }

    })

}

export default useSignIn