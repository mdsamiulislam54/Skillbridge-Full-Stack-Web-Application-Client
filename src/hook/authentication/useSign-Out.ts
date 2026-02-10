'use client'

import { authenticationService } from "@/services/authentication"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

function useSignOut() {
    const router = useRouter()
    return useMutation({
        mutationFn: authenticationService.signOut,
        onSuccess: (res) => {
            toast.success("SignOut successful!", { duration: 3000 , position:'top-center'});
            router.push("/")
        },
        onError: (error) => {
            toast.error(error instanceof Error ? error.message : " SignOut failed." ,{ duration: 5000 , position:'top-center'});
        }

    })

}

export default useSignOut