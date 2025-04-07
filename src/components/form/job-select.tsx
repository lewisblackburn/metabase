'use client';

import * as React from 'react';

import { Job } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from '@/registry/new-york-v4/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/registry/new-york-v4/ui/popover';

import { Check, ChevronsUpDown } from 'lucide-react';

interface JobSelectFieldProps {
    value?: string;
    onChange?: (value: string) => void;
    onBlur?: () => void;
    disabled?: boolean;
    placeholder?: string;
    className?: string;
}

const JobSelectField = React.forwardRef<HTMLButtonElement, JobSelectFieldProps>(
    ({ value, onChange, onBlur, disabled, placeholder = 'Select a job...', className }, ref) => {
        const [open, setOpen] = React.useState(false);

        const [jobs, setJobs] = React.useState<Job[]>([]);

        React.useEffect(() => {
            const fetchJobs = async () => {
                const res = await fetch('/api/jobs');
                const result = await res.json();
                setJobs(result.data);
            };
            fetchJobs();
        }, []);

        const handleValueChange = (newValue: string) => {
            onChange?.(newValue);
            setOpen(false);
        };

        return (
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        ref={ref}
                        variant='outline'
                        role='combobox'
                        aria-expanded={open}
                        className={cn(
                            'w-full justify-between',
                            {
                                'text-muted-foreground': !value
                            },
                            className
                        )}
                        disabled={disabled}
                        onBlur={onBlur}
                        onClick={() => !disabled && setOpen(!open)}>
                        {value ? jobs.find((job) => job.id === value)?.name : placeholder}
                        <ChevronsUpDown className='ml-2 h-4 w-4 opacity-50' />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='popover-content-width-full p-0'>
                    <Command
                        filter={(value, search) => {
                            const job = jobs.find((job) => job.id === value);
                            if (!job) return 0;
                            const match = job.name.toLowerCase().includes(search.toLowerCase());

                            return match ? 1 : 0;
                        }}>
                        <CommandInput placeholder='Search jobs...' />
                        <CommandList>
                            <CommandEmpty>No job found.</CommandEmpty>
                            <CommandGroup>
                                {jobs.map((job) => (
                                    <CommandItem key={job.id} value={job.id} onSelect={() => handleValueChange(job.id)}>
                                        <span className='flex flex-col'>
                                            <span>{job.name}</span>
                                        </span>
                                        <Check
                                            className={cn('ml-auto', value === job.id ? 'opacity-100' : 'opacity-0')}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        );
    }
);
JobSelectField.displayName = 'JobSelectField';

export default JobSelectField;
