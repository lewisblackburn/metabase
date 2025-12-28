'use client'

import { Command, Film, Globe, Heart, LifeBuoy, Map, Send } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar'

import { NavMain } from './nav-main'
import { NavSecondary } from './nav-secondary'
import { NavUser } from './nav-user'

const data = {
    navMain: [
        {
            title: 'Explore',
            url: '#',
            icon: Film,
            isActive: true,
            items: [
                {
                    title: 'Movies',
                    url: '/movies',
                },
                {
                    title: 'TV Shows',
                    url: '/tv',
                },
                {
                    title: 'Books',
                    url: '/books',
                },
                {
                    title: 'Games',
                    url: '/games',
                },
                {
                    title: 'Music',
                    url: '/music',
                },
                {
                    title: 'People',
                    url: '/people',
                },
            ],
        },
        {
            title: 'Community',
            url: '#',
            icon: Heart,
            items: [
                {
                    title: 'Reviews',
                    url: '/reviews',
                },
                {
                    title: 'Lists',
                    url: '/lists',
                },
                {
                    title: 'Trending',
                    url: '/trending',
                },
            ],
        },
        {
            title: 'Developers',
            url: '#',
            icon: Globe,
            items: [
                {
                    title: 'API Reference',
                    url: '/api',
                },
                {
                    title: 'Documentation',
                    url: '/about',
                },
                {
                    title: 'Blog',
                    url: '/support',
                },
            ],
        },
        {
            title: 'Roadmap',
            url: '#',
            icon: Map,
            items: [
                {
                    title: "What's New",
                    url: '/whats-new',
                },
                {
                    title: 'Roadmap',
                    url: '/roadmap',
                },
                {
                    title: "What's Next",
                    url: '/whats-next',
                },
                {
                    title: 'Requests, ideas, bugs',
                    url: '/requests',
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
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar
            className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
            {...props}
        >
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/">
                                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                    <Command className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium">Metabase</span>
                                    <span className="truncate text-xs">Media Manager</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    )
}
