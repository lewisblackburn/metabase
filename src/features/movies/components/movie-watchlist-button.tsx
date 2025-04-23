import {
    Movie_Watchlist_Constraint,
    useDeleteMovieWatchlistMutation,
    useInsertMovieWatchlistMutation
} from '@/generated/graphql';
import { queryClient } from '@/lib/query-client';
import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import { useUserId } from '@nhost/nextjs';

import { useMovie } from './movie-provider';
import { Bookmark, Heart, Loader2 } from 'lucide-react';

export default function MovieWatchlistButton() {
    const userId = useUserId();
    const { movie } = useMovie();
    const { mutateAsync: insertMovieWatchlist, isPending: insertWatchlistPending } = useInsertMovieWatchlistMutation();
    const { mutateAsync: deleteMovieWatchlist, isPending: deleteWatchlistPending } = useDeleteMovieWatchlistMutation();

    const isLoading = insertWatchlistPending || deleteWatchlistPending;

    if (!movie) return null;

    const isWatchlisted = movie.watchlisted;

    const handleWatchlist = async () => {
        await insertMovieWatchlist({
            object: {
                movie_id: movie.id
            },
            on_conflict: {
                constraint: Movie_Watchlist_Constraint.MovieWatchlistPkey,
                update_columns: []
            }
        });
    };

    const handleUnwatchlist = async () => {
        await deleteMovieWatchlist({
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
        if (isWatchlisted) await handleUnwatchlist();
        else await handleWatchlist();

        queryClient.invalidateQueries({ queryKey: ['movie', movie.id] });
    };
    return (
        <Button
            variant='outline'
            size='sm'
            className={cn({ 'fill-blue-500 text-blue-500': isWatchlisted })}
            disabled={isLoading}
            onClick={async () => await handleClick()}>
            {isLoading ? (
                <Loader2 className='size-4 animate-spin' />
            ) : (
                <Bookmark className={cn({ 'fill-blue-500 text-blue-500': isWatchlisted })} />
            )}
            {isWatchlisted ? 'Watchlisted' : 'Watchlist'}
        </Button>
    );
}
