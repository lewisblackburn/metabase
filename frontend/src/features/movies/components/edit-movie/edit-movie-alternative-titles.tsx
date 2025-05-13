'use client';

import { useState } from 'react';

import SortingArrows from '@/components/shared/sorting-arrows';
import { DataTable } from '@/components/ui/data-table';
import { useDeleteMovieAlternativeTitlesMutation, useGetMovieAlternativeTitlesQuery } from '@/generated/graphql';
import { useDebounce } from '@/hooks/use-debounce';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Input } from '@/registry/new-york-v4/ui/input';
import { useQueryClient } from '@tanstack/react-query';
import { ColumnDef, SortingState } from '@tanstack/react-table';

import AddAlternativeTitleDialog from './add-alternative-title-dialog';
import { Trash, X } from 'lucide-react';
import { toast } from 'sonner';

export default function EditMovieAlternativeTitles({ movieId }: { movieId: string }) {
    const queryClient = useQueryClient();
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedSearchQuery = useDebounce(searchQuery, 300);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});

    const { data, isLoading } = useGetMovieAlternativeTitlesQuery(
        {
            where: {
                _and: [
                    {
                        movie_id: {
                            _eq: movieId
                        }
                    },
                    debouncedSearchQuery
                        ? {
                              _or: [
                                  {
                                      alternative_title: {
                                          _ilike: `%${debouncedSearchQuery}%`
                                      }
                                  },
                                  {
                                      country: {
                                          _ilike: `%${debouncedSearchQuery}%`
                                      }
                                  },
                                  {
                                      type: {
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
            order_by:
                sorting.length > 0
                    ? sorting.map((sort) => ({
                          [sort.id]: sort.desc ? 'desc' : 'asc'
                      }))
                    : undefined
        },
        {
            queryKey: ['movie-alternative-titles', movieId, debouncedSearchQuery, pageIndex, pageSize, sorting]
        }
    );

    const alternativeTitles = data?.movie_alternative_titles ?? [];
    const totalRows = data?.movie_alternative_titles_aggregate?.aggregate?.count ?? 0;

    const { mutateAsync: deleteMovieAlternativeTitles } = useDeleteMovieAlternativeTitlesMutation({
        onSuccess: () => {
            toast.success('Alternative titles deleted successfully');
            queryClient.invalidateQueries({ queryKey: ['movie-alternative-titles', movieId] });
        },
        onError: (error: Error) => {
            toast.error(error.message);
        }
    });

    const columns: ColumnDef<(typeof alternativeTitles)[number]>[] = [
        {
            accessorKey: 'alternative_title',
            header: ({ column }) => (
                <button
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    className='inline-flex cursor-pointer items-center font-medium'>
                    Title
                    <SortingArrows column={column} />
                </button>
            )
        },
        {
            accessorKey: 'country',
            header: ({ column }) => (
                <button
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    className='inline-flex cursor-pointer items-center font-medium'>
                    Country
                    <SortingArrows column={column} />
                </button>
            ),
            cell: ({ row }) => {
                const countryCode = row.original.country;
                return countryCode ? new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode) : '';
            }
        },
        {
            accessorKey: 'type',
            header: ({ column }) => (
                <button
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    className='inline-flex cursor-pointer items-center font-medium'>
                    Type
                    <SortingArrows column={column} />
                </button>
            )
        }
    ];

    const handleDelete = async () => {
        const selectedIds = Object.keys(rowSelection);
        if (selectedIds.length === 0) return;

        await deleteMovieAlternativeTitles({
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
                    placeholder='Search by title, country, or type...'
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                    }}
                />
                {searchQuery && (
                    <Button variant='outline' size='sm' onClick={() => setSearchQuery('')}>
                        <X className='size-4' />
                        Reset
                    </Button>
                )}
                <AddAlternativeTitleDialog movieId={movieId} />

                {Object.keys(rowSelection).length > 0 && (
                    <Button variant='destructive' size='sm' onClick={handleDelete}>
                        <Trash className='size-4' />
                    </Button>
                )}
            </div>
            <div className='xs:max-w-full max-w-xs'>
                <DataTable
                    columns={columns}
                    data={alternativeTitles}
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
                />
            </div>
        </div>
    );
}
