'use client';

import { useState } from 'react';

import { BUCKET, BucketType } from '@/constants/media.constant';
import { useGetMovieMediaQuery, useInsertMovieMediaMutation, useUpdateMovieMutation } from '@/generated/graphql';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Progress } from '@/registry/new-york-v4/ui/progress';
import { useFileUpload, useNhostClient } from '@nhost/nextjs';
import { useQueryClient } from '@tanstack/react-query';

import { MediaTable } from '../../../../components/shared/media-table';
import { AlertCircleIcon } from 'lucide-react';
import { toast } from 'sonner';

interface EditMovieGalleryProps {
    movieId: string;
}

export default function EditMovieGallery({ movieId }: EditMovieGalleryProps) {
    const nhost = useNhostClient();
    const queryClient = useQueryClient();
    const { add, upload, progress, isUploading, error } = useFileUpload();
    const { data: media, isLoading } = useGetMovieMediaQuery(
        {
            where: {
                movie_id: {
                    _eq: movieId
                }
            }
        },
        {
            queryKey: ['movie-media', movieId],
            enabled: !!movieId
        }
    );
    const insertMediaMutation = useInsertMovieMediaMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['movie-media', movieId] });
        }
    });
    const updateMovieMutation = useUpdateMovieMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['movie', movieId] });
            toast.success('Primary image updated');
        },
        onError: (error: Error) => {
            toast.error(error.message || 'Failed to update primary image');
        }
    });

    const [posterPreview, setPosterPreview] = useState<{ file: File; preview: string } | null>(null);
    const [backdropPreview, setBackdropPreview] = useState<{ file: File; preview: string } | null>(null);
    const [localError, setLocalError] = useState<{ message: string } | null>(null);

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
                                movie_id: movieId,
                                file_id: result.id
                            }
                        ]
                    });
                    toast.success('Image uploaded successfully');
                } catch (err: any) {
                    setLocalError({ message: err.message || 'Failed to upload image. Please try again.' });
                    toast.error('Failed to upload image');
                }
            }
        };

        input.click();
    };

    const handleUpload = async (bucketId: BucketType) => {
        const previewFile = bucketId === BUCKET.POSTER ? posterPreview : backdropPreview;
        if (!previewFile || isUploading) return;
        setLocalError(null);
        try {
            await add({ file: previewFile.file });
            const result = await upload({ bucketId });
            if (!result?.id) throw new Error('Upload failed - no file ID returned');
            await insertMediaMutation.mutateAsync({
                objects: [
                    {
                        movie_id: movieId,
                        file_id: result.id
                    }
                ]
            });
            URL.revokeObjectURL(previewFile.preview);
            if (bucketId === BUCKET.POSTER) {
                setPosterPreview(null);
            } else {
                setBackdropPreview(null);
            }
            toast.success('Image uploaded successfully');
        } catch (err: any) {
            setLocalError({ message: err.message || 'Failed to upload image. Please try again.' });
            toast.error('Failed to upload image');
            if (previewFile) URL.revokeObjectURL(previewFile.preview);
            if (bucketId === BUCKET.POSTER) {
                setPosterPreview(null);
            } else {
                setBackdropPreview(null);
            }
        }
    };

    const handleDelete = async (fileId: string) => {
        try {
            await nhost.storage.delete({ fileId });
            queryClient.invalidateQueries({ queryKey: ['movie-media', movieId] });
            toast.success('Image deleted successfully');
        } catch (err) {
            toast.error('Failed to delete image');
        }
    };

    const handleSetPrimary = async (fileId: string, bucketId: BucketType) => {
        try {
            const publicUrl = nhost.storage.getPublicUrl({ fileId });
            await updateMovieMutation.mutateAsync({
                id: movieId,
                set: {
                    [bucketId === BUCKET.POSTER ? 'poster' : 'backdrop']: publicUrl
                },
                inc: {}
            });
        } catch (err) {
            toast.error('Failed to update primary image');
        }
    };

    return (
        <div className='space-y-6'>
            <div className='flex justify-end gap-4'>
                <Button
                    onClick={() => handleFileSelect(BUCKET.POSTER)}
                    disabled={isUploading}
                    variant='outline'
                    size='sm'>
                    Upload Poster
                </Button>
                <Button
                    onClick={() => handleFileSelect(BUCKET.BACKDROP)}
                    disabled={isUploading}
                    variant='outline'
                    size='sm'>
                    Upload Backdrop
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
                media={media?.movie_media ?? []}
                onDelete={handleDelete}
                onSetPrimary={handleSetPrimary}
                isLoading={isLoading}
            />
        </div>
    );
}
