'use client'
import { TutorService } from "@/services/tutor.service"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

function useTutorSlotsDelete() {
    const router = useRouter()
    return useMutation({
        mutationFn: TutorService.slotsDelete,
        onSuccess: (res) => {
            toast.success("Slots Delete successful!", { duration: 3000, position: 'top-center' });
            router.push("")
            console.log("Slots Deleted  response:", res);
        },
        onError: (error) => {
            toast.error(error instanceof Error ? error.message : " Slots create  failed.", { duration: 5000, position: 'top-center' });
        }

    })

}

export default useTutorSlotsDelete