'use client';

import { useParams } from 'next/navigation';

import SpotifyIcon from '@/components/icons/spotify.icon';
import { DataTable } from '@/components/ui/data-table';
import { Order_By, useGetMovieSoundtrackQuery } from '@/generated/graphql';
import { ColumnDef } from '@tanstack/react-table';

import { Music } from 'lucide-react';

export default function MovieSoundtrackTable() {
    const params = useParams<{ id: string }>();
    const { data, isLoading } = useGetMovieSoundtrackQuery(
        {
            where: {
                movie_id: {
                    _eq: params.id
                }
            },
            order_by: {
                timestamps: Order_By.Asc
            }
        },
        {
            queryKey: ['movie-soundtrack', params.id],
            enabled: !!params.id
        }
    );

    const soundtrack = data?.movie_soundtrack || [];

    const columns: ColumnDef<(typeof soundtrack)[number]>[] = [
        {
            accessorKey: 'song',
            header: 'Track',
            cell: ({ row }) => (
                <div>
                    <p className='text-primary font-semibold'>{row.original.song.name}</p>
                    <p className='text-muted-foreground'>
                        {row.original.song.credits.map((credit) => credit.person.name).join(', ')}
                    </p>
                </div>
            )
        },
        {
            accessorKey: 'timestamps',
            header: 'Timestamps'
        },
        {
            accessorKey: 'description',
            header: 'Description'
        },
        {
            id: 'listen',
            header: 'Listen',
            cell: ({ row }) => {
                const spotifyUri = row.original.song.spotify_uri;
                if (!spotifyUri) return null;

                return (
                    <a
                        href={spotifyUri}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='ring-offset-background focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50'>
                        <SpotifyIcon className='h-5 w-5 text-green-500' />
                        <span className='sr-only'>Listen on Spotify</span>
                    </a>
                );
            }
        }
    ];

    return (
        <div className='overflow-x-auto'>
            <div className='xs:max-w-full max-w-xs'>
                <DataTable
                    columns={columns}
                    data={soundtrack}
                    isLoading={isLoading}
                    pageIndex={0}
                    pageSize={soundtrack.length}
                    totalRows={soundtrack.length}
                    pageSizeOptions={[soundtrack.length]}
                    sorting={[]}
                    onSortingChange={() => {}}
                    onPageChange={() => {}}
                    onPageSizeChange={() => {}}
                />
            </div>
        </div>
    );
}
