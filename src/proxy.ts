
import { NextRequest, NextResponse } from "next/server";

import { roles } from "./constants/roles";
import { config as configs } from '@/config/config'
import { getSession } from "./hook/authentication/useGetSession";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const session = await getSession();
  console.log('Middleware Session:', session);

  const isAuthenticated = !!session?.user;
  const userRole = session?.user?.role;

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }


  if (pathname.startsWith("/dashboard/admin") && userRole !== roles.ADMIN) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (pathname.startsWith("/dashboard/tutor") && userRole !== roles.TUTOR) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (pathname.startsWith("/dashboard/student") && userRole !== roles.STUDENT) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
