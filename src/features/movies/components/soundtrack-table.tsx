'use client';

import { useMemo, useState } from 'react';

import Link from 'next/link';

import SpotifyIcon from '@/components/icons/spotify.icon';
import { DataTable } from '@/components/ui/data-table';
import { MOVIE_DATA } from '@/constants/fakedb.constant';
import { ColumnDef, SortingState } from '@tanstack/react-table';

import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';

type SoundtrackData = (typeof MOVIE_DATA.soundtrack)[0];

export default function SoundtrackTable() {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    // Sort data based on sorting state
    const sortedData = useMemo(() => {
        if (sorting.length === 0) return MOVIE_DATA.soundtrack;

        return [...MOVIE_DATA.soundtrack].sort((a, b) => {
            for (const sort of sorting) {
                const column = sort.id;
                const direction = sort.desc ? -1 : 1;

                if (column === 'title') {
                    return direction * a.title.localeCompare(b.title);
                } else if (column === 'description') {
                    return direction * a.description.localeCompare(b.description);
                } else if (column === 'timestamps') {
                    // Compare first timestamp for sorting
                    const aTimestamp = a.timestamps[0] || '';
                    const bTimestamp = b.timestamps[0] || '';

                    return direction * aTimestamp.localeCompare(bTimestamp);
                }
            }

            return 0;
        });
    }, [sorting]);

    // Get the paginated data after sorting
    const paginatedData = useMemo(() => {
        const start = pageIndex * pageSize;

        return sortedData.slice(start, start + pageSize);
    }, [sortedData, pageIndex, pageSize]);

    const columns: ColumnDef<SoundtrackData>[] = [
        {
            accessorKey: 'title',
            header: ({ column }) => (
                <button
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    className='inline-flex cursor-pointer items-center font-medium'>
                    Track
                    <span className='ml-1'>
                        {column.getIsSorted() === 'asc' ? (
                            <ArrowUp className='h-4 w-4' />
                        ) : column.getIsSorted() === 'desc' ? (
                            <ArrowDown className='h-4 w-4' />
                        ) : (
                            <ArrowUpDown className='h-4 w-4 opacity-50' />
                        )}
                    </span>
                </button>
            ),
            cell: ({ row }) => (
                <div>
                    <p className='text-primary font-semibold'>{row.original.title}</p>
                    <p className='text-muted-foreground'>{row.original.artists}</p>
                </div>
            )
        },
        {
            accessorKey: 'description',
            header: ({ column }) => (
                <button
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    className='inline-flex cursor-pointer items-center font-medium'>
                    Description
                    <span className='ml-1'>
                        {column.getIsSorted() === 'asc' ? (
                            <ArrowUp className='h-4 w-4' />
                        ) : column.getIsSorted() === 'desc' ? (
                            <ArrowDown className='h-4 w-4' />
                        ) : (
                            <ArrowUpDown className='h-4 w-4 opacity-50' />
                        )}
                    </span>
                </button>
            )
        },
        {
            accessorKey: 'timestamps',
            header: ({ column }) => (
                <button
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    className='inline-flex cursor-pointer items-center font-medium'>
                    Timestamp
                    <span className='ml-1'>
                        {column.getIsSorted() === 'asc' ? (
                            <ArrowUp className='h-4 w-4' />
                        ) : column.getIsSorted() === 'desc' ? (
                            <ArrowDown className='h-4 w-4' />
                        ) : (
                            <ArrowUpDown className='h-4 w-4 opacity-50' />
                        )}
                    </span>
                </button>
            ),
            cell: ({ row }) => row.original.timestamps.join(', ')
        },
        {
            id: 'spotify',
            header: 'Listen on',
            cell: ({ row }) => (
                <Link href={row.original.spotifyId}>
                    <SpotifyIcon className='!size-4' />
                </Link>
            )
        }
    ];

    return (
        <DataTable
            columns={columns}
            data={paginatedData}
            pageIndex={pageIndex}
            pageSize={pageSize}
            totalRows={MOVIE_DATA.soundtrack.length}
            sorting={sorting}
            onSortingChange={setSorting}
            onPageChange={setPageIndex}
            onPageSizeChange={(newSize) => {
                setPageIndex(0);
                setPageSize(newSize);
            }}
        />
    );
}
