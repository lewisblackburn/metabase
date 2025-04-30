import { useMemo } from 'react';

import {
    GetMoviesQueryVariables,
    InputMaybe,
    Movies_Bool_Exp,
    Order_By,
    User_Movie_Statuses_Types_Enum
} from '@/generated/graphql';
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

            // NOTE: If there is 1 user_movie_status that is watched, then the user has seen the movie
            // NOTE: If there is 0 user_movie_status that is watched, then the user has not seen the movie
            clauses.push({
                user_movie_statuses_aggregate: {
                    count: {
                        predicate: {
                            _eq: isNull ? 0 : 1
                        },
                        filter: {
                            status: {
                                _eq: User_Movie_Statuses_Types_Enum.Watched
                            }
                        }
                    }
                }
            });
        }

        if (availabilities?.length) {
            clauses.push({ movie_availabilities: { availability: { _in: availabilities } } });
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
            clauses.push({ certification: { _in: certifications } });
        }

        if (statuses?.length) {
            clauses.push({ status: { _in: statuses } });
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
            clauses.push({ movie_keywords: { keyword: { keyword: { _in: keywords.map((k) => k.text) } } } });
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
