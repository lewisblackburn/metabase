import React from 'react';

import { languageList } from '@/constants/languages';
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

type LanguageSelectProps = {
    className?: string;
    value?: string;
    onValueChange?: (value: string) => void;
};

export default function LanguageSelect({ className, value: controlledValue, onValueChange }: LanguageSelectProps) {
    const [open, setOpen] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState(controlledValue || '');

    const handleValueChange = (newValue: string) => {
        const finalValue = newValue === internalValue ? '' : newValue;
        if (controlledValue === undefined) {
            setInternalValue(finalValue);
        }
        onValueChange?.(finalValue);
    };

    const currentValue = controlledValue !== undefined ? controlledValue : internalValue;

    return (
        <div className={className}>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant='outline' role='combobox' aria-expanded={open} className='w-full justify-between'>
                        {currentValue
                            ? languageList.find((language) => language.iso2 === currentValue)?.label
                            : 'Select a language...'}
                        <ChevronsUpDown className='ml-2 h-4 w-4 opacity-50' />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='w-[200px] p-0'>
                    <Command
                        filter={(value, search) => {
                            const language = languageList.find((lang) => lang.iso2 === value);
                            if (!language) return 0;

                            const nativeMatch = language.label.toLowerCase().includes(search.toLowerCase());
                            const englishMatch = language.englishLabel.toLowerCase().includes(search.toLowerCase());

                            return nativeMatch || englishMatch ? 1 : 0;
                        }}>
                        <CommandInput placeholder='Search languages...' />
                        <CommandList>
                            <CommandEmpty>No language found.</CommandEmpty>
                            <CommandGroup>
                                {languageList.map((language) => (
                                    <CommandItem
                                        key={language.iso2}
                                        value={language.iso2}
                                        onSelect={() => {
                                            handleValueChange(language.iso2);
                                            setOpen(false);
                                        }}>
                                        <span className='flex flex-col'>
                                            <span>{language.label}</span>
                                            <span className='text-muted-foreground text-xs'>
                                                {language.englishLabel}
                                            </span>
                                        </span>
                                        <Check
                                            className={cn(
                                                'ml-auto',
                                                currentValue === language.iso2 ? 'opacity-100' : 'opacity-0'
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
