'use client';

import React from 'react';

import LanguageSelect from '@/components/form/language-select';
import { TooltipSlider } from '@/components/form/tooltip-slider';
import SidebarAccordionItem from '@/components/sidebar-accordian-item';
import { cn } from '@/lib/utils';
import { Accordion } from '@/registry/new-york-v4/ui/accordion';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Input } from '@/registry/new-york-v4/ui/input';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { Sidebar, SidebarContent, SidebarProvider, useSidebar } from '@/registry/new-york-v4/ui/sidebar';
import { Slider } from '@/registry/new-york-v4/ui/slider';

import { OrderByPopover } from './order-by-popover';
import { Filter } from 'lucide-react';

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
                        <SidebarAccordionItem id='where-to-watch' title='Where to Watch'>
                            content
                        </SidebarAccordionItem>
                        <SidebarAccordionItem id='filters' title='Filters'>
                            <div className='mt-5 flex flex-col gap-5'>
                                <div className='px-5'>
                                    <h6>Show Me</h6>
                                </div>
                                <Separator />
                                <div className='px-5'>
                                    <h6>Availabilities</h6>
                                </div>
                                <Separator />
                                <div className='px-5'>
                                    <h6>Release Dates</h6>
                                </div>
                                <Separator />
                                <div className='px-5'>
                                    <h6>Genres</h6>
                                </div>
                                <Separator />
                                <div className='px-5'>
                                    <h6>Certification</h6>
                                </div>
                                <Separator />
                                <div className='px-5'>
                                    <h6>Lanugage</h6>
                                    <LanguageSelect className='mt-5' />
                                </div>
                                <Separator />
                                <div className='px-5'>
                                    <h6>User Score</h6>
                                    <TooltipSlider defaultValue={[0, 10]} min={0} max={10} className='mt-5' />
                                </div>
                                <Separator />
                                <div className='px-5'>
                                    <h6>Minimum User Votes</h6>
                                    <TooltipSlider defaultValue={[0]} min={0} max={500} className='mt-5' />
                                </div>
                                <Separator />
                                <div className='px-5'>
                                    <h6>Runtime</h6>
                                    <TooltipSlider defaultValue={[0, 400]} min={0} max={400} className='mt-5' />
                                </div>
                                <Separator />
                                <div className='px-5'>
                                    <h6>Keywords</h6>
                                    <Input placeholder='Filter by keywords...' className='mt-2' />
                                </div>
                            </div>
                        </SidebarAccordionItem>
                    </Accordion>
                    <div className='w-full px-5'>
                        <Button className='w-full' size='lg'>
                            Search
                        </Button>
                    </div>
                </SidebarContent>
            </Sidebar>
            <main className='h-[calc(100vh-4rem)] w-full overflow-auto'>{children}</main>
        </SidebarProvider>
    );
}
