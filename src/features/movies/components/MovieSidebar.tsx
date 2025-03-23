'use client';

import React from 'react';

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
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { Sidebar, SidebarContent, SidebarProvider, useSidebar } from '@/registry/new-york-v4/ui/sidebar';

import { ArrowDown, ArrowUp, Calendar, Filter, Flame, LucideIcon, Star } from 'lucide-react';

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

type AccordionItemProps = {
    id: string;
    title: string;
    children: React.ReactNode;
};

function CustomAccordionItem({ id, title, children }: AccordionItemProps) {
    return (
        <Card className='rounded-md p-0'>
            <AccordionItem value={id}>
                <AccordionTrigger className='cursor-pointer p-5 hover:no-underline'>{title}</AccordionTrigger>
                <AccordionContent className='border-t'>{children}</AccordionContent>
            </AccordionItem>
        </Card>
    );
}

export function MovieSidebarTrigger({ className, onClick, ...props }: React.ComponentProps<typeof Button>) {
    const { toggleSidebar } = useSidebar();

    return (
        <Button
            data-sidebar='trigger'
            data-slot='sidebar-trigger'
            variant='ghost'
            className={cn('text-muted-foreground cursor-pointer', className)}
            onClick={(event) => {
                onClick?.(event);
                toggleSidebar();
            }}
            {...props}>
            <Filter />
            Filter
            <span className='sr-only'>Toggle Sidebar</span>
        </Button>
    );
}

type MovieSidebarProps = {
    children: React.ReactNode;
};

export default function MovieSidebar({ children }: MovieSidebarProps) {
    return (
        <SidebarProvider
            style={
                {
                    '--sidebar-width': '310px'
                } as React.CSSProperties
            }
            className='relative z-0 !h-[calc(100vh-4rem)] !min-h-0 overflow-hidden'>
            <Sidebar className='absolute'>
                <SidebarContent className='flex flex-col items-center gap-5 py-5'>
                    <div className='min-w-full px-5'>
                        <SidebarInput placeholder='Search movies...' />
                    </div>
                    <Separator />
                    <div className='flex min-w-full justify-center px-5'>
                        <OrderByPopover />
                    </div>
                    <Separator />
                    <Accordion
                        type='multiple'
                        className='flex min-w-full flex-col gap-5 px-5'
                        defaultValue={['filters']}>
                        <CustomAccordionItem id='where-to-watch' title='Where to Watch'>
                            content
                        </CustomAccordionItem>
                        <CustomAccordionItem id='filters' title='Filters'>
                            <div className='mt-5 flex flex-col gap-5'>
                                <div className='px-5'>
                                    <h6>Genres</h6>
                                    <Input placeholder='Filter by genres...' className='mt-2' />
                                </div>
                                <Separator />
                                <div className='px-5'>
                                    <h6>Keywords</h6>
                                    <Input placeholder='Filter by keywords...' className='mt-2' />
                                </div>
                            </div>
                        </CustomAccordionItem>
                    </Accordion>
                </SidebarContent>
            </Sidebar>
            <main className='h-[calc(100vh-4rem)] w-full overflow-auto'>{children}</main>
        </SidebarProvider>
    );
}
