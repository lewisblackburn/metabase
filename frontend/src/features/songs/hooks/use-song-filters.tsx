import { useMemo } from 'react';

import { orderEnumMap } from '@/constants/misc.constant';
import { GetSongsQueryVariables, InputMaybe, Order_By, Songs_Bool_Exp } from '@/generated/graphql';
import { RootState } from '@/store/store';

import { useSelector } from 'react-redux';

const orderByFieldMap = {
    popularity: 'view_count',
    duration: 'duration',
    rating: 'vote_average'
} as const;

export function useSongFilters(): {
    where: GetSongsQueryVariables['where'];
    order_by: NonNullable<GetSongsQueryVariables['order_by']>;
} {
    const { orderBy, search, availabilities, genres, userScore, minVotes, keywords } = useSelector(
        (s: RootState) => s.songsFilter
    );

    const order_by = useMemo<NonNullable<GetSongsQueryVariables['order_by']>>(() => {
        const field = orderByFieldMap[orderBy.orderBy] ?? 'view_count';
        const dir = orderEnumMap[orderBy.order] ?? Order_By.Desc;

        return [{ [field]: dir }, { id: Order_By.Asc }];
    }, [orderBy]);

    const where = useMemo<GetSongsQueryVariables['where']>(() => {
        const clauses: InputMaybe<Songs_Bool_Exp>[] = [];

        if (search) {
            clauses.push({ name: { _ilike: `%${search}%` } });
        }

        if (availabilities?.length) {
            clauses.push({ song_availabilities: { availability: { _in: availabilities } } });
        }

        if (genres?.length) {
            clauses.push({ song_genres: { genre: { _in: genres } } });
        }

        if (userScore) {
            clauses.push({ vote_average: { _gte: userScore[0], _lte: userScore[1] } });
        }

        if (minVotes) {
            clauses.push({ vote_count: { _gte: minVotes[0] } });
        }

        if (keywords?.length) {
            clauses.push({ song_keywords: { keyword: { keyword: { _in: keywords.map((k) => k.text) } } } });
        }

        return clauses.length > 0 ? { _and: clauses as Songs_Bool_Exp[] } : {};
    }, [search, availabilities, genres, userScore, minVotes, keywords]);

    return { where, order_by };
}
