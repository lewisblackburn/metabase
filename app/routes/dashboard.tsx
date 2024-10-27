import { type LoaderFunctionArgs } from '@remix-run/node'
import { json, Outlet } from '@remix-run/react'
import { AppSidebar } from '#app/components/app-sidebar.tsx'
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	BreadcrumbPage,
} from '#app/components/ui/breadcrumb.tsx'
import { Separator } from '#app/components/ui/separator.tsx'
import {
	SidebarProvider,
	SidebarInset,
	SidebarTrigger,
} from '#app/components/ui/sidebar.tsx'
import { requireUserId } from '#app/utils/auth.server.ts'
import { useUser } from '#app/utils/user.ts'

export async function loader({ request }: LoaderFunctionArgs) {
	await requireUserId(request)
	return json({})
}

// const sidebarLinks: {
// 	name: string
// 	href: string
// 	icon: IconName
// }[] = [
// 		{
// 			name: 'Dashboard',
// 			href: '/dashboard',
// 			icon: 'home',
// 		},
// 		{
// 			name: 'Films',
// 			href: '/dashboard/films',
// 			icon: 'video',
// 		},
// 		{
// 			name: 'TV Shows',
// 			href: '/dashboard/series',
// 			icon: 'tv',
// 		},
// 		{
// 			name: 'People',
// 			href: '/dashboard/people',
// 			icon: 'users',
// 		},
// 		{
// 			name: 'Books',
// 			href: 'dashboard/books',
// 			icon: 'book-open',
// 		},
// 		{
// 			name: 'Music',
// 			href: '/dashboard/music',
// 			icon: 'audio-lines',
// 		},
// 		{
// 			name: 'Games',
// 			href: '/dashboard/games',
// 			icon: 'gamepad',
// 		},
// 		{
// 			name: 'Changes',
// 			href: '/dashboard/changes',
// 			icon: 'clock',
// 		},
// 	]
//
// const dropdownLinks = [
// 	{
// 		name: 'Admin',
// 		links: [
// 			{
// 				name: 'Import',
// 				href: '/dashboard/admin/import',
// 			},
// 			{
// 				name: 'Users',
// 				href: '/dashboard/admin/users',
// 			},
// 		],
// 	},
// 	{
// 		name: 'Settings',
// 		links: [
// 			{
// 				name: 'Profile',
// 				href: '/dashboard/settings/profile',
// 			},
// 			{
// 				name: 'Support',
// 				href: '/support',
// 			},
// 		],
// 	},
// ]

export default function DashboardPageLayout() {
	const user = useUser()
	// const userIsAdmin = userHasRole(user, 'admin')

	return (
		<SidebarProvider>
			<AppSidebar user={user} />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2">
					<div className="flex items-center gap-2 px-4">
						<SidebarTrigger className="-ml-1" />
						<Separator orientation="vertical" className="mr-2 h-4" />
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem className="hidden md:block">
									<BreadcrumbLink href="#">
										Building Your Application
									</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator className="hidden md:block" />
								<BreadcrumbItem>
									<BreadcrumbPage>Data Fetching</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</header>
				<main className="p-5">
					<Outlet />
				</main>
			</SidebarInset>
		</SidebarProvider>
	)
}
