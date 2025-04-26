'use client';

import { useState } from 'react';

import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/registry/new-york-v4/ui/dialog';
import { Form, FormField, FormItem, FormMessage } from '@/registry/new-york-v4/ui/form';
import { RadioGroup, RadioGroupItem } from '@/registry/new-york-v4/ui/radio-group';
import {
    Sheet,
    SheetContent,
    SheetContentWithoutClose,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/registry/new-york-v4/ui/sheet';
import { Textarea } from '@/registry/new-york-v4/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';

import BaseFormLayout from '../form/base-form-layout';
import ActionButton from './action-button';
import ResponsiveDialog from './responsive-dailog';
import { Star, Trash } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const reviewSchema = z.object({
    rating: z.number().min(1, 'Rating is required').nullable(),
    review: z.string().optional()
});

export type ReviewFormValues = z.infer<typeof reviewSchema>;

interface ReviewDialogProps {
    defaultValues?: ReviewFormValues;
    onSubmitReview: (data: ReviewFormValues) => void;
    onDeleteReview: () => void;
}

interface ReviewFormProps {
    defaultValues?: ReviewFormValues;
    onSubmit: (data: ReviewFormValues) => void;
    onCancel: () => void;
    onDelete?: () => void;
}

interface ReviewButtonProps {
    reviewed?: boolean;
}

function ReviewButton({ reviewed }: ReviewButtonProps) {
    return (
        <ActionButton
            icon={Star}
            iconClassName={cn('size-4', {
                'fill-yellow-500 text-yellow-500': reviewed
            })}
            size='sm'>
            {reviewed ? 'Reviewed' : 'Review'}
        </ActionButton>
    );
}

const ReviewForm = ({ defaultValues, onSubmit, onCancel, onDelete }: ReviewFormProps) => {
    const form = useForm<ReviewFormValues>({
        resolver: zodResolver(reviewSchema),
        defaultValues: defaultValues
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                <FormField
                    control={form.control}
                    name='rating'
                    render={({ field }) => (
                        <FormItem>
                            <BaseFormLayout label='Rating'>
                                <RadioGroup
                                    onValueChange={(val) => field.onChange(parseInt(val, 10))}
                                    value={field.value?.toString()}
                                    className='flex gap-0 -space-x-px rounded-md shadow-xs'>
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                                        <label
                                            key={number}
                                            className='border-input has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex size-9 flex-1 cursor-pointer flex-col items-center justify-center gap-3 border text-center text-sm transition-[color,box-shadow] outline-none first:rounded-s-md last:rounded-e-md has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50 has-data-[state=checked]:z-10'>
                                            <RadioGroupItem
                                                id={`radio-${number}`}
                                                value={number.toString()}
                                                className='sr-only after:absolute after:inset-0'
                                            />
                                            {number}
                                        </label>
                                    ))}
                                </RadioGroup>
                            </BaseFormLayout>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='review'
                    render={({ field }) => (
                        <FormItem>
                            <BaseFormLayout label='Review'>
                                <Textarea
                                    id='review'
                                    {...field}
                                    placeholder='Write your review here...'
                                    className='min-h-32'
                                />
                            </BaseFormLayout>
                        </FormItem>
                    )}
                />
                <div className='flex items-center justify-between'>
                    {!!defaultValues?.rating && (
                        <Button type='button' variant='destructive' onClick={onDelete} size='icon'>
                            <Trash className='size-4' />
                        </Button>
                    )}
                    <div className='flex w-full justify-end gap-2 pt-2'>
                        <Button type='button' variant='outline' onClick={onCancel}>
                            Cancel
                        </Button>
                        <Button type='submit'>Submit Review</Button>
                    </div>
                </div>
            </form>
        </Form>
    );
};

export default function ReviewDialog({ defaultValues, onSubmitReview, onDeleteReview }: ReviewDialogProps) {
    const [open, setOpen] = useState(false);

    const handleSubmit = (reviewData: ReviewFormValues) => {
        onSubmitReview(reviewData);
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        onDeleteReview();
        setOpen(false);
    };

    return (
        <ResponsiveDialog
            open={open}
            onOpenChange={setOpen}
            title='Write a Review'
            trigger={
                <div>
                    <ReviewButton reviewed={!!defaultValues?.rating} />
                </div>
            }>
            <ReviewForm
                defaultValues={defaultValues}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                onDelete={handleDelete}
            />
        </ResponsiveDialog>
    );
}
