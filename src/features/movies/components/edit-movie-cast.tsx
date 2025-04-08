import React from 'react';

import BaseFormLayout from '@/components/form/base-form-layout';
import CreatableSelectField from '@/components/form/createable-select';
import InputField from '@/components/form/input';
import SelectField, { SelectOption } from '@/components/form/select';
import SortingArrows from '@/components/shared/sorting-arrows';
import { DataTable } from '@/components/ui/data-table';
import { useDebounce } from '@/hooks/use-debounce';
import { CastMember } from '@/lib/data';
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
import { useQuery } from '@tanstack/react-query';
import { ColumnDef, SortingState } from '@tanstack/react-table';

import { AddCastMemberSchema, addCastMemberSchema } from '../schemas/cast-member.schema';
import { Eye, MoreHorizontal, Pencil, Plus, Trash, X } from 'lucide-react';
import { useForm } from 'react-hook-form';

export default function EditMovieCast() {
    const [data, setData] = React.useState<CastMember[]>([]);
    const [totalRows, setTotalRows] = React.useState(0);
    const [pageIndex, setPageIndex] = React.useState(0); // 0-based page index
    const [pageSize, setPageSize] = React.useState(5);
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [rowSelection, setRowSelection] = React.useState({});
    const [searchQuery, setSearchQuery] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

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
                    <DropdownMenuItem onClick={() => console.log(`Viewing ${castMember.name}`)}>
                        <Eye className='mr-2 h-4 w-4' />
                        View
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => console.log(`Editing ${castMember.name}`)}>
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
    const [isOpen, setIsOpen] = React.useState(false);

    const form = useForm<AddCastMemberSchema>({
        resolver: zodResolver(addCastMemberSchema)
    });

    const onSubmit = async (data: AddCastMemberSchema) => {
        console.log(data);
    };

    const handleCancel = () => {
        form.reset();
        setIsOpen(false);
    };

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
                            name='personId'
                            render={({ field }) => (
                                <FormItem>
                                    <BaseFormLayout label='Person'>
                                        <SelectField options={[]} placeholder='Select a person...' {...field} />
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
                                Cancel
                            </Button>
                            <Button type='submit'>Add Cast Member</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};
