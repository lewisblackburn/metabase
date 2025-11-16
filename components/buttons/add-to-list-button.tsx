'use client'

import { ChevronsUpDownIcon, PlusIcon } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

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
import { ListsQuery, MovieQuery } from '@/generated/graphql'
import { insertListItem } from '@/lib/actions/lists/insert-list-item'
import { MediaType } from '@/lib/enums'

export function AddToListButton({
    movie,
    lists = [],
}: {
    movie: MovieQuery['movies_by_pk']
    lists: ListsQuery['lists']
}) {
    const [open, setOpen] = useState<boolean>(false)

    const addToList = async (listId: string) => {
        if (!movie) return

        await insertListItem({
            object: {
                media_id: movie.id,
                media_type: MediaType.MOVIE,
                title: movie.title,
                image: movie.poster_id,
                list_id: listId,
            },
            on_conflict: {
                constraint: 'list_items_pkey',
                update_columns: [],
            },
        })
            .then(() => {
                toast.success('Added to list')
            })
            .catch(error => {
                toast.error('Failed to add to list', {
                    description: error.message,
                })
            })
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
                    <span className="text-muted-foreground">Add to list</span>
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
                            {lists.map(list => (
                                <CommandItem
                                    key={list.id}
                                    value={list.title}
                                    onSelect={() => addToList(list.id)}
                                >
                                    <span className="truncate">{list.title}</span>
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
