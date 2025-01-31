import { NextRequest, NextResponse } from "next/server";

export const middleware = async(req: NextRequest) => {
    const token = req.cookies.get('token')?.value;

    if (!token && req.nextUrl.pathname.startsWith('/dashboard')) {
        const loginPath = req.nextUrl.clone();
        loginPath.pathname = '/login';
        return NextResponse.redirect(loginPath);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*']
}