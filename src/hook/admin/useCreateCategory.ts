'use client'
import { AdminService } from "@/services/admin.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

function AdminCategoryCreate() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: AdminService.adminCategoryCreate,

        onSuccess: (res) => {
            toast.success("Category created successful!", { duration: 3000, position: 'top-center' });
            queryClient.invalidateQueries({
                queryKey: ["admin-categories"]
            })
        },
        onError: (error) => {
            toast.error(error instanceof Error ? error.message : " Category create  failed.", { duration: 5000, position: 'top-center' });
        }

    })

}

export default AdminCategoryCreate