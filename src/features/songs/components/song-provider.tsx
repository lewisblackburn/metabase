'use client';

import { ReactNode, createContext, useContext } from 'react';

import { useParams } from 'next/navigation';

import { GetSongQuery, useGetSongQuery } from '@/generated/graphql';

interface SongContextType {
    song: GetSongQuery['songs_by_pk'];
    isLoading: boolean;
}

const SongContext = createContext<SongContextType | undefined>(undefined);

export function SongProvider({ children }: { children: ReactNode }) {
    const params = useParams<{ id: string }>();
    const { data, isLoading } = useGetSongQuery(
        { id: params?.id },
        {
            queryKey: ['song', params?.id],
            enabled: !!params?.id
        }
    );

    const song = data?.songs_by_pk;

    return <SongContext.Provider value={{ song, isLoading }}>{children}</SongContext.Provider>;
}

export function useSong() {
    const context = useContext(SongContext);
    if (!context) {
        throw new Error('useSong must be used within a SongProvider');
    }
    return context;
}
