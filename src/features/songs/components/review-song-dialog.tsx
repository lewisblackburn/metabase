import ReviewDialog, { ReviewFormValues } from '@/components/shared/review-dialog';
import {
    User_Song_Statuses_Constraint,
    User_Song_Statuses_Update_Column,
    useInsertUserSongStatusMutation
} from '@/generated/graphql';
import { useUserId } from '@nhost/nextjs';
import { useQueryClient } from '@tanstack/react-query';

import { useSong } from './song-provider';
import { toast } from 'sonner';

export default function ReviewSongDialog() {
    const userId = useUserId();
    const queryClient = useQueryClient();
    const { song } = useSong();

    const { mutateAsync: insertUserSongStatus } = useInsertUserSongStatusMutation({
        onError: (error) => toast.error((error as Error).message)
    });

    if (!song) return null;

    const defaultValues = {
        rating: song.user_song_statuses[0]?.rating || 0,
        review: song.user_song_statuses[0]?.review || ''
    };

    const handleSubmitReview = async (reviewData: ReviewFormValues) => {
        await insertUserSongStatus(
            {
                object: {
                    song_id: song.id,
                    rating: reviewData.rating,
                    review: !!reviewData?.review ? reviewData.review : null
                },
                on_conflict: {
                    constraint: User_Song_Statuses_Constraint.UserSongStatusesPkey,
                    update_columns: [User_Song_Statuses_Update_Column.Rating, User_Song_Statuses_Update_Column.Review],
                    where: {
                        user_id: { _eq: userId },
                        song_id: { _eq: song.id }
                    }
                }
            },
            {
                onSuccess: () => {
                    toast.success('Song reviewed successfully');
                    queryClient.invalidateQueries({ queryKey: ['song', song?.id] });
                    queryClient.invalidateQueries({ queryKey: ['GetSongs.infinite'] });
                }
            }
        );
    };

    const handleDeleteReview = async () => {
        await insertUserSongStatus(
            {
                object: {
                    song_id: song.id,
                    rating: null,
                    review: null
                },
                on_conflict: {
                    constraint: User_Song_Statuses_Constraint.UserSongStatusesPkey,
                    update_columns: [User_Song_Statuses_Update_Column.Rating, User_Song_Statuses_Update_Column.Review],
                    where: {
                        user_id: { _eq: userId },
                        song_id: { _eq: song.id }
                    }
                }
            },
            {
                onSuccess: () => {
                    toast.success('Song review deleted successfully');
                    queryClient.invalidateQueries({ queryKey: ['song', song?.id] });
                }
            }
        );
    };

    return (
        <ReviewDialog
            defaultValues={defaultValues}
            onSubmitReview={handleSubmitReview}
            onDeleteReview={handleDeleteReview}
        />
    );
}
