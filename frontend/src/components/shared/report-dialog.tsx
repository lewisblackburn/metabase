'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Form, FormField } from '@/registry/new-york-v4/ui/form';
import { RadioGroup, RadioGroupItem } from '@/registry/new-york-v4/ui/radio-group';
import { Textarea } from '@/registry/new-york-v4/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';

import BaseFormLayout from '../form/base-form-layout';
import ActionButton from './action-button';
import ResponsiveDialog from './responsive-dailog';
import { Flag } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const reportSchema = z.object({
    reason: z.string().min(1, 'Please select a reason'),
    details: z
        .string()
        .min(10, 'Please provide more details (minimum 10 characters)')
        .max(500, 'Details must not exceed 500 characters')
});

export type ReportFormValues = z.infer<typeof reportSchema>;

interface ReportDialogProps {
    onSubmitReport: (data: ReportFormValues) => void;
}

interface ReportFormProps {
    onSubmit: (data: ReportFormValues) => void;
    onCancel: () => void;
}

function ReportButton() {
    return (
        <ActionButton icon={Flag} iconClassName={cn('size-4')} size='sm'>
            Report
        </ActionButton>
    );
}

const ReportForm = ({ onSubmit, onCancel }: ReportFormProps) => {
    const form = useForm<ReportFormValues>({
        resolver: zodResolver(reportSchema),
        defaultValues: {
            reason: '',
            details: ''
        }
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                <FormField
                    control={form.control}
                    name='reason'
                    render={({ field }) => (
                        <BaseFormLayout label='Reason'>
                            <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className='flex flex-col gap-2'>
                                {['Inappropriate Content', 'Spam', 'Harassment', 'False Information', 'Other'].map(
                                    (reason) => (
                                        <label
                                            key={reason}
                                            className='hover:bg-accent flex items-center space-x-2 rounded-md border p-3'>
                                            <RadioGroupItem value={reason} id={`radio-${reason}`} />
                                            <span>{reason}</span>
                                        </label>
                                    )
                                )}
                            </RadioGroup>
                        </BaseFormLayout>
                    )}
                />

                <FormField
                    control={form.control}
                    name='details'
                    render={({ field }) => (
                        <BaseFormLayout label='Details'>
                            <Textarea
                                id='details'
                                {...field}
                                placeholder='Please provide more details about your report...'
                                className='min-h-32'
                            />
                        </BaseFormLayout>
                    )}
                />
                <div className='flex w-full justify-end gap-2 pt-2'>
                    <Button type='button' variant='outline' onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button type='submit'>Submit Report</Button>
                </div>
            </form>
        </Form>
    );
};

export default function ReportDialog({ onSubmitReport }: ReportDialogProps) {
    const [open, setOpen] = useState(false);

    const handleSubmit = (reportData: ReportFormValues) => {
        onSubmitReport(reportData);
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <ResponsiveDialog
            open={open}
            onOpenChange={setOpen}
            title='Report Content'
            hasVisibleTitle
            trigger={
                <div>
                    <ReportButton />
                </div>
            }>
            <ReportForm onSubmit={handleSubmit} onCancel={handleCancel} />
        </ResponsiveDialog>
    );
}
