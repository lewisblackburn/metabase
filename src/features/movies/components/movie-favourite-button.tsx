import {
    Movie_Favourites_Constraint,
    useDeleteMovieFavouriteMutation,
    useInsertMovieFavouriteMutation
} from '@/generated/graphql';
import { queryClient } from '@/lib/query-client';
import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import { useUserId } from '@nhost/nextjs';

import { useMovie } from './movie-provider';
import { Heart } from 'lucide-react';

export default function MovieFavouriteButton() {
    const userId = useUserId();
    const { movie } = useMovie();
    const { mutateAsync: insertMovieFavourite } = useInsertMovieFavouriteMutation();
    const { mutateAsync: deleteMovieFavourite } = useDeleteMovieFavouriteMutation();

    if (!movie) return null;

    const isFavourited = movie.favourited;

    const handleFavourite = async () => {
        await insertMovieFavourite({
            object: {
                movie_id: movie.id
            },
            on_conflict: {
                constraint: Movie_Favourites_Constraint.MovieFavouritesPkey,
                update_columns: []
            }
        });
    };

    const handleUnfavourite = async () => {
        await deleteMovieFavourite({
            where: {
                movie_id: {
                    _eq: movie.id
                },
                user_id: {
                    _eq: userId
                }
            }
        });
    };

    const handleClick = async () => {
        if (isFavourited) await handleUnfavourite();
        else await handleFavourite();

        queryClient.invalidateQueries({ queryKey: ['movie', movie.id] });
    };
    return (
        <Button
            variant='outline'
            className={cn({ 'fill-red-500 text-red-500': isFavourited })}
            onClick={async () => await handleClick()}>
            <Heart className={cn({ 'fill-red-500 text-red-500': isFavourited })} />
            {isFavourited ? 'Favourited' : 'Favourite'}
        </Button>
    );
}
