// https://lwmecktyyhputyqkdigy.functions.eu-west-2.nhost.run/v1/update_book_stats
import { Request, Response } from 'express';
import { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';

const client = new GraphQLClient(
    `https://${process.env.NHOST_SUBDOMAIN}.graphql.${process.env.NHOST_REGION}.nhost.run/v1`,
    {
        headers: {
            'Content-Type': 'application/json',
            'x-hasura-admin-secret': process.env.NHOST_ADMIN_SECRET!
        }
    }
);

const GET_BOOK_RATINGS = gql`
    query GetBookRatings($book_id: uuid!) {
        user_book_statuses(where: { book_id: { _eq: $book_id }, rating: { _is_null: false } }) {
            rating
        }
    }
`;

const UPDATE_BOOK_STATS = gql`
    mutation UpdateBookStats($book_id: uuid!, $vote_count: Int!, $vote_average: Float!) {
        update_books_by_pk(
            pk_columns: { id: $book_id }
            _set: { vote_count: $vote_count, vote_average: $vote_average }
        ) {
            id
            vote_count
            vote_average
        }
    }
`;

type GetBookRatingsResponse = {
    user_book_statuses: Array<{ rating: number }>;
};

type UpdateBookStatsResponse = {
    update_books_by_pk: {
        id: string;
        vote_count: number;
        vote_average: number;
    };
};

export default async function (req: Request, res: Response) {
    try {
        const {
            event: {
                data: { new: newData, old: oldData }
            }
        } = req.body as {
            event: {
                data: { new: { book_id: string }; old?: { book_id: string } };
            };
        };

        const bookId = newData.book_id || oldData?.book_id;
        if (!bookId) {
            return res.status(400).json({ error: 'No book_id provided' });
        }

        const { user_book_statuses } = await client.request<GetBookRatingsResponse>(GET_BOOK_RATINGS, {
            book_id: bookId
        });

        const validRatings = user_book_statuses.map((r) => r.rating);
        const voteCount = validRatings.length;
        const voteAverage = voteCount > 0 ? validRatings.reduce((sum, rating) => sum + rating, 0) / voteCount : 0;

        const result = await client.request<UpdateBookStatsResponse>(UPDATE_BOOK_STATS, {
            book_id: bookId,
            vote_count: voteCount,
            vote_average: voteAverage
        });

        return res.status(200).json({
            success: true,
            updated: result.update_books_by_pk
        });
    } catch (err: any) {
        console.error('update_book_stats error:', err);
        return res.status(500).json({ error: err.message || 'Internal Error' });
    }
}
