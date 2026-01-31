'use client'
import { AdminService } from "@/services/admin.service"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

function AdmincategoryCreate() {
    // const router = useRouter()
    return useMutation({
        mutationFn: AdminService.adminCategoryCreate,
        onSuccess: (res) => {
            toast.success("Category created successful!", { duration: 3000 , position:'top-center'});
            // router.push("/")
            console.log("Category create  response:", res);
        },
        onError: (error) => {
            toast.error(error instanceof Error ? error.message : " Category create  failed." ,{ duration: 5000 , position:'top-center'});
        }

    })

}

export default AdmincategoryCreate