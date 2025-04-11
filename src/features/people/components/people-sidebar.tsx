'use client';

import React from 'react';

import BaseFormLayout from '@/components/form/base-form-layout';
import OrderSelectField from '@/components/form/order-select';
import TooltipSliderField from '@/components/form/tooltip-slider';
import FilterSection from '@/components/shared/filter-section';
import FilterSidebarTrigger from '@/components/shared/filter-sidebar-trigger';
import SidebarAccordionItem from '@/components/shared/sidebar-accordian-item';
import { useIsMobile } from '@/hooks/use-mobile';
import { Accordion } from '@/registry/new-york-v4/ui/accordion';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/registry/new-york-v4/ui/form';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { Sidebar, SidebarContent, SidebarInput, SidebarProvider } from '@/registry/new-york-v4/ui/sidebar';
import { zodResolver } from '@hookform/resolvers/zod';

import { PeopleFilter, peopleFilterSchema } from '../schemas/people-filter.schema';
import { Flame, Text, Timer } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

type PeopleSidebarProps = {
    children: React.ReactNode;
};

export default function PeopleSidebar({ children }: PeopleSidebarProps) {
    const form = useForm<PeopleFilter>({
        resolver: zodResolver(peopleFilterSchema),
        defaultValues: {
            orderBy: {
                orderBy: 'popularity',
                order: 'asc'
            },
            search: '',
            age: [0, 120]
        }
    });

    function onSubmit(values: PeopleFilter) {
        toast.success('Filters Applied', {
            description: JSON.stringify(values, null, 2),
            duration: 5000
        });
    }

    return (
        <SidebarProvider
            style={{ '--sidebar-width': '350px' } as React.CSSProperties}
            className='relative z-0 !h-[calc(100vh-4rem)] !min-h-0 overflow-hidden'>
            <Sidebar className='absolute'>
                <SidebarContent className='py-5'>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className='flex w-full flex-col items-center gap-5'>
                            <div className='min-w-full px-5'>
                                <FormField
                                    control={form.control}
                                    name='search'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <SidebarInput placeholder='Search people...' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Separator />
                            <div className='flex min-w-full justify-center px-5'>
                                <FormField
                                    control={form.control}
                                    name='orderBy'
                                    render={({ field }) => (
                                        <FormItem>
                                            <BaseFormLayout>
                                                <OrderSelectField
                                                    options={[
                                                        { value: 'popularity', label: 'Popularity', icon: Flame },
                                                        {
                                                            value: 'name',
                                                            label: 'Name',
                                                            icon: Text
                                                        },
                                                        { value: 'age', label: 'Age', icon: Timer }
                                                    ]}
                                                    {...field}
                                                />
                                            </BaseFormLayout>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Separator />
                            <Accordion
                                type='multiple'
                                className='flex min-w-full flex-col gap-5 px-5'
                                defaultValue={['filters']}>
                                <SidebarAccordionItem id='filters' title='Filters'>
                                    <div className='mt-5 flex flex-col gap-5'>
                                        <FilterSection isLast>
                                            <FormField
                                                control={form.control}
                                                name='age'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <BaseFormLayout label='Age'>
                                                            <TooltipSliderField min={0} max={120} {...field} />
                                                        </BaseFormLayout>
                                                    </FormItem>
                                                )}
                                            />
                                        </FilterSection>
                                    </div>
                                </SidebarAccordionItem>
                            </Accordion>
                            <div className='mb-15 w-full px-5'>
                                <Button className='w-full' size='lg'>
                                    Search
                                </Button>
                            </div>
                        </form>
                    </Form>
                </SidebarContent>
            </Sidebar>
            <main className='h-[calc(100vh-4rem)] w-full overflow-auto'>
                <div className='mx-auto max-w-full border-b px-5 py-5 sm:px-10'>
                    <FilterSidebarTrigger className='justify-end' />
                </div>
                {children}
            </main>
        </SidebarProvider>
    );
}
