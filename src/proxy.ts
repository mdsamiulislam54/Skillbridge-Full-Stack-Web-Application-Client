
import { NextRequest, NextResponse } from "next/server";
import { roles } from "./constants/roles";
import { getSession } from "./services/authentication.service";

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const session = await getSession()
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
