'use client'
import { TutorFormValues } from "@/lib/validator/tutor.schema"
import { TutorService } from "@/services/tutor.service"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

function useTutorProfileUpdate() {
    return useMutation({
        mutationFn: ({ id, payload }: {id: string , payload:TutorFormValues }) => TutorService.tutorProfileUpdate(id, payload),
        onSuccess: (res) => {
            toast.success("Profile Update successful!", { duration: 3000, position: 'top-center' });
          
        
        },
        onError: (error) => {
            toast.error(error instanceof Error ? error.message : " Slots Update  failed.", { duration: 5000, position: 'top-center' });
        }

    })

}

export default useTutorProfileUpdate