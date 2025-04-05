'use client';

import * as React from 'react';

import { Button } from '@/registry/new-york-v4/ui/button';
import { Checkbox } from '@/registry/new-york-v4/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/new-york-v4/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/registry/new-york-v4/ui/table';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
    ColumnDef,
    OnChangeFn,
    RowSelectionState,
    SortingState,
    flexRender,
    getCoreRowModel,
    useReactTable
} from '@tanstack/react-table';

import { GripVertical, Loader2 } from 'lucide-react';

// Define the prop types for DataTable. It is generic over the data type (TData).
interface DataTableProps<TData extends { id: string }> {
    columns: ColumnDef<TData, any>[]; // column definitions for TanStack Table
    data: TData[]; // current page of data to display
    pageIndex: number; // current page index (0-based)
    pageSize: number; // current page size
    totalRows: number; // total number of rows (for pagination info)
    sorting: SortingState; // current sorting state (array of sort descriptors)
    rowSelection?: RowSelectionState; // current row selection state (if selection is enabled)
    isLoading?: boolean; // whether data is currently loading
    onSortingChange: OnChangeFn<SortingState>; // callback when sort is changed
    onPageChange: (pageIndex: number) => void; // callback when page index is changed
    onPageSizeChange: (pageSize: number) => void; // callback when page size is changed
    onRowSelectionChange?: OnChangeFn<RowSelectionState>; // callback when row selection changes
    onRowOrderChange?: (newData: TData[]) => void; // callback when rows are reordered via drag-and-drop
    renderRowActions?: (row: TData) => React.ReactNode; // optional render prop for row action buttons
    selectionMode?: 'single' | 'multiple'; // "single" or "multiple" selection (default multiple)
}

function DraggableTableRow<TData extends { id: string }>({ row, itemId }: { row: any; itemId: string }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: itemId
    });

    const style: React.CSSProperties = {
        transform: CSS.Transform.toString(transform),
        transition: transition,
        ...(isDragging ? { position: 'relative', zIndex: 1 } : {})
    };

    return (
        <TableRow
            ref={setNodeRef}
            key={row.id}
            data-state={row.getIsSelected() ? 'selected' : undefined}
            style={style}
            className={isDragging ? 'bg-muted/40' : 'hover:bg-muted/20 transition-colors'}>
            {row.getVisibleCells().map((cell: any) => (
                <TableCell key={cell.id} className='px-4 py-4'>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
            ))}
            <TableCell className='w-24 p-0 text-center align-middle'>
                <Button
                    variant='ghost'
                    size='icon'
                    className='h-8 w-8 cursor-grab p-0 active:cursor-grabbing'
                    {...attributes}
                    {...listeners}>
                    <GripVertical className='text-muted-foreground h-4 w-4' />
                </Button>
            </TableCell>
        </TableRow>
    );
}

