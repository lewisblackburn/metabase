'use client';

import { ReactNode, createContext, useContext } from 'react';

import { useParams } from 'next/navigation';

import { GetBookQuery, GetUserBookStatusQuery, useGetBookQuery, useGetUserBookStatusQuery } from '@/generated/graphql';
import { useUserId } from '@nhost/nextjs';

interface BookContextType {
    book: GetBookQuery['books_by_pk'];
    status: GetUserBookStatusQuery['user_book_statuses'][0] | null;
    isLoading: boolean;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export function BookProvider({ children }: { children: ReactNode }) {
    const params = useParams<{ id: string }>();
    const userId = useUserId();
    const { data: bookData, isLoading: isBookLoading } = useGetBookQuery(
        { id: params?.id },
        {
            queryKey: ['book', params?.id],
            enabled: !!params?.id
        }
    );

    const { data: userBookStatusData, isLoading: isUserBookStatusLoading } = useGetUserBookStatusQuery(
        { where: { book_id: { _eq: params?.id }, user_id: { _eq: userId } } },
        {
            queryKey: ['book-status', params?.id, userId]
        }
    );

    const book = bookData?.books_by_pk;
    const userBookStatus = userBookStatusData?.user_book_statuses[0] ?? null;

    return (
        <BookContext.Provider
            value={{ book, isLoading: isBookLoading || isUserBookStatusLoading, status: userBookStatus }}>
            {children}
        </BookContext.Provider>
    );
}

export function useBook() {
    const context = useContext(BookContext);
    if (!context) {
        throw new Error('useBook must be used within a BookProvider');
    }
    return context;
}
