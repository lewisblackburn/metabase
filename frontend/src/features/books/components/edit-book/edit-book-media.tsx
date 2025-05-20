'use client';

import { BUCKET, BucketType } from '@/constants/media.constant';
import { useGetBookMediaQuery, useInsertBookMediaMutation, useUpdateBookMutation } from '@/generated/graphql';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Progress } from '@/registry/new-york-v4/ui/progress';
import { useFileUpload, useNhostClient } from '@nhost/nextjs';
import { useQueryClient } from '@tanstack/react-query';

import { MediaTable } from '../../../../components/shared/media-table';
import { AlertCircleIcon } from 'lucide-react';
import { toast } from 'sonner';

interface EditBookMediaProps {
    bookId: string;
}

export default function EditBookMedia({ bookId }: EditBookMediaProps) {
    const nhost = useNhostClient();
    const queryClient = useQueryClient();
    const { add, upload, progress, isUploading, error } = useFileUpload();
    const { data: media, isLoading } = useGetBookMediaQuery(
        {
            where: {
                book_id: {
                    _eq: bookId
                }
            }
        },
        {
            queryKey: ['book-media', bookId],
            enabled: !!bookId
        }
    );
    const insertMediaMutation = useInsertBookMediaMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['book-media', bookId] });
        }
    });
    const updateBookMutation = useUpdateBookMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['book', bookId] });
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
                                book_id: bookId,
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
            queryClient.invalidateQueries({ queryKey: ['book-media', bookId] });
            toast.success('Image deleted successfully');
        } catch (err) {
            toast.error('Failed to delete image');
        }
    };

    const handleSetPrimary = async (fileId: string, bucketId: BucketType) => {
        try {
            const publicUrl = nhost.storage.getPublicUrl({ fileId });
            await updateBookMutation.mutateAsync({
                pk_columns: {
                    id: bookId
                },
                set: {
                    cover: publicUrl
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
                    onClick={() => handleFileSelect(BUCKET.COVER)}
                    disabled={isUploading}
                    variant='outline'
                    size='sm'>
                    Upload Cover
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
                media={media?.book_media || []}
                onDelete={handleDelete}
                onSetPrimary={handleSetPrimary}
                isLoading={isLoading}
            />
        </div>
    );
}
