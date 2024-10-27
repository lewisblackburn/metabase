import { Link } from '@remix-run/react'
import {
	BookOpen,
	Bot,
	Edit,
	Gamepad,
	Group,
	LifeBuoy,
	Music,
	Send,
	Settings2,
	SquareTerminal,
	Tv,
	Video,
} from 'lucide-react'
import * as React from 'react'

import { NavMain } from '#app/components/nav-main'
import { NavSecondary } from '#app/components/nav-secondary'
import { NavUser } from '#app/components/nav-user'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '#app/components/ui/sidebar'
import { IconLogo } from './logo'
import { NavMedia } from './nav-media'

const data = {
	navMain: [
		{
			title: 'Playground',
			url: '#',
			icon: SquareTerminal,
			isActive: true,
			items: [
				{
					title: 'History',
					url: '#',
				},
				{
					title: 'Starred',
					url: '#',
				},
				{
					title: 'Settings',
					url: '#',
				},
			],
		},
		{
			title: 'Models',
			url: '#',
			icon: Bot,
			items: [
				{
					title: 'Genesis',
					url: '#',
				},
				{
					title: 'Explorer',
					url: '#',
				},
				{
					title: 'Quantum',
					url: '#',
				},
			],
		},
		{
			title: 'Documentation',
			url: '#',
			icon: BookOpen,
			items: [
				{
					title: 'Introduction',
					url: '#',
				},
				{
					title: 'Get Started',
					url: '#',
				},
				{
					title: 'Tutorials',
					url: '#',
				},
				{
					title: 'Changelog',
					url: '#',
				},
			],
		},
		{
			title: 'Settings',
			url: '#',
			icon: Settings2,
			items: [
				{
					title: 'General',
					url: '#',
				},
				{
					title: 'Team',
					url: '#',
				},
				{
					title: 'Billing',
					url: '#',
				},
				{
					title: 'Limits',
					url: '#',
				},
			],
		},
	],
	navSecondary: [
		{
			title: 'Support',
			url: '#',
			icon: LifeBuoy,
		},
		{
			title: 'Feedback',
			url: '#',
			icon: Send,
		},
	],
	media: [
		{
			name: 'Film',
			url: '/dashboard/films',
			icon: Video,
		},
		{
			name: 'Music',
			url: '#',
			icon: Music,
		},
		{
			name: 'Games',
			url: '#',
			icon: Gamepad,
		},
		{
			name: 'Books',
			url: '#',
			icon: BookOpen,
		},
		{
			name: 'TV Shows',
			url: '#',
			icon: Tv,
		},
		{
			name: 'People',
			url: '#',
			icon: Group,
		},
		{
			name: 'Changes',
			url: '#',
			icon: Edit,
		},
	],
}

export function AppSidebar({
	user,
	...props
}: React.ComponentProps<typeof Sidebar> & {
	user: {
		initials: string | null
		id: string
		username: string
		name: string | null
		email: string
		image: {
			id: string
		} | null
		roles: {
			name: string
			permissions: {
				action: string
				entity: string
				access: string
			}[]
		}[]
	}
}) {
	return (
		<Sidebar variant="inset" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<Link to="/">
								<IconLogo />
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">Metabase</span>
								</div>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavMedia media={data.media} />
				<NavSecondary items={data.navSecondary} className="mt-auto" />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={user} />
			</SidebarFooter>
		</Sidebar>
	)
}
