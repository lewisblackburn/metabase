import RatingSelection from '@/components/shared/rating-selection';
import {
    Movie_Ratings,
    Movie_Ratings_Constraint,
    Movie_Ratings_Update_Column,
    useDeleteMovieRatingMutation,
    useInsertMovieRatingMutation
} from '@/generated/graphql';
import { queryClient } from '@/lib/query-client';
import { useUserId } from '@nhost/nextjs';

import { useMovie } from './movie-provider';
import { toast } from 'sonner';

export default function MovieRatingSlider() {
    const userId = useUserId();
    const { movie } = useMovie();
    const { mutateAsync: insertMovieRating, isPending: insertRatingPending } = useInsertMovieRatingMutation({
        onSuccess: () => {
            toast.success('Rating saved successfully');
        }
    });
    const { mutateAsync: deleteMovieRating, isPending: deleteRatingPending } = useDeleteMovieRatingMutation({
        onSuccess: () => {
            toast.success('Rating removed successfully');
        }
    });

    const isLoading = insertRatingPending || deleteRatingPending;

    if (!movie) return null;

    const handleRate = async (rating: Movie_Ratings['rating']) => {
        await insertMovieRating({
            object: {
                movie_id: movie.id,
                rating
            },
            on_conflict: {
                constraint: Movie_Ratings_Constraint.MovieRatingsMovieIdUserIdKey,
                update_columns: [Movie_Ratings_Update_Column.Rating]
            }
        });
    };

    const handleUnrate = async () => {
        await deleteMovieRating({
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

    const handleChange = async (rating: Movie_Ratings['rating']) => {
        if (rating == 0) await handleUnrate();
        else await handleRate(rating);
        queryClient.invalidateQueries({ queryKey: ['movie', movie.id] });
    };

    return <RatingSelection initialRating={movie.user_rating || 0} onRatingChange={handleChange} />;
}
