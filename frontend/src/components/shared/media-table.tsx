'use client';

import ImageWithSkeleton from '@/components/shared/image-with-skeleton';
import { DataTable } from '@/components/ui/data-table';
import { BUCKET, BucketType } from '@/constants/media.constant';
import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/registry/new-york-v4/ui/dropdown-menu';
import { useNhostClient } from '@nhost/nextjs';
import { ColumnDef } from '@tanstack/react-table';

import { MoreHorizontal, StarIcon, XIcon } from 'lucide-react';

interface MediaTableProps {
    media: Array<{
        file: {
            id: string;
            name?: string | null;
            bucketId: string;
        };
    }>;
    onDelete: (fileId: string) => Promise<void>;
    onSetPrimary: (fileId: string, bucketId: BucketType) => Promise<void>;
    isLoading: boolean;
}

interface MediaRow {
    id: string;
    name: string | null;
    bucketId: string;
}

export function MediaTable({ media, onDelete, onSetPrimary, isLoading }: MediaTableProps) {
    const nhost = useNhostClient();

    const transformedData: MediaRow[] = media.map((item) => ({
        id: item.file.id,
        name: item.file.name ?? null,
        bucketId: item.file.bucketId
    }));

    const columns: ColumnDef<MediaRow>[] = [
        {
            accessorKey: 'id',
            header: 'Preview',
            cell: ({ row }) => {
                const isPoster = row.original.bucketId === BUCKET.POSTER;
                return (
                    <div
                        className={cn(
                            'relative overflow-hidden rounded-md',
                            isPoster ? 'aspect-[2/3] w-[60px]' : 'aspect-video w-[120px]'
                        )}>
                        <ImageWithSkeleton
                            src={nhost.storage.getPublicUrl({ fileId: row.original.id })}
                            alt={row.original.name ?? ''}
                            width={isPoster ? 60 : 120}
                            height={isPoster ? 90 : 67.5}
                            className='size-full object-cover'
                        />
                    </div>
                );
            }
        },
        {
            accessorKey: 'name',
            header: 'Name',
            cell: ({ row }) => row.original.name ?? 'Unnamed file'
        },
        {
            accessorKey: 'bucketId',
            header: 'Type'
        }
    ];

    const renderRowActions = (row: MediaRow) => {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className='h-8 w-8 p-0'>
                        <span className='sr-only'>Open menu</span>
                        <MoreHorizontal className='h-4 w-4' />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <DropdownMenuItem
                        onClick={() => onSetPrimary(row.id, row.bucketId as BucketType)}
                        className='gap-2'>
                        <StarIcon className='h-4 w-4' />
                        Set as Primary
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => onDelete(row.id)}
                        className='text-destructive focus:text-destructive gap-2'>
                        <XIcon className='h-4 w-4' />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    };

    return (
        <DataTable
            columns={columns}
            data={transformedData}
            pageIndex={0}
            pageSize={transformedData.length}
            pageSizeOptions={[transformedData.length]}
            totalRows={transformedData.length}
            sorting={[]}
            onSortingChange={() => {}}
            onPageChange={() => {}}
            onPageSizeChange={() => {}}
            renderRowActions={renderRowActions}
            isLoading={isLoading}
        />
    );
}
