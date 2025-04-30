import React, { useState } from 'react';

import Link from 'next/link';

import { AsyncSelect, AsyncSelectOption } from '@/components/form/async-select';
import BaseFormLayout from '@/components/form/base-form-layout';
import InputField from '@/components/form/input';
import SortingArrows from '@/components/shared/sorting-arrows';
import { DataTable } from '@/components/ui/data-table';
import { OBJECT_TYPE } from '@/constants/objects.constant';
import { useDebounce } from '@/hooks/use-debounce';
import { CastMember, allPeople } from '@/lib/data';
import { Button } from '@/registry/new-york-v4/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/registry/new-york-v4/ui/dialog';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/registry/new-york-v4/ui/dropdown-menu';
import { Form, FormField, FormItem } from '@/registry/new-york-v4/ui/form';
import { Input } from '@/registry/new-york-v4/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { ColumnDef, SortingState } from '@tanstack/react-table';

import {
    AddCastMemberSchema,
    EditCastMemberSchema,
    addCastMemberSchema,
    editCastMemberSchema
} from '../schemas/movie-cast-member.schema';
import { Eye, MoreHorizontal, Pencil, Plus, Trash, X } from 'lucide-react';
import { useForm } from 'react-hook-form';

export default function EditMovieCast() {
    const [data, setData] = useState<CastMember[]>([]);
    const [totalRows, setTotalRows] = useState(0);
    const [pageIndex, setPageIndex] = useState(0); // 0-based page index
    const [pageSize, setPageSize] = useState(5);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [rowSelection, setRowSelection] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [editingCastMember, setEditingCastMember] = useState<CastMember | null>(null);
    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    // NOTE: Reset page index when search query changes
    React.useEffect(() => {
        setPageIndex(0);
    }, [debouncedSearchQuery]);

    const columns = React.useMemo<ColumnDef<CastMember, any>[]>(
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
                accessorKey: 'character',
                header: ({ column }) => (
                    <button
                        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                        className='inline-flex cursor-pointer items-center font-medium'>
                        Character
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
                const res = await fetch(`/api/cast-members?${params.toString()}`);
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

    const renderRowActions = React.useCallback((castMember: CastMember) => {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className='h-8 w-8 p-0'>
                        <span className='sr-only'>Open menu</span>
                        <MoreHorizontal className='h-4 w-4' />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <Link href={`/dashboard/${OBJECT_TYPE.person.path}/${castMember.personId}`}>
                        <DropdownMenuItem>
                            <Eye className='mr-2 h-4 w-4' />
                            View
                        </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem onClick={() => setEditingCastMember(castMember)}>
                        <Pencil className='mr-2 h-4 w-4' />
                        Edit
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }, []);

    const handleRowOrderChange = (newData: CastMember[]) => {
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
                <AddCastMemberDialog />
                {editingCastMember && (
                    <EditCastMemberDialog castMember={editingCastMember} onClose={() => setEditingCastMember(null)} />
                )}
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
                    renderRowActions={renderRowActions}
                />
            </div>
        </div>
    );
}

const AddCastMemberDialog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState<AsyncSelectOption[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const form = useForm<AddCastMemberSchema>({
        resolver: zodResolver(addCastMemberSchema)
    });

    const onSubmit = async (data: AddCastMemberSchema) => {
        if (data.person.__isNew__) {
            // NOTE: Create new person
            console.log('Creating new person with name:', data.person.value);
        }
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
                    <DialogTitle>Add Cast Member</DialogTitle>
                </DialogHeader>
                <DialogDescription>Add a new cast member to the movie.</DialogDescription>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                        <FormField
                            control={form.control}
                            name='person'
                            render={({ field }) => (
                                <FormItem>
                                    <BaseFormLayout label='Person'>
                                        <AsyncSelect
                                            options={options}
                                            isLoading={isLoading}
                                            error={error}
                                            placeholder='Select a person'
                                            emptyMessage='No people found'
                                            onSearch={handleSearch}
                                            createable={true}
                                            {...field}
                                        />
                                    </BaseFormLayout>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='character'
                            render={({ field }) => (
                                <FormItem>
                                    <BaseFormLayout label='Character'>
                                        <InputField {...field} />
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
                                Add Cast Member
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

const EditCastMemberDialog = ({ castMember, onClose }: { castMember: CastMember; onClose: () => void }) => {
    const form = useForm<EditCastMemberSchema>({
        resolver: zodResolver(editCastMemberSchema),
        defaultValues: {
            character: castMember.character
        }
    });

    const onSubmit = async (data: EditCastMemberSchema) => {
        console.log(data);
    };

    return (
        <Dialog open onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Cast Member</DialogTitle>
                </DialogHeader>
                <DialogDescription>Edit the cast member.</DialogDescription>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                        <FormField
                            control={form.control}
                            name='character'
                            render={({ field }) => (
                                <FormItem>
                                    <BaseFormLayout label='Character'>
                                        <InputField {...field} />
                                    </BaseFormLayout>
                                </FormItem>
                            )}
                        />
                        <div className='flex justify-end gap-2'>
                            <Button variant='outline' type='button' className='mr-2' onClick={onClose}>
                                <X className='size-4' />
                                Cancel
                            </Button>
                            <Button type='submit'>Save</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};
