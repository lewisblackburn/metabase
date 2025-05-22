'use client';

import { useRouter } from 'next/navigation';

import { useDeleteUserMutation } from '@/generated/graphql';
import { Button } from '@/registry/new-york-v4/ui/button';
import { useNhostClient } from '@nhost/nextjs';
import { useUserId } from '@nhost/nextjs';
import { useQueryClient } from '@tanstack/react-query';

import { setSettingsDialogOpenState } from '../../store/settings.slice';
import { AlertTriangle, Trash } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';

export default function DeleteAccount() {
    const router = useRouter();
    const nhost = useNhostClient();
    const queryClient = useQueryClient();
    const userId = useUserId();
    const dispatch = useDispatch();
    const { mutateAsync: deleteUser } = useDeleteUserMutation({
        onSuccess: () => {
            queryClient.clear();
            nhost.auth.signOut();
            router.push('/authentication/login');
            toast.success('Account deleted successfully');
        },
        onError: (error: Error) => {
            toast.error(error.message);
        }
    });

    const handleDelete = async () => {
        if (!userId) return;

        if (
            !confirm(
                'Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently deleted.'
            )
        ) {
            return;
        }

        await deleteUser({ id: userId });

        dispatch(setSettingsDialogOpenState(false));
    };

    return (
        <div className='border-destructive/20 bg-destructive/5 flex items-center justify-between rounded-lg border p-4'>
            <div className='flex items-center gap-2'>
                <AlertTriangle className='text-destructive h-4 w-4' />
                <div>
                    <h3 className='text-destructive text-sm font-medium'>Delete Account</h3>
                    <p className='text-muted-foreground text-xs'>Permanently delete your account and all data</p>
                </div>
            </div>
            <Button
                variant='ghost'
                size='sm'
                className='text-destructive hover:bg-destructive/10 hover:text-destructive'
                onClick={handleDelete}>
                <Trash className='h-4 w-4' />
            </Button>
        </div>
    );
}
