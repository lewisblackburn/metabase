// https://lwmecktyyhputyqkdigy.functions.eu-west-2.nhost.run/v1/update_movie_stats
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

const GET_MOVIE_RATINGS = gql`
    query GetMovieRatings($movie_id: uuid!) {
        user_movie_statuses(where: { movie_id: { _eq: $movie_id }, rating: { _is_null: false } }) {
            rating
        }
    }
`;

const UPDATE_MOVIE_STATS = gql`
    mutation UpdateMovieStats($movie_id: uuid!, $vote_count: Int!, $vote_average: Float!) {
        update_movies_by_pk(
            pk_columns: { id: $movie_id }
            _set: { vote_count: $vote_count, vote_average: $vote_average }
        ) {
            id
            vote_count
            vote_average
        }
    }
`;

type GetMovieRatingsResponse = {
    user_movie_statuses: Array<{ rating: number }>;
};

type UpdateMovieStatsResponse = {
    update_movies_by_pk: {
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
                data: { new: { movie_id: string }; old?: { movie_id: string } };
            };
        };

        const movieId = newData.movie_id || oldData?.movie_id;
        if (!movieId) {
            return res.status(400).json({ error: 'No movie_id provided' });
        }

        const { user_movie_statuses } = await client.request<GetMovieRatingsResponse>(GET_MOVIE_RATINGS, {
            movie_id: movieId
        });

        if (!user_movie_statuses || user_movie_statuses.length === 0) {
            return res.status(200).json({ success: true, message: 'No ratings found' });
        }

        const validRatings = user_movie_statuses.map((r) => r.rating);
        const voteCount = validRatings.length;
        const voteAverage = validRatings.reduce((sum, rating) => sum + rating, 0) / voteCount;

        const result = await client.request<UpdateMovieStatsResponse>(UPDATE_MOVIE_STATS, {
            movie_id: movieId,
            vote_count: voteCount,
            vote_average: voteAverage
        });

        return res.status(200).json({
            success: true,
            updated: result.update_movies_by_pk
        });
    } catch (err: any) {
        console.error('update_movie_stats error:', err);
        return res.status(500).json({ error: err.message || 'Internal Error' });
    }
}
