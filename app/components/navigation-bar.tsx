import { invariant } from '@epic-web/invariant'
import { Link, useRouteLoaderData } from '@remix-run/react'
import React from 'react'
import { Icon } from '#app/components/ui/icon.tsx'
import { type loader as rootLoader } from '#app/root'
import { ThemeSwitch } from '#app/routes/resources+/theme-switch.tsx'
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

type NavigationLink =
	| { name: string; href: string }
	| {
			name: string
			items: { icon: IconName; colour: string; name: string; href: string }[]
	  }

const NavigationLinks: NavigationLink[] = [
	{
		name: 'Product',
		href: '/product',
	},
	{
		name: 'Learn',
		items: [
			{
				icon: 'video',
				name: 'Tutorials',
				href: '/tutorials',
				colour: 'text-green-500',
			},
			{
				icon: 'lightbulb',
				name: 'Quick Tips',
				href: '/quick-tips',
				colour: 'text-yellow-500',
			},
			{
				icon: 'briefcase',
				name: 'Use Cases',
				href: '/use-cases',
				colour: 'text-red-500',
			},
			{
				icon: 'pen-tool',
				name: 'Blog',
				href: '/blog',
				colour: 'text-purple-500',
			},
			{
				icon: 'git-compare',
				name: 'Compare',
				href: '/compare',
				colour: 'text-green-500',
			},
			{
				icon: 'circle-help',
				name: 'Help',
				href: '/help',
				colour: 'text-red-500',
			},
			{
				icon: 'book',
				name: 'Documentation',
				href: '/documentation',
				colour: 'text-yellow-500',
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
				icon: 'megaphone',
				name: "What's new?",
				href: '/whats-new',
				colour: 'text-blue-500',
			},
			{
				icon: 'map',
				name: 'Roadmap',
				href: '/roadmap',
				colour: 'text-green-500',
			},
			{
				icon: 'binoculars',
				name: "What's next",
				href: '/whats-next',
				colour: 'text-purple-500',
			},
			{
				icon: 'cross-1',
				name: "What's not next?",
				href: '/whats-not-next',
				colour: 'text-red-500',
			},
			{
				icon: 'inbox',
				name: 'Requests, ideas, bugs',
				href: '/feedback',
				colour: 'text-blue-500',
			},
		],
	},
	{
		name: 'More',
		items: [
			{
				icon: 'discord-logo',
				name: 'Join our community',
				href: '',
				colour: 'text-blue-500',
			},
			{
				icon: 'at-sign',
				name: 'Newsletter',
				href: '',
				colour: 'text-purple-500',
			},
			{
				icon: 'rocket',
				name: 'Career',
				href: '',
				colour: 'text-green-500',
			},
			{
				icon: 'mail',
				name: 'Contact',
				href: '',
				colour: 'text-blue-500',
			},
			{
				icon: 'download',
				name: 'Download the app',
				href: '',
				colour: 'text-blue-500',
			},
		],
	},
]

export default function NavigationBar() {
	const data = useRouteLoaderData<typeof rootLoader>('root')
	invariant(data?.requestInfo, 'No requestInfo found in root loader')

	return (
		<div className="sticky bottom-0 left-0 right-0 top-0 z-[60]">
			<div className="border-stone-150 relative w-full border-b bg-white py-1 transition duration-200 ease-out dark:border-gray-700 dark:bg-black">
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
						<div className="hidden w-full items-center justify-end space-x-2 px-3 pr-2 text-base font-medium md:ml-1 md:flex lg:ml-2">
							<NavigationMenu>
								<NavigationMenuList>
									{NavigationLinks.map((link) => (
										<NavigationMenuItem key={link.name}>
											{'items' in link ? (
												<NavigationMenuTrigger>
													{link.name}
												</NavigationMenuTrigger>
											) : (
												<Link to={link.href}>
													<NavigationMenuLink
														className={navigationMenuTriggerStyle()}
													>
														{link.name}
													</NavigationMenuLink>
												</Link>
											)}
											{'items' in link && (
												<NavigationMenuContent>
													<ul className="mt-1 grid w-[300px]">
														{link.items.map((item, index) => (
															<ListItem
																key={item.name}
																title={item.name}
																href={item.href}
																icon={item.icon}
																colour={item.colour}
																isFooter={index === link.items.length - 1}
															/>
														))}
													</ul>
												</NavigationMenuContent>
											)}
										</NavigationMenuItem>
									))}
								</NavigationMenuList>
							</NavigationMenu>
							<ThemeSwitch userPreference={data.requestInfo.userPrefs.theme} />
							{data.user?.id ? (
								<Link to="/dashboard">
									<Button variant="default" size="sm">
										Open App
									</Button>
								</Link>
							) : (
								<>
									<Link to="/login">
										<Button variant="ghost" size="sm">
											Login
										</Button>
									</Link>
									<Link to="/signup">
										<Button variant="default" size="sm">
											Register
										</Button>
									</Link>
								</>
							)}
						</div>
					</div>
				</nav>
			</div>
		</div>
	)
}

type ListItemProps = {
	title: string
	href: string
	icon: IconName
	isFooter?: boolean
	colour: string
} & React.ComponentPropsWithoutRef<'a'>

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
	(
		{ className, title, href, icon, colour, isFooter = false, ...props },
		ref,
	) => {
		return (
			<li className={cn(!isFooter && 'p-1')}>
				<NavigationMenuLink asChild>
					{!isFooter ? (
						<a
							ref={ref}
							href={href}
							className={cn(
								'mx-2 flex select-none items-center gap-2 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground hover:text-blue-500 focus:bg-accent focus:text-accent-foreground',
								className,
							)}
							{...props}
						>
							<Icon name={icon} size="sm" className={colour} />
							<div className="pb-0.5 text-sm font-medium leading-none">
								{title}
							</div>
						</a>
					) : (
						<a ref={ref} href={href} {...props}>
							<div className="mt-1 border-t border-border bg-secondary">
								<div className="ml-2 flex select-none items-center gap-2 p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
									<Icon name={icon} size="sm" className={colour} />
									<div className="pb-0.5 text-sm font-medium leading-none">
										{title}
									</div>
								</div>
							</div>
						</a>
					)}
				</NavigationMenuLink>
			</li>
		)
	},
)

ListItem.displayName
