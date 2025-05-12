import { useMemo } from 'react';

import { orderEnumMap } from '@/constants/misc.constant';
import {
    Books_Bool_Exp,
    GetBooksQueryVariables,
    InputMaybe,
    Order_By,
    User_Book_Status_Types_Enum
} from '@/generated/graphql';
import { RootState } from '@/store/store';

import { useSelector } from 'react-redux';

const orderByFieldMap = {
    popularity: 'view_count',
    'publish-date': 'publish_date',
    rating: 'average_rating'
} as const;

export function useBookFilters(): {
    where: GetBooksQueryVariables['where'];
    order_by: NonNullable<GetBooksQueryVariables['order_by']>;
} {
    const {
        orderBy,
        search,
        showMe,
        availabilities,
        publishDates,
        genres,
        certifications,
        statuses,
        language,
        userScore,
        minVotes,
        readingTime,
        keywords
    } = useSelector((s: RootState) => s.booksFilter);

    const order_by = useMemo<NonNullable<GetBooksQueryVariables['order_by']>>(() => {
        const field = orderByFieldMap[orderBy.orderBy] ?? 'view_count';
        const dir = orderEnumMap[orderBy.order] ?? Order_By.Desc;

        return [{ [field]: dir }, { id: Order_By.Asc }];
    }, [orderBy]);

    const where = useMemo<GetBooksQueryVariables['where']>(() => {
        const clauses: InputMaybe<Books_Bool_Exp>[] = [];

        if (search) {
            clauses.push({
                _or: [
                    { title: { _ilike: `%${search}%` } },
                    { book_alternative_titles: { alternative_title: { _ilike: `%${search}%` } } }
                ]
            });
        }

        if (showMe !== 'everything') {
            const isNull = showMe === 'not-read';

            clauses.push({
                user_book_statuses_aggregate: {
                    count: {
                        predicate: {
                            _eq: isNull ? 0 : 1
                        },
                        filter: {
                            status: {
                                _eq: User_Book_Status_Types_Enum.Read
                            }
                        }
                    }
                }
            });
        }

        if (availabilities?.length) {
            clauses.push({ book_availabilities: { availability: { _in: availabilities } } });
        }

        if (publishDates) {
            clauses.push({
                publish_date: { _gte: publishDates.from, _lte: publishDates.to }
            });
        }

        if (genres?.length) {
            clauses.push({ book_genres: { genre: { _in: genres } } });
        }

        if (statuses?.length) {
            clauses.push({ status: { _in: statuses } });
        }

        if (language) {
            clauses.push({ language: { _ilike: `%${language}%` } });
        }

        if (userScore) {
            clauses.push({ vote_average: { _gte: userScore[0], _lte: userScore[1] } });
        }

        if (minVotes) {
            clauses.push({ vote_count: { _gte: minVotes[0] } });
        }

        if (readingTime) {
            clauses.push({ reading_time: { _gte: readingTime[0], _lte: readingTime[1] } });
        }

        if (keywords?.length) {
            clauses.push({ book_keywords: { keyword: { keyword: { _in: keywords.map((k) => k.text) } } } });
        }

        return clauses.length > 0 ? { _and: clauses as Books_Bool_Exp[] } : {};
    }, [
        search,
        showMe,
        availabilities,
        publishDates,
        genres,
        certifications,
        statuses,
        language,
        userScore,
        minVotes,
        readingTime,
        keywords
    ]);

    return { where, order_by };
}
