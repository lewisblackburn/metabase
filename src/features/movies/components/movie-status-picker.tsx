'use client';

import StatusPickerButton from '@/components/shared/status-picker.button';
import {
    User_Movie_Status_Constraint,
    User_Movie_Status_Update_Column,
    Verb_Types_Enum,
    useInsertUserMovieStatusMutation
} from '@/generated/graphql';
import { enumToOptions } from '@/utils/enum-to-options';
import { useUserId } from '@nhost/nextjs';
import { useQueryClient } from '@tanstack/react-query';

import { useMovie } from './movie-provider';
import { toast } from 'sonner';

const hiddenVerbs = [
    Verb_Types_Enum.Favourited,
    Verb_Types_Enum.Unfavourited,
    Verb_Types_Enum.Nulled,
    Verb_Types_Enum.Reviewed
];
const allVerbOptions = enumToOptions(Verb_Types_Enum);
export const movieStatusMenuOptions = allVerbOptions.filter((opt) => !hiddenVerbs.includes(opt.value));

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

    const initialStatus = movie.user_movie_statuses[0]?.status || undefined;

    const handleStatusChange = async (status: Verb_Types_Enum | null) => {
        await insertUserMovieStatus({
            object: {
                movie_id: movie.id,
                status: status
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
            statuses={movieStatusMenuOptions}
            size='sm'
            defaultValue={initialStatus}
            onStatusChange={handleStatusChange}
            variant='outline'
        />
    );
}
