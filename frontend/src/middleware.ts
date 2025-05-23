import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const isAuthenticationPage = pathname.startsWith('/authentication');
    const isDashboardPage = pathname.startsWith('/dashboard');

    try {
        const hasSessionToken = request.cookies.has('nhostSession') || request.cookies.has('nhostRefreshToken');
        const authHeader = request.headers.get('authorization');
        const isAuthenticated = hasSessionToken || authHeader?.startsWith('Bearer ');

        if (isAuthenticationPage && isAuthenticated) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }

        if (isDashboardPage && !isAuthenticated) {
            return NextResponse.redirect(new URL('/authentication/login', request.url));
        }

        return NextResponse.next();
    } catch (error) {
        if (isDashboardPage) {
            return NextResponse.redirect(new URL('/authentication/login', request.url));
        }
        return NextResponse.next();
    }
}

export const config = {
    matcher: ['/dashboard/:path*', '/authentication/:path*']
};
