import React, { useEffect, useState } from 'react';

import BaseFormLayout from '@/components/form/base-form-layout';
import CheckboxGroupField from '@/components/form/checkbox-group';
import OrderSelectField from '@/components/form/order-select';
import TooltipSliderField from '@/components/form/tooltip-slider';
import FilterSection from '@/components/shared/filter-section';
import SidebarAccordionItem from '@/components/shared/sidebar-accordian-item';
import { Accordion } from '@/registry/new-york-v4/ui/accordion';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/registry/new-york-v4/ui/form';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/registry/new-york-v4/ui/sheet';
import { SheetFooter } from '@/registry/new-york-v4/ui/sheet';
import { SidebarInput } from '@/registry/new-york-v4/ui/sidebar';
import { RootState } from '@/store/store';
import { zodResolver } from '@hookform/resolvers/zod';

import { songAvailabilityOptions, songGenresOptions } from '../constants/song-enums';
import { SongsFilterType, songsFilterSchema } from '../schemas/songs-filter.schema';
import { resetSongsFilter } from '../store/songs-filter.slice';
import { setSongsFilter } from '../store/songs-filter.slice';
import { Tag, TagInput } from 'emblor';
import { Calendar, Flame, Settings2, Star } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

export default function SongsSidebar() {
    const [keywords, setKeywords] = useState<Tag[]>([]);
    const [activeKeywordIndex, setActiveKeywordIndex] = useState<number | null>(null);

    const songsFilter = useSelector((state: RootState) => state.songsFilter);
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const form = useForm<SongsFilterType>({
        resolver: zodResolver(songsFilterSchema),
        defaultValues: songsFilter
    });

    useEffect(() => {
        form.reset(songsFilter);
    }, [songsFilter, form]);

    function onSubmit(values: SongsFilterType) {
        dispatch(setSongsFilter(values));
        setOpen(false);
        toast.success('Filters Applied');
    }

    function onReset() {
        form.reset();
        dispatch(resetSongsFilter());
        setOpen(false);
        toast.info('Filters Reset');
    }

    return (
        <Sheet defaultOpen={false} onOpenChange={setOpen} open={open}>
            <SheetTrigger asChild>
                <Button variant='outline' size='icon' className='h-9 w-9 sm:h-10 sm:w-10' aria-label='Filter settings'>
                    <Settings2 className='size-3.5' />
                </Button>
            </SheetTrigger>
            <SheetContent side='right'>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='flex h-full w-full flex-col items-center gap-3 overflow-hidden'>
                        <SheetHeader className='w-full'>
                            <SheetTitle className='text-xl font-bold sm:text-2xl'>Discover</SheetTitle>
                        </SheetHeader>
                        <Separator />

                        <div className='w-full px-3 sm:px-5'>
                            <FormField
                                control={form.control}
                                name='search'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <SidebarInput placeholder='Search songs...' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <Separator className='my-1' />

                        <div className='grid place-items-center px-3 sm:px-5'>
                            <FormField
                                control={form.control}
                                name='orderBy'
                                render={({ field }) => (
                                    <BaseFormLayout className='w-full'>
                                        <OrderSelectField
                                            options={[
                                                { value: 'popularity', label: 'Popularity', icon: Flame },
                                                {
                                                    value: 'publish-date',
                                                    label: 'Publish Date',
                                                    icon: Calendar
                                                },
                                                { value: 'rating', label: 'Rating', icon: Star }
                                            ]}
                                            {...field}
                                        />
                                    </BaseFormLayout>
                                )}
                            />
                        </div>

                        <Separator className='my-1' />

                        <div className='w-full flex-1 overflow-y-auto px-1 pb-20'>
                            <Accordion
                                type='multiple'
                                className='flex w-full flex-col gap-4 px-2 sm:px-4'
                                defaultValue={['filters']}>
                                <SidebarAccordionItem id='filters' title='Filters'>
                                    <div className='mt-4 flex flex-col gap-4 sm:gap-5'>
                                        <FilterSection>
                                            <FormField
                                                control={form.control}
                                                name='availabilities'
                                                render={({ field }) => (
                                                    <BaseFormLayout label='Availabilities'>
                                                        <CheckboxGroupField
                                                            options={songAvailabilityOptions}
                                                            {...field}
                                                        />
                                                    </BaseFormLayout>
                                                )}
                                            />
                                        </FilterSection>

                                        <FilterSection>
                                            <FormField
                                                control={form.control}
                                                name='genres'
                                                render={({ field }) => (
                                                    <BaseFormLayout label='Genres'>
                                                        <CheckboxGroupField options={songGenresOptions} {...field} />
                                                    </BaseFormLayout>
                                                )}
                                            />
                                        </FilterSection>

                                        <FilterSection>
                                            <FormField
                                                control={form.control}
                                                name='userScore'
                                                render={({ field }) => (
                                                    <BaseFormLayout label='User Score'>
                                                        <TooltipSliderField min={0} max={10} {...field} />
                                                    </BaseFormLayout>
                                                )}
                                            />
                                        </FilterSection>

                                        <FilterSection>
                                            <FormField
                                                control={form.control}
                                                name='minVotes'
                                                render={({ field }) => (
                                                    <BaseFormLayout label='Minimum User Votes'>
                                                        <TooltipSliderField min={0} max={500} {...field} />
                                                    </BaseFormLayout>
                                                )}
                                            />
                                        </FilterSection>

                                        <FilterSection>
                                            <FormField
                                                control={form.control}
                                                name='duration'
                                                render={({ field }) => (
                                                    <BaseFormLayout label='Duration'>
                                                        <TooltipSliderField min={0} max={400} {...field} />
                                                    </BaseFormLayout>
                                                )}
                                            />
                                        </FilterSection>

                                        <FilterSection isLast>
                                            <FormField
                                                control={form.control}
                                                name='keywords'
                                                render={({ field }) => (
                                                    <BaseFormLayout label='Keywords'>
                                                        <TagInput
                                                            tags={field.value || keywords}
                                                            setTags={(keywords) => {
                                                                setKeywords(keywords);
                                                                field.onChange(keywords);
                                                            }}
                                                            placeholder='Add a keyword'
                                                            activeTagIndex={activeKeywordIndex}
                                                            setActiveTagIndex={setActiveKeywordIndex}
                                                            inlineTags={false}
                                                            inputFieldPosition='top'
                                                            styleClasses={{
                                                                tagList: {
                                                                    container: 'gap-1'
                                                                },
                                                                input: 'rounded-md transition-[color,box-shadow] placeholder:text-muted-foreground/70 focus-visible:border-ring outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50',
                                                                tag: {
                                                                    body: 'relative h-7 bg-background border border-input hover:bg-background rounded-md font-medium text-xs ps-2 pe-7',
                                                                    closeButton:
                                                                        'absolute -inset-y-px -end-px p-0 rounded-s-none rounded-e-md flex size-7 transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] text-muted-foreground/80 hover:text-foreground'
                                                                }
                                                            }}
                                                            {...field}
                                                        />
                                                    </BaseFormLayout>
                                                )}
                                            />
                                        </FilterSection>
                                    </div>
                                </SidebarAccordionItem>
                            </Accordion>
                        </div>

                        <SheetFooter className='bg-background sticky right-0 bottom-0 left-0 mt-auto w-full border-t p-3 sm:p-4'>
                            <div className='flex w-full gap-3'>
                                <Button
                                    variant='secondary'
                                    className='flex-1'
                                    size='lg'
                                    onClick={onReset}
                                    type='button'>
                                    Reset
                                </Button>
                                <Button className='flex-1' size='lg' type='submit'>
                                    Search
                                </Button>
                            </div>
                        </SheetFooter>
                    </form>
                </Form>
            </SheetContent>
        </Sheet>
    );
}
