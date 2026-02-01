'use client'
import { TutorService } from "@/services/tutor.service"
import { SlotsType, UpdateSlotsType } from "@/type/slots.type"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
type UpdateSlotArgs = { id: string, payload: UpdateSlotsType }
function useTutorSlotsUpdate() {
    const router = useRouter()
    return useMutation({
        mutationFn: ({id,payload}:UpdateSlotArgs)=>TutorService.slotsUpdate(id,payload),
        onSuccess: (res) => {
            toast.success("Slots Update successful!", { duration: 3000, position: 'top-center' });
            router.push("")
            console.log("Slots Update  response:", res);
        },
        onError: (error) => {
            toast.error(error instanceof Error ? error.message : " Slots Update  failed.", { duration: 5000, position: 'top-center' });
        }

    })

}

export default useTutorSlotsUpdate