'use client';

import { useMemo, useState } from 'react';

import { DataTable } from '@/components/ui/data-table';
import { AwardType } from '@/types/award.type';
import { ColumnDef, SortingState } from '@tanstack/react-table';

import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';

export default function AwardTable({ awards }: { awards: AwardType[] }) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    // Sort data based on sorting state
    const sortedData = useMemo(() => {
        if (sorting.length === 0) return awards;

        return [...awards].sort((a, b) => {
            for (const sort of sorting) {
                const column = sort.id;
                const direction = sort.desc ? -1 : 1;

                if (column === 'title') {
                    return direction * a.title.localeCompare(b.title);
                } else if (column === 'award') {
                    return direction * a.award.localeCompare(b.award);
                } else if (column === 'year') {
                    return direction * (a.year - b.year);
                } else if (column === 'event') {
                    return direction * a.event.localeCompare(b.event);
                } else if (column === 'type') {
                    return direction * a.type.name.localeCompare(b.type.name);
                }
            }

            return 0;
        });
    }, [sorting, awards]);

    // Get the paginated data after sorting
    const paginatedData = useMemo(() => {
        const start = pageIndex * pageSize;

        return sortedData.slice(start, start + pageSize);
    }, [sortedData, pageIndex, pageSize]);

    const columns: ColumnDef<AwardType>[] = [
        {
            accessorKey: 'title',
            header: ({ column }) => (
                <button
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    className='inline-flex cursor-pointer items-center font-medium'>
                    Title
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
            accessorKey: 'award',
            header: ({ column }) => (
                <button
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    className='inline-flex cursor-pointer items-center font-medium'>
                    Award
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
            accessorKey: 'year',
            header: ({ column }) => (
                <button
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    className='inline-flex cursor-pointer items-center font-medium'>
                    Year
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
            accessorKey: 'event',
            header: ({ column }) => (
                <button
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    className='inline-flex cursor-pointer items-center font-medium'>
                    Event
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
            accessorKey: 'type',
            header: ({ column }) => (
                <button
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                    className='inline-flex cursor-pointer items-center font-medium'>
                    Type
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
            cell: ({ row }) => row.original.type.name
        }
    ];

    return (
        <DataTable
            columns={columns}
            data={paginatedData}
            pageIndex={pageIndex}
            pageSize={pageSize}
            totalRows={awards.length}
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
