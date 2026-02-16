import { env } from "@/env";
import { NextRequest, NextResponse } from "next/server";

const BACKEND = process.env.BACKEND_URL

export async function GET(
    req: NextRequest,
    context: { params: Promise<{ path: string[] }> }
) {
    const { path } = await context.params;
    return proxy(req, path);
}

export async function POST(
    req: NextRequest,
    context: { params: Promise<{ path: string[] }> }
) {
    const { path } = await context.params;
    return proxy(req, path);
}

export async function PUT(
    req: NextRequest,
    context: { params: Promise<{ path: string[] }> }
) {
    const { path } = await context.params;
    return proxy(req, path);
}

export async function DELETE(
    req: NextRequest,
    context: { params: Promise<{ path: string[] }> }
) {
    const { path } = await context.params;
    return proxy(req, path);
}

export async function PATCH(
    req: NextRequest,
    context: { params: Promise<{ path: string[] }> }
) {
    const { path } = await context.params;
    return proxy(req, path);
}

async function proxy(req: NextRequest, path: string[]) {
    console.log("Original path:", path);

    let backendPath = "";

    // If path starts with 'api', remove first segment
    if (path[0] === "api") path = path.slice(1);

    // Auth endpoints
    if (path[0] === "auth" || path[0] === "get-session" || path[0] === "me") {
        backendPath = `api/auth/${path.slice(path[0] === "auth" ? 1 : 0).join("/")}`;
    } else {
        backendPath = `api/${path.join("/")}`;
    }

    // remove duplicate slashes
    backendPath = backendPath.replace(/\/+/g, "/");

    const url = `${BACKEND}/${backendPath}${req.nextUrl.search}`;
    console.log("Proxy URL:", url);

    const body = req.method !== "GET" && req.method !== "HEAD"
        ? await req.text()
        : undefined;

    const incomingHeaders = Object.fromEntries(req.headers.entries());
    incomingHeaders['origin'] = incomingHeaders['origin'] || env.NEXT_PUBLIC_FRONTEND_URL;
    const headers = new Headers();

    req.headers.forEach((value, key) => {

        headers.set(key, value);

    });

    console.log(".............new header ", headers)
    const response = await fetch(url, {
        method: req.method,
        headers,
        body,
        credentials: "include",
    });

    console.log("_____________Response:", response)
    const resBody = await response.text();

    const res = new NextResponse(resBody, {
        status: response.status,
    });

    const cookies = response.headers.getSetCookie();
    console.log("__________cookie--------:", cookies)
    if (cookies) cookies.forEach(cookie => res.headers.append('set-cookie', cookie));




    return res;
}
