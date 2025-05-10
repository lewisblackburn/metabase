import ActionButton from '@/components/shared/action-button';
import {
    User_Book_Statuses_Constraint,
    User_Book_Statuses_Update_Column,
    useInsertUserBookStatusMutation
} from '@/generated/graphql';
import { cn } from '@/lib/utils';
import { useUserId } from '@nhost/nextjs';
import { useQueryClient } from '@tanstack/react-query';

import { useBook } from './book-provider';
import { Heart } from 'lucide-react';
import { toast } from 'sonner';

export default function BookFavouriteButton() {
    const userId = useUserId();
    const queryClient = useQueryClient();
    const { book } = useBook();

    const { mutateAsync: insertUserBookStatus } = useInsertUserBookStatusMutation({
        onSuccess: () => {
            toast.success('Book status updated successfully');
            queryClient.invalidateQueries({ queryKey: ['book', book?.id] });
            queryClient.invalidateQueries({ queryKey: ['GetBooks.infinite'] });
        },
        onError: (error) => toast.error((error as Error).message)
    });

    if (!book) return null;

    const isFavourited = book.user_book_statuses[0]?.favourited || false;

    const handleClick = async () => {
        await insertUserBookStatus({
            object: {
                book_id: book.id,
                favourited: !isFavourited
            },
            on_conflict: {
                constraint: User_Book_Statuses_Constraint.UserBookStatusesPkey,
                update_columns: [User_Book_Statuses_Update_Column.Favourited],
                where: {
                    user_id: { _eq: userId },
                    book_id: { _eq: book.id }
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
