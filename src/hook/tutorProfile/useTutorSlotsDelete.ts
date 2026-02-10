'use client'
import { TutorService } from "@/services/tutor.service"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

function useTutorSlotsDelete() {

    return useMutation({
        mutationFn: TutorService.slotsDelete,
        onSuccess: (res) => {
            toast.success("Profile Delete successful!", { duration: 3000, position: 'top-center' });

        },
        onError: (error) => {
            toast.error(error instanceof Error ? error.message : " Profile create  failed.", { duration: 5000, position: 'top-center' });
        }

    })

}

export default useTutorSlotsDelete