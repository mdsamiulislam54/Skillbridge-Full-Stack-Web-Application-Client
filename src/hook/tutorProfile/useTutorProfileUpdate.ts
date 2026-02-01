'use client'




import { TutorFormValues } from "@/lib/validator/tutor.schema"
import { TutorService } from "@/services/tutor.service"
import { TutorSlot } from "@/type/tutor.slot.type"

import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

function useTutorProfileUpdate() {
    const router = useRouter()
    return useMutation({
        mutationFn: ({ id, payload }: {id: string , payload:TutorFormValues }) => TutorService.tutorProfileUpdate(id, payload),
        onSuccess: (res) => {
            toast.success("Profile Update successful!", { duration: 3000, position: 'top-center' });
            router.push("")
            console.log("Slots Update  response:", res);
        },
        onError: (error) => {
            toast.error(error instanceof Error ? error.message : " Slots Update  failed.", { duration: 5000, position: 'top-center' });
        }

    })

}

export default useTutorProfileUpdate