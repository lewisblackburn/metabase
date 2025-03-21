'use client';

import * as React from 'react';

import { NavUser } from '@/components/nav-user';
import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Input } from '@/registry/new-york-v4/ui/input';
import { Label } from '@/registry/new-york-v4/ui/label';
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

import { Book, Command, Filter, Music3, Tv, User, Video } from 'lucide-react';

function SidebarInput({ className, ...props }: React.ComponentProps<typeof Input>) {
    return (
        <Input
            data-slot='sidebar-input'
            data-sidebar='input'
            className={cn('bg-background h-8 w-full shadow-none', className)}
            {...props}
        />
    );
}

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
    ],
    mails: [
        {
            id: '1',
            title: 'About Time',
            release_date: '4 September 2013',
            tagline: 'What if every moment in life came with a second chance?'
        },
        {
            id: '2',
            title: 'The Shawshank Redemption',
            release_date: '14 October 1994',
            tagline: 'Fear can hold you prisoner. Hope can set you free.'
        },
        {
            id: '3',
            title: 'The Godfather',
            release_date: '24 March 1972',
            tagline: "An offer you can't refuse."
        },
        {
            id: '4',
            title: 'The Dark Knight',
            release_date: '18 July 2008',
            tagline: 'Why So Serious?'
        },
        {
            id: '5',
            title: 'The Godfather: Part II',
            release_date: '20 December 1974',
            tagline: 'I know it was you, Fredo. You broke my heart.'
        }
    ]
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const [activeItem, setActiveItem] = React.useState(data.navMain[0]);
    const [mails, setMails] = React.useState(data.mails);
    const { setOpen } = useSidebar();

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.toLowerCase();
        const filteredMails = data.mails.filter((mail) => {
            return mail.title.toLowerCase().includes(value) || mail.tagline.toLowerCase().includes(value);
        });
        setMails(filteredMails);
    };

    return (
        <Sidebar collapsible='icon' className='overflow-hidden *:data-[sidebar=sidebar]:flex-row' {...props}>
            <Sidebar collapsible='none' className='w-[calc(var(--sidebar-width-icon)+1px)]! border-r'>
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

            <Sidebar collapsible='none' className='hidden flex-1 md:flex'>
                <SidebarHeader className='gap-3.5 border-b p-4'>
                    <div className='flex w-full items-center justify-between'>
                        <div className='text-foreground text-base font-medium'>{activeItem?.title}</div>
                        <Label className='flex items-center gap-2 text-sm'>
                            <Button size='sm' variant='outline' className='text-xs'>
                                <Filter className='h-3.5! w-3.5!' />
                                Filter
                            </Button>
                        </Label>
                    </div>
                    <SidebarInput placeholder='Type to search...' onInput={handleInput} />
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup className='p-0'>
                        <SidebarGroupContent>
                            {mails.map((mail) => (
                                <a
                                    href={mail.id}
                                    key={mail.id}
                                    className='hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight whitespace-nowrap last:border-b-0'>
                                    <div className='flex w-full items-center justify-between'>
                                        <span>{mail.title}</span> <span className='text-xs'>{mail.release_date}</span>
                                    </div>
                                    <span className='line-clamp-2 w-[260px] text-xs whitespace-break-spaces'>
                                        {mail.tagline}
                                    </span>
                                </a>
                            ))}
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </Sidebar>
    );
}
