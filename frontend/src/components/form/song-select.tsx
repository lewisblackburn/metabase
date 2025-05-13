'use client';

import { useState } from 'react';

import { useGetSongsQuery } from '@/generated/graphql';
import { useDebounce } from '@/hooks/use-debounce';
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
import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';
import { SelectProps } from '@radix-ui/react-select';

import { CheckIcon, ChevronDownIcon, Loader2 } from 'lucide-react';

interface SongSelectProps extends SelectProps {
    onValueChange?: (value: string) => void;
}

export default function SongSelect({ onValueChange, ...props }: SongSelectProps) {
    const [open, setOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(props.defaultValue);
    const [searchInput, setSearchInput] = useState('');
    const debouncedSearchQuery = useDebounce(searchInput, 500);

    const { data, isLoading } = useGetSongsQuery({
        where: {
            name: { _ilike: `%${debouncedSearchQuery}%` }
        },
        limit: 5
    });

    const songs = data?.songs || [];
    const selectedSong = songs.find((s) => s.id === selectedId);

    const handleSelect = (id: string) => {
        const finalId = id === selectedId ? '' : id;
        setSelectedId(finalId);
        onValueChange?.(finalId);
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen} {...props}>
            <PopoverTrigger asChild>
                <Button
                    variant='outline'
                    role='combobox'
                    aria-expanded={open}
                    disabled={isLoading}
                    className={cn('flex w-full items-center justify-between', {
                        'text-muted-foreground': !selectedId
                    })}>
                    {isLoading ? (
                        <div className='flex items-center gap-2'>
                            <Skeleton className='h-4 w-24' />
                        </div>
                    ) : selectedSong ? (
                        <div className='flex items-center gap-2'>
                            <span className='truncate'>{selectedSong.name}</span>
                        </div>
                    ) : (
                        <span>Select a song</span>
                    )}

                    {isLoading ? (
                        <Loader2 size={16} className='text-muted-foreground/80 ml-2 shrink-0 animate-spin' />
                    ) : (
                        <ChevronDownIcon size={16} className='text-muted-foreground/80 ml-2 shrink-0' />
                    )}
                </Button>
            </PopoverTrigger>

            <PopoverContent className='popover-content-width-full p-0' align='start'>
                <Command shouldFilter={false}>
                    <CommandInput placeholder='Search songs...' value={searchInput} onValueChange={setSearchInput} />
                    <CommandList>
                        {isLoading ? (
                            <div className='space-y-3 p-4'>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <div key={i} className='flex items-center gap-2'>
                                        <Skeleton className='h-4 w-full' />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <>
                                <CommandEmpty>No songs found</CommandEmpty>
                                <CommandGroup>
                                    {songs.map((song) => (
                                        <CommandItem
                                            key={song.id}
                                            value={song.id}
                                            onSelect={handleSelect}
                                            className='flex items-center gap-2'>
                                            <span className='truncate'>{song.name}</span>
                                            {selectedId === song.id && <CheckIcon size={16} className='ml-auto' />}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </>
                        )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
