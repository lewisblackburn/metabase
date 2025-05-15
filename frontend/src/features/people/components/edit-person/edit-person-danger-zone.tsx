'use client';

import { useRouter } from 'next/navigation';

import { setEditDialogOpenState } from '@/features/edit-dailog/store/edit-dialog.slice';
import { useDeletePersonMutation } from '@/generated/graphql';
import { Button } from '@/registry/new-york-v4/ui/button';
import { useNhostClient } from '@nhost/nextjs';
import { useQueryClient } from '@tanstack/react-query';

import { AlertTriangle, Trash } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';

interface EditPersonDangerZoneProps {
    personId: string;
}

export default function EditPersonDangerZone({ personId }: EditPersonDangerZoneProps) {
    const router = useRouter();
    const nhost = useNhostClient();
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const { mutateAsync: deletePerson } = useDeletePersonMutation({
        onMutate: () => {
            nhost.setRole('moderator');
        },
        onSuccess: () => {
            toast.success('Person deleted successfully');
            queryClient.invalidateQueries({ queryKey: ['GetPeople.infinite'] });
            dispatch(setEditDialogOpenState(false));
            router.push('/dashboard/people');
        },
        onError: (error: Error) => {
            toast.error(error.message || 'Failed to delete person');
        },
        onSettled: () => {
            nhost.setRole('user');
        }
    });

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this person? This action cannot be undone.')) return;
        await deletePerson({ where: { id: { _eq: personId } } });
    };

    return (
        <div className='space-y-6'>
            <div className='border-destructive/50 bg-destructive/10 rounded-lg border p-4'>
                <div className='text-destructive flex items-center gap-2'>
                    <AlertTriangle className='h-5 w-5' />
                    <h3 className='font-semibold'>Danger Zone</h3>
                </div>
                <p className='text-muted-foreground mt-2 text-sm'>
                    Once you delete a person, there is no going back. Please be certain.
                </p>
                <div className='mt-4'>
                    <Button variant='destructive' onClick={handleDelete}>
                        <Trash className='mr-2 h-4 w-4' />
                        Delete Person
                    </Button>
                </div>
            </div>
        </div>
    );
}
