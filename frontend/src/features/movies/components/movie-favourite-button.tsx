import ActionButton from '@/components/shared/action-button';
import {
    User_Movie_Statuses_Constraint,
    User_Movie_Statuses_Update_Column,
    useInsertUserMovieStatusMutation
} from '@/generated/graphql';
import { cn } from '@/lib/utils';
import { useUserId } from '@nhost/nextjs';
import { useQueryClient } from '@tanstack/react-query';

import { useMovie } from './movie-provider';
import { Heart } from 'lucide-react';
import { toast } from 'sonner';

export default function MovieFavouriteButton() {
    const userId = useUserId();
    const queryClient = useQueryClient();
    const { movie } = useMovie();

    const { mutateAsync: insertUserMovieStatus } = useInsertUserMovieStatusMutation({
        onSuccess: () => {
            toast.success('Movie status updated successfully');
            queryClient.invalidateQueries({ queryKey: ['movie', movie?.id] });
            queryClient.invalidateQueries({ queryKey: ['GetMovies.infinite'] });
        },
        onError: (error) => toast.error((error as Error).message)
    });

    if (!movie) return null;

    const isFavourited = movie.user_movie_statuses[0]?.favourited || false;

    const handleClick = async () => {
        await insertUserMovieStatus({
            object: {
                movie_id: movie.id,
                favourited: !isFavourited
            },
            on_conflict: {
                constraint: User_Movie_Statuses_Constraint.UserMovieStatusesPkey,
                update_columns: [User_Movie_Statuses_Update_Column.Favourited],
                where: {
                    user_id: { _eq: userId },
                    movie_id: { _eq: movie.id }
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
