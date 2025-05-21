import { useEffect, useState } from 'react';

import BaseFormLayout from '@/components/form/base-form-layout';
import OrderSelectField from '@/components/form/order-select';
import TooltipSliderField from '@/components/form/tooltip-slider';
import FilterSection from '@/components/shared/filter-section';
import SidebarAccordionItem from '@/components/shared/sidebar-accordian-item';
import { Accordion } from '@/registry/new-york-v4/ui/accordion';
import { Button } from '@/registry/new-york-v4/ui/button';
import { FormControl, FormField, FormItem, FormMessage } from '@/registry/new-york-v4/ui/form';
import { Form } from '@/registry/new-york-v4/ui/form';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/registry/new-york-v4/ui/sheet';
import { SidebarInput } from '@/registry/new-york-v4/ui/sidebar';
import { AppDispatch, RootState } from '@/store/store';
import { zodResolver } from '@hookform/resolvers/zod';

import { PeopleFilter, peopleFilterSchema } from '../schemas/people-filter.schema';
import { resetPeopleFilter, setPeopleFilter } from '../store/people-filter.slice';
import { Tag } from 'emblor';
import { Settings2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

export default function PeopleSidebar() {
    const [keywords, setKeywords] = useState<Tag[]>([]);
    const [activeKeywordIndex, setActiveKeywordIndex] = useState<number | null>(null);

    const peopleFilter = useSelector((s: RootState) => s.peopleFilter);
    const dispatch = useDispatch<AppDispatch>();
    const [open, setOpen] = useState(false);
    const form = useForm<PeopleFilter>({
        resolver: zodResolver(peopleFilterSchema),
        defaultValues: peopleFilter
    });

    useEffect(() => {
        form.reset(peopleFilter);
    }, [peopleFilter, form]);

    function onSubmit(values: PeopleFilter) {
        dispatch(setPeopleFilter(values));
        setOpen(false);
        toast.success('Filters Applied');
    }

    function onReset() {
        form.reset();
        dispatch(resetPeopleFilter());
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
                                            <SidebarInput placeholder='Search people...' {...field} />
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
                                            options={[{ value: 'popularity', label: 'Popularity' }]}
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
                                        <FilterSection isLast>
                                            <FormField
                                                control={form.control}
                                                name='age'
                                                render={({ field }) => (
                                                    <BaseFormLayout label='Age'>
                                                        <TooltipSliderField min={0} max={150} {...field} />
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
