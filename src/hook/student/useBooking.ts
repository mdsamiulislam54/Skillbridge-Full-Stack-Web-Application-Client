'use client'
import { studentService } from "@/services/student.service"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

function useBooking() {
    const router = useRouter()
    return useMutation({
        mutationFn: studentService.createBooking,
        onSuccess: (res) => {
            toast.success("Booking successful!", { duration: 2000, position: 'top-center' });
            router.push("/tutor")

        },
        onError: (error) => {
            toast.error(error instanceof Error ? error.message : " Booking  failed.", { duration: 5000, position: 'top-center' });
        }

    })

}

export default useBooking