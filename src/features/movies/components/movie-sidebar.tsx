'use client';

import React from 'react';

import DateRangePicker from '@/components/form/date-range-picker';
import LanguageSelect from '@/components/form/language-select';
import { TooltipSlider } from '@/components/form/tooltip-slider';
import SidebarAccordionItem from '@/components/sidebar-accordian-item';
import { AVAILABILITIES } from '@/constants/availabilities.constant';
import { CERTIFICATIONS } from '@/constants/certifications.constant';
import { GENRES } from '@/constants/genres.constant';
import { cn } from '@/lib/utils';
import { Accordion } from '@/registry/new-york-v4/ui/accordion';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Checkbox } from '@/registry/new-york-v4/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/registry/new-york-v4/ui/form';
import { Input } from '@/registry/new-york-v4/ui/input';
import { Label } from '@/registry/new-york-v4/ui/label';
import { RadioGroup, RadioGroupItem } from '@/registry/new-york-v4/ui/radio-group';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { Sidebar, SidebarContent, SidebarInput, SidebarProvider, useSidebar } from '@/registry/new-york-v4/ui/sidebar';
import { zodResolver } from '@hookform/resolvers/zod';

import { movieFilterSchema } from '../schemas/filter.schema';
import { OrderByPopover } from './order-by-popover';
import { Filter } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

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
            Filters
            <span className='sr-only'>Toggle Sidebar</span>
        </Button>
    );
}

