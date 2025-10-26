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
import {
	NAVIGATION,
} from "./constants";
import type {
	DesktopMenuItemProps as MenuItemProps,
	MenuSubLinkProps,
} from "./types";
import Logout from "../logout";
import { createNhostClient } from "@/lib/nhost/server";

export default async function Navbar() {
	const nhost = await createNhostClient();
	const session = nhost.getUserSession();

	return (
		<section className="z-999 bg-background pointer-events-auto fixed w-screen border-b border-border">
			<div className="container mx-auto h-(--navbar-height)">
				<div className="flex h-full items-center justify-between">
					<Link href="" className="flex max-h-8 items-center gap-2 text-lg font-semibold tracking-tighter">
						<span className="text-foreground hidden md:inline-block">Metabase</span>
					</Link>
					<NavigationMenu className="hidden lg:flex" viewport={false}>
						<NavigationMenuList className="">
							{NAVIGATION.map((item, index) => (
								<MenuItem
									key={`desktop-link-${index}`}
									item={item}
									index={index}
								/>
							))}
						</NavigationMenuList>
					</NavigationMenu>
					<div className="flex items-center gap-4">
						{session ? <Logout /> : <Button asChild><Link href="/login">Login</Link></Button>}
					</div>
				</div>
			</div>
		</section>
	);
};

const MenuItem = ({ item, index }: MenuItemProps) => {
	const regularLinks = item.links?.filter((link) => link?.isFeatured === undefined);
	const featuredLink = item.links?.find((link) => link.isFeatured);

	if (item.links) {
		return (
			<NavigationMenuItem key={`desktop-menu-item-${index}`} value={`${index}`}>
				<NavigationMenuTrigger className="text-foreground h-fit bg-transparent font-normal focus:bg-transparent! data-[active=true]:bg-transparent!">
					{item.title}
				</NavigationMenuTrigger>
				<NavigationMenuContent className="rounded-xl p-0!">
					<ul className="w-[20rem] p-2.5">
						{regularLinks?.map((link, index) => (
							<li key={`desktop-nav-sublink-${index}`}>
								<MenuSubLink link={link} />
							</li>
						))}
					</ul>
					{featuredLink && (
						<ul className="w-[20rem] p-2.5 bg-muted">
							<li key={`desktop-nav-sublink-featured`}>
								<MenuSubLink link={featuredLink} isFeatured />
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

const MenuSubLink = ({ link, isFeatured }: MenuSubLinkProps) => {
	return (
		<Link
			href={link.url}
			className={cn("flex items-center gap-4 rounded-lg p-2 pr-2.5 hover:bg-muted", {
				"hover:bg-background/40": isFeatured,
			})}
		>
			<div className="flex w-full items-center justify-between">
				<div className="flex gap-2.5">
					{link.icon && (
						<link.icon.component
							className={cn("size-4", link.icon.color)}
						/>
					)}
					<div className="flex flex-col justify-center gap-1.5">
						<h3 className="text-foreground text-sm leading-none">
							{link.label}
						</h3>
					</div>
				</div>
				<ChevronRight className="stroke-muted-foreground size-3.5 opacity-100" />
			</div>
		</Link>
	);
};
