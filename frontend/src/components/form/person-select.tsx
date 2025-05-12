'use client';

import { useMemo, useState } from 'react';

import { MAX_LIMIT } from '@/constants/api.constant';
import {
    InputMaybe,
    People_Bool_Exp,
    People_Constraint,
    useGetPeopleQuery,
    useInsertPersonMutation
} from '@/generated/graphql';
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

import ImageWithSkeleton from '../shared/image-with-skeleton';
import { CheckIcon, ChevronDownIcon, Loader2 } from 'lucide-react';

interface PersonSelectProps extends SelectProps {
    onValueChange?: (value: string) => void;
}

export default function PersonSelect({ onValueChange, ...props }: PersonSelectProps) {
    const [open, setOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(props.defaultValue);
    const [searchInput, setSearchInput] = useState('');
    const debouncedSearchQuery = useDebounce(searchInput, 500);

    const where: InputMaybe<People_Bool_Exp> = useMemo(() => {
        if (props.defaultValue) {
            return { id: { _eq: props.defaultValue } };
        }

        return {
            name: { _ilike: `%${debouncedSearchQuery}%` }
        };
    }, [props.defaultValue, debouncedSearchQuery]);

    const { data, isLoading, refetch } = useGetPeopleQuery({
        where,
        limit: 5
    });

    const insertPerson = useInsertPersonMutation();
    const people = data?.people || [];
    const selectedPerson = people.find((p) => p.id === selectedId);

    const handleSelect = (id: string) => {
        const finalId = id === selectedId ? '' : id;
        setSelectedId(finalId);
        onValueChange?.(finalId);
        setOpen(false);
    };

    const handleCreate = async () => {
        const name = searchInput.trim();
        if (!name) return;

        await insertPerson.mutateAsync(
            {
                object: { name },
                on_conflict: {
                    constraint: People_Constraint.PeoplePkey,
                    update_columns: []
                }
            },
            {
                onSuccess: async (data) => {
                    const newId = data?.insert_people_one?.id;
                    if (newId) {
                        await refetch();
                        setSelectedId(newId);
                        onValueChange?.(newId);
                        setOpen(false);
                    }
                }
            }
        );
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
                            <Skeleton className='h-6 w-6 rounded-md' />
                            <Skeleton className='h-4 w-24' />
                        </div>
                    ) : selectedPerson ? (
                        <div className='flex items-center gap-2'>
                            <div className='relative aspect-square size-6'>
                                <ImageWithSkeleton
                                    src={selectedPerson.headshot}
                                    alt={selectedPerson.name}
                                    fill
                                    wrapperClassName='absolute inset-0'
                                    imageClassName='object-cover object-center border-2 border-white rounded-md'
                                />
                            </div>
                            <span className='truncate'>{selectedPerson.name}</span>
                        </div>
                    ) : (
                        <span>Select a person</span>
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
                    <CommandInput placeholder='Search person...' value={searchInput} onValueChange={setSearchInput} />
                    <CommandList>
                        {isLoading ? (
                            <div className='space-y-3 p-4'>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <div key={i} className='flex items-center gap-2'>
                                        <Skeleton className='h-6 w-6 rounded-md' />
                                        <Skeleton className='h-4 w-full' />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <>
                                <CommandEmpty className='p-2'>
                                    {searchInput.trim() !== '' && (
                                        <Button
                                            variant='outline'
                                            className='w-full'
                                            onClick={handleCreate}
                                            disabled={insertPerson.isPending}>
                                            {insertPerson.isPending ? (
                                                <span className='flex items-center gap-2'>
                                                    <Loader2 size={16} className='animate-spin' />
                                                    Creating...
                                                </span>
                                            ) : (
                                                <>Create “{searchInput.trim()}”</>
                                            )}
                                        </Button>
                                    )}
                                </CommandEmpty>
                                <CommandGroup>
                                    {people.map((person) => (
                                        <CommandItem
                                            key={person.id}
                                            value={person.id}
                                            onSelect={handleSelect}
                                            className='flex items-center gap-2'>
                                            <div className='relative aspect-square size-6'>
                                                <ImageWithSkeleton
                                                    src={person.headshot}
                                                    alt={person.name}
                                                    fill
                                                    wrapperClassName='absolute inset-0'
                                                    imageClassName='object-cover object-center border-2 border-white rounded-md'
                                                />
                                            </div>
                                            <span className='truncate'>{person.name}</span>
                                            {selectedId === person.id && <CheckIcon size={16} className='ml-auto' />}
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