export function DataTable<TData extends { id: string }>({
    columns,
    data,
    pageIndex,
    pageSize,
    totalRows,
    sorting,
    rowSelection,
    isLoading = false,
    onSortingChange,
    onPageChange,
    onPageSizeChange,
    onRowSelectionChange,
    onRowOrderChange,
    renderRowActions,
    selectionMode = 'multiple'
}: DataTableProps<TData>) {
    // Determine if certain features are enabled based on props
    const enableRowSelection = !!onRowSelectionChange;
    const enableRowOrdering = !!onRowOrderChange;
    const enableRowActions = !!renderRowActions;

    // If row selection is enabled, prepare a selection column for checkboxes
    const selectionColumn: ColumnDef<TData, any> = {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected()}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label='Select all'
                className='ml-1'
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label='Select row'
                className='ml-1'
            />
        ),
        // Disable sorting and hiding for selection column
        enableSorting: false,
        enableHiding: false,
        size: 40
    };

    // If row actions are enabled, prepare an actions column
    const actionsColumn: ColumnDef<TData, any> = {
        id: 'actions',
        header: () => <span className='font-medium'>Actions</span>,
        cell: ({ row }) =>
            // Render custom action buttons for each row
            renderRowActions ? renderRowActions(row.original) : null,
        enableSorting: false,
        enableHiding: false
    };

    // Compose the final columns list to pass to TanStack Table
    let finalColumns = [...columns];
    if (enableRowSelection) {
        finalColumns = [selectionColumn, ...finalColumns]; // selection checkbox as first column
    }
    if (enableRowActions) {
        finalColumns = [...finalColumns, actionsColumn]; // actions as last column
    }

    // Initialize TanStack Table instance with manual control options
    const table = useReactTable({
        data,
        columns: finalColumns,
        // Tell TanStack Table that we are handling sorting, pagination, selection manually
        manualSorting: true,
        manualPagination: true,
        // Provide total row count for pagination (to calculate page count)
        pageCount: Math.ceil(totalRows / pageSize),
        state: {
            sorting: sorting,
            pagination: { pageIndex, pageSize },
            rowSelection: rowSelection ?? {} // if selection not enabled, this will be an empty object
        },
        onSortingChange: onSortingChange,
        onPaginationChange: (updater) => {
            // TanStack may call this when pageIndex/pageSize state changes internally.
            // We intercept and call our callbacks if present.
            const newState = typeof updater === 'function' ? updater({ pageIndex, pageSize }) : updater;
            if (newState.pageIndex !== pageIndex) {
                onPageChange(newState.pageIndex);
            }
            if (newState.pageSize !== pageSize) {
                onPageSizeChange(newState.pageSize);
            }
        },
        onRowSelectionChange: onRowSelectionChange,
        getCoreRowModel: getCoreRowModel(),
        // Use getRowId to identify rows by their unique id
        getRowId: (row) => row.id,
        // Disable multi-sorting if single-column sorting is desired (optional)
        enableMultiSort: true // allow multi-column sort (set to false to disable multi-sorting)
    });

    // Handle drag-and-drop row reordering
    const handleDragEnd = (event: DragEndEvent) => {
        if (!enableRowOrdering) return;
        const { active, over } = event;
        if (active.id !== over?.id && over?.id) {
            // Find the indices of the active and over ids in the current data array
            const oldIndex = data.findIndex((item) => item.id === active.id);
            const newIndex = data.findIndex((item) => item.id === over.id);
            if (oldIndex >= 0 && newIndex >= 0) {
                const newData = arrayMove(data, oldIndex, newIndex); // reorder the data array
                onRowOrderChange?.(newData);
            }
        }
    };

    // Calculate pagination info for display
    const totalPages = totalRows > 0 ? Math.ceil(totalRows / pageSize) : 1;
    const startIndex = totalRows === 0 ? 0 : pageIndex * pageSize + 1;
    const endIndex = pageIndex * pageSize + data.length;

    return (
        <div className='w-full'>
            <div className='relative overflow-hidden rounded-md border'>
                {isLoading && (
                    <div className='bg-background/80 absolute inset-0 z-10 flex items-center justify-center backdrop-blur-[1px]'>
                        <Loader2 className='text-primary h-8 w-8 animate-spin' />
                    </div>
                )}
                <Table className='relative'>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead
                                        key={header.id}
                                        className='px-4 py-4 text-sm font-medium whitespace-nowrap'>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                                {/* If row ordering is enabled, add a header cell for the drag handle column at the end */}
                                {enableRowOrdering && <TableHead className='w-4 p-0'></TableHead>}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {data.length ? (
                            enableRowOrdering ? (
                                <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={handleDragEnd}>
                                    <SortableContext
                                        items={data.map((item) => item.id)}
                                        strategy={verticalListSortingStrategy}>
                                        {table.getRowModel().rows.map((row) => {
                                            const itemId = (row.original as TData).id;

                                            return (
                                                <DraggableTableRow
                                                    key={row.id}
                                                    row={row}
                                                    itemId={itemId}
                                                    renderRowActions={renderRowActions}
                                                />
                                            );
                                        })}
                                    </SortableContext>
                                </DndContext>
                            ) : (
                                // No drag-and-drop on simple static rows
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && 'selected'}
                                        className='hover:bg-muted/20 transition-colors'>
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id} className='px-4 py-4'>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            )
                        ) : (
                            // No data to display
                            <TableRow>
                                <TableCell
                                    colSpan={finalColumns.length + (enableRowOrdering ? 1 : 0)}
                                    className='text-muted-foreground h-24 text-center'>
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            {/* Pagination and page controls */}
            <div className='mt-4 flex items-center justify-between px-2 text-sm'>
                <div className='flex flex-col items-center gap-2 md:flex-row'>
                    <span className='text-muted-foreground'>Rows per page:</span>
                    <Select value={String(pageSize)} onValueChange={(value) => onPageSizeChange(Number(value))}>
                        <SelectTrigger className='h-8 w-[80px]'>
                            <SelectValue placeholder={String(pageSize)} />
                        </SelectTrigger>
                        <SelectContent side='top'>
                            {[5, 10, 20, 50].map((size) => (
                                <SelectItem key={size} value={String(size)}>
                                    {size}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className='flex flex-col items-center gap-6 md:flex-row'>
                    <span className='text-muted-foreground'>
                        {isLoading ? (
                            <span className='animate-pulse'>Loading...</span>
                        ) : totalRows > 0 ? (
                            <>
                                Showing{' '}
                                <span className='text-foreground font-medium'>
                                    {startIndex}-{endIndex}
                                </span>{' '}
                                of <span className='text-foreground font-medium'>{totalRows}</span>
                            </>
                        ) : (
                            'No results'
                        )}
                    </span>
                    <div className='flex items-center gap-2'>
                        <Button
                            variant='outline'
                            size='sm'
                            onClick={() => onPageChange(pageIndex - 1)}
                            disabled={pageIndex === 0 || isLoading}
                            className='h-8'>
                            Previous
                        </Button>
                        <Button
                            variant='outline'
                            size='sm'
                            onClick={() => onPageChange(pageIndex + 1)}
                            disabled={pageIndex >= totalPages - 1 || isLoading}
                            className='h-8'>
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
