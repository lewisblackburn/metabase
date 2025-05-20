'use client';

import { useState } from 'react';

import { BUCKET, BucketType } from '@/constants/media.constant';
import {
    useGetAlbumMediaQuery,
    useGetSongQuery,
    useInsertAlbumMediaMutation,
    useUpdateAlbumMutation
} from '@/generated/graphql';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Progress } from '@/registry/new-york-v4/ui/progress';
import { useFileUpload, useNhostClient } from '@nhost/nextjs';
import { useQueryClient } from '@tanstack/react-query';

import { MediaTable } from '../../../../components/shared/media-table';
import { AlertCircleIcon } from 'lucide-react';
import { toast } from 'sonner';

interface EditSongMediaProps {
    songId: string;
}

export default function EditSongMedia({ songId }: EditSongMediaProps) {
    const nhost = useNhostClient();
    const queryClient = useQueryClient();
    const { add, upload, progress, isUploading, error } = useFileUpload();
    const { data: song } = useGetSongQuery({
        id: songId
    });

    const albumId = song?.songs_by_pk?.album?.id;

    const { data: media, isLoading } = useGetAlbumMediaQuery(
        {
            where: {
                album_id: {
                    _eq: albumId
                }
            }
        },
        {
            queryKey: ['song-media', songId],
            enabled: !!albumId
        }
    );
    const insertMediaMutation = useInsertAlbumMediaMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['song-media', songId] });
        }
    });
    const updateAlbumMutation = useUpdateAlbumMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['song', songId] });
            toast.success('Primary image updated');
        },
        onError: (error: Error) => {
            toast.error(error.message || 'Failed to update primary image');
        }
    });

    const handleFileSelect = async (bucketId: BucketType) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/jpeg,image/png,image/gif,image/webp';

        input.onchange = async (event) => {
            const selectedFile = (event.target as HTMLInputElement).files?.[0];
            if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) {
                try {
                    await add({ file: selectedFile });
                    const result = await upload({ bucketId });
                    if (!result?.id) throw new Error('Upload failed - no file ID returned');
                    await insertMediaMutation.mutateAsync({
                        objects: [
                            {
                                album_id: albumId,
                                file_id: result.id
                            }
                        ]
                    });
                    toast.success('Image uploaded successfully');
                } catch (err: any) {
                    toast.error('Failed to upload image');
                }
            }
        };

        input.click();
    };

    const handleDelete = async (fileId: string) => {
        try {
            await nhost.storage.delete({ fileId });
            queryClient.invalidateQueries({ queryKey: ['song-media', songId] });
            toast.success('Image deleted successfully');
        } catch (err) {
            toast.error('Failed to delete image');
        }
    };

    const handleSetPrimary = async (fileId: string, bucketId: BucketType) => {
        try {
            const publicUrl = nhost.storage.getPublicUrl({ fileId });
            await updateAlbumMutation.mutateAsync({
                pk_columns: {
                    id: albumId
                },
                set: {
                    artwork: publicUrl
                }
            });
        } catch (err) {
            toast.error('Failed to update primary image');
        }
    };

    return (
        <div className='space-y-6'>
            <div className='flex justify-end gap-4'>
                <Button
                    onClick={() => handleFileSelect(BUCKET.ARTWORK)}
                    disabled={isUploading}
                    variant='outline'
                    size='sm'>
                    Upload Artwork
                </Button>
            </div>
            {isUploading && (
                <div className='space-y-2'>
                    <Progress value={progress ?? 0} className='h-2' />
                    <p className='text-muted-foreground text-sm'>Uploading... {Math.round(progress ?? 0)}%</p>
                </div>
            )}
            {error && (
                <div className='text-destructive flex items-center gap-1 text-xs' role='alert'>
                    <AlertCircleIcon className='size-3 shrink-0' />
                    <span>{error.message}</span>
                </div>
            )}
            <MediaTable
                media={media?.album_media || []}
                onDelete={handleDelete}
                onSetPrimary={handleSetPrimary}
                isLoading={isLoading}
            />
        </div>
    );
}
