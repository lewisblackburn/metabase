import { LucideIcon } from "lucide-react";

export interface MenuLink {
	label: string;
	description?: string;
	url: string;
	icon?: {
		component: LucideIcon;
		color: string;
	};
}

export interface MenuItem {
	title: string;
	url: string;
	links?: MenuLink[];
	featured?: MenuLink;
}

export interface DesktopMenuItemProps {
	item: MenuItem;
	index: number;
}

export interface MobileNavigationMenuProps {
	open: boolean;
}

export interface MenuSubLinkProps {
	link: MenuLink;
}

