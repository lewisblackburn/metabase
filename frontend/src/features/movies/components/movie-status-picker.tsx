'use client';

import StatusPickerButton from '@/components/shared/status-picker.button';
import {
    User_Movie_Status_Types_Enum,
    User_Movie_Statuses_Constraint,
    User_Movie_Statuses_Update_Column,
    useInsertUserMovieStatusMutation
} from '@/generated/graphql';
import { useUserId } from '@nhost/nextjs';
import { useQueryClient } from '@tanstack/react-query';

import { userMovieStatusOptions } from '../constants/movie-enums';
import { useMovie } from './movie-provider';
import { toast } from 'sonner';

export default function MovieStatusPicker() {
    const userId = useUserId();
    const queryClient = useQueryClient();
    const { movie, status: userMovieStatus, isLoading } = useMovie();

    const { mutateAsync: insertUserMovieStatus } = useInsertUserMovieStatusMutation({
        onSuccess: () => {
            toast.success('Movie status updated successfully');
            queryClient.invalidateQueries({ queryKey: ['movie-status', movie?.id, userId] });
        },
        onError: (error) => toast.error((error as Error).message)
    });

    if (!movie || isLoading) return null;

    const initialStatus = userMovieStatus?.status || undefined;

    const handleStatusChange = async (status: User_Movie_Status_Types_Enum | null) => {
        await insertUserMovieStatus({
            object: {
                movie_id: movie.id,
                status: status
            },
            on_conflict: {
                constraint: User_Movie_Statuses_Constraint.UserMovieStatusesPkey,
                update_columns: [User_Movie_Statuses_Update_Column.Status],
                where: {
                    user_id: { _eq: userId },
                    movie_id: { _eq: movie.id }
                }
            }
        });
    };

    return (
        <StatusPickerButton<User_Movie_Status_Types_Enum>
            statuses={userMovieStatusOptions}
            size='sm'
            defaultStatus={initialStatus}
            onStatusChange={handleStatusChange}
            variant='outline'
        />
    );
}
