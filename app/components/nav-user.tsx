'use client'

import { Form, Link } from '@remix-run/react'
import {
	BadgeCheck,
	Bell,
	ChevronsUpDown,
	CreditCard,
	LogOut,
	Sparkles,
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '#app/components/ui/avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '#app/components/ui/dropdown-menu'
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '#app/components/ui/sidebar'
import { getUserImgSrc } from '#app/utils/misc.tsx'

export function NavUser({
	user,
}: {
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
	const { isMobile } = useSidebar()

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<Avatar className="h-8 w-8 rounded-lg">
								<AvatarImage
									src={getUserImgSrc(user.image?.id)}
									alt={user.name!}
								/>
								<AvatarFallback className="rounded-lg">
									{user.initials}
								</AvatarFallback>
							</Avatar>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-semibold">{user.name}</span>
								<span className="truncate text-xs">{user.email}</span>
							</div>
							<ChevronsUpDown className="ml-auto size-4" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
						side={isMobile ? 'bottom' : 'right'}
						align="end"
						sideOffset={4}
					>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<Avatar className="h-8 w-8 rounded-lg">
									<AvatarImage
										src={getUserImgSrc(user.image?.id)}
										alt={user.name!}
									/>
									<AvatarFallback className="rounded-lg">
										{user.initials}
									</AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">{user.name}</span>
									<span className="truncate text-xs">{user.email}</span>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<Sparkles className="mr-2 size-4" />
								Upgrade to Pro
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<Link to="/dashboard/settings/profile">
								<DropdownMenuItem>
									<BadgeCheck className="mr-2 size-4" />
									Account
								</DropdownMenuItem>
							</Link>
							<DropdownMenuItem>
								<CreditCard className="mr-2 size-4" />
								Billing
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Bell className="mr-2 size-4" />
								Notifications
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<Form action="/logout" method="POST">
							<button type="submit" className="w-full">
								<DropdownMenuItem>
									<LogOut className="mr-2 size-4" />
									Log out
								</DropdownMenuItem>
							</button>
						</Form>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	)
}
