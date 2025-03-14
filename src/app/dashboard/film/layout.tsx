'use client';

import { Fragment, ReactNode, useState } from 'react';

import { cn, isLastIndex } from '@/lib/utils';
import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { Sidebar, SidebarContent, SidebarMenu, SidebarProvider, useSidebar } from '@/registry/new-york-v4/ui/sidebar';

import { Calendar, ChevronLeft, ChevronRight, CreditCard, Info, Tags, Timer, TrendingUp, User } from 'lucide-react';

const Information = [
    {
        icon: <Calendar size='1em' />,
        badge: '4 September 2013',
        children: 'Release Date'
    },
    {
        icon: <Tags size='1em' />,
        badge: 'Romance, Comedy, Drama',
        children: 'Genre'
    },
    {
        icon: <Timer size='1em' />,
        badge: '2h 3m',
        children: 'Duration'
    },
    {
        icon: <Info size='1em' />,
        badge: 'Released',
        children: 'Status'
    },
    {
        icon: <User size='1em' />,
        badge: 'Richard Curtis',
        children: 'Director'
    },
    {
        icon: <TrendingUp size='1em' />,
        badge: '$87.1 million',
        children: 'Revenue'
    },
    {
        icon: <CreditCard size='1em' />,
        badge: '$12 million',
        children: 'Budget'
    }
];

const InformationItem = ({
    icon,
    children,
    badge
}: Readonly<{ icon: React.ReactNode; children: React.ReactNode; badge: string }>) => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2 text-sm'>
                {icon}
                <span>{children}</span>
            </div>
            <Badge variant='outline'>{badge}</Badge>
        </div>
    );
};

function SidebarTrigger({ className, onClick, ...props }: React.ComponentProps<typeof Button>) {
    const { open, toggleSidebar } = useSidebar();

    return (
        <Button
            data-sidebar='trigger'
            data-slot='sidebar-trigger'
            variant='ghost'
            size='icon'
            className={cn('text-muted-foreground h-7 w-7 cursor-pointer', className)}
            onClick={(event) => {
                onClick?.(event);
                toggleSidebar();
            }}
            {...props}>
            {open ? <ChevronLeft /> : <ChevronRight />}
            <span className='sr-only'>Toggle Sidebar</span>
        </Button>
    );
}

const FilmLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    const [open, setOpen] = useState(true);

    return (
        <SidebarProvider
            style={
                {
                    '--sidebar-width': '300px'
                } as React.CSSProperties
            }
            className='relative z-0 !h-[calc(100vh-4rem)] !min-h-0 overflow-hidden p-2'
            open={open}>
            <Sidebar className='absolute'>
                <SidebarContent className='bg-white p-5'>
                    <SidebarMenu className='flex flex-col gap-5'>
                        {Information.map((item, index) => (
                            <Fragment key={index}>
                                <InformationItem key={index} {...item} />
                                {isLastIndex(index, Information) ? null : <Separator />}
                            </Fragment>
                        ))}
                    </SidebarMenu>
                </SidebarContent>
            </Sidebar>
            <SidebarTrigger onClick={() => setOpen((prev) => !prev)} />
            <main className='mx-auto w-full max-w-6xl'>{children}</main>
        </SidebarProvider>
    );
};

export default FilmLayout;
