import ReviewDialog, { ReviewFormValues } from '@/components/shared/review-dialog';
import {
    User_Movie_Statuses_Constraint,
    User_Movie_Statuses_Update_Column,
    useInsertUserMovieStatusMutation
} from '@/generated/graphql';
import { useUserId } from '@nhost/nextjs';
import { useQueryClient } from '@tanstack/react-query';

import { useMovie } from './movie-provider';
import { toast } from 'sonner';

export default function ReviewMovieDialog() {
    const userId = useUserId();
    const queryClient = useQueryClient();
    const { movie, status: userMovieStatus } = useMovie();

    const { mutateAsync: insertUserMovieStatus } = useInsertUserMovieStatusMutation({
        onError: (error) => toast.error((error as Error).message)
    });

    if (!movie) return null;

    const defaultValues = {
        rating: userMovieStatus?.rating || 0,
        review: userMovieStatus?.review || ''
    };

    const handleSubmitReview = async (reviewData: ReviewFormValues) => {
        await insertUserMovieStatus(
            {
                object: {
                    movie_id: movie.id,
                    rating: reviewData.rating,
                    review: !!reviewData?.review ? reviewData.review : null
                },
                on_conflict: {
                    constraint: User_Movie_Statuses_Constraint.UserMovieStatusesPkey,
                    update_columns: [
                        User_Movie_Statuses_Update_Column.Rating,
                        User_Movie_Statuses_Update_Column.Review
                    ],
                    where: {
                        user_id: { _eq: userId },
                        movie_id: { _eq: movie.id }
                    }
                }
            },
            {
                onSuccess: () => {
                    toast.success('Movie reviewed successfully');
                    queryClient.invalidateQueries({ queryKey: ['movie-status', movie?.id, userId] });
                }
            }
        );
    };

    const handleDeleteReview = async () => {
        await insertUserMovieStatus(
            {
                object: {
                    movie_id: movie.id,
                    rating: null,
                    review: null
                },
                on_conflict: {
                    constraint: User_Movie_Statuses_Constraint.UserMovieStatusesPkey,
                    update_columns: [
                        User_Movie_Statuses_Update_Column.Rating,
                        User_Movie_Statuses_Update_Column.Review
                    ],
                    where: {
                        user_id: { _eq: userId },
                        movie_id: { _eq: movie.id }
                    }
                }
            },
            {
                onSuccess: () => {
                    toast.success('Movie review deleted successfully');
                    queryClient.invalidateQueries({ queryKey: ['movie-status', movie?.id, userId] });
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
