import ActionButton from '@/components/shared/action-button';
import {
    User_Song_Statuses_Constraint,
    User_Song_Statuses_Update_Column,
    useInsertUserSongStatusMutation
} from '@/generated/graphql';
import { cn } from '@/lib/utils';
import { useUserId } from '@nhost/nextjs';
import { useQueryClient } from '@tanstack/react-query';

import { useSong } from './song-provider';
import { Heart } from 'lucide-react';
import { toast } from 'sonner';

export default function SongFavouriteButton() {
    const userId = useUserId();
    const queryClient = useQueryClient();
    const { song } = useSong();

    const { mutateAsync: insertUserSongStatus } = useInsertUserSongStatusMutation({
        onSuccess: () => {
            toast.success('Song status updated successfully');
            queryClient.invalidateQueries({ queryKey: ['song', song?.id] });
            queryClient.invalidateQueries({ queryKey: ['GetSongs.infinite'] });
        },
        onError: (error) => toast.error((error as Error).message)
    });

    if (!song) return null;

    const isFavourited = song.user_song_statuses[0]?.favourited || false;

    const handleClick = async () => {
        await insertUserSongStatus({
            object: {
                song_id: song.id,
                favourited: !isFavourited
            },
            on_conflict: {
                constraint: User_Song_Statuses_Constraint.UserSongStatusesPkey,
                update_columns: [User_Song_Statuses_Update_Column.Favourited],
                where: {
                    user_id: { _eq: userId },
                    song_id: { _eq: song.id }
                }
            }
        });
    };

    return (
        <ActionButton
            size='sm'
            icon={Heart}
            iconClassName={cn({ 'fill-red-500 text-red-500': isFavourited })}
            onClick={async () => await handleClick()}>
            {isFavourited ? 'Favourited' : 'Favourite'}
        </ActionButton>
    );
}
