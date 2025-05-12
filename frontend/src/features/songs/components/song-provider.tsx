'use client';

import { ReactNode, createContext, useContext } from 'react';

import { useParams } from 'next/navigation';

import { GetSongQuery, GetUserSongStatusQuery, useGetSongQuery, useGetUserSongStatusQuery } from '@/generated/graphql';
import { useUserId } from '@nhost/nextjs';

interface SongContextType {
    song: GetSongQuery['songs_by_pk'];
    status: GetUserSongStatusQuery['user_song_statuses'][0] | null;
    isLoading: boolean;
}

const SongContext = createContext<SongContextType | undefined>(undefined);

export function SongProvider({ children }: { children: ReactNode }) {
    const params = useParams<{ id: string }>();
    const userId = useUserId();
    const { data: songData, isLoading: isSongLoading } = useGetSongQuery(
        { id: params?.id },
        {
            queryKey: ['song', params?.id],
            enabled: !!params?.id
        }
    );

    const { data: userSongStatusData, isLoading: isUserSongStatusLoading } = useGetUserSongStatusQuery(
        { where: { song_id: { _eq: params?.id }, user_id: { _eq: userId } } },
        {
            queryKey: ['song-status', params?.id, userId]
        }
    );

    const song = songData?.songs_by_pk;
    const userSongStatus = userSongStatusData?.user_song_statuses[0] ?? null;

    return (
        <SongContext.Provider
            value={{ song, isLoading: isSongLoading || isUserSongStatusLoading, status: userSongStatus }}>
            {children}
        </SongContext.Provider>
    );
}

export function useSong() {
    const context = useContext(SongContext);
    if (!context) {
        throw new Error('useSong must be used within a SongProvider');
    }
    return context;
}
