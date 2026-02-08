'use client'
import { AdminService } from "@/services/admin.service"
import { useMutation } from "@tanstack/react-query"

import { toast } from "sonner"

function useDeleteCategory() {
 
    return useMutation({
        mutationFn: ({ id }: { id: string }) => AdminService.deleteCategory(id),
        onSuccess: (res) => {
            toast.success("Category  Delete successful!", { duration: 3000, position: 'top-center' });
        },
        onError: (error) => {
            toast.error(error instanceof Error ? error.message : " Category Delete  failed.", { duration: 5000, position: 'top-center' });
        }

    })

}

export default useDeleteCategory