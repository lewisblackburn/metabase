'use client';

import { useState } from 'react';

import { BUCKET, BucketType } from '@/constants/media.constant';
import { useGetMovieMediaQuery, useInsertMovieMediaMutation, useUpdateMovieMutation } from '@/generated/graphql';
import { useFileUpload, useNhostClient } from '@nhost/nextjs';
import { useQueryClient } from '@tanstack/react-query';

import { MediaTable } from '../../../../components/shared/media-table';
import { UploadArea } from '../../../../components/shared/upload-area';
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

    const [previewFile, setPreviewFile] = useState<{ file: File; preview: string } | null>(null);
    const [localError, setLocalError] = useState<{ message: string } | null>(null);

    const handleUpload = async (bucketId: BucketType) => {
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
            setPreviewFile(null);
            toast.success('Image uploaded successfully');
        } catch (err: any) {
            setLocalError({ message: err.message || 'Failed to upload image. Please try again.' });
            toast.error('Failed to upload image');
            if (previewFile) URL.revokeObjectURL(previewFile.preview);
            setPreviewFile(null);
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
            <UploadArea
                onUpload={handleUpload}
                previewFile={previewFile}
                setPreviewFile={setPreviewFile}
                isUploading={isUploading}
                progress={progress}
                error={localError || (error ? { message: error.message } : null)}
            />
            <MediaTable
                media={media?.movie_media ?? []}
                onDelete={handleDelete}
                onSetPrimary={handleSetPrimary}
                isLoading={isLoading}
            />
        </div>
    );
}
