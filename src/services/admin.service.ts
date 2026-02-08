
import { config } from "@/config/config"
import { Category } from "@/type/category.type";

export interface GetParams {
    page?: string,
    limit?: string
    search?: string,
    sort?: string,
    status?: string
}



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
            return await res.json();

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
    },
    getAllUser: async (params: GetParams, cookie?: string) => {
        try {

            const url = new URL(`${config.backendUrl}/api/admin/all-user`);

            if (params) {
                Object.entries(params).forEach(([key, value]) => {
                    if (value !== undefined && value !== null && value !== '') {
                        url.searchParams.append(key, value)
                    }
                })
            }
            const res = await fetch(url, {
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
    updateUser: async (id: string, status: string, cookie?: string) => {
        try {
            console.log(id, status)
            const res = await fetch(`${config.backendUrl}/api/admin/manage/user/${id}?status=${status}`, {
                method: "PATCH",
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

    getAllBooking: async (params: GetParams, cookie?: string) => {
        try {

            const url = new URL(`${config.backendUrl}/api/admin/all-booking`);

            if (params) {
                Object.entries(params).forEach(([key, value]) => {
                    if (value !== undefined && value !== null && value !== '') {
                        url.searchParams.append(key, value)
                    }
                })
            }
            const res = await fetch(url, {
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
    updateCategory: async (id: string, data: Category, cookie?: string) => {
        try {

            const res = await fetch(`${config.backendUrl}/api/admin/manage/category/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    ...(cookie ? { cookie } : {}),
                },
                credentials: "include",
                body: JSON.stringify(data)
            })
            return await res.json();

        } catch (error) {
            throw error
        }
    },
}