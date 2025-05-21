import ReviewDialog, { ReviewFormValues } from '@/components/shared/review-dialog';
import {
    User_Book_Statuses_Constraint,
    User_Book_Statuses_Update_Column,
    useInsertUserBookStatusMutation
} from '@/generated/graphql';
import { useUserId } from '@nhost/nextjs';
import { useQueryClient } from '@tanstack/react-query';

import { useBook } from './book-provider';
import { toast } from 'sonner';

export default function ReviewBookDialog() {
    const userId = useUserId();
    const queryClient = useQueryClient();
    const { book, status: userBookStatus } = useBook();

    const { mutateAsync: insertUserBookStatus } = useInsertUserBookStatusMutation({
        onError: (error) => toast.error((error as Error).message)
    });

    if (!book) return null;

    const defaultValues = {
        rating: userBookStatus?.rating || 0,
        review: userBookStatus?.review || ''
    };

    const handleSubmitReview = async (reviewData: ReviewFormValues) => {
        await insertUserBookStatus(
            {
                object: {
                    book_id: book.id,
                    rating: reviewData.rating,
                    review: !!reviewData?.review ? reviewData.review : null
                },
                on_conflict: {
                    constraint: User_Book_Statuses_Constraint.UserBookStatusesPkey,
                    update_columns: [User_Book_Statuses_Update_Column.Rating, User_Book_Statuses_Update_Column.Review],
                    where: {
                        user_id: { _eq: userId },
                        book_id: { _eq: book.id }
                    }
                }
            },
            {
                onSuccess: () => {
                    toast.success('Book reviewed successfully');
                    queryClient.invalidateQueries({ queryKey: ['book-status', book?.id, userId] });
                    queryClient.invalidateQueries({ queryKey: ['GetBookReviews.infinite'] });
                }
            }
        );
    };

    const handleDeleteReview = async () => {
        await insertUserBookStatus(
            {
                object: {
                    book_id: book.id,
                    rating: null,
                    review: null
                },
                on_conflict: {
                    constraint: User_Book_Statuses_Constraint.UserBookStatusesPkey,
                    update_columns: [User_Book_Statuses_Update_Column.Rating, User_Book_Statuses_Update_Column.Review],
                    where: {
                        user_id: { _eq: userId },
                        book_id: { _eq: book.id }
                    }
                }
            },
            {
                onSuccess: () => {
                    toast.success('Book review deleted successfully');
                    queryClient.invalidateQueries({ queryKey: ['book-status', book?.id, userId] });
                    queryClient.invalidateQueries({ queryKey: ['GetBookReviews.infinite'] });
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
