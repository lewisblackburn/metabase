'use client';

import { useRouter } from 'next/navigation';

import { setEditDialogOpenState, toggleEditDialogOpenState } from '@/features/edit-dailog/store/edit-dialog.slice';
import { setActiveItemId } from '@/features/settings/store/settings.slice';
import { Object_Types_Enum, useDeleteMovieMutation } from '@/generated/graphql';
import { Button } from '@/registry/new-york-v4/ui/button';
import { useNhostClient } from '@nhost/nextjs';
import { useQueryClient } from '@tanstack/react-query';

import { AlertTriangle, Trash } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';

interface EditMovieDangerZoneProps {
    movieId: string;
}

export default function EditMovieDangerZone({ movieId }: EditMovieDangerZoneProps) {
    const router = useRouter();
    const nhost = useNhostClient();
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const { mutateAsync: deleteMovie } = useDeleteMovieMutation({
        onMutate: () => {
            nhost.setRole('moderator');
        },
        onSuccess: () => {
            toast.success('Movie deleted successfully');
            queryClient.invalidateQueries({ queryKey: ['GetMovies.infinite'] });
            dispatch(setEditDialogOpenState(false));
            router.push('/dashboard/movies');
        },
        onError: (error: Error) => {
            toast.error(error.message || 'Failed to delete movie');
        },
        onSettled: () => {
            nhost.setRole('user');
        }
    });

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this movie? This action cannot be undone.')) return;
        await deleteMovie({ id: movieId });
    };

    return (
        <div className='space-y-6'>
            <div className='border-destructive/50 bg-destructive/10 rounded-lg border p-4'>
                <div className='text-destructive flex items-center gap-2'>
                    <AlertTriangle className='h-5 w-5' />
                    <h3 className='font-semibold'>Danger Zone</h3>
                </div>
                <p className='text-muted-foreground mt-2 text-sm'>
                    Once you delete a movie, there is no going back. Please be certain.
                </p>
                <div className='mt-4'>
                    <Button variant='destructive' onClick={handleDelete}>
                        <Trash className='mr-2 h-4 w-4' />
                        Delete Movie
                    </Button>
                </div>
            </div>
        </div>
    );
}
