import React from 'react';

import { LANGUAGES } from '@/constants/languages.constant';
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
import { ControllerRenderProps } from 'react-hook-form';

type LanguageSelectProps = {
    className?: string;
} & Partial<ControllerRenderProps>;

export default function LanguageSelect({ className, value, onChange, onBlur }: LanguageSelectProps) {
    const [open, setOpen] = React.useState(false);

    const handleValueChange = (newValue: string) => {
        onChange?.({
            target: { value: newValue },
            type: 'change'
        } as React.ChangeEvent<HTMLInputElement>);
        setOpen(false);
    };

    return (
        <div className={className}>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant='outline'
                        role='combobox'
                        aria-expanded={open}
                        className='w-full justify-between'
                        onBlur={onBlur}>
                        {value ? LANGUAGES.find((language) => language.code === value)?.label : 'Select a language...'}
                        <ChevronsUpDown className='ml-2 h-4 w-4 opacity-50' />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='popover-content-width-full p-0'>
                    <Command
                        filter={(value, search) => {
                            const language = LANGUAGES.find((lang) => lang.code === value);
                            if (!language) return 0;

                            const nativeMatch = language.label.toLowerCase().includes(search.toLowerCase());
                            const englishMatch = language.englishLabel.toLowerCase().includes(search.toLowerCase());

                            return nativeMatch || englishMatch ? 1 : 0;
                        }}>
                        <CommandInput placeholder='Search languages...' />
                        <CommandList>
                            <CommandEmpty>No language found.</CommandEmpty>
                            <CommandGroup>
                                {LANGUAGES.map((language) => (
                                    <CommandItem
                                        key={language.code}
                                        value={language.code}
                                        onSelect={() => handleValueChange(language.code)}>
                                        <span className='flex flex-col'>
                                            <span>{language.label}</span>
                                            <span className='text-muted-foreground text-xs'>
                                                {language.englishLabel}
                                            </span>
                                        </span>
                                        <Check
                                            className={cn(
                                                'ml-auto',
                                                value === language.code ? 'opacity-100' : 'opacity-0'
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
}
