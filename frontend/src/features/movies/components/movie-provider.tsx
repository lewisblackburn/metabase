'use client';

import { ReactNode, createContext, useContext } from 'react';

import { useParams } from 'next/navigation';

import {
    GetMovieQuery,
    GetUserMovieStatusQuery,
    useGetMovieQuery,
    useGetUserMovieStatusQuery
} from '@/generated/graphql';
import { useUserId } from '@nhost/nextjs';

interface MovieContextType {
    movie: GetMovieQuery['movies_by_pk'];
    status: GetUserMovieStatusQuery['user_movie_statuses'][0] | null;
    isLoading: boolean;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export function MovieProvider({ children }: { children: ReactNode }) {
    const params = useParams<{ id: string }>();
    const userId = useUserId();
    // NOTE: Errors are thrown automatically
    const { data: movieData, isLoading: isMovieLoading } = useGetMovieQuery(
        { id: params?.id },
        {
            queryKey: ['movie', params?.id],
            enabled: !!params?.id
        }
    );

    const { data: userMovieStatusData, isLoading: isUserMovieStatusLoading } = useGetUserMovieStatusQuery(
        { where: { movie_id: { _eq: params?.id }, user_id: { _eq: userId } } },
        {
            queryKey: ['movie-status', params?.id, userId]
        }
    );

    const movie = movieData?.movies_by_pk;
    const userMovieStatus = userMovieStatusData?.user_movie_statuses[0] ?? null;

    return (
        <MovieContext.Provider
            value={{ movie, isLoading: isMovieLoading || isUserMovieStatusLoading, status: userMovieStatus }}>
            {children}
        </MovieContext.Provider>
    );
}

export function useMovie() {
    const context = useContext(MovieContext);
    if (!context) {
        throw new Error('useMovie must be used within a MovieProvider');
    }
    return context;
}
