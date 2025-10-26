import { MenuItem } from "./types";
import {
	Film,
	Tv,
	Book,
	Gamepad2,
	Music2,
	Users,
	TrendingUp,
	Star,
	Heart,
	Globe,
	Info,
	Bell,
	HelpCircle,
	Map,
	Binoculars,
	Inbox,
} from "lucide-react";

export const NAVIGATION: MenuItem[] = [
	{
		title: "Explore",
		url: "#",
		links: [
			{
				label: "Movies",
				url: "/movies",
				icon: {
					component: Film,
					color: "text-rose-500",
				},
			},
			{
				label: "TV Shows",
				url: "/tv",
				icon: {
					component: Tv,
					color: "text-indigo-500",
				},
			},
			{
				label: "Books",
				url: "/books",
				icon: {
					component: Book,
					color: "text-green-500",
				},
			},
			{
				label: "Games",
				url: "/games",
				icon: {
					component: Gamepad2,
					color: "text-yellow-500",
				},
			},
			{
				label: "Music",
				url: "/music",
				icon: {
					component: Music2,
					color: "text-purple-500",
				},
			},
			{
				label: "People",
				url: "/people",
				icon: {
					component: Users,
					color: "text-blue-500",
				},
				isFeatured: true
			}
		],
	},
	{
		title: "Community",
		url: "#",
		links: [
			{
				label: "Reviews",
				url: "/reviews",
				icon: {
					component: Star,
					color: "text-amber-500",
				},
			},
			{
				label: "Lists",
				url: "/lists",
				icon: {
					component: Heart,
					color: "text-pink-500",
				},
			},
			{
				label: "Trending",
				url: "/trending",
				icon: {
					component: TrendingUp,
					color: "text-emerald-500",
				},
			},
		],
	},
	{
		title: "Developers",
		url: "#",
		links: [
			{
				label: "API Reference",
				url: "/api",
				icon: {
					component: Globe,
					color: "text-red-500",
				},
			},
			{
				label: "Documentation",
				url: "/about",
				icon: {
					component: Info,
					color: "text-amber-500",
				},
			},
			{
				label: "Blog",
				url: "/support",
				icon: {
					component: HelpCircle,
					color: "text-emerald-500",
				},
			},
		],
	},
	{
		title: "Roadmap",
		url: "#",
		links: [
			{
				label: "What's New",
				url: "/whats-new",
				icon: {
					component: Bell,
					color: 'text-blue-500',
				},
			},
			{
				label: "Roadmap",
				url: "/roadmap",
				icon: {
					component: Map,
					color: 'text-green-500',
				},
			},
			{
				label: "What's Next",
				url: "/whats-next",
				icon: {
					component: Binoculars,
					color: 'text-purple-500',
				},
			},
			{
				label: "Requests, ideas, bugs",
				url: "/requests",
				icon: {
					component: Inbox,
					color: 'text-blue-500',
				},
				isFeatured: true
			}
		],
	},
	{
		title: "Search",
		url: "/search",
	},
];

