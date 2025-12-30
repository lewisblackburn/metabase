'use client'

import { useQueryClient } from '@tanstack/react-query'
import { ChevronsUpDownIcon, SearchIcon } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
    List_Items_Constraint,
    ListsQuery,
    Media_Types_Enum,
    MovieQuery,
    useInsertListItemMutation,
    useListsQuery,
} from '@/generated/graphql'
import { CACHE_TAGS, CACHE_TIMES } from '@/lib/utils/cache'

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

export function AddToListButton({ movie }: { movie: MovieQuery['movies_by_pk'] }) {
    const queryClient = useQueryClient()

    const { data, isLoading } = useListsQuery({ where: {} }, { staleTime: CACHE_TIMES.USER_LISTS })

    const lists = data?.lists ?? []

    const { mutateAsync: insertListItem, isPending } = useInsertListItemMutation({
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({ queryKey: [CACHE_TAGS.MOVIE, { id: movie?.id }] })
            queryClient.invalidateQueries({ queryKey: [CACHE_TAGS.USERS_LISTS] })

            // Find the list name for the toast
            const listName = lists.find(l => l.id === variables.object.list_id)?.title
            toast.success(`Added to ${listName || 'list'}`)
        },
        onError: (error: Error) => {
            toast.error('Failed to add to list', {
                description: error.message,
            })
        },
    })

    const addToList = async (listId: string) => {
        if (!movie?.id) return

        await insertListItem({
            object: {
                media_id: movie.id,
                media_type: Media_Types_Enum.Movie,
                title: movie.title,
                image: movie.poster_id,
                list_id: listId,
            },
            on_conflict: {
                constraint: List_Items_Constraint.ListItemsPkey,
                update_columns: [], // Don't update anything if already exists
            },
        })
    }

    // TODO: create a loading file
    if (isLoading) {
        return (
            <Button
                className="w-fit min-w-60 justify-between font-normal"
                variant="outline"
                disabled
            >
                Loading lists...
            </Button>
        )
    }

    // TODO: create a no lists file
    if (lists.length === 0) {
        return (
            <Button
                className="w-fit min-w-60 justify-between font-normal"
                variant="outline"
                disabled
            >
                No lists available
            </Button>
        )
    }

    return (
        <Combobox items={lists}>
            <ComboboxTrigger
                render={
                    <Button
                        className="w-fit min-w-60 justify-between font-normal"
                        variant="outline"
                        disabled={isPending}
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
            <ComboboxPopup aria-label="Select list">
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
