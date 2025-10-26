import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { GithubStars } from "./github-star-button";
import {
	LOGO,
	NAVIGATION,
} from "./constants";
import type {
	DesktopMenuItemProps,
	MenuSubLinkProps,
} from "./types";
import Logout from "../logout";
import { createNhostClient } from "@/lib/nhost/server";

export default async function Navbar() {
	const nhost = await createNhostClient();
	const session = nhost.getUserSession();

	return (
		<section className="z-999 bg-background pointer-events-auto fixed w-screen">
			<div className="container mx-auto h-16">
				<div className="flex h-full items-center justify-between">
					<Link href={LOGO.url} className="flex max-h-8 items-center gap-2 text-lg font-semibold tracking-tighter">
						<img src={LOGO.src} alt={LOGO.alt} className="inline-block size-8 invert" />
						<span className="text-foreground hidden md:inline-block">{LOGO.title}</span>
					</Link>
					<NavigationMenu className="hidden lg:flex" viewport={false}>
						<NavigationMenuList className="">
							{NAVIGATION.map((item, index) => (
								<DesktopMenuItem
									key={`desktop-link-${index}`}
									item={item}
									index={index}
								/>
							))}
						</NavigationMenuList>
					</NavigationMenu>
					<div className="flex items-center gap-4">
						<GithubStars repoUrl="https://github.com/lewisblackburn/metabase" />
						{session ? <Logout /> : <Button asChild><Link href="/login">Login</Link></Button>}
					</div>
				</div>
			</div>
		</section>
	);
};

const DesktopMenuItem = ({ item, index }: DesktopMenuItemProps) => {
	if (item.links) {
		return (
			<NavigationMenuItem key={`desktop-menu-item-${index}`} value={`${index}`}>
				<NavigationMenuTrigger className="text-foreground h-fit bg-transparent font-normal focus:!bg-transparent data-[active=true]:!bg-transparent">
					{item.title}
				</NavigationMenuTrigger>
				<NavigationMenuContent className="!rounded-xl !p-0">
					<ul className="w-[20rem] p-2.5">
						{item.links.map((link, index) => (
							<li key={`desktop-nav-sublink-${index}`}>
								<MenuSubLink link={link} />
							</li>
						))}
					</ul>
					{item.featured && (
						<ul className="w-[20rem] p-2.5 bg-muted">
							<li key={`desktop-nav-sublink-featured`}>
								<MenuSubLink link={item.featured} />
							</li>
						</ul>
					)}
				</NavigationMenuContent>
			</NavigationMenuItem>
		);
	}

	return (
		<NavigationMenuItem key={`desktop-menu-item-${index}`} value={`${index}`}>
			<NavigationMenuLink
				href={item.url}
				className={`${navigationMenuTriggerStyle()} text-foreground h-fit bg-transparent font-normal`}
			>
				{item.title}
			</NavigationMenuLink>
		</NavigationMenuItem>
	);
};

const MenuSubLink = ({ link }: MenuSubLinkProps) => {
	const isFeatured = link.description === undefined;

	return (
		<Link
			href={link.url}
			className={cn("flex items-center gap-4 rounded-lg p-2", {
				"hover:bg-muted": !isFeatured,
				"hover:bg-background/40": isFeatured,
			})}
		>
			<div className="flex w-full items-center justify-between">
				<div className="flex gap-2.5">
					{link.icon && (
						<link.icon.component
							className="size-5"
							style={{ stroke: link.icon.color }}
						/>
					)}
					<div className="flex flex-col justify-center gap-1.5">
						<h3 className="text-foreground text-sm leading-none">
							{link.label}
						</h3>
						{link.description && (
							<p className="text-muted-foreground/80 text-sm leading-[1.2]">
								{link.description}
							</p>
						)}
					</div>
				</div>
				<ChevronRight className="stroke-muted-foreground size-3.5 opacity-100" />
			</div>
		</Link>
	);
};
