'use client'
import { AdminService } from "@/services/admin.service"
import { Category } from "@/type/category.type"
import { useMutation } from "@tanstack/react-query"

import { toast } from "sonner"

function useCategoryUpdate() {
 
    return useMutation({
        mutationFn: ({ id, data }: { id: string, data: Category }) => AdminService.updateCategory(id, data),
        onSuccess: (res) => {
            toast.success("Category  Update successful!", { duration: 3000, position: 'top-center' });
        },
        onError: (error) => {
            toast.error(error instanceof Error ? error.message : " Category Update  failed.", { duration: 5000, position: 'top-center' });
        }

    })

}

export default useCategoryUpdate