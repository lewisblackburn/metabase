import React, { useCallback, useMemo, useState } from 'react';

import ImageWithSkeleton from '@/components/shared/image-with-skeleton';
import { DataTable } from '@/components/ui/data-table';
import { useDebounce } from '@/hooks/use-debounce';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Input } from '@/registry/new-york-v4/ui/input';
import { openLibraryBookImporterService } from '@/services/openlibrary/openlibrary-book-importer.service';
import { OpenLibraryDoc, OpenLibraryWork } from '@/types/openlibrary.type';
import { useMutation, useQuery } from '@tanstack/react-query';
import type { ColumnDef } from '@tanstack/react-table';

import { Loader2, Plus, X } from 'lucide-react';
import { toast } from 'sonner';

type BookRow = OpenLibraryDoc & { id: string };

export default function OpenLibraryBookImportTable() {
    const [pageIndex, setPageIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
    const debouncedQuery = useDebounce(searchQuery, 500);

    const fetchBooks = useCallback(async (page: number, query: string) => {
        const res = await openLibraryBookImporterService.searchBooks(query, page + 1);
        return {
            data: res?.docs.map((b) => ({ ...b, id: b.key })) ?? [],
            total: res.numFound
        };
    }, []);

    const { data, isLoading, isError, refetch, isFetching } = useQuery({
        queryKey: ['openlibrary-books', debouncedQuery, pageIndex],
        queryFn: () => fetchBooks(pageIndex, debouncedQuery),
        enabled: !!debouncedQuery
    });

    const importMutation = useMutation({
        mutationFn: (bookId: OpenLibraryWork['key']) => openLibraryBookImporterService.import(bookId),
        onSuccess: (response) => {
            if (response === true) toast.success('Book already exists');
            else if (response === false) toast.error('Book not found');
            else toast.success(`${response.insert_books_one?.title} imported`);
        },
        onError: (error: any) => toast.error(error.message)
    });

    const handleImport = useCallback(async () => {
        const ids = Object.keys(rowSelection);
        console.log(ids);
        await Promise.all(ids.map((id) => importMutation.mutateAsync(id)));
        setRowSelection({});
    }, [rowSelection, importMutation]);

    const columns = useMemo<ColumnDef<BookRow>[]>(
        () => [
            {
                id: 'book',
                header: 'Book',
                accessorFn: (row) => row,
                cell: ({ row }) => {
                    const b = row.original;
                    const title = b.title;
                    if (!title || !b.author_name) return null;

                    return (
                        <div className='flex items-center gap-2'>
                            {/* <ImageWithSkeleton
                                src={b.album.images[0]?.url ?? ''}
                                alt={name}
                                width={75}
                                height={75}
                                wrapperClassName='relative h-16 w-16 overflow-hidden rounded-md'
                                className='absolute inset-0 h-full w-full object-cover'
                            /> */}
                            <div className='flex flex-col'>
                                <span className='truncate font-medium'>{title}</span>
                                <span className='text-muted-foreground text-sm'>{b.author_name}</span>
                            </div>
                        </div>
                    );
                }
            }
        ],
        []
    );

    return (
        <div className='overflow-x-auto'>
            <div className='mb-4 flex w-full items-center justify-between gap-2'>
                <Input
                    placeholder='Search by book title...'
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

                {Object.keys(rowSelection).length > 0 && (
                    <Button
                        variant='outline'
                        size='sm'
                        onClick={handleImport}
                        disabled={importMutation.isPending || Object.keys(rowSelection).length === 0}>
                        {importMutation.isPending ? (
                            <Loader2 className='h-4 w-4 animate-spin' />
                        ) : (
                            <Plus className='h-4 w-4' />
                        )}
                        {importMutation.isPending ? 'Importing...' : `Import (${Object.keys(rowSelection).length})`}
                    </Button>
                )}
                {Object.keys(rowSelection).length > 0 && (
                    <Button
                        variant='outline'
                        size='sm'
                        onClick={() => {
                            setRowSelection({});
                        }}>
                        <X className='size-4' />
                        Unselect all
                    </Button>
                )}
            </div>

            <DataTable<BookRow>
                columns={columns}
                data={(data?.data as BookRow[]) ?? []}
                pageIndex={pageIndex}
                totalRows={data?.total ?? 0}
                pageSize={100}
                pageSizeOptions={[100]}
                rowSelection={rowSelection}
                isLoading={isLoading || isFetching || importMutation.isPending}
                onPageChange={setPageIndex}
                onPageSizeChange={() => {}}
                onSortingChange={() => {}}
                sorting={[]}
                onRowSelectionChange={setRowSelection}
            />

            {isError && (
                <div className='p-4 text-red-600'>
                    Error fetching books.{' '}
                    <Button variant='link' onClick={() => refetch()}>
                        Retry
                    </Button>
                </div>
            )}
        </div>
    );
}
