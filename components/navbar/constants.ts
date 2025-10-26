import {
	Bell,
	Book,
	FileText,
	Globe,
	Grid,
	HelpCircle,
	Info,
} from "lucide-react";
import { MenuItem } from "./types";

export const LOGO = {
	url: "https://www.shadcnblocks.com",
	src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
	alt: "logo",
	title: "Shadcnblocks.com",
};

export const NAVIGATION: MenuItem[] = [
	{
		title: "Products",
		url: "#",
		links: [
			{
				label: "Company Blog",
				description: "Insights & updates",
				url: "#",
				icon: {
					component: FileText,
					color: "#10b981",
				},
			},
			{
				label: "Our Platform",
				description: "Empower your work",
				url: "#",
				icon: {
					component: Grid,
					color: "#6366f1",
				},
			},
		],
		featured: {
			label: "Documentation",
			url: "#",
			icon: {
				component: Book,
				color: "#8b5cf6",
			},
		}
	},
	{
		title: "Company",
		url: "#",
		links: [
			{
				label: "About Our Team",
				url: "#",
				description: "Our mission & values",
				icon: {
					component: Info,
					color: "#f59e0b",
				},
			},
			{
				label: "Help & Support Center",
				url: "#",
				description: "Get quick help",
				icon: {
					component: HelpCircle,
					color: "#3b82f6",
				},
			},
			{
				label: "Latest News",
				url: "#",
				description: "Product updates",
				icon: {
					component: Bell,
					color: "#f97316",
				},
			},
		],
	},
	{
		title: "Resources",
		url: "#",
		links: [
			{
				label: "Documentation",
				url: "#",
				description: "Guides & references",
				icon: {
					component: Book,
					color: "#8b5cf6",
				},
			},
			{
				label: "API Reference",
				url: "#",
				description: "Explore our API",
				icon: {
					component: Globe,
					color: "#ef4444",
				},
			},
		],
	},
	{
		title: "Pricing",
		url: "#",
	},
	{
		title: "Contact",
		url: "#",
	},
];