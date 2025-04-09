import React, { useState } from 'react';

import Link from 'next/link';

import { AsyncSelect, AsyncSelectOption } from '@/components/form/async-select';
import BaseFormLayout from '@/components/form/base-form-layout';
import SelectField from '@/components/form/select';
import SortingArrows from '@/components/shared/sorting-arrows';
import { DataTable } from '@/components/ui/data-table';
import { OBJECT_TYPE } from '@/constants/objects.constant';
import { useDebounce } from '@/hooks/use-debounce';
import { CrewMember, allJobs, allPeople, allRoles } from '@/lib/data';
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
    AddCrewMemberSchema,
    EditCrewMemberSchema,
    addCrewMemberSchema,
    editCrewMemberSchema
} from '../schemas/movie-crew-member.schema';
import { Eye, MoreHorizontal, Pencil, Plus, Trash, X } from 'lucide-react';
import { useForm } from 'react-hook-form';

export default function EditMovieCrew() {
    const [data, setData] = useState<CrewMember[]>([]);
    const [totalRows, setTotalRows] = useState(0);
    const [pageIndex, setPageIndex] = useState(0); // 0-based page index
    const [pageSize, setPageSize] = useState(5);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [rowSelection, setRowSelection] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [editingCrewMember, setEditingCrewMember] = useState<CrewMember | null>(null);
    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    // NOTE: Reset page index when search query changes
    React.useEffect(() => {
        setPageIndex(0);
    }, [debouncedSearchQuery]);

    const columns = React.useMemo<ColumnDef<CrewMember, any>[]>(
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
                accessorKey: 'job',
                header: ({ column }) => (
                    <button
                        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                        className='inline-flex cursor-pointer items-center font-medium'>
                        Job
                        <SortingArrows column={column} />
                    </button>
                ),
                cell: (info) => {
                    const job = allJobs.find((job) => job.id === info.getValue<string>());
                    return job?.name;
                }
            },
            {
                accessorKey: 'role',
                header: ({ column }) => (
                    <button
                        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                        className='inline-flex cursor-pointer items-center font-medium'>
                        Role
                        <SortingArrows column={column} />
                    </button>
                ),
                cell: (info) => {
                    const role = allRoles.find((role) => role.id === info.getValue<string>());
                    return role?.name;
                }
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
                const res = await fetch(`/api/crew-members?${params.toString()}`);
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

    const renderRowActions = React.useCallback((crewMember: CrewMember) => {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className='h-8 w-8 p-0'>
                        <span className='sr-only'>Open menu</span>
                        <MoreHorizontal className='h-4 w-4' />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <Link href={`/dashboard/${OBJECT_TYPE.PERSON.path}/${crewMember.personId}`}>
                        <DropdownMenuItem>
                            <Eye className='mr-2 h-4 w-4' />
                            View
                        </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem onClick={() => setEditingCrewMember(crewMember)}>
                        <Pencil className='mr-2 h-4 w-4' />
                        Edit
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }, []);

    const handleRowOrderChange = (newData: CrewMember[]) => {
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
                <AddCrewMemberDialog />
                {editingCrewMember && (
                    <EditCrewMemberDialog crewMember={editingCrewMember} onClose={() => setEditingCrewMember(null)} />
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

const AddCrewMemberDialog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState<AsyncSelectOption[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const form = useForm<AddCrewMemberSchema>({
        resolver: zodResolver(addCrewMemberSchema)
    });

    const onSubmit = async (data: AddCrewMemberSchema) => {
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
                    <DialogTitle>Add Crew Member</DialogTitle>
                </DialogHeader>
                <DialogDescription>Add a new crew member to the movie.</DialogDescription>
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
                            name='job'
                            render={({ field }) => (
                                <FormItem>
                                    <BaseFormLayout label='Job'>
                                        <SelectField
                                            options={allJobs.map((job) => ({ value: job.id, label: job.name }))}
                                            {...field}
                                        />
                                    </BaseFormLayout>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='role'
                            render={({ field }) => (
                                <FormItem>
                                    <BaseFormLayout label='Role'>
                                        <SelectField
                                            options={allRoles.map((role) => ({ value: role.id, label: role.name }))}
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
                            <Button type='submit'>Add Crew Member</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

const EditCrewMemberDialog = ({ crewMember, onClose }: { crewMember: CrewMember; onClose: () => void }) => {
    const form = useForm<EditCrewMemberSchema>({
        resolver: zodResolver(editCrewMemberSchema),
        defaultValues: {
            job: crewMember.job,
            role: crewMember.role
        }
    });

    const onSubmit = async (data: EditCrewMemberSchema) => {
        console.log(data);
    };

    return (
        <Dialog open onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Crew Member</DialogTitle>
                </DialogHeader>
                <DialogDescription>Edit the crew member.</DialogDescription>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                        <FormField
                            control={form.control}
                            name='job'
                            render={({ field }) => (
                                <FormItem>
                                    <BaseFormLayout label='Job'>
                                        <SelectField
                                            options={allJobs.map((job) => ({ value: job.id, label: job.name }))}
                                            {...field}
                                        />
                                    </BaseFormLayout>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='role'
                            render={({ field }) => (
                                <FormItem>
                                    <BaseFormLayout label='Role'>
                                        <SelectField
                                            options={allRoles.map((role) => ({ value: role.id, label: role.name }))}
                                            {...field}
                                        />
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
