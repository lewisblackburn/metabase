'use client'

import { ChevronsUpDownIcon, SearchIcon } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { ListsQuery, MovieQuery } from '@/generated/graphql'
import { insertListItem } from '@/lib/actions/lists/insert-list-item'

import {
    Combobox,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
    ComboboxPopup,
    ComboboxTrigger,
    ComboboxValue,
} from '../ui/combobox'

export function AddToListButton({
    movie,
    lists = [],
}: {
    movie: MovieQuery['movies_by_pk']
    lists: ListsQuery['lists']
}) {
    const addToList = async (listId: string) => {
        if (!movie) return

        await insertListItem({
            object: {
                media_id: movie.id,
                media_type: 'MOVIE',
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
        <Combobox items={lists}>
            <ComboboxTrigger
                render={
                    <Button
                        className="w-fit min-w-60 justify-between font-normal"
                        variant="outline"
                    />
                }
            >
                <ComboboxValue>
                    {list =>
                        list?.title ?? <span className="text-muted-foreground">Select list</span>
                    }
                </ComboboxValue>
                <ChevronsUpDownIcon className="-me-1!" />
            </ComboboxTrigger>
            <ComboboxPopup aria-label="Select country">
                <div className="border-b p-2">
                    <ComboboxInput
                        className="rounded-md before:rounded-[calc(var(--radius-md)-1px)]"
                        placeholder="e.g. Marvel Films"
                        showTrigger={false}
                        startAddon={<SearchIcon />}
                    />
                </div>
                <ComboboxEmpty>No list found.</ComboboxEmpty>
                <ComboboxList>
                    {(list: ListsQuery['lists'][0]) => (
                        <ComboboxItem
                            key={list.id}
                            value={list.id}
                            onClick={() => addToList(list.id)}
                        >
                            {list.title}
                        </ComboboxItem>
                    )}
                </ComboboxList>
            </ComboboxPopup>
        </Combobox>
    )
}
