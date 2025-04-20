import { useMemo } from 'react';

import { GetMoviesQueryVariables, InputMaybe, Movies_Bool_Exp, Order_By } from '@/generated/graphql';
import { RootState } from '@/store/store';

import { useSelector } from 'react-redux';

const orderByFieldMap = {
    popularity: 'view_count',
    'release-date': 'release_date',
    rating: 'average_rating'
} as const;

const orderEnumMap = {
    asc: Order_By.Asc,
    desc: Order_By.Desc
} as const;

export function useMovieFilters(): {
    where: GetMoviesQueryVariables['where'];
    order_by: NonNullable<GetMoviesQueryVariables['order_by']>;
} {
    const {
        orderBy,
        search,
        showMe,
        availabilities,
        releaseDates,
        genres,
        certifications,
        statuses,
        language,
        userScore,
        minVotes,
        runtime,
        keywords
    } = useSelector((s: RootState) => s.moviesFilter);

    const order_by = useMemo<NonNullable<GetMoviesQueryVariables['order_by']>>(() => {
        const field = orderByFieldMap[orderBy.orderBy] ?? 'view_count';
        const dir = orderEnumMap[orderBy.order] ?? Order_By.Desc;

        return [
            { [field]: dir },
            // NOTE: This is a tie-breaker to ensure consistent ordering
            { id: Order_By.Asc }
        ];
    }, [orderBy]);

    const where = useMemo<GetMoviesQueryVariables['where']>(() => {
        const clauses: InputMaybe<Movies_Bool_Exp>[] = [];

        if (search) {
            clauses.push({
                _or: [
                    { title: { _ilike: `%${search}%` } },
                    { movie_alternative_titles: { alternative_title: { _ilike: `%${search}%` } } }
                ]
            });
        }

        if (showMe !== 'everything') {
            const isNull = showMe === 'not-seen';
            clauses.push({
                user_rating: { _is_null: isNull }
            });
        }

        if (availabilities?.length) {
            clauses.push({ movie_availabilities: { availability: { id: { _in: availabilities } } } });
        }

        if (releaseDates) {
            clauses.push({
                release_date: { _gte: releaseDates.from, _lte: releaseDates.to }
            });
        }

        if (genres?.length) {
            clauses.push({ movie_genres: { genre: { id: { _in: genres } } } });
        }

        if (certifications?.length) {
            clauses.push({ certification: { id: { _in: certifications } } });
        }

        if (statuses?.length) {
            clauses.push({ status: { id: { _in: statuses } } });
        }

        if (language) {
            clauses.push({ language: { _ilike: `%${language}%` } });
        }

        if (userScore) {
            clauses.push({ average_rating: { _gte: userScore[0], _lte: userScore[1] } });
        }

        if (minVotes) {
            clauses.push({ vote_count: { _gte: minVotes[0] } });
        }

        if (runtime) {
            clauses.push({ runtime: { _gte: runtime[0], _lte: runtime[1] } });
        }

        if (keywords?.length) {
            clauses.push({ movie_keywords: { keyword: { keyword: { _in: keywords.map((k) => k.value) } } } });
        }

        return clauses.length > 0 ? { _and: clauses as Movies_Bool_Exp[] } : {};
    }, [
        search,
        showMe,
        availabilities,
        releaseDates,
        genres,
        certifications,
        statuses,
        language,
        userScore,
        minVotes,
        runtime,
        keywords
    ]);

    return { where, order_by };
}
