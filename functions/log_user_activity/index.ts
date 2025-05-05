// https://lwmecktyyhputyqkdigy.functions.eu-west-2.nhost.run/v1/log_user_activity
import {
    Activity_Types_Enum,
    GetMovieTitleDocument,
    GetMovieTitleQuery,
    GetMovieTitleQueryVariables,
    InsertUserActivityDocument,
    InsertUserActivityMutation,
    InsertUserActivityMutationVariables,
    Object_Types_Enum
} from '@/generated/graphql';

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

export default async (req: Request, res: Response) => {
    try {
        const { event } = req.body;

        const { op, new: newData, old: oldData } = event;

        const { movies } = await client.request<GetMovieTitleQuery, GetMovieTitleQueryVariables>(
            GetMovieTitleDocument,
            {
                movie_id: newData.movie_id
            }
        );

        const movie_title = movies[0].title;
        if (!movie_title) throw new Error('Movie not found');

        let activity_type: Activity_Types_Enum | null = null;

        if (op === 'INSERT') {
            switch (true) {
                case newData.rating !== null:
                    activity_type = Activity_Types_Enum.RatingAdded;
                    break;
                case newData.status !== null:
                    activity_type = Activity_Types_Enum.StatusChanged;
                    break;
                case newData.review !== null:
                    activity_type = Activity_Types_Enum.ReviewAdded;
                    break;
                case newData.favourited:
                    activity_type = Activity_Types_Enum.Favourited;
                    break;
                default:
                    break;
            }
        }

        if (op === 'UPDATE') {
            switch (true) {
                case newData.rating !== oldData.rating:
                    activity_type = Activity_Types_Enum.RatingAdded;
                    break;
                case newData.status !== oldData.status:
                    activity_type = Activity_Types_Enum.StatusChanged;
                    break;
                case newData.review !== oldData.review:
                    activity_type = Activity_Types_Enum.ReviewAdded;
                    break;
                case newData.favourited !== oldData.favourited:
                    activity_type = Activity_Types_Enum.Favourited;
                    break;
                default:
                    break;
            }
        }

        if (!activity_type) throw new Error('Activity type not found');

        await client.request<InsertUserActivityMutation, InsertUserActivityMutationVariables>(
            InsertUserActivityDocument,
            {
                object: {
                    object_id: newData.movie_id,
                    activity_type,
                    details: {
                        rating: newData.rating,
                        review: newData.review,
                        status: newData.status
                    },
                    object_title: movie_title,
                    object_type: Object_Types_Enum.Movie,
                    user_id: newData.user_id
                }
            }
        );

        res.status(200).json({ success: true, event });
    } catch (err: any) {
        console.error('log_user_activity error:', err);
        return res.status(500).json({ error: err.message || 'Internal Error' });
    }
};
