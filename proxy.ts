import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { handleNhostMiddleware } from "@/lib/nhost/server";

/**
 * Matches a URL path (e.g. /movies/123) against a pattern (e.g. /movies/:id)
 */
function matchRoute(path: string, pattern: string): boolean {
	const regex = new RegExp("^" + pattern.replace(/:[^/]+/g, "[^/]+") + "$");
	return regex.test(path);
}

// Define unauthenticated-only routes (users should NOT be logged in)
const unAuthenticatedRoutes = ["/login", "/register"];

// Define public routes (accessible by everyone)
const publicRoutes = ["/", "/movies"];

// Define protected routes (require authentication)
const protectedRoutes = ["/movies/:id"];

export async function proxy(request: NextRequest) {
	const response = NextResponse.next();
	const path = request.nextUrl.pathname;

	// Always call this to ensure the session is up to date
	const session = await handleNhostMiddleware(request, response);

	const isPublic = publicRoutes.some((r) => matchRoute(path, r));
	const isUnAuthenticated = unAuthenticatedRoutes.some((r) =>
		matchRoute(path, r),
	);
	const isProtected = protectedRoutes.some((r) => matchRoute(path, r));

	// Route handling logic
	switch (true) {
		// Authenticated user visiting unauthenticated-only routes → redirect home
		case isUnAuthenticated && !!session:
			return NextResponse.redirect(new URL("/", request.url));

		// Public routes → always allowed
		case isPublic:
			return response;

		// Protected routes without session → redirect home
		case isProtected && !session:
			return NextResponse.redirect(new URL("/", request.url));

		// Default → allow
		default:
			return response;
	}
}

/*
 * Match all request paths except:
 * - _next/static (static files)
 * - _next/image (image optimization files)
 * - favicon.ico (favicon file)
 * - public files (public directory)
 */
export const config = {
	matcher: [
		"/((?!_next/static|_next/image|favicon.ico|public).*)",
	],
};
