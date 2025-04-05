'use client';

import * as React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NavUser } from '@/components/nav-user';
import { DASHBOARD_NAVIGATION } from '@/constants/dashboard-navigation.constant';
import { OBJECT_TYPE } from '@/constants/objects.constant';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from '@/registry/new-york-v4/ui/sidebar';

import { Book, Command, Lock, Music3, Tv, User, Video } from 'lucide-react';

const data = {
    user: {
        name: 'shadcn',
        email: 'm@example.com',
        avatar: 'https://github.com/shadcn.png'
    }
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname();
    const isActive = (url: string) => pathname === url;

    return (
        <Sidebar collapsible='icon' className='overflow-hidden *:data-[sidebar=sidebar]:flex-row' {...props}>
            <Sidebar collapsible='none' className='border-r'>
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size='lg' asChild className='md:h-8 md:p-0'>
                                <a href='/dashboard'>
                                    <div className='bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg'>
                                        <Command className='size-4' />
                                    </div>
                                    <div className='grid flex-1 text-left text-sm leading-tight'>
                                        <span className='truncate font-medium'>Acme Inc</span>
                                        <span className='truncate text-xs'>Enterprise</span>
                                    </div>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupContent className='px-1.5 md:px-0'>
                            <SidebarMenu>
                                {DASHBOARD_NAVIGATION.map(({ id, type, disabled }) => (
                                    <SidebarMenuItem key={id}>
                                        <Link href={disabled ? '#' : `/dashboard/${type.path}`}>
                                            <SidebarMenuButton
                                                tooltip={{
                                                    children: type.plural,
                                                    hidden: false
                                                }}
                                                isActive={isActive(`/dashboard/${type.path}`)}
                                                className='cursor-pointer px-2.5 md:px-2'
                                                disabled={disabled}>
                                                <type.icon />
                                                <span>{type.plural}</span>
                                            </SidebarMenuButton>
                                        </Link>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                    <NavUser user={data.user} />
                </SidebarFooter>
            </Sidebar>
        </Sidebar>
    );
}
