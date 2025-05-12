// https://lwmecktyyhputyqkdigy.functions.eu-west-2.nhost.run/v1/export_user_statuses
import {
    GetUserStatusesDocument,
    GetUserStatusesQuery,
    GetUserStatusesQueryVariables,
    Object_Types_Enum
} from '@/generated/graphql';

import { Request, Response } from 'express';
import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(
    `https://${process.env.NHOST_SUBDOMAIN}.graphql.${process.env.NHOST_REGION}.nhost.run/v1`,
    {
        headers: {
            'Content-Type': 'application/json',
            'x-hasura-admin-secret': process.env.NHOST_ADMIN_SECRET!
        }
    }
);

export default async function (_req: Request, res: Response) {
    try {
        const result = await client.request<GetUserStatusesQuery, GetUserStatusesQueryVariables>(
            GetUserStatusesDocument
        );

        const userBookStatuses = result.user_book_statuses.map((status) => ({
            user_id: status.user_id,
            media_id: status.book_id,
            value: status.rating,
            title: status.book.title,
            image: status.book.cover,
            type: Object_Types_Enum.Book
        }));

        const userSongStatuses = result.user_song_statuses.map((status) => ({
            user_id: status.user_id,
            media_id: status.song_id,
            value: status.rating,
            title: status.song.name,
            image: status.song.album?.artwork || '',
            type: Object_Types_Enum.Song
        }));

        const userMovieStatuses = result.user_movie_statuses.map((status) => ({
            user_id: status.user_id,
            media_id: status.movie_id,
            value: status.rating,
            title: status.movie.title,
            image: status.movie.poster,
            type: Object_Types_Enum.Movie
        }));

        const userStatuses = userBookStatuses.concat(userSongStatuses, userMovieStatuses);

        return res.status(200).json(userStatuses);
    } catch (err: any) {
        console.error('export_user_statuses error:', err);
        return res.status(500).json({ error: err.message || 'Internal Error' });
    }
}
