// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./hook/authentication/useGetSession";
import { roles } from "./constants/roles";

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const  data = await getSession();

  const isAuthenticated = !!data?.user;
  const userRole = data?.user?.role;

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
  matcher: ["/dashboard/:path*"], 
};
