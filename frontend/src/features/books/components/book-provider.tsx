'use client';

import { ReactNode, createContext, useContext } from 'react';

import { useParams } from 'next/navigation';

import { GetBookQuery, useGetBookQuery } from '@/generated/graphql';

interface BookContextType {
    book: GetBookQuery['books_by_pk'];
    isLoading: boolean;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export function BookProvider({ children }: { children: ReactNode }) {
    const params = useParams<{ id: string }>();
    const { data, isLoading } = useGetBookQuery(
        { id: params?.id },
        {
            queryKey: ['book', params?.id],
            enabled: !!params?.id
        }
    );

    const book = data?.books_by_pk;

    return <BookContext.Provider value={{ book, isLoading }}>{children}</BookContext.Provider>;
}

export function useBook() {
    const context = useContext(BookContext);
    if (!context) {
        throw new Error('useBook must be used within a BookProvider');
    }
    return context;
}
