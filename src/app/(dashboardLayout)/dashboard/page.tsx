export const dynamic = "force-dynamic";
import { redirect } from "next/navigation"
import { roles } from "@/constants/roles"
import { getSession } from "@/hook/authentication/useGetSession"

export default async function DashboardHome() {
  const session  =  await getSession()

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
