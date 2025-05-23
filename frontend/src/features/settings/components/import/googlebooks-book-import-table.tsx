import React, { useCallback, useMemo, useState } from 'react';

import ImageWithSkeleton from '@/components/shared/image-with-skeleton';
import { DataTable } from '@/components/ui/data-table';
import { useDebounce } from '@/hooks/use-debounce';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Input } from '@/registry/new-york-v4/ui/input';
import { importBookFromGoogleBooks } from '@/services/googlebooks/googlebooks-import-book.service';
import { googleBooksService } from '@/services/googlebooks/googlebooks.service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { ColumnDef } from '@tanstack/react-table';

import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { Loader2, Plus, X } from 'lucide-react';
import { toast } from 'sonner';

dayjs.extend(advancedFormat);

interface GoogleBooksSearchResult {
    id: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        publishedDate?: string;
        imageLinks?: {
            thumbnail?: string;
            smallThumbnail?: string;
        };
    };
}

interface GoogleBooksSearchResponse {
    items: GoogleBooksSearchResult[];
    totalItems: number;
}

type BookRow = GoogleBooksSearchResult & { id: string };

export default function GoogleBooksBookImportTable() {
    const [pageIndex, setPageIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
    const queryClient = useQueryClient();
    const debouncedQuery = useDebounce(searchQuery, 500);

    const fetchBooks = useCallback(async (page: number, query: string) => {
        const res = await googleBooksService.search<GoogleBooksSearchResponse>(query, page + 1, 20);
        return {
            data: res?.items.map((b) => ({ ...b, id: b.id })) ?? [],
            total: res?.totalItems ?? 0
        };
    }, []);

    const { data, isLoading, isError, refetch, isFetching } = useQuery({
        queryKey: ['googlebooks-books', debouncedQuery, pageIndex],
        queryFn: () => fetchBooks(pageIndex, debouncedQuery),
        enabled: !!debouncedQuery
    });

    const importMutation = useMutation({
        mutationFn: (googleBooksId: string) => importBookFromGoogleBooks(googleBooksId),
        onSuccess: (response) => {
            if (!response) {
                toast.error('No response received from import');
                return;
            }

            if ('message' in response) {
                if (response.message.includes('already exists')) {
                    toast.success('Book already exists');
                } else {
                    toast.error(response.message);
                }
            } else {
                toast.success(`${response.title} Imported`);
            }

            queryClient.invalidateQueries({ queryKey: ['GetBooks.infinite'] });
        },
        onError: (error: any) => toast.error(error.message)
    });

    const handleImport = useCallback(async () => {
        const ids = Object.keys(rowSelection);
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
                    const title = b.volumeInfo.title;
                    if (!title) return null;

                    const metadata = (
                        <div className='flex flex-col'>
                            <span className='font-medium'>{title}</span>
                            {b.volumeInfo.authors && (
                                <span className='text-muted-foreground text-sm'>{b.volumeInfo.authors.join(', ')}</span>
                            )}
                            {b.volumeInfo.publishedDate && (
                                <span className='text-muted-foreground text-sm'>
                                    {dayjs(b.volumeInfo.publishedDate).format('MMMM Do, YYYY')}
                                </span>
                            )}
                        </div>
                    );

                    const thumbnailUrl = googleBooksService.getThumbnailImage(b.volumeInfo.imageLinks);
                    return thumbnailUrl ? (
                        <div className='flex items-center gap-4'>
                            <ImageWithSkeleton
                                src={thumbnailUrl}
                                alt={title}
                                width={75}
                                height={112.5}
                                wrapperClassName='relative h-16 w-12 overflow-hidden rounded-md'
                                className='absolute inset-0 h-full w-full object-cover'
                            />
                            {metadata}
                        </div>
                    ) : (
                        metadata
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
                pageSize={20}
                pageSizeOptions={[20]}
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
