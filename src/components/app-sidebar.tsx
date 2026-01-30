'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { roles } from "@/constants/roles"
import { adminRoutes } from "@/route/admin.route"
import { tutorRoutes } from "@/route/tutor.route"
import { studentRoutes } from "@/route/student.route"
import { AlignVerticalSpaceBetween } from "lucide-react"
import { cn } from "@/lib/utils"

type User = {
  role: string
  email?: string
}

export function AppSidebar({
  user,
  ...props
}: { user: User } & React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  const navMain = React.useMemo(() => {
    switch (user?.role) {
      case roles.ADMIN:
        return adminRoutes
      case roles.TUTOR:
        return tutorRoutes
      default:
        return studentRoutes
    }
  }, [user?.role])

  return (
    <Sidebar {...props}>
      {/* ---------- HEADER ---------- */}
      <SidebarHeader className="flex flex-col items-center gap-3 py-6">
        <Link href="/" className="flex items-center gap-2">
          <AlignVerticalSpaceBetween className="h-5 w-5" />
          <span className="text-lg font-semibold tracking-tight">
            SkillBridge
          </span>
        </Link>

        {user?.email && (
          <span className="text-xs text-muted-foreground truncate max-w-[160px]">
            {user.email}
          </span>
        )}
      </SidebarHeader>


      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>

          <SidebarMenu>
            {navMain.map((item) => {
              const isActive = pathname === item.url

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 transition-all",
                      "hover:bg-muted",
                      isActive && "bg-muted font-medium"
                    )}
                  >
                    <Link href={item.url}>
                      {item.icon && (
                        <item.icon className="h-4 w-4 shrink-0" />
                      )}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
