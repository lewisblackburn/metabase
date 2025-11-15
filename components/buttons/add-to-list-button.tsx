'use client'

import { CheckIcon, ChevronsUpDownIcon, PlusIcon } from 'lucide-react'
import { useId, useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const universities = [
    {
        value: 'harvard',
        label: 'Harvard University',
    },
    {
        value: 'cambridge',
        label: 'University of Cambridge',
    },
    {
        value: 'stanford',
        label: 'Stanford University',
    },
    {
        value: 'texas',
        label: 'University of Texas',
    },
]

export function AddToListButton() {
    const [open, setOpen] = useState<boolean>(false)
    const [selectedValues, setSelectedValues] = useState<string[]>([])

    const toggleSelection = (value: string) => {
        setSelectedValues(prev =>
            prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value],
        )
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    aria-label="Add to list"
                    size="sm"
                    className="text-xs max-w-40 bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px] h-auto min-h-8"
                >
                    {selectedValues.length > 0 ? (
                        <span>Added to {selectedValues.length} lists</span>
                    ) : (
                        <span className="text-muted-foreground">Add to list</span>
                    )}
                    <ChevronsUpDownIcon
                        size={16}
                        className="text-muted-foreground/80 shrink-0"
                        aria-hidden="true"
                    />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className="border-input w-[--radix-popper-anchor-width] p-0"
                align="start"
            >
                <Command>
                    <CommandInput placeholder="Find list..." />
                    <CommandList>
                        <CommandEmpty>No list found.</CommandEmpty>
                        <CommandGroup>
                            {universities.map(university => (
                                <CommandItem
                                    key={university.value}
                                    value={university.value}
                                    onSelect={() => toggleSelection(university.value)}
                                >
                                    <span className="truncate">{university.label}</span>
                                    {selectedValues.includes(university.value) && (
                                        <CheckIcon size={16} className="ml-auto" />
                                    )}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup>
                            <Button variant="ghost" className="w-full justify-start font-normal">
                                <PlusIcon
                                    size={16}
                                    className="-ms-2 opacity-60"
                                    aria-hidden="true"
                                />
                                New list
                            </Button>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
