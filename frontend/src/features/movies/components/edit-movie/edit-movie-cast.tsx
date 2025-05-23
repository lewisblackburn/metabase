'use client';

import { useState } from 'react';

import SmallAvatar from '@/components/shared/small-avatar';
import SortingArrows from '@/components/shared/sorting-arrows';
import { DataTable } from '@/components/ui/data-table';
import {
    Credit_Types_Enum,
    Order_By,
    useDeleteCreditsMutation,
    useGetCreditsQuery,
    useUpdateCreditsMutation
} from '@/generated/graphql';
import { useDebounce } from '@/hooks/use-debounce';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Input } from '@/registry/new-york-v4/ui/input';
import { useQueryClient } from '@tanstack/react-query';
import { ColumnDef, SortingState } from '@tanstack/react-table';

import AddCastMemberDialog from './add-cast-member-dialog';
import { Trash, X } from 'lucide-react';
import { toast } from 'sonner';

export default function EditMovieCast({ movieId }: { movieId: string }) {
    const queryClient = useQueryClient();
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedSearchQuery = useDebounce(searchQuery, 300);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});

    const { data, isLoading } = useGetCreditsQuery(
        {
            where: {
                _and: [
                    {
                        object_id: {
                            _eq: movieId
                        }
                    },
                    {
                        credit_type: {
                            _eq: Credit_Types_Enum.Cast
                        }
                    },
                    debouncedSearchQuery
                        ? {
                              _or: [
                                  {
                                      person: {
                                          name: {
                                              _ilike: `%${debouncedSearchQuery}%`
                                          }
                                      }
                                  },
                                  {
                                      character: {
                                          _ilike: `%${debouncedSearchQuery}%`
                                      }
                                  }
                              ]
                          }
                        : {}
                ]
            },
            limit: pageSize,
            offset: pageIndex * pageSize,
            order_by: [
                {
                    order: Order_By.Asc
                }
            ]
        },
        {
            queryKey: ['movie-cast', movieId, debouncedSearchQuery, pageIndex, pageSize, sorting]
        }
    );

    const castMembers = data?.credits ?? [];
    const totalRows = data?.credits_aggregate?.aggregate?.count ?? 0;

    const { mutateAsync: deleteMovieCredits } = useDeleteCreditsMutation({
        onSuccess: () => {
            toast.success('Cast members deleted successfully');
            queryClient.invalidateQueries({ queryKey: ['movie-cast', movieId] });
            queryClient.invalidateQueries({ queryKey: ['movie-credits', movieId] });
        },
        onError: (error: Error) => {
            toast.error(error.message);
        }
    });

    const { mutateAsync: updateCredits } = useUpdateCreditsMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['movie-cast', movieId] });
            queryClient.invalidateQueries({ queryKey: ['movie-credits', movieId] });
        },
        onError: (error: Error) => {
            toast.error(error.message);
        }
    });

    const handleRowOrderChange = async (newData: typeof castMembers) => {
        const movedItem = newData.find((item, index) => item.id !== castMembers[index]?.id);
        if (!movedItem) return;

        const movedIndex = newData.findIndex((item) => item.id === movedItem.id);
        const prevItem = newData[movedIndex - 1];
        const nextItem = newData[movedIndex + 1];

        let newOrder: number;
        if (!prevItem) {
            // NOTE: If moved to the start, place it before the next item
            newOrder = nextItem.order - 1;
        } else if (!nextItem) {
            // NOTE: If moved to the end, place it after the previous item
            newOrder = prevItem.order + 1;
        } else {
            // NOTE: Place it between the previous and next items
            newOrder = (prevItem.order + nextItem.order) / 2;
        }

        await updateCredits({
            where: {
                id: {
                    _eq: movedItem.id
                }
            },
            _set: {
                order: newOrder
            }
        });
    };

    const columns: ColumnDef<(typeof castMembers)[number]>[] = [
        {
            accessorKey: 'person',
            header: 'Actor',
            cell: ({ row }) => {
                const person = row.original.person;
                return (
                    <div className='flex items-center gap-2'>
                        <SmallAvatar image={person.headshot} alt={person.name} />
                        <span>{person.name}</span>
                    </div>
                );
            }
        },
        {
            accessorKey: 'character',
            header: 'Character'
        }
    ];

    const handleDelete = async () => {
        const selectedIds = Object.keys(rowSelection);
        if (selectedIds.length === 0) return;

        await deleteMovieCredits({
            where: {
                id: {
                    _in: selectedIds
                }
            }
        });
        setRowSelection({});
    };

    const handlePageSizeChange = (newSize: number) => {
        setPageIndex(0);
        setPageSize(newSize);
    };

    return (
        <div className='overflow-x-auto'>
            <div className='mb-4 flex w-full items-center justify-between gap-2'>
                <Input
                    placeholder='Search by actor or character...'
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setPageIndex(0);
                    }}
                />
                {searchQuery && (
                    <Button variant='outline' size='sm' onClick={() => setSearchQuery('')}>
                        <X className='size-4' />
                        Reset
                    </Button>
                )}
                <AddCastMemberDialog movieId={movieId} />

                {Object.keys(rowSelection).length > 0 && (
                    <Button variant='destructive' size='sm' onClick={handleDelete}>
                        <Trash className='size-4' />
                    </Button>
                )}
            </div>
            <div className='xs:max-w-full max-w-xs'>
                <DataTable
                    columns={columns}
                    data={castMembers}
                    pageIndex={pageIndex}
                    pageSize={pageSize}
                    totalRows={totalRows}
                    sorting={sorting}
                    rowSelection={rowSelection}
                    isLoading={isLoading}
                    onSortingChange={setSorting}
                    onPageChange={setPageIndex}
                    onPageSizeChange={handlePageSizeChange}
                    onRowSelectionChange={setRowSelection}
                    onRowOrderChange={handleRowOrderChange}
                />
            </div>
        </div>
    );
}
