'use client';

import * as React from 'react';

import { Role } from '@/lib/data';
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

interface RoleSelectFieldProps {
    value?: string;
    onChange?: (value: string) => void;
    onBlur?: () => void;
    disabled?: boolean;
    placeholder?: string;
    className?: string;
}

const RoleSelectField = React.forwardRef<HTMLButtonElement, RoleSelectFieldProps>(
    ({ value, onChange, onBlur, disabled, placeholder = 'Select a role...', className }, ref) => {
        const [open, setOpen] = React.useState(false);

        const [roles, setRoles] = React.useState<Role[]>([]);

        React.useEffect(() => {
            const fetchRoles = async () => {
                const res = await fetch('/api/roles');
                const result = await res.json();
                setRoles(result.data);
            };
            fetchRoles();
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
                        {value ? roles.find((role) => role.id === value)?.name : placeholder}
                        <ChevronsUpDown className='ml-2 h-4 w-4 opacity-50' />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='popover-content-width-full p-0'>
                    <Command
                        filter={(value, search) => {
                            const role = roles.find((role) => role.id === value);
                            if (!role) return 0;
                            const match = role.name.toLowerCase().includes(search.toLowerCase());

                            return match ? 1 : 0;
                        }}>
                        <CommandInput placeholder='Search jobs...' />
                        <CommandList>
                            <CommandEmpty>No job found.</CommandEmpty>
                            <CommandGroup>
                                {roles.map((role) => (
                                    <CommandItem
                                        key={role.id}
                                        value={role.id}
                                        onSelect={() => handleValueChange(role.id)}>
                                        <span className='flex flex-col'>
                                            <span>{role.name}</span>
                                        </span>
                                        <Check
                                            className={cn('ml-auto', value === role.id ? 'opacity-100' : 'opacity-0')}
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
RoleSelectField.displayName = 'RoleSelectField';

export default RoleSelectField;
