import React, { useCallback, useMemo, useState } from 'react';

import ImageWithSkeleton from '@/components/shared/image-with-skeleton';
import { DataTable } from '@/components/ui/data-table';
import { useDebounce } from '@/hooks/use-debounce';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Input } from '@/registry/new-york-v4/ui/input';
import { importMovieFromTmdb } from '@/services/tmdb/tmdb-import-movie.service';
import { tmdbService } from '@/services/tmdb/tmdb.service';
import { useMutation, useQuery } from '@tanstack/react-query';
import type { ColumnDef } from '@tanstack/react-table';

import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { Loader2, Plus, X } from 'lucide-react';
import { toast } from 'sonner';

dayjs.extend(advancedFormat);

interface TMDBSearchResult {
    id: number;
    title: string;
    original_title: string;
    release_date: string;
    poster_path: string | null;
}

interface TMDBSearchResponse {
    results: TMDBSearchResult[];
    total_results: number;
}

type MovieRow = TMDBSearchResult & { id: string };

export default function TMDBMovieImportTable() {
    const [pageIndex, setPageIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
    const debouncedQuery = useDebounce(searchQuery, 500);

    const fetchMovies = useCallback(async (page: number, query: string) => {
        const res = await tmdbService.search<TMDBSearchResponse>(query, page + 1, 'movie');
        return {
            data: res?.results.map((m) => ({ ...m, id: m.id.toString() })) ?? [],
            total: res?.total_results ?? 0
        };
    }, []);

    const { data, isLoading, isError, refetch, isFetching } = useQuery({
        queryKey: ['tmdb-movies', debouncedQuery, pageIndex],
        queryFn: () => fetchMovies(pageIndex, debouncedQuery),
        enabled: !!debouncedQuery
    });

    const importMutation = useMutation({
        mutationFn: (tmdbMovieId: number) => importMovieFromTmdb(tmdbMovieId),
        onSuccess: (response) => {
            if (!response) {
                toast.error('No response received from import');
                return;
            }

            if ('message' in response) {
                if (response.message.includes('already exists')) {
                    toast.success('Movie already exists');
                } else {
                    toast.error(response.message);
                }
            } else {
                toast.success(`${response.title} Imported`);
            }
        },
        onError: (error: any) => toast.error(error.message)
    });

    const handleImport = useCallback(async () => {
        const ids = Object.keys(rowSelection).map(Number);
        await Promise.all(ids.map((id) => importMutation.mutateAsync(id)));
        setRowSelection({});
    }, [rowSelection, importMutation]);

    const columns = useMemo<ColumnDef<MovieRow>[]>(
        () => [
            {
                id: 'movie',
                header: 'Movie',
                accessorFn: (row) => row,
                cell: ({ row }) => {
                    const m = row.original;
                    const title = m.title || m.original_title;
                    if (!title || !m.release_date) return null;

                    const metadata = (
                        <div className='flex flex-col'>
                            <span className='font-medium'>{title}</span>
                            <span className='text-muted-foreground text-sm'>
                                {dayjs(m.release_date).format('MMMM Do, YYYY')}
                            </span>
                        </div>
                    );

                    const posterUrl = tmdbService.getPosterImage(m.poster_path ?? '');
                    return posterUrl ? (
                        <div className='flex items-center gap-4'>
                            <ImageWithSkeleton
                                src={posterUrl}
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
                    placeholder='Search by movie title...'
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

            <DataTable<MovieRow>
                columns={columns}
                data={(data?.data as MovieRow[]) ?? []}
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
                    Error fetching movies.{' '}
                    <Button variant='link' onClick={() => refetch()}>
                        Retry
                    </Button>
                </div>
            )}
        </div>
    );
}
