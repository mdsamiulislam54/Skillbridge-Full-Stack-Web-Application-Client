// app/dashboard/page.tsx
export const dynamic = "force-dynamic";
import { getSession } from "@/hook/authentication/useGetSession"
import { redirect } from "next/navigation"
import { roles } from "@/constants/roles"

export default async function DashboardHome() {
  const session = await getSession()

  if (!session?.user) redirect("/auth/login")

  switch (session.user.role) {
    case roles.ADMIN:
      redirect("/dashboard/admin")
    case roles.TUTOR:
      redirect("/dashboard/tutor")
    default:
      redirect("/dashboard/student")
  }
}
