
import { env } from "@/env";
import { Category } from "@/type/category.type";


export interface GetParams {
    page?: string,
    limit?: string
    search?: string,
    sort?: string,
    status?: string
}

export const AdminService = {
    adminCategoryCreate: async (payload: Category) => {
        try {
            console.log(".................category, pay", payload)
            const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/api/admin/category`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
                body: JSON.stringify(payload)
            })
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Category Create failed');
            }
            return res
        } catch (error) {
            console.log(error)
            throw error
        }
    },

    getCategory: async () => {
        try {
            const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/api/admin/category`, {
                credentials: "include"
            });
            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || "API Error");
            }
            return await res.json();
        } catch (error) {
            console.log(error)
            throw error
        }
    },

    getAdminDashboardCard: async (cookie?: string) => {
        try {
            const headers: HeadersInit = {
                "Content-Type": "application/json",
            };

            if (cookie) {
                headers.Cookie = cookie;
            }

            const res = await fetch(`${env.BACKEND_URL}/api/admin/dashboard`, {
                headers,
                credentials: "include"
            });
            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || "API Error");
            }
            return await res.json();
        } catch (error) {
            throw error
        }
    },

    getAdminChartData: async (cookie?: string) => {
        try {
            const headers: HeadersInit = {
                "Content-Type": "application/json",
            };

            if (cookie) {
                headers.Cookie = cookie;
            }

            const res = await fetch(`${env.BACKEND_URL}/api/admin/dashboard/chart`, {
                headers,
                credentials: "include"
            });
            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || "API Error");
            }
            return await res.json();
        } catch (error) {
            throw error
        }
    },

    getAllUser: async (params: GetParams, cookie?: string) => {
        try {
            const url = new URL(`${env.BACKEND_URL}/api/admin/all-user`);

            if (params) {
                Object.entries(params).forEach(([key, value]) => {
                    if (value !== undefined && value !== null && value !== '') {
                        url.searchParams.append(key, value);
                    }
                });
            }

            const headers: HeadersInit = {
                "Content-Type": "application/json",
            };

            if (cookie) {
                headers.Cookie = cookie;
            }

            const res = await fetch(url, {
                headers,
                credentials: "include"
            });
            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || "API Error");
            }
            return await res.json();
        } catch (error) {
            throw error
        }
    },

    updateUser: async (id: string, status: string, cookie?: string) => {
        try {
            const headers: HeadersInit = {
                "Content-Type": "application/json",
            };

            if (cookie) {
                headers.Cookie = cookie;
            }

            const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/api/admin/manage/user/${id}?status=${status}`, {
                method: "PATCH",
                headers,
                credentials: "include"
            });
            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || "API Error");
            }
            return await res.json();
        } catch (error) {
            throw error
        }
    },

    getAllBooking: async (params: GetParams, cookie?: string) => {
        try {
            const url = new URL(`${env.BACKEND_URL}/api/admin/all-booking`);

            if (params) {
                Object.entries(params).forEach(([key, value]) => {
                    if (value !== undefined && value !== null && value !== '') {
                        url.searchParams.append(key, value);
                    }
                });
            }

            const headers: HeadersInit = {
                "Content-Type": "application/json",
            };

            if (cookie) {
                headers.Cookie = cookie;
            }

            const res = await fetch(url, {
                headers,
                credentials: "include"
            });
            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || "API Error");
            }
            return await res.json();
        } catch (error) {
            throw error
        }
    },

    updateCategory: async (id: string, data: Category, cookie?: string) => {
        try {

            console.log("......UpdateData,", data)




            const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/api/admin/manage/category/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(data)
            });
            console.log("......UpdateData,", res)
            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || "API Error");
            }
            return await res.json();
        } catch (error) {
            throw error
        }
    },

    deleteCategory: async (id: string, ) => {
        try {
         

            const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/api/admin/manage/category/${id}`, {
                method: "DELETE",
                credentials: "include",
            });
            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || "API Error");
            }
            return await res.json();
        } catch (error) {
            throw error
        }
    },
}