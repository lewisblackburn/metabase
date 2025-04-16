import React, { useState } from 'react';

import { DataTable } from '@/components/ui/data-table';
import { useDebounce } from '@/hooks/use-debounce';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Input } from '@/registry/new-york-v4/ui/input';
import { tmdbMovieImporterService } from '@/services/tmdb/tmdb-movie-importer.service';
import { tmdbService } from '@/services/tmdb/tmdb.service';
import { SearchResult, TMDBMovie, TMDBSearchResponse } from '@/types/tmdb.type';
import { ColumnDef, SortingState } from '@tanstack/react-table';

import { Plus, X } from 'lucide-react';

export default function TMDBMovieImportTable() {
    const [data, setData] = useState<SearchResult[]>([]);
    const [totalRows, setTotalRows] = useState(0);
    const [pageIndex, setPageIndex] = useState(0);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [rowSelection, setRowSelection] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    // NOTE: TMDB API returns 20 results per page
    const pageSize = 20;

    React.useEffect(() => {
        setPageIndex(0);
    }, [debouncedSearchQuery]);

    React.useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await tmdbMovieImporterService.search<TMDBSearchResponse>(
                    debouncedSearchQuery,
                    pageIndex + 1,
                    'movie'
                );
                if (response) {
                    setData(response.results);
                    console.log('response', response);
                    setTotalRows(response.total_results);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [debouncedSearchQuery, pageIndex]);

    const columns = React.useMemo<ColumnDef<SearchResult, any>[]>(
        () => [
            {
                accessorKey: 'poster_path',
                header: 'Poster',
                cell: (info) => {
                    const row = info.getValue<TMDBMovie>();

                    if (row.poster_path === null) return null;
                    return (
                        <div className='flex h-20 w-20 items-center justify-center'>
                            <img
                                src={tmdbService.getPosterImage(row.poster_path) ?? null}
                                alt={row.title}
                                className='h-full w-full rounded-lg object-cover'
                            />
                        </div>
                    );
                }
            },
            {
                accessorKey: 'title',
                header: 'Title',
                cell: (info) => info.getValue<string>()
            }
        ],
        []
    );

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

                {Object.keys(rowSelection).length > 0 && (
                    <Button
                        variant='outline'
                        size='sm'
                        onClick={() => {
                            console.log(rowSelection);
                        }}>
                        <Plus className='size-4' />
                        Import ({Object.keys(rowSelection).length})
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
            <div className='xs:max-w-full max-w-xs'>
                <DataTable
                    columns={columns}
                    data={data}
                    pageIndex={pageIndex}
                    totalRows={totalRows}
                    pageSize={pageSize}
                    pageSizeOptions={[pageSize]}
                    sorting={sorting}
                    rowSelection={rowSelection}
                    isLoading={isLoading}
                    onSortingChange={setSorting}
                    onPageChange={setPageIndex}
                    onRowSelectionChange={setRowSelection}
                />
            </div>
        </div>
    );
}
