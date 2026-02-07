'use client'
import { AdminService } from "@/services/admin.service"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

function AdminStatusUpdate() {
    // const router = useRouter()
    return useMutation({
        mutationFn: ({ id, status }: { id: string, status: string }) => AdminService.updateUser(id, status),
        onSuccess: (res) => {
            toast.success("Status Update successful!", { duration: 3000, position: 'top-center' });
            // router.push("/")

        },
        onError: (error) => {
            toast.error(error instanceof Error ? error.message : " Status Update  failed.", { duration: 5000, position: 'top-center' });
        }

    })

}

export default AdminStatusUpdate