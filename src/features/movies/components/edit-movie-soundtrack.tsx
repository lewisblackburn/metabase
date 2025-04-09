import React, { useState } from 'react';

import { AsyncSelect, AsyncSelectOption } from '@/components/form/async-select';
import BaseFormLayout from '@/components/form/base-form-layout';
import SortingArrows from '@/components/shared/sorting-arrows';
import { DataTable } from '@/components/ui/data-table';
import { useDebounce } from '@/hooks/use-debounce';
import { MovieSoundtrack, Song, allPeople } from '@/lib/data';
import { Button } from '@/registry/new-york-v4/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/registry/new-york-v4/ui/dialog';
import { Form, FormField, FormItem } from '@/registry/new-york-v4/ui/form';
import { Input } from '@/registry/new-york-v4/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { ColumnDef, SortingState } from '@tanstack/react-table';

import { AddSongToMovieSoundtrackSchema, addSongToMovieSoundtrackSchema } from '../schemas/movie-soundtrack.schema';
import { Plus, Trash, X } from 'lucide-react';
import { useForm } from 'react-hook-form';

export default function EditMovieSoundtrack() {
    const [data, setData] = useState<MovieSoundtrack['songs']>([]);
    const [totalRows, setTotalRows] = useState(0);
    const [pageIndex, setPageIndex] = useState(0); // 0-based page index
    const [pageSize, setPageSize] = useState(5);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [rowSelection, setRowSelection] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    // NOTE: Reset page index when search query changes
    React.useEffect(() => {
        setPageIndex(0);
    }, [debouncedSearchQuery]);

    const columns = React.useMemo<ColumnDef<Song, any>[]>(
        () => [
            {
                accessorKey: 'name',
                header: ({ column }) => (
                    <button
                        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                        className='inline-flex cursor-pointer items-center font-medium'>
                        Name
                        <SortingArrows column={column} />
                    </button>
                ),
                cell: (info) => info.getValue<string>()
            },
            {
                accessorKey: 'artist',
                header: ({ column }) => (
                    <button
                        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                        className='inline-flex cursor-pointer items-center font-medium'>
                        Artist
                        <SortingArrows column={column} />
                    </button>
                ),
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
                const res = await fetch(`/api/movie-soundtrack?${params.toString()}`);
                const result = await res.json();
                setData(result.data);
                setTotalRows(result.total);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [pageIndex, pageSize, sorting, debouncedSearchQuery]);

    const handleRowOrderChange = (newData: Song[]) => {
        setData(newData);
        console.log(
            'New row order:',
            newData.map((item) => item.id)
        );
    };

    const handlePageSizeChange = (newSize: number) => {
        // Reset to first page whenever page size changes to avoid out-of-range page
        setPageIndex(0);
        setPageSize(newSize);
    };

    const handleDelete = () => {
        alert('Deleting: ' + Object.keys(rowSelection).join(', '));
        setRowSelection({});
    };

    return (
        <div className='overflow-x-auto'>
            <div className='mb-4 flex w-full items-center justify-between gap-2'>
                <Input
                    placeholder='Search by name or character...'
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
                <AddMovieSoundtrackSongDialog />

                {Object.keys(rowSelection).length > 0 && (
                    <Button variant='destructive' size='sm' onClick={handleDelete}>
                        <Trash className='size-4' />
                    </Button>
                )}
            </div>
            <div className='xs:max-w-full max-w-xs'>
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
                    onPageSizeChange={handlePageSizeChange}
                    onRowSelectionChange={setRowSelection}
                    onRowOrderChange={handleRowOrderChange}
                />
            </div>
        </div>
    );
}

const AddMovieSoundtrackSongDialog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState<AsyncSelectOption[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const form = useForm<AddSongToMovieSoundtrackSchema>({
        resolver: zodResolver(addSongToMovieSoundtrackSchema)
    });

    const onSubmit = async (data: AddSongToMovieSoundtrackSchema) => {
        console.log(data);
    };

    const handleCancel = () => {
        form.reset();
        setIsOpen(false);
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    React.useEffect(() => {
        const fetchOptions = async () => {
            setIsLoading(true);
            setError(null);

            try {
                await new Promise((resolve) => setTimeout(resolve, 500));

                const mockOptions = allPeople;

                const filteredOptions = searchQuery
                    ? mockOptions.filter((option) => option.name.toLowerCase().includes(searchQuery.toLowerCase()))
                    : mockOptions;

                setOptions(filteredOptions.map((option) => ({ value: option.id, label: option.name })));
            } catch (err) {
                setError('Failed to load options. Please try again.');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchOptions();
    }, [searchQuery]);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant='outline' size='sm'>
                    <Plus className='size-4' />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Song</DialogTitle>
                </DialogHeader>
                <DialogDescription>Add a new song to the movie soundtrack.</DialogDescription>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                        <FormField
                            control={form.control}
                            name='song'
                            render={({ field }) => (
                                <FormItem>
                                    <BaseFormLayout label='Song'>
                                        <AsyncSelect
                                            options={options}
                                            isLoading={isLoading}
                                            error={error}
                                            placeholder='Select a song'
                                            emptyMessage='No songs found'
                                            onSearch={handleSearch}
                                            createable={true}
                                            {...field}
                                        />
                                    </BaseFormLayout>
                                </FormItem>
                            )}
                        />
                        <div className='flex justify-end gap-2'>
                            <Button variant='outline' type='button' className='mr-2' onClick={handleCancel}>
                                <X className='size-4' />
                                Cancel
                            </Button>
                            <Button type='submit' onClick={() => console.log(form.formState.errors)}>
                                Add Song
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};
