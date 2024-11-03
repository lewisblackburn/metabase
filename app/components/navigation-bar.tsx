import { Link } from '@remix-run/react'
import React from 'react'
import { Icon } from '#app/components/ui/icon.tsx'
import { cn } from '#app/utils/misc.tsx'
import { IconLogo } from './logo'
import { Button } from './ui/button'
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuLink,
	navigationMenuTriggerStyle,
} from './ui/navigation-menu'
import { type IconName } from '@/icon-name'

type NavigationLink = (
	| { name: string; href: string }
	| { name: string; items: { icon: string; name: string; href: string }[] }
)[]

const NavigationLinks: NavigationLink = [
	{
		name: 'Product',
		href: '/product',
	},
	{
		name: 'Learn',
		items: [
			{
				icon: 'tv',
				name: 'Tutorials',
				href: '/tutorials',
			},
			{
				icon: 'tv',
				name: 'Quick Tips',
				href: '/quick-tips',
			},
			{
				icon: 'tv',
				name: 'Use Cases',
				href: '/use-cases',
			},
			{
				icon: 'tv',
				name: 'Blog',
				href: '/blog',
			},
			{
				icon: 'tv',
				name: 'Compare',
				href: '/compare',
			},
			{
				icon: 'tv',
				name: 'Help',
				href: '/help',
			},
			{
				icon: 'tv',
				name: 'Documentation',
				href: '/documentation',
			},
		],
	},
	{
		name: 'FAQ',
		href: '/faq',
	},
	{
		name: 'Pricing',
		href: '/pricing',
	},
	{
		name: 'Roadmap',
		items: [
			{
				icon: 'tv',
				name: "What's new?",
				href: '/whats-new',
			},
			{
				icon: 'tv',
				name: 'Roadmap',
				href: '/roadmap',
			},
			{
				icon: 'tv',
				name: "What's next",
				href: '/whats-next',
			},
			{
				icon: 'tv',
				name: "What's not next?",
				href: '/whats-not-next',
			},
			{
				icon: 'tv',
				name: 'Requests, ideas, bugs',
				href: '/feedback',
			},
		],
	},
	{
		name: 'More',
		items: [
			{
				icon: 'tv',
				name: 'Join our community',
				href: '',
			},
			{
				icon: 'tv',
				name: 'Newsletter',
				href: '',
			},
			{
				icon: 'tv',
				name: 'Carrer',
				href: '',
			},
			{
				icon: 'tv',
				name: 'Contact',
				href: '',
			},
			{
				icon: 'tv',
				name: 'Download the app',
				href: '',
			},
		],
	},
]

export default function NavigationBar() {
	return (
		<div className="sticky bottom-0 left-0 right-0 top-0 z-[60]">
			<div className="border-stone-150 relative w-full border-b bg-white py-1 transition duration-200 ease-out dark:border-gray-700">
				<nav className="item relative z-50 mx-auto flex w-full max-w-6xl items-center p-0 px-3 md:px-8 lg:px-16">
					<div className="flex w-full flex-nowrap items-center py-2 text-stone-800 transition-colors duration-150 ease-out dark:text-white">
						<Link
							to="/"
							className="flex w-full items-center gap-2 overflow-hidden rounded-md text-left text-sm outline-none"
						>
							<IconLogo className="w-8" />
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="font-semibold">Metabase</span>
							</div>
						</Link>
						<div className="hidden w-full justify-end space-x-2 px-3 pr-2 text-base font-medium md:ml-1 md:flex lg:ml-2">
							<NavigationMenu>
								<NavigationMenuList>
									{NavigationLinks.map((link) => (
										<NavigationMenuItem key={link.name}>
											{link.items ? (
												<NavigationMenuTrigger>
													{link.name}
												</NavigationMenuTrigger>
											) : (
												<Link to={link.href!}>
													<NavigationMenuLink
														className={navigationMenuTriggerStyle()}
													>
														{link.name}
													</NavigationMenuLink>
												</Link>
											)}
											<NavigationMenuContent>
												<ul className="grid w-[200px] gap-1 p-1">
													{link.items?.map((item) => (
														<ListItem
															key={item.name}
															title={item.name}
															href={item.href!}
															icon="tv"
														/>
													))}
												</ul>
											</NavigationMenuContent>
										</NavigationMenuItem>
									))}
								</NavigationMenuList>
							</NavigationMenu>
							<Button variant="ghost" size="sm">
								Login
							</Button>
							<Button variant="default" size="sm">
								Regsiter
							</Button>
						</div>
					</div>
				</nav>
			</div>
		</div>
	)
}

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'> & {
		title: string
		icon: IconName
	}
>(({ className, title, icon, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'flex select-none items-center gap-1 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className,
					)}
					{...props}
				>
					<Icon name={icon} size="xs" />
					<div className="pb-1 text-sm font-medium leading-none">{title}</div>
				</a>
			</NavigationMenuLink>
		</li>
	)
})

ListItem.displayName = 'ListItem'
