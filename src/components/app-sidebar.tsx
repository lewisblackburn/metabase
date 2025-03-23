'use client';

import * as React from 'react';

import { NavUser } from '@/components/nav-user';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/registry/new-york-v4/ui/accordion';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Card } from '@/registry/new-york-v4/ui/card';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from '@/registry/new-york-v4/ui/command';
import { Input } from '@/registry/new-york-v4/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/registry/new-york-v4/ui/popover';
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

import { ArrowDown, ArrowUp, Book, Calendar, Flame, LucideIcon, Music3, Star, Tv, User, Video } from 'lucide-react';

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

type OrderBy = {
    value: string;
    label: string;
    icon: LucideIcon;
};

const orderBys: OrderBy[] = [
    {
        value: 'popularity',
        label: 'Popularity',
        icon: Flame
    },
    {
        value: 'release-date',
        label: 'Release Date',
        icon: Calendar
    },
    {
        value: 'rating',
        label: 'Rating',
        icon: Star
    }
];

export function OrderByPopover() {
    const [open, setOpen] = React.useState(false);
    const [selectedOrderBy, setSelectedOrderBy] = React.useState<OrderBy | null>(orderBys[0]);
    const [selectedOrder, setSelectedOrder] = React.useState('asc');

    const handleOrderChange = () => setSelectedOrder(selectedOrder === 'asc' ? 'desc' : 'asc');

    return (
        <div className='flex items-center space-x-4'>
            <p className='text-muted-foreground text-sm'>Order by</p>
            <Popover open={open} onOpenChange={setOpen}>
                <div className='flex items-center gap-2'>
                    <PopoverTrigger asChild>
                        <Button variant='outline' className='w-[150px] justify-start'>
                            {selectedOrderBy ? (
                                <>
                                    <selectedOrderBy.icon className='mr-2 h-4 w-4 shrink-0' />
                                    {selectedOrderBy.label}
                                </>
                            ) : (
                                <>+ Set Order</>
                            )}
                        </Button>
                    </PopoverTrigger>
                    <Button variant='outline' size='icon' onClick={handleOrderChange}>
                        {selectedOrder === 'asc' ? <ArrowUp /> : <ArrowDown />}
                    </Button>
                </div>
                <PopoverContent className='p-0' side='right' align='start'>
                    <Command>
                        <CommandInput placeholder='Change order by...' />
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup>
                                {orderBys.map((orderBy) => (
                                    <CommandItem
                                        key={orderBy.value}
                                        value={orderBy.value}
                                        onSelect={(value) => {
                                            setSelectedOrderBy(
                                                orderBys.find((priority) => priority.value === value) || null
                                            );
                                            setOpen(false);
                                        }}>
                                        <orderBy.icon
                                            className={cn(
                                                'mr-2 h-4 w-4',
                                                orderBy.value === selectedOrderBy?.value ? 'opacity-100' : 'opacity-40'
                                            )}
                                        />
                                        <span>{orderBy.label}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
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
    ]
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const [activeItem, setActiveItem] = React.useState(data.navMain[0]);
    const { setOpen } = useSidebar();

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
                <SidebarHeader className='border-b p-3.5'>
                    <SidebarInput placeholder='Type to search...' />
                </SidebarHeader>
                <SidebarContent className='mx-auto'>
                    <SidebarGroup>
                        <SidebarGroupContent className='flex flex-col gap-5'>
                            <OrderByPopover />
                            <Accordion type='multiple' className='flex flex-col gap-5'>
                                <CustomAccordionItem id='where-to-watch' title='Where to Watch'>
                                    content
                                </CustomAccordionItem>
                                <CustomAccordionItem id='filters' title='Filters'>
                                    content
                                </CustomAccordionItem>
                            </Accordion>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </Sidebar>
    );
}

type AccordionItemProps = {
    id: string;
    title: string;
    children: React.ReactNode;
};

function CustomAccordionItem({ id, title, children }: AccordionItemProps) {
    return (
        <Card className='p-0'>
            <AccordionItem value={id}>
                <AccordionTrigger>{title}</AccordionTrigger>
                <AccordionContent>{children}</AccordionContent>
            </AccordionItem>
        </Card>
    );
}
