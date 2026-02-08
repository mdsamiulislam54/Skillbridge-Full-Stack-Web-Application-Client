'use client'
import { studentService } from "@/services/student.service"
import { Review, ReviewForm } from "@/type/Review.type"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

function useCreateReview() {
    return useMutation({
        mutationFn: ({data}:{data:ReviewForm})=>studentService.createReview(data),
        onSuccess: (res) => {
            toast.success("Review created successful!", { duration: 2000, position: 'top-center' });
        },
        onError: (error) => {
            toast.error(error instanceof Error ? error.message : " Booking  failed.", { duration: 5000, position: 'top-center' });
        }
    })

}

export default useCreateReview