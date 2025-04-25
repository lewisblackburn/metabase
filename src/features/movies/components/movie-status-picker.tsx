'use client';

import StatusPickerButton from '@/components/shared/status-picker.button';
import {
    DEFAULT_USER_OBJECT_CATEGORY_ICONS,
    MOVIE_OBJECT_STATUS_OPTIONS,
    USER_OBJECT_STATUS
} from '@/constants/user-object-statuses.constant';
import {
    User_Movie_Status_Constraint,
    User_Movie_Status_Update_Column,
    useInsertUserMovieStatusMutation
} from '@/generated/graphql';
import { useUserId } from '@nhost/nextjs';
import { useQueryClient } from '@tanstack/react-query';

import { useMovie } from './movie-provider';
import { toast } from 'sonner';

type UserMovieStatus = keyof (typeof USER_OBJECT_STATUS)['movie'] | keyof (typeof USER_OBJECT_STATUS)['common'];

export default function MovieStatusPicker() {
    const userId = useUserId();
    const queryClient = useQueryClient();
    const { movie } = useMovie();

    const { mutateAsync: insertUserMovieStatus } = useInsertUserMovieStatusMutation({
        onSuccess: () => {
            toast.success('Movie status updated successfully');
            queryClient.invalidateQueries({ queryKey: ['movie', movie?.id] });
        },
        onError: (error) => toast.error((error as Error).message)
    });

    if (!movie) return null;

    const initialStatus = (movie.user_movie_statuses[0]?.status as UserMovieStatus) || undefined;

    const handleStatusChange = async (status: string | null) => {
        await insertUserMovieStatus({
            object: {
                movie_id: movie.id,
                status: status as UserMovieStatus
            },
            on_conflict: {
                constraint: User_Movie_Status_Constraint.UserMovieStatusPkey,
                update_columns: [User_Movie_Status_Update_Column.Status],
                where: {
                    user_id: { _eq: userId },
                    movie_id: { _eq: movie.id }
                }
            }
        });
    };

    return (
        <StatusPickerButton
            defaultIcon={DEFAULT_USER_OBJECT_CATEGORY_ICONS.movie}
            statuses={MOVIE_OBJECT_STATUS_OPTIONS}
            size='sm'
            defaultValue={initialStatus}
            onStatusChange={handleStatusChange}
            variant='outline'
        />
    );
}
