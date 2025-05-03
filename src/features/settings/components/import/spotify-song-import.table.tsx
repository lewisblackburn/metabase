import React, { useCallback, useMemo, useState } from 'react';

import ImageWithSkeleton from '@/components/shared/image-with-skeleton';
import { DataTable } from '@/components/ui/data-table';
import { useDebounce } from '@/hooks/use-debounce';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Input } from '@/registry/new-york-v4/ui/input';
import { importSongFromSpotify } from '@/services/spotify/spotify-import-song.service';
import { spotifyService } from '@/services/spotify/spotify.service';
import { SpotifyTrack } from '@/types/spotify.types';
import { useMutation, useQuery } from '@tanstack/react-query';
import type { ColumnDef } from '@tanstack/react-table';

import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { Loader2, Plus, X } from 'lucide-react';
import { toast } from 'sonner';

dayjs.extend(advancedFormat);

interface SpotifySearchResult {
    id: string;
    name: string;
    album: {
        name: string;
        images: Array<{ url: string }>;
        release_date: string;
    };
    artists: Array<{ name: string }>;
    duration_ms: number;
}

type SongRow = SpotifySearchResult & { id: string };

export default function SpotifySongImportTable() {
    const [pageIndex, setPageIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
    const debouncedQuery = useDebounce(searchQuery, 500);

    const fetchSongs = useCallback(async (page: number, query: string) => {
        const res = await spotifyService.searchTracks(query, 20);
        return {
            data: res?.tracks.items.map((s: SpotifyTrack) => ({ ...s, id: s.id })) ?? [],
            total: res?.tracks.total ?? 0
        };
    }, []);

    const { data, isLoading, isError, refetch, isFetching } = useQuery({
        queryKey: ['spotify-songs', debouncedQuery, pageIndex],
        queryFn: () => fetchSongs(pageIndex, debouncedQuery),
        enabled: !!debouncedQuery
    });

    const importMutation = useMutation({
        mutationFn: (spotifyId: string) => importSongFromSpotify(spotifyId),
        onSuccess: (response) => {
            if (!response) {
                toast.error('No response received from import');
                return;
            }

            if ('message' in response) {
                if (response.message.includes('already exists')) {
                    toast.success('Song already exists');
                } else {
                    toast.error(response.message);
                }
            } else {
                toast.success(`${response.name} Imported`);
            }
        },
        onError: (error: any) => toast.error(error.message)
    });

    const handleImport = useCallback(async () => {
        const ids = Object.keys(rowSelection);
        await Promise.all(ids.map((id) => importMutation.mutateAsync(id)));
        setRowSelection({});
    }, [rowSelection, importMutation]);

    const columns = useMemo<ColumnDef<SongRow>[]>(
        () => [
            {
                id: 'song',
                header: 'Song',
                accessorFn: (row) => row,
                cell: ({ row }) => {
                    const s = row.original;
                    const title = s.name;
                    if (!title) return null;

                    const metadata = (
                        <div className='flex flex-col'>
                            <span className='font-medium'>{title}</span>
                            {s.artists && (
                                <span className='text-muted-foreground text-sm'>
                                    {s.artists.map((a) => a.name).join(', ')}
                                </span>
                            )}
                            {s.album.release_date && (
                                <span className='text-muted-foreground text-sm'>
                                    {dayjs(s.album.release_date).format('MMMM Do, YYYY')}
                                </span>
                            )}
                        </div>
                    );

                    const albumArtUrl = s.album.images?.[0]?.url;
                    return albumArtUrl ? (
                        <div className='flex items-center gap-4'>
                            <ImageWithSkeleton
                                src={albumArtUrl}
                                alt={title}
                                width={75}
                                height={75}
                                wrapperClassName='relative h-16 w-16 overflow-hidden rounded-md'
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
                    placeholder='Search by song title...'
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

            <DataTable<SongRow>
                columns={columns}
                data={(data?.data as SongRow[]) ?? []}
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
                    Error fetching songs.{' '}
                    <Button variant='link' onClick={() => refetch()}>
                        Retry
                    </Button>
                </div>
            )}
        </div>
    );
}
