
import { config } from "@/config/config"
import { Category } from "@/type/category.type";





export const AdminService = {
    adminCategoryCreate: async (payload: Category,) => {
        try {
            const res = await fetch(`${config.backendUrl}/api/admin/category`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',

                },
                credentials: "include",
                body: JSON.stringify(payload)
            })
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Category Create  failed');
            }
            return res
        } catch (error) {
            console.log(error)
            throw error
        }
    },


    getCategory: async () => {
        try {
            const res = await fetch(`${config.backendUrl}/api/admin/category`)
            const data = await res.json();
            return { success: true, data }
        } catch (error) {
            console.log(error)
            throw error
        }
    },
    getAdminDashboardCard: async (cookie?: string) => {
        try {
            const res = await fetch(`${config.backendUrl}/api/admin/dashboard`, {
                headers: {
                    "Content-Type": "application/json",
                    ...(cookie ? { cookie } : {}),
                },
                credentials: "include"
            })
            return await res.json();

        } catch (error) {
            throw error
        }
    },
    getAdminChartData: async (cookie?: string) => {
        try {
            const res = await fetch(`${config.backendUrl}/api/admin/dashboard/chart`, {
                headers: {
                    "Content-Type": "application/json",
                    ...(cookie ? { cookie } : {}),
                },
                credentials: "include"
            })
            return await res.json();

        } catch (error) {
            throw error
        }
    }
}