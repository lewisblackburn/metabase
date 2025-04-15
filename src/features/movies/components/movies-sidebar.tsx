'use client';

import React, { useEffect } from 'react';

import BaseFormLayout from '@/components/form/base-form-layout';
import CheckboxGroupField from '@/components/form/checkbox-group';
import DateRangePickerField from '@/components/form/date-range-picker';
import MultiSelectField from '@/components/form/multi-select';
import OrderSelectField from '@/components/form/order-select';
import RadioGroupField from '@/components/form/radio-group';
import SelectField from '@/components/form/select';
import TooltipSliderField from '@/components/form/tooltip-slider';
import FilterSection from '@/components/shared/filter-section';
import FilterSidebarTrigger from '@/components/shared/filter-sidebar-trigger';
import SidebarAccordionItem from '@/components/shared/sidebar-accordian-item';
import { MOVIE_CERTIFICATION_OPTIONS } from '@/constants/certifications.constant';
import { LANGUAGES } from '@/constants/languages.constant';
import { useGetGenresQuery } from '@/generated/graphql';
import { useGetAvailabilitiesQuery } from '@/generated/graphql';
import { Accordion } from '@/registry/new-york-v4/ui/accordion';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/registry/new-york-v4/ui/form';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { Sidebar, SidebarContent, SidebarInput, SidebarProvider } from '@/registry/new-york-v4/ui/sidebar';
import { RootState } from '@/store/store';
import { zodResolver } from '@hookform/resolvers/zod';

import { MoviesFilter, moviesFilterSchema } from '../schemas/movies-filter.schema';
import { resetMoviesFilter, setMoviesFilter } from '../store/movies-filter.slice';
import { Calendar, Flame, Star } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

type MoviesSidebarProps = {
    children: React.ReactNode;
};

export default function MoviesSidebar({ children }: MoviesSidebarProps) {
    const moviesFilter = useSelector((state: RootState) => state.moviesFilter);
    const dispatch = useDispatch();
    const form = useForm<MoviesFilter>({
        resolver: zodResolver(moviesFilterSchema),
        defaultValues: moviesFilter
    });

    const { data: genres } = useGetGenresQuery(
        {
            where: {
                genre_types: {
                    type: {
                        _eq: 'movie'
                    }
                }
            }
        },
        {
            queryKey: ['genres']
        }
    );

    const { data: availabilities } = useGetAvailabilitiesQuery(
        {
            where: {
                availability_types: {
                    type: {
                        _eq: 'movie'
                    }
                }
            }
        },
        {
            queryKey: ['availabilities']
        }
    );

    useEffect(() => {
        form.reset(moviesFilter);
    }, [moviesFilter, form]);

    function onSubmit(values: MoviesFilter) {
        dispatch(setMoviesFilter(values));
        toast.success('Filters Applied');
    }

    function onReset() {
        form.reset();
        dispatch(resetMoviesFilter());
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
                                    control={form.control}
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
                                                control={form.control}
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
                                                control={form.control}
                                                name='availabilities'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <BaseFormLayout label='Availabilities'>
                                                            <CheckboxGroupField
                                                                options={
                                                                    availabilities?.availabilities.map(
                                                                        (availability) => ({
                                                                            value: availability.id.toString(),
                                                                            label: availability.name
                                                                        })
                                                                    ) ?? []
                                                                }
                                                                {...field}
                                                            />
                                                        </BaseFormLayout>
                                                    </FormItem>
                                                )}
                                            />
                                        </FilterSection>

                                        <FilterSection>
                                            <FormField
                                                control={form.control}
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
                                                control={form.control}
                                                name='genres'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <BaseFormLayout label='Genres'>
                                                            <CheckboxGroupField
                                                                options={
                                                                    genres?.genres.map((genre) => ({
                                                                        value: genre.id.toString(),
                                                                        label: genre.name
                                                                    })) ?? []
                                                                }
                                                                {...field}
                                                            />
                                                        </BaseFormLayout>
                                                    </FormItem>
                                                )}
                                            />
                                        </FilterSection>

                                        <FilterSection>
                                            <FormField
                                                control={form.control}
                                                name='certifications'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <BaseFormLayout label='Certifications'>
                                                            <CheckboxGroupField
                                                                options={MOVIE_CERTIFICATION_OPTIONS}
                                                                {...field}
                                                            />
                                                        </BaseFormLayout>
                                                    </FormItem>
                                                )}
                                            />
                                        </FilterSection>

                                        <FilterSection>
                                            <FormField
                                                control={form.control}
                                                name='language'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <BaseFormLayout label='Language'>
                                                            <SelectField
                                                                options={LANGUAGES.map((language) => ({
                                                                    value: language.code,
                                                                    label: language.label
                                                                }))}
                                                                {...field}
                                                            />
                                                        </BaseFormLayout>
                                                    </FormItem>
                                                )}
                                            />
                                        </FilterSection>

                                        <FilterSection>
                                            <FormField
                                                control={form.control}
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
                                                control={form.control}
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
                                                control={form.control}
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
                                                control={form.control}
                                                name='keywords'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <BaseFormLayout label='Keywords'>
                                                            <MultiSelectField options={[]} createable {...field} />
                                                        </BaseFormLayout>
                                                    </FormItem>
                                                )}
                                            />
                                        </FilterSection>
                                    </div>
                                </SidebarAccordionItem>
                            </Accordion>
                            <div className='mb-15 flex w-full flex-col gap-5 px-5'>
                                <Button className='w-full' size='lg' type='submit'>
                                    Search
                                </Button>
                                <Button variant='secondary' className='w-full' size='lg' type='reset' onClick={onReset}>
                                    Reset
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
