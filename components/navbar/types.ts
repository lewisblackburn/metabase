import { LucideIcon } from "lucide-react";

export interface MenuLink {
	label: string;
	description?: string;
	url: string;
	icon?: {
		component: LucideIcon;
		color: string;
	};
	isFeatured?: boolean;
}

export interface MenuItem {
	title: string;
	url: string;
	links?: MenuLink[];
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
	isFeatured?: boolean;
}

