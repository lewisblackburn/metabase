'use client';

import * as React from 'react';

import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar
} from '@/registry/new-york-v4/ui/sidebar';

import { Book, Command, Flag, Music3, Tv, User, Video } from 'lucide-react';

const data = {
    user: {
        name: 'shadcn',
        email: 'm@example.com',
        avatar: 'https://github.com/shadcn.png'
    },
    navMain: [
        {
            title: 'Movies',
            url: '#',
            icon: Video,
            isActive: true
        },
        {
            title: 'TV Shows',
            url: '#',
            icon: Tv,
            isActive: false
        },
        {
            title: 'Music',
            url: '#',
            icon: Music3,
            isActive: false
        },
        {
            title: 'Books',
            url: '#',
            icon: Book,
            isActive: false
        },
        {
            title: 'People',
            url: '#',
            icon: User,
            isActive: false
        }
    ]
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const [activeItem, setActiveItem] = React.useState(data.navMain[0]);
    const { setOpen } = useSidebar();

    return (
        <Sidebar collapsible='icon' className='overflow-hidden *:data-[sidebar=sidebar]:flex-row' {...props}>
            <Sidebar collapsible='none' className='border-r'>
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size='lg' asChild className='md:h-8 md:p-0'>
                                <a href='#'>
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
                                {data.navMain.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            tooltip={{
                                                children: item.title,
                                                hidden: false
                                            }}
                                            onClick={() => {
                                                setActiveItem(item);
                                                setOpen(true);
                                            }}
                                            isActive={activeItem?.title === item.title}
                                            className='cursor-pointer px-2.5 md:px-2'>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </SidebarMenuButton>
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
