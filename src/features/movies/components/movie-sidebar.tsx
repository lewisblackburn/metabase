'use client';

import React from 'react';

import BaseFormLayout from '@/components/form/base-form-layout';
import CheckboxGroupField from '@/components/form/checkbox-group';
import DateRangePickerField from '@/components/form/date-range-picker';
import InputField from '@/components/form/input';
import LanguageSelectField from '@/components/form/language-select';
import OrderSelectField from '@/components/form/order-select';
import RadioGroupField from '@/components/form/radio-group';
import TooltipSliderField from '@/components/form/tooltip-slider';
import SidebarAccordionItem from '@/components/sidebar-accordian-item';
import { AVAILABILITIES } from '@/constants/availabilities.constant';
import { CERTIFICATIONS } from '@/constants/certifications.constant';
import { GENRES } from '@/constants/genres.constant';
import { cn } from '@/lib/utils';
import { Accordion } from '@/registry/new-york-v4/ui/accordion';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/registry/new-york-v4/ui/form';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { Sidebar, SidebarContent, SidebarInput, SidebarProvider, useSidebar } from '@/registry/new-york-v4/ui/sidebar';
import { zodResolver } from '@hookform/resolvers/zod';

import { movieFilterSchema } from '../schemas/filter.schema';
import { Calendar, Filter, Flame, Star } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

type MovieSidebarProps = {
    children: React.ReactNode;
};

function FilterSection({ children, isLast }: { children: React.ReactNode; isLast?: boolean }) {
    return (
        <>
            <div className='px-5'>{children}</div>
            {!isLast && <Separator />}
        </>
    );
}

export default function MovieSidebar({ children }: MovieSidebarProps) {
    const form = useForm<z.infer<typeof movieFilterSchema>>({
        resolver: zodResolver(movieFilterSchema),
        defaultValues: {
            orderBy: {
                orderBy: 'popularity',
                order: 'asc'
            },
            search: '',
            showMe: 'everything',
            availabilities: [],
            releaseDates: undefined,
            genres: [],
            certifications: [],
            language: '',
            userScore: [0, 10],
            minVotes: [0],
            runtime: [0, 400],
            keywords: ''
        }
    });

    function onSubmit(values: z.infer<typeof movieFilterSchema>) {
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
                                                <SidebarInput placeholder='Search movies...' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Separator />
                            <div className='flex min-w-full justify-center px-5'>
                                <FormField
                                    name='orderBy'
                                    render={({ field }) => (
                                        <FormItem>
                                            <BaseFormLayout>
                                                <OrderSelectField
                                                    options={[
                                                        { value: 'popularity', label: 'Popularity', icon: Flame },
                                                        {
                                                            value: 'release-date',
                                                            label: 'Release Date',
                                                            icon: Calendar
                                                        },
                                                        { value: 'rating', label: 'Rating', icon: Star }
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
                                <SidebarAccordionItem id='where-to-watch' title='Where to Watch'>
                                    content
                                </SidebarAccordionItem>
                                <SidebarAccordionItem id='filters' title='Filters'>
                                    <div className='mt-5 flex flex-col gap-5'>
                                        <FilterSection>
                                            <FormField
                                                name='showMe'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <BaseFormLayout label='Show Me'>
                                                            <RadioGroupField
                                                                options={[
                                                                    { value: 'everything', label: 'Everything' },
                                                                    {
                                                                        value: 'not-seen',
                                                                        label: "Movies I Haven't Seen"
                                                                    },
                                                                    { value: 'seen', label: 'Movies I Have Seen' }
                                                                ]}
                                                                {...field}
                                                            />
                                                        </BaseFormLayout>
                                                    </FormItem>
                                                )}
                                            />
                                        </FilterSection>

                                        <FilterSection>
                                            <FormField
                                                name='availabilities'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <BaseFormLayout label='Availabilities'>
                                                            <CheckboxGroupField
                                                                options={AVAILABILITIES.common.concat(
                                                                    AVAILABILITIES.films
                                                                )}
                                                                {...field}
                                                            />
                                                        </BaseFormLayout>
                                                    </FormItem>
                                                )}
                                            />
                                        </FilterSection>

                                        <FilterSection>
                                            <FormField
                                                name='releaseDates'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <BaseFormLayout label='Release Dates'>
                                                            <DateRangePickerField
                                                                placeholder='Pick a date'
                                                                {...field}
                                                            />
                                                        </BaseFormLayout>
                                                    </FormItem>
                                                )}
                                            />
                                        </FilterSection>

                                        <FilterSection>
                                            <FormField
                                                name='genres'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <BaseFormLayout label='Genres'>
                                                            <CheckboxGroupField
                                                                options={GENRES.common.concat(GENRES.films)}
                                                                {...field}
                                                            />
                                                        </BaseFormLayout>
                                                    </FormItem>
                                                )}
                                            />
                                        </FilterSection>

                                        <FilterSection>
                                            <FormField
                                                name='certifications'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <BaseFormLayout label='Certifications'>
                                                            <CheckboxGroupField
                                                                options={CERTIFICATIONS.common.concat(
                                                                    CERTIFICATIONS.films
                                                                )}
                                                                {...field}
                                                            />
                                                        </BaseFormLayout>
                                                    </FormItem>
                                                )}
                                            />
                                        </FilterSection>

                                        <FilterSection>
                                            <FormField
                                                name='language'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <BaseFormLayout label='Language'>
                                                            <LanguageSelectField {...field} />
                                                        </BaseFormLayout>
                                                    </FormItem>
                                                )}
                                            />
                                        </FilterSection>

                                        <FilterSection>
                                            <FormField
                                                name='userScore'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <BaseFormLayout label='User Score'>
                                                            <TooltipSliderField min={0} max={10} {...field} />
                                                        </BaseFormLayout>
                                                    </FormItem>
                                                )}
                                            />
                                        </FilterSection>

                                        <FilterSection>
                                            <FormField
                                                name='minVotes'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <BaseFormLayout label='Minimum User Votes'>
                                                            <TooltipSliderField min={0} max={500} {...field} />
                                                        </BaseFormLayout>
                                                    </FormItem>
                                                )}
                                            />
                                        </FilterSection>
                                        <FilterSection>
                                            <FormField
                                                name='runtime'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <BaseFormLayout label='Runtime'>
                                                            <TooltipSliderField min={0} max={400} {...field} />
                                                        </BaseFormLayout>
                                                    </FormItem>
                                                )}
                                            />
                                        </FilterSection>

                                        <FilterSection isLast>
                                            <FormField
                                                name='keywords'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <BaseFormLayout label='Keywords'>
                                                            <InputField {...field} placeholder='Enter keywords...' />
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
                    <MovieSidebarTrigger className='justify-end' />
                </div>
                {children}
            </main>
        </SidebarProvider>
    );
}

function MovieSidebarTrigger({ className, onClick, ...props }: React.ComponentProps<typeof Button>) {
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
            Filters
            <span className='sr-only'>Toggle Sidebar</span>
        </Button>
    );
}
