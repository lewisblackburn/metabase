import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const isAuthenticationPage = pathname.startsWith('/authentication');
    const isDashboardPage = pathname.startsWith('/dashboard');

    try {
        const hasSessionToken = request.cookies.has('nhostSession') || request.cookies.has('nhostRefreshToken');
        const authHeader = request.headers.get('authorization');
        const isAuthenticated = hasSessionToken || authHeader?.startsWith('Bearer ');

        const response = NextResponse.next();

        if (isAuthenticationPage && isAuthenticated) {
            response.headers.set('x-middleware-cache', 'no-cache');
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }

        if (isDashboardPage && !isAuthenticated) {
            response.headers.set('x-middleware-cache', 'no-cache');
            return NextResponse.redirect(new URL('/authentication/login', request.url));
        }

        response.headers.set('x-middleware-cache', 'no-cache');
        return response;
    } catch (error) {
        if (isDashboardPage) {
            const response = NextResponse.redirect(new URL('/authentication/login', request.url));
            response.headers.set('x-middleware-cache', 'no-cache');
            return response;
        }
        const response = NextResponse.next();
        response.headers.set('x-middleware-cache', 'no-cache');
        return response;
    }
}

export const config = {
    matcher: ['/dashboard/:path*', '/authentication/:path*']
};
