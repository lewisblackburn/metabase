'use client';

import { useState } from 'react';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { DataTable } from '@/components/ui/data-table';
import { GetSongMoviesQuery, Order_By, useGetSongMoviesQuery } from '@/generated/graphql';
import { ColumnDef } from '@tanstack/react-table';

import { Film } from 'lucide-react';

export default function SongSoundtracks() {
    const params = useParams<{ id: string }>();
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [sorting, setSorting] = useState<{ id: string; desc: boolean }[]>([]);

    const { data, isLoading } = useGetSongMoviesQuery(
        {
            where: {
                song_id: {
                    _eq: params.id
                }
            },
            order_by: {
                movie: {
                    title: Order_By.Asc
                }
            },
            limit: pageSize,
            offset: pageIndex * pageSize
        },
        {
            queryKey: ['song-movies', params.id, pageIndex, pageSize, sorting],
            enabled: !!params.id
        }
    );

    const columns: ColumnDef<GetSongMoviesQuery['movie_soundtrack'][number]>[] = [
        {
            accessorKey: 'movie.title',
            header: 'Movie',
            cell: ({ row }) => {
                const movie = row.original.movie;
                return (
                    <div className='flex items-center gap-2'>
                        <Film className='h-4 w-4' />
                        <Link href={`/dashboard/movies/${movie.id}`} className='hover:underline'>
                            {movie.title}
                        </Link>
                    </div>
                );
            }
        },
        {
            accessorKey: 'timestamps',
            header: 'Timestamps',
            cell: ({ row }) => {
                const timestamps = row.original.timestamps;
                return timestamps?.join(', ') || '-';
            }
        },
        {
            accessorKey: 'description',
            header: 'Description',
            cell: ({ row }) => row.original.description || '-'
        }
    ];

    const soundtracks = data?.movie_soundtrack || [];
    const totalRows = data?.movie_soundtrack_aggregate.aggregate?.count || 0;

    return (
        <DataTable<GetSongMoviesQuery['movie_soundtrack'][number]>
            columns={columns}
            data={soundtracks}
            isLoading={isLoading}
            pageIndex={pageIndex}
            pageSize={pageSize}
            totalRows={totalRows}
            sorting={sorting}
            onPageChange={setPageIndex}
            onPageSizeChange={setPageSize}
            onSortingChange={setSorting}
        />
    );
}
