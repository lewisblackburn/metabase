// https://lwmecktyyhputyqkdigy.functions.eu-west-2.nhost.run/v1/update_song_stats
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

const GET_SONG_RATINGS = gql`
    query GetSongRatings($song_id: uuid!) {
        user_song_statuses(where: { song_id: { _eq: $song_id }, rating: { _is_null: false } }) {
            rating
        }
    }
`;

const UPDATE_SONG_STATS = gql`
    mutation UpdateSongStats($song_id: uuid!, $vote_count: Int!, $vote_average: Float!) {
        update_songs_by_pk(
            pk_columns: { id: $song_id }
            _set: { vote_count: $vote_count, vote_average: $vote_average }
        ) {
            id
            vote_count
            vote_average
        }
    }
`;

type GetSongRatingsResponse = {
    user_song_statuses: Array<{ rating: number }>;
};

type UpdateSongStatsResponse = {
    update_songs_by_pk: {
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
                data: { new: { song_id: string }; old?: { song_id: string } };
            };
        };

        const songId = newData.song_id || oldData?.song_id;
        if (!songId) {
            return res.status(400).json({ error: 'No song_id provided' });
        }

        const { user_song_statuses } = await client.request<GetSongRatingsResponse>(GET_SONG_RATINGS, {
            song_id: songId
        });

        const validRatings = user_song_statuses.map((r) => r.rating);
        const voteCount = validRatings.length;
        const voteAverage = voteCount > 0 ? validRatings.reduce((sum, rating) => sum + rating, 0) / voteCount : 0;

        const result = await client.request<UpdateSongStatsResponse>(UPDATE_SONG_STATS, {
            song_id: songId,
            vote_count: voteCount,
            vote_average: voteAverage
        });

        return res.status(200).json({
            success: true,
            updated: result.update_songs_by_pk
        });
    } catch (err: any) {
        console.error('update_song_stats error:', err);
        return res.status(500).json({ error: err.message || 'Internal Error' });
    }
}
