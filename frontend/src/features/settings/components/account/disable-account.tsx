'use client';

import { useRouter } from 'next/navigation';

import { useDisableUserMutation } from '@/generated/graphql';
import { Button } from '@/registry/new-york-v4/ui/button';
import { useNhostClient } from '@nhost/nextjs';
import { useUserId } from '@nhost/nextjs';
import { useQueryClient } from '@tanstack/react-query';

import { setSettingsDialogOpenState } from '../../store/settings.slice';
import { AlertTriangle, PowerOff } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';

export default function DisableAccount() {
    const router = useRouter();
    const nhost = useNhostClient();
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const userId = useUserId();
    const { mutateAsync: disableUser } = useDisableUserMutation({
        onSuccess: () => {
            queryClient.clear();
            nhost.auth.signOut();
            router.push('/authentication/login');
            toast.success('Account disabled successfully');
        },
        onError: (error: Error) => {
            toast.error(error.message);
        }
    });

    const handleDisable = async () => {
        if (!userId) return;

        if (
            !confirm(
                'Are you sure you want to disable your account? You will be logged out and will not be able to access your account until it is re-enabled by an administrator.'
            )
        ) {
            return;
        }

        await disableUser({ id: userId });

        dispatch(setSettingsDialogOpenState(false));
    };

    return (
        <div className='flex items-center justify-between rounded-lg border border-blue-200 bg-blue-50 p-4'>
            <div className='flex items-center gap-2'>
                <AlertTriangle className='h-4 w-4 text-blue-600' />
                <div>
                    <h3 className='text-sm font-medium text-blue-600'>Disable Account</h3>
                    <p className='text-muted-foreground text-xs'>Temporarily disable your account</p>
                </div>
            </div>
            <Button
                variant='ghost'
                size='sm'
                className='text-blue-600 hover:bg-blue-100 hover:text-blue-600'
                onClick={handleDisable}>
                <PowerOff className='h-4 w-4' />
            </Button>
        </div>
    );
}
