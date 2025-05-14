'use client';

import { useRef, useState } from 'react';

import ImageWithSkeleton from '@/components/shared/image-with-skeleton';
import { BUCKET } from '@/constants/media.constant';
import { useGetFilesQuery, useUpdateUserMutation } from '@/generated/graphql';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Progress } from '@/registry/new-york-v4/ui/progress';
import { useFileUpload, useNhostClient, useUserAvatarUrl, useUserId } from '@nhost/nextjs';
import { useQueryClient } from '@tanstack/react-query';

import { CircleUserRoundIcon, X } from 'lucide-react';
import { toast } from 'sonner';

const AVATAR_SIZE = 450;
const DEFAULT_AVATAR_URL = 'https://placehold.co/450x450.png';

export default function UploadAvatar() {
    const userId = useUserId();
    const avatarUrl = useUserAvatarUrl();
    const nhost = useNhostClient();
    const queryClient = useQueryClient();
    const { add, destroy, error, progress, upload, name, isUploading } = useFileUpload();
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const { data: avatarFile } = useGetFilesQuery(
        {
            where: {
                _and: [
                    {
                        uploadedByUserId: {
                            _eq: userId
                        }
                    },
                    {
                        bucketId: {
                            _eq: BUCKET.AVATAR
                        }
                    }
                ]
            },
            limit: 1
        },
        {
            queryKey: ['avatarFile', userId]
        }
    );
    const avatarFileId = avatarFile?.files[0]?.id || null;

    const { mutateAsync: updateUser } = useUpdateUserMutation({
        onSuccess: () => {
            toast.success('Avatar updated successfully');
            queryClient.invalidateQueries({ queryKey: ['user', userId] });
            queryClient.invalidateQueries({ queryKey: ['avatarFile', userId] });
        },
        onError: (error: Error) => {
            toast.error(error.message || 'Failed to update avatar');
            setPreviewUrl(null);
        }
    });

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file || isUploading) return;

        try {
            setPreviewUrl(URL.createObjectURL(file));

            if (avatarFileId) {
                await nhost.storage.delete({ fileId: avatarFileId });
            }

            await add({ file });
            const result = await upload({ bucketId: BUCKET.AVATAR });

            if (!result?.id) {
                throw new Error('Upload failed - no file ID returned');
            }

            await updateUser({
                id: userId!,
                set: {
                    avatarUrl: nhost.storage.getPublicUrl({ fileId: result.id })
                }
            });
        } catch (err) {
            console.error('Error uploading file:', err);
            toast.error('Failed to upload avatar');
            setPreviewUrl(null);
            inputRef.current?.value && (inputRef.current.value = '');
        }
    };

    const handleRemoveAvatar = async () => {
        if (isUploading) return;

        try {
            if (avatarFileId) {
                await nhost.storage.delete({ fileId: avatarFileId });
            }

            await updateUser({
                id: userId!,
                set: { avatarUrl: DEFAULT_AVATAR_URL }
            });

            await destroy();
            setPreviewUrl(null);
            inputRef.current?.value && (inputRef.current.value = '');
        } catch (err) {
            console.error('Error removing avatar:', err);
            toast.error('Failed to remove avatar');
        }
    };

    const openFileDialog = () => {
        !isUploading && inputRef.current?.click();
    };

    const renderAvatar = () => {
        const imageUrl = previewUrl || avatarUrl;

        if (imageUrl) {
            return (
                <ImageWithSkeleton
                    className='size-full object-cover'
                    src={imageUrl}
                    alt={previewUrl ? 'Preview of uploaded image' : 'Current avatar'}
                    width={AVATAR_SIZE}
                    height={AVATAR_SIZE}
                />
            );
        }

        return (
            <div aria-hidden='true' className='flex items-center justify-center'>
                <CircleUserRoundIcon className='size-8 opacity-60' />
            </div>
        );
    };

    return (
        <div className='flex flex-col items-start gap-2'>
            <div className='relative inline-flex'>
                <Button
                    variant='outline'
                    className='relative size-16 overflow-hidden p-0 shadow-none'
                    onClick={openFileDialog}
                    disabled={isUploading}
                    aria-label={previewUrl ? 'Change image' : 'Upload image'}>
                    {renderAvatar()}
                </Button>
                {(previewUrl || avatarUrl) && !isUploading && (
                    <Button
                        onClick={handleRemoveAvatar}
                        size='icon'
                        className='border-background focus-visible:border-background absolute -top-2 -right-2 size-6 rounded-full border-2 shadow-none'
                        aria-label='Remove image'>
                        <X className='size-3.5' />
                    </Button>
                )}
                <input
                    ref={inputRef}
                    type='file'
                    accept='image/*'
                    onChange={handleFileChange}
                    className='sr-only'
                    aria-label='Upload image file'
                    tabIndex={-1}
                    disabled={isUploading}
                />
            </div>
            {name && <p className='text-muted-foreground text-xs'>{name}</p>}
            {typeof progress === 'number' && progress > 0 && progress < 100 && (
                <div className='w-full max-w-[200px]'>
                    <Progress value={progress} className='h-1' />
                </div>
            )}
            {error && (
                <p className='text-destructive text-xs' role='alert'>
                    {error.message}
                </p>
            )}
        </div>
    );
}
