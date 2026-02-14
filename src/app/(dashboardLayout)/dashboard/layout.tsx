export const dynamic = "force-dynamic";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/modules/Darkmode/darkmode";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { getSession } from "@/hook/authentication/useGetSession";
import Link from "next/link";

type DashboardLayoutProps = {
  children: React.ReactNode;

};

export default async function DashboardLayout({
  children,
  

}: DashboardLayoutProps) {
  const session = await getSession();
  
  return (
    <SidebarProvider>
      <AppSidebar user={session?.user} />

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-1 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />


          <div className="flex justify-end items- gap-10">

            <div className="space-x-5">
              <Button variant={"outline"}>
                <Link href={'/'}>Home</Link>
              </Button>
              <ModeToggle />
            </div>
          </div>

        </header>

        <main className="">
          {children}
        </main>
    
      </SidebarInset>
    </SidebarProvider>
  );
}
