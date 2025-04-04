'use client';

import * as React from 'react';

import { DataTable } from '@/components/ui/data-table';
import { useDebounce } from '@/hooks/use-debounce';
import { ExampleUser } from '@/lib/data';
import { Button } from '@/registry/new-york-v4/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/registry/new-york-v4/ui/dropdown-menu';
import { Input } from '@/registry/new-york-v4/ui/input';
import { ColumnDef, SortingState } from '@tanstack/react-table';

import { Eye, MoreHorizontal, Pencil } from 'lucide-react';

// shadcn/ui input component for search

export default function DemoPage() {
    // State for table controls
    const [data, setData] = React.useState<ExampleUser[]>([]);
    const [totalRows, setTotalRows] = React.useState(0);
    const [pageIndex, setPageIndex] = React.useState(0); // 0-based page index
    const [pageSize, setPageSize] = React.useState(5);
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [rowSelection, setRowSelection] = React.useState({});
    const [searchQuery, setSearchQuery] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    // Debounce the search query with a 500ms delay
    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    // Reset to first page when search query changes
    React.useEffect(() => {
        setPageIndex(0);
    }, [debouncedSearchQuery]);

    // Define columns for the DataTable
    const columns = React.useMemo<ColumnDef<ExampleUser, any>[]>(
        () => [
            {
                accessorKey: 'id',
                header: 'ID',
                cell: (info) => <span>{info.getValue<string>()}</span>
            },
            {
                accessorKey: 'name',
                header: ({ column }) => (
                    <button
                        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                        className='cursor-pointer font-medium'>
                        Name
                        <span className='ml-1 text-xs'>
                            {column.getIsSorted() === 'asc' ? '▲' : column.getIsSorted() === 'desc' ? '▼' : '▽'}
                        </span>
                    </button>
                ),
                cell: (info) => info.getValue<string>()
            },
            {
                accessorKey: 'email',
                header: 'Email',
                cell: (info) => info.getValue<string>()
            },
            {
                accessorKey: 'role',
                header: 'Role',
                cell: (info) => info.getValue<string>()
            }
        ],
        []
    );

    React.useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const sort = sorting[0];
            const sortBy = sort?.id ?? '';
            const sortDesc = sort?.desc ?? false;
            const query = debouncedSearchQuery;
            try {
                const params = new URLSearchParams({
                    page: String(pageIndex + 1), // convert to 1-based page
                    size: String(pageSize),
                    sortBy: sortBy,
                    sortDesc: String(sortDesc),
                    query: query
                });
                const res = await fetch(`/api/data?${params.toString()}`);
                const result = await res.json();
                setData(result.data);
                setTotalRows(result.total);
                // Log the current visible data in the console (for demo purposes)
                console.log('Visible data:', result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [pageIndex, pageSize, sorting, debouncedSearchQuery]);

    const renderRowActions = React.useCallback((user: ExampleUser) => {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className='h-8 w-8 p-0'>
                        <span className='sr-only'>Open menu</span>
                        <MoreHorizontal className='h-4 w-4' />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <DropdownMenuItem onClick={() => console.log(`Viewing ${user.name}`)}>
                        <Eye className='mr-2 h-4 w-4' />
                        View
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => console.log(`Editing ${user.name}`)}>
                        <Pencil className='mr-2 h-4 w-4' />
                        Edit
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }, []);

    return (
        <div className='container mx-auto p-6'>
            <h1 className='mb-4 text-xl font-bold'>Users Table</h1>
            <div className='mb-4'>
                <Input
                    placeholder='Search by name, email, or role...'
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        // No need to reset page index here as it will reset when debouncedSearchQuery changes
                    }}
                    className='max-w-xs'
                    disabled={isLoading}
                />
            </div>
            <DataTable
                columns={columns}
                data={data}
                pageIndex={pageIndex}
                pageSize={pageSize}
                totalRows={totalRows}
                sorting={sorting}
                rowSelection={rowSelection}
                isLoading={isLoading}
                onSortingChange={setSorting}
                onPageChange={setPageIndex}
                onPageSizeChange={(newSize) => {
                    // Reset to first page whenever page size changes to avoid out-of-range page
                    setPageIndex(0);
                    setPageSize(newSize);
                }}
                onRowSelectionChange={setRowSelection}
                onRowOrderChange={(newData) => {
                    // Update data order locally when rows are reordered
                    setData(newData);
                    console.log(
                        'New row order:',
                        newData.map((item) => item.id)
                    );
                }}
                renderRowActions={renderRowActions}
                selectionMode='multiple'
            />
        </div>
    );
}
