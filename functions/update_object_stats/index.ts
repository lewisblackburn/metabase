// https://lwmecktyyhputyqkdigy.functions.eu-west-2.nhost.run/v1/update_object_stats
import { Request, Response } from 'express';
import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient(
    `https://${process.env.NHOST_SUBDOMAIN}.graphql.${process.env.NHOST_REGION}.nhost.run/v1`,
    {
        headers: {
            'Content-Type': 'application/json',
            'x-hasura-admin-secret': process.env.NHOST_ADMIN_SECRET!
        }
    }
);

const GET_SONG_RATINGS = gql`
    query GetSongRatings($id: uuid!) {
        user_song_statuses(where: { song_id: { _eq: $id }, rating: { _is_null: false } }) {
            rating
        }
    }
`;
const GET_MOVIE_RATINGS = gql`
    query GetMovieRatings($id: uuid!) {
        user_movie_statuses(where: { movie_id: { _eq: $id }, rating: { _is_null: false } }) {
            rating
        }
    }
`;
const GET_BOOK_RATINGS = gql`
    query GetBookRatings($id: uuid!) {
        user_book_statuses(where: { book_id: { _eq: $id }, rating: { _is_null: false } }) {
            rating
        }
    }
`;

const UPDATE_SONG_STATS = gql`
    mutation UpdateSongStats($id: uuid!, $vote_count: Int!, $vote_average: Float!) {
        update_songs_by_pk(pk_columns: { id: $id }, _set: { vote_count: $vote_count, vote_average: $vote_average }) {
            id
            vote_count
            vote_average
        }
    }
`;
const UPDATE_MOVIE_STATS = gql`
    mutation UpdateMovieStats($id: uuid!, $vote_count: Int!, $vote_average: Float!) {
        update_movies_by_pk(pk_columns: { id: $id }, _set: { vote_count: $vote_count, vote_average: $vote_average }) {
            id
            vote_count
            vote_average
        }
    }
`;
const UPDATE_BOOK_STATS = gql`
    mutation UpdateBookStats($id: uuid!, $vote_count: Int!, $vote_average: Float!) {
        update_books_by_pk(pk_columns: { id: $id }, _set: { vote_count: $vote_count, vote_average: $vote_average }) {
            id
            vote_count
            vote_average
        }
    }
`;

export default async function handler(req: Request, res: Response) {
    try {
        const {
            table: { name: tableName },
            event: {
                data: { new: newRow, old: oldRow }
            }
        } = req.body as {
            table: { name: string };
            event: { data: { new: Record<string, any>; old?: Record<string, any> } };
        };

        const fkKey =
            tableName === 'user_song_statuses'
                ? 'song_id'
                : tableName === 'user_movie_statuses'
                  ? 'movie_id'
                  : 'book_id';

        const entityId = newRow[fkKey] ?? oldRow?.[fkKey];
        if (!entityId) {
            return res.status(400).json({ error: 'No foreign‐key found on event.' });
        }

        let ratingQuery, updateMutation;
        if (tableName === 'user_song_statuses') {
            ratingQuery = GET_SONG_RATINGS;
            updateMutation = UPDATE_SONG_STATS;
        } else if (tableName === 'user_movie_statuses') {
            ratingQuery = GET_MOVIE_RATINGS;
            updateMutation = UPDATE_MOVIE_STATS;
        } else if (tableName === 'user_book_statuses') {
            ratingQuery = GET_BOOK_RATINGS;
            updateMutation = UPDATE_BOOK_STATS;
        } else {
            return res.status(400).json({ error: 'Unhandled table: ' + tableName });
        }

        // NOTE: fetch all non-null ratings
        const qr = await client.request<{
            [k: string]: Array<{ rating: number }>;
        }>(ratingQuery, { id: entityId });

        const listKey = Object.keys(qr)[0];
        const ratings: number[] = qr[listKey].map((r: any) => r.rating);

        const voteCount = ratings.length;
        const voteAverage = voteCount ? ratings.reduce((sum, r) => sum + r, 0) / voteCount : 0;

        const result = await client.request(updateMutation, {
            id: entityId,
            vote_count: voteCount,
            vote_average: voteAverage
        });

        return res.status(200).json({ success: true, updated: result });
    } catch (err: any) {
        console.error('update_stats error:', err);
        return res.status(500).json({ error: err.message || 'Internal error' });
    }
}
