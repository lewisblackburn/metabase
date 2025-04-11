import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const isAuthenticationPage = pathname.startsWith('/authentication');
    const isDashboardPage = pathname.startsWith('/dashboard');

    const sessionCookie = request.cookies.get('nhostSession')?.value;

    let nhostSession = null;
    try {
        nhostSession = sessionCookie ? JSON.parse(sessionCookie) : null;
    } catch (error) {
        nhostSession = null;
    }

    const isLoggedIn = nhostSession && nhostSession.accessToken;

    if (isAuthenticationPage) {
        if (isLoggedIn) return NextResponse.redirect(new URL('/dashboard', request.url));

        return NextResponse.next();
    }

    if (isDashboardPage) {
        if (!isLoggedIn) return NextResponse.redirect(new URL('/authentication/login', request.url));

        return NextResponse.next();
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/authentication/:path*']
};
