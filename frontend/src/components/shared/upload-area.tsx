'use client';

import { useState } from 'react';

import ImageWithSkeleton from '@/components/shared/image-with-skeleton';
import { BUCKET, BucketType } from '@/constants/media.constant';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Progress } from '@/registry/new-york-v4/ui/progress';

import { AlertCircleIcon, ImageIcon, XIcon } from 'lucide-react';
import { UploadIcon } from 'lucide-react';

const maxSizeMB = 5;
const acceptedFileTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

interface UploadAreaProps {
    onUpload: (bucketId: BucketType) => Promise<void>;
    previewFile: { file: File; preview: string } | null;
    setPreviewFile: (file: { file: File; preview: string } | null) => void;
    isUploading: boolean;
    progress: number | null;
    error: { message: string } | null;
}

export function UploadArea({ onUpload, previewFile, setPreviewFile, isUploading, progress, error }: UploadAreaProps) {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragEnter = () => setIsDragging(true);
    const handleDragLeave = () => setIsDragging(false);
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(false);

        if (isUploading) return;

        const droppedFiles = Array.from(event.dataTransfer.files);
        const validFile = droppedFiles.find(
            (file) => acceptedFileTypes.includes(file.type) && file.size <= maxSizeMB * 1024 * 1024
        );

        if (validFile) {
            setPreviewFile({
                file: validFile,
                preview: URL.createObjectURL(validFile)
            });
        }
    };

    const openFileDialog = () => {
        if (isUploading) return;

        const input = document.createElement('input');
        input.type = 'file';
        input.accept = acceptedFileTypes.join(',');

        input.onchange = (event) => {
            const selectedFile = (event.target as HTMLInputElement).files?.[0];
            if (
                selectedFile &&
                acceptedFileTypes.includes(selectedFile.type) &&
                selectedFile.size <= maxSizeMB * 1024 * 1024
            ) {
                setPreviewFile({
                    file: selectedFile,
                    preview: URL.createObjectURL(selectedFile)
                });
            }
        };

        input.click();
    };

    const removeFile = () => {
        if (previewFile) {
            URL.revokeObjectURL(previewFile.preview);
            setPreviewFile(null);
        }
    };

    return (
        <div className='flex flex-col gap-2'>
            <div
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                data-dragging={isDragging || undefined}
                data-files={previewFile !== null || undefined}
                className='border-input data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors not-data-[files]:justify-center has-[input:focus]:ring-[3px]'>
                <input className='sr-only' aria-label='Upload image file' />
                {previewFile ? (
                    <div className='flex w-full flex-col gap-3'>
                        <div className='flex items-center justify-between gap-2'>
                            <h3 className='truncate text-sm font-medium'>Selected File</h3>
                            <Button variant='outline' size='sm' onClick={openFileDialog}>
                                <UploadIcon className='-ms-0.5 size-3.5 opacity-60' aria-hidden='true' />
                                Change file
                            </Button>
                        </div>

                        <div className='grid grid-cols-1 gap-4'>
                            <div className='bg-accent relative mx-auto aspect-square max-w-[200px] rounded-md'>
                                <ImageWithSkeleton
                                    src={previewFile.preview}
                                    alt={previewFile.file.name}
                                    width={200}
                                    height={200}
                                    className='size-full rounded-[inherit] object-cover'
                                />
                                <Button
                                    onClick={removeFile}
                                    size='icon'
                                    className='border-background focus-visible:border-background absolute -top-2 -right-2 size-6 rounded-full border-2 shadow-none'
                                    aria-label='Remove image'>
                                    <XIcon className='size-3.5' />
                                </Button>
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <Button onClick={() => onUpload(BUCKET.POSTER)} className='flex-1' disabled={isUploading}>
                                Upload as Poster
                            </Button>
                            <Button onClick={() => onUpload(BUCKET.BACKDROP)} className='flex-1' disabled={isUploading}>
                                Upload as Backdrop
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className='flex flex-col items-center justify-center px-4 py-3 text-center'>
                        <div
                            className='bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border'
                            aria-hidden='true'>
                            <ImageIcon className='size-4 opacity-60' />
                        </div>
                        <p className='mb-1.5 text-sm font-medium'>Drop your image here</p>
                        <p className='text-muted-foreground text-xs'>SVG, PNG, JPG or GIF (max. {maxSizeMB}MB)</p>
                        <Button variant='outline' className='mt-4' onClick={openFileDialog}>
                            <UploadIcon className='-ms-1 opacity-60' aria-hidden='true' />
                            Select image
                        </Button>
                    </div>
                )}
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
        </div>
    );
}
