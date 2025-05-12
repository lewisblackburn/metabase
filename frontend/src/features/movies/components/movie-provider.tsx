'use client';

import { ReactNode, createContext, useContext } from 'react';

import { useParams } from 'next/navigation';

import { GetMovieQuery, useGetMovieQuery } from '@/generated/graphql';

interface MovieContextType {
    movie: GetMovieQuery['movies_by_pk'];
    isLoading: boolean;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export function MovieProvider({ children }: { children: ReactNode }) {
    const params = useParams<{ id: string }>();
    // NOTE: Errors are thrown automatically
    const { data, isLoading } = useGetMovieQuery(
        { id: params?.id },
        {
            queryKey: ['movie', params?.id],
            enabled: !!params?.id
        }
    );

    const movie = data?.movies_by_pk;

    return <MovieContext.Provider value={{ movie, isLoading }}>{children}</MovieContext.Provider>;
}

export function useMovie() {
    const context = useContext(MovieContext);
    if (!context) {
        throw new Error('useMovie must be used within a MovieProvider');
    }
    return context;
}
