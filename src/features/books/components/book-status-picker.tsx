'use client';

import StatusPickerButton from '@/components/shared/status-picker.button';
import {
    User_Book_Status_Types_Enum,
    User_Book_Statuses_Constraint,
    User_Book_Statuses_Update_Column,
    useInsertUserBookStatusMutation
} from '@/generated/graphql';
import { useUserId } from '@nhost/nextjs';
import { useQueryClient } from '@tanstack/react-query';

import { userBookStatusOptions } from '../constants/book-enums';
import { useBook } from './book-provider';
import { toast } from 'sonner';

export default function BookStatusPicker() {
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

    const initialStatus = book.user_book_statuses[0]?.status || undefined;

    const handleStatusChange = async (status: User_Book_Status_Types_Enum | null) => {
        await insertUserBookStatus({
            object: {
                book_id: book.id,
                status: status
            },
            on_conflict: {
                constraint: User_Book_Statuses_Constraint.UserBookStatusesPkey,
                update_columns: [User_Book_Statuses_Update_Column.Status],
                where: {
                    user_id: { _eq: userId },
                    book_id: { _eq: book.id }
                }
            }
        });
    };

    return (
        <StatusPickerButton<User_Book_Status_Types_Enum>
            statuses={userBookStatusOptions}
            size='sm'
            defaultStatus={initialStatus}
            onStatusChange={handleStatusChange}
            variant='outline'
        />
    );
}