type MovieSidebarProps = {
    children: React.ReactNode;
};

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

        console.log('Form submitted:', values);
    }

    return (
        <SidebarProvider
            style={
                {
                    '--sidebar-width': '350px'
                } as React.CSSProperties
            }
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
                                        <FormItem className='flex flex-col'>
                                            <FormControl>
                                                <OrderByPopover value={field.value} onChange={field.onChange} />
                                            </FormControl>
                                            <FormMessage />
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
                                        <div className='px-5'>
                                            <FormField
                                                control={form.control}
                                                name='showMe'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>
                                                            <h6>Show Me</h6>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <RadioGroup
                                                                onValueChange={field.onChange}
                                                                defaultValue={field.value}
                                                                className='flex flex-col space-y-1'>
                                                                <FormItem className='flex items-center space-y-0 space-x-3'>
                                                                    <FormControl>
                                                                        <RadioGroupItem value='everything' />
                                                                    </FormControl>
                                                                    <FormLabel className='font-normal'>
                                                                        Everything
                                                                    </FormLabel>
                                                                </FormItem>
                                                                <FormItem className='flex items-center space-y-0 space-x-3'>
                                                                    <FormControl>
                                                                        <RadioGroupItem value='not-seen' />
                                                                    </FormControl>
                                                                    <FormLabel className='font-normal'>
                                                                        Movies I Haven't Seen
                                                                    </FormLabel>
                                                                </FormItem>
                                                                <FormItem className='flex items-center space-y-0 space-x-3'>
                                                                    <FormControl>
                                                                        <RadioGroupItem value='seen' />
                                                                    </FormControl>
                                                                    <FormLabel className='font-normal'>
                                                                        Movies I Have Seen
                                                                    </FormLabel>
                                                                </FormItem>
                                                            </RadioGroup>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <Separator />
                                        <div className='px-5'>
                                            <FormField
                                                control={form.control}
                                                name='availabilities'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>
                                                            <h6>Availabilities</h6>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <div className='grid grid-cols-2'>
                                                                {AVAILABILITIES.common
                                                                    .concat(AVAILABILITIES.films)
                                                                    .map((availability) => {
                                                                        const isChecked =
                                                                            field.value?.includes(availability);

                                                                        return (
                                                                            <div
                                                                                key={availability}
                                                                                className='mt-5 flex items-center space-x-2'>
                                                                                <Checkbox
                                                                                    id={availability}
                                                                                    checked={isChecked}
                                                                                    onCheckedChange={(checked) => {
                                                                                        const currentValue =
                                                                                            field.value || [];
                                                                                        const newValue = checked
                                                                                            ? [
                                                                                                  ...currentValue,
                                                                                                  availability
                                                                                              ]
                                                                                            : currentValue.filter(
                                                                                                  (val: string) =>
                                                                                                      val !==
                                                                                                      availability
                                                                                              );
                                                                                        field.onChange(newValue);
                                                                                    }}
                                                                                />
                                                                                <Label htmlFor={availability}>
                                                                                    {availability}
                                                                                </Label>
                                                                            </div>
                                                                        );
                                                                    })}
                                                            </div>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <Separator />
                                        <div className='px-5'>
                                            <FormField
                                                control={form.control}
                                                name='releaseDates'
                                                render={({ field }) => (
                                                    <FormItem className='flex flex-col'>
                                                        <FormLabel>
                                                            <h6>Release Dates</h6>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <DateRangePicker
                                                                value={field.value}
                                                                onChange={field.onChange}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <Separator />
                                        <div className='px-5'>
                                            <FormField
                                                control={form.control}
                                                name='genres'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>
                                                            <h6>Genres</h6>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <div className='grid grid-cols-2'>
                                                                {GENRES.common.concat(GENRES.films).map((genre) => {
                                                                    const isChecked = field.value?.includes(genre);

                                                                    return (
                                                                        <div
                                                                            key={genre}
                                                                            className='mt-5 flex items-center space-x-2'>
                                                                            <Checkbox
                                                                                id={genre}
                                                                                checked={isChecked}
                                                                                onCheckedChange={(checked) => {
                                                                                    const currentValue =
                                                                                        field.value || [];
                                                                                    const newValue = checked
                                                                                        ? [...currentValue, genre]
                                                                                        : currentValue.filter(
                                                                                              (val: string) =>
                                                                                                  val !== genre
                                                                                          );
                                                                                    field.onChange(newValue);
                                                                                }}
                                                                            />
                                                                            <Label htmlFor={genre}>{genre}</Label>
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <Separator />
                                        <div className='px-5'>
                                            <FormField
                                                control={form.control}
                                                name='certifications'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>
                                                            <h6>Certifications</h6>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <div className='grid grid-cols-2'>
                                                                {CERTIFICATIONS.common
                                                                    .concat(CERTIFICATIONS.films)
                                                                    .map((certification) => {
                                                                        const isChecked =
                                                                            field.value?.includes(certification);

                                                                        return (
                                                                            <div
                                                                                key={certification}
                                                                                className='mt-5 flex items-center space-x-2'>
                                                                                <Checkbox
                                                                                    id={certification}
                                                                                    checked={isChecked}
                                                                                    onCheckedChange={(checked) => {
                                                                                        const currentValue =
                                                                                            field.value || [];
                                                                                        const newValue = checked
                                                                                            ? [
                                                                                                  ...currentValue,
                                                                                                  certification
                                                                                              ]
                                                                                            : currentValue.filter(
                                                                                                  (val: string) =>
                                                                                                      val !==
                                                                                                      certification
                                                                                              );
                                                                                        field.onChange(newValue);
                                                                                    }}
                                                                                />
                                                                                <Label htmlFor={certification}>
                                                                                    {certification}
                                                                                </Label>
                                                                            </div>
                                                                        );
                                                                    })}
                                                            </div>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <Separator />
                                        <div className='px-5'>
                                            <FormField
                                                control={form.control}
                                                name='language'
                                                render={({ field }) => (
                                                    <FormItem className='flex flex-col'>
                                                        <FormLabel>
                                                            <h6>Language</h6>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <LanguageSelect {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <Separator />
                                        <div className='px-5'>
                                            <FormField
                                                control={form.control}
                                                name='userScore'
                                                render={({ field }) => (
                                                    <FormItem className='flex flex-col'>
                                                        <FormLabel>
                                                            <h6>User Score</h6>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <TooltipSlider
                                                                defaultValue={[0, 10]}
                                                                min={0}
                                                                max={10}
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <Separator />
                                        <div className='px-5'>
                                            <FormField
                                                control={form.control}
                                                name='minVotes'
                                                render={({ field }) => (
                                                    <FormItem className='flex flex-col'>
                                                        <FormLabel>
                                                            <h6>Minimum User Votes</h6>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <TooltipSlider
                                                                defaultValue={[0]}
                                                                min={0}
                                                                max={500}
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <Separator />
                                        <div className='px-5'>
                                            <FormField
                                                control={form.control}
                                                name='runtime'
                                                render={({ field }) => (
                                                    <FormItem className='flex flex-col'>
                                                        <FormLabel>
                                                            <h6>Runtime</h6>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <TooltipSlider
                                                                defaultValue={[0, 400]}
                                                                min={0}
                                                                max={400}
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <Separator />
                                        <div className='px-5'>
                                            <FormField
                                                control={form.control}
                                                name='keywords'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>
                                                            <h6>Keywords</h6>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input placeholder='Filter by keywords...' {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
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
