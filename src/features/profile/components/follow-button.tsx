import ActionButton from '@/components/shared/action-button';
import {
    Follows_Constraint,
    Follows_Update_Column,
    useDeleteFollowMutation,
    useInsertFollowMutation
} from '@/generated/graphql';
import { useUserId } from '@nhost/nextjs';
import { useQueryClient } from '@tanstack/react-query';

import { UserMinus, UserPlus } from 'lucide-react';
import { toast } from 'sonner';

interface FollowButtonProps {
    userId: string;
    isFollowing: boolean;
}

export default function FollowButton({ userId, isFollowing }: FollowButtonProps) {
    const currentUserId = useUserId();
    const queryClient = useQueryClient();

    const { mutateAsync: insertFollow } = useInsertFollowMutation({
        onSuccess: () => {
            toast.success('Followed successfully');
            queryClient.invalidateQueries({ queryKey: ['profile', userId] });
        },
        onError: (error) => toast.error((error as Error).message)
    });

    const { mutateAsync: deleteFollow } = useDeleteFollowMutation({
        onSuccess: () => {
            toast.success('Unfollowed successfully');
            queryClient.invalidateQueries({ queryKey: ['profile', userId] });
        },
        onError: (error) => toast.error((error as Error).message)
    });

    const handleClick = async () => {
        if (!currentUserId) return;

        if (isFollowing) {
            await deleteFollow({
                followee_id: userId,
                follower_id: currentUserId
            });
        } else {
            await insertFollow({
                object: {
                    followee_id: userId
                },
                on_conflict: {
                    constraint: Follows_Constraint.FollowsPkey,
                    update_columns: [Follows_Update_Column.FolloweeId]
                }
            });
        }
    };

    return (
        <ActionButton size='sm' icon={isFollowing ? UserMinus : UserPlus} onClick={handleClick}>
            {isFollowing ? 'Unfollow' : 'Follow'}
        </ActionButton>
    );
}
