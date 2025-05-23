'use client';

import { useState } from 'react';

import SortingArrows from '@/components/shared/sorting-arrows';
import { DataTable } from '@/components/ui/data-table';
import { Order_By, useDeleteMovieSoundtrackMutation, useGetMovieSoundtrackQuery } from '@/generated/graphql';
import { useDebounce } from '@/hooks/use-debounce';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Input } from '@/registry/new-york-v4/ui/input';
import { useQueryClient } from '@tanstack/react-query';
import { ColumnDef, SortingState } from '@tanstack/react-table';

import AddMovieSoundtrackSongDialog from './add-movie-soundtrack-song-dialog';
import EditMovieSoundtrackSongDialog from './edit-movie-soundtrack-song';
import { Pencil, Trash, X } from 'lucide-react';
import { toast } from 'sonner';

interface EditMovieSoundtrackProps {
    movieId: string;
}

export default function EditMovieSoundtrack({ movieId }: EditMovieSoundtrackProps) {
    const queryClient = useQueryClient();
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedSearchQuery = useDebounce(searchQuery, 300);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});

    const { data, isLoading } = useGetMovieSoundtrackQuery(
        {
            where: {
                movie_id: {
                    _eq: movieId
                },
                ...(debouncedSearchQuery && {
                    _or: [
                        { song: { name: { _ilike: `%${debouncedSearchQuery}%` } } },
                        { song: { credits: { person: { name: { _ilike: `%${debouncedSearchQuery}%` } } } } }
                    ]
                })
            },
            limit: pageSize,
            offset: pageIndex * pageSize,
            order_by: {
                timestamps: Order_By.Asc
            }
        },
        {
            queryKey: ['movie-soundtrack', movieId, debouncedSearchQuery, pageIndex, pageSize, sorting],
            enabled: !!movieId
        }
    );

    const { mutateAsync: deleteSoundtrack } = useDeleteMovieSoundtrackMutation();

    const soundtrack = data?.movie_soundtrack || [];
    const totalRows = data?.movie_soundtrack_aggregate?.aggregate?.count || 0;

    const columns: ColumnDef<(typeof soundtrack)[number]>[] = [
        {
            accessorKey: 'song',
            header: 'Track',
            cell: ({ row }) => (
                <div>
                    <p className='text-primary font-semibold'>{row.original.song.name}</p>
                    <p className='text-muted-foreground'>
                        {row.original.song.credits.map((credit) => credit.person.name).join(', ')}
                    </p>
                </div>
            )
        },
        {
            accessorKey: 'timestamps',
            header: 'Timestamps'
        },
        {
            accessorKey: 'description',
            header: 'Description'
        }
    ];

    const handleDelete = async () => {
        const selectedIds = Object.keys(rowSelection);
        if (selectedIds.length === 0) return;

        try {
            await deleteSoundtrack({
                where: {
                    id: {
                        _in: selectedIds
                    }
                }
            });
            setRowSelection({});
            toast.success('Soundtrack entries deleted successfully');
            queryClient.invalidateQueries({ queryKey: ['movie-soundtrack', movieId] });
        } catch (error) {
            toast.error('Failed to delete soundtrack entries');
        }
    };

    const handlePageSizeChange = (newSize: number) => {
        setPageIndex(0);
        setPageSize(newSize);
    };

    const renderRowActions = (row: (typeof soundtrack)[number]) => {
        const soundtrack = {
            id: row.id,
            song: {
                id: row.song.id,
                name: row.song.name
            },
            timestamps: row.timestamps || [],
            description: row.description || null
        };

        return <EditMovieSoundtrackSongDialog movieId={movieId} soundtrack={soundtrack} />;
    };

    return (
        <div className='overflow-x-auto'>
            <div className='mb-4 flex w-full items-center justify-between gap-2'>
                <Input
                    placeholder='Search by track or artist...'
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

                {Object.keys(rowSelection).length > 0 && (
                    <Button variant='destructive' size='sm' onClick={handleDelete}>
                        <Trash className='size-4' />
                    </Button>
                )}
                <AddMovieSoundtrackSongDialog movieId={movieId} />
            </div>
            <div className='xs:max-w-full max-w-xs'>
                <DataTable
                    columns={columns}
                    data={soundtrack}
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
                    renderRowActions={renderRowActions}
                />
            </div>
        </div>
    );
}
