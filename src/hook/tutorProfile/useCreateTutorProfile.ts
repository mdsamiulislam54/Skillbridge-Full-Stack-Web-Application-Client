'use client'
import { TutorService } from "@/services/tutor.service"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

function useTutorProfileCreate() {
    const router = useRouter()
    return useMutation({
        mutationFn: TutorService.tutorProfileCreate,
        onSuccess: (res) => {
            toast.success("Profile created successful!", { duration: 3000 , position:'top-center'});
            router.push("/dashboard/tutor-page/view-profile")
        },
        onError: (error) => {
            toast.error(error instanceof Error ? error.message : " profile create  failed." ,{ duration: 5000 , position:'top-center'});
        }

    })

}

export default useTutorProfileCreate