'use client'
import { AdminService } from "@/services/admin.service"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

function AdminCategoryCreate() {

    return useMutation({
        mutationFn: AdminService.adminCategoryCreate,
        onSuccess: (res) => {
            toast.success("Category created successful!", { duration: 3000 , position:'top-center'});
        },
        onError: (error) => {
            toast.error(error instanceof Error ? error.message : " Category create  failed." ,{ duration: 5000 , position:'top-center'});
        }

    })

}

export default AdminCategoryCreate