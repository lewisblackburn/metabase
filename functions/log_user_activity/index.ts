// https://lwmecktyyhputyqkdigy.functions.eu-west-2.nhost.run/v1/log_user_activity
import {
    Activity_Types_Enum,
    GetMovieTitleDocument,
    GetMovieTitleQuery,
    GetMovieTitleQueryVariables,
    InsertUserActivityDocument,
    InsertUserActivityMutation,
    InsertUserActivityMutationVariables,
    Object_Types_Enum,
    User_Activities_Constraint
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

type DataRow = {
    movie_id: string;
    user_id: string;
    rating: number | null;
    status: string | null;
    review: string | null;
    favourited: boolean;
};

export default async function logUserActivity(req: Request, res: Response) {
    try {
        const {
            event: {
                data: { new: newData, old: oldData }
            }
        } = req.body as {
            event: {
                data: { new: DataRow; old?: DataRow };
            };
        };

        const old: DataRow = oldData ?? {
            movie_id: newData.movie_id,
            user_id: newData.user_id,
            rating: null,
            status: null,
            review: null,
            favourited: false
        };

        const { movies } = await client.request<GetMovieTitleQuery, GetMovieTitleQueryVariables>(
            GetMovieTitleDocument,
            { movie_id: newData.movie_id }
        );
        const movieTitle = movies[0]?.title;
        if (!movieTitle) return res.status(404).json({ error: 'Movie not found' });

        const changeDefinitions: {
            name: keyof Pick<DataRow, 'rating' | 'status' | 'review' | 'favourited'>;
            getType: (oldV: DataRow[keyof DataRow], newV: DataRow[keyof DataRow]) => Activity_Types_Enum | null;
        }[] = [
            {
                name: 'rating',
                getType: (oldV, newV) => {
                    if (oldV === newV) return null;
                    if (oldV == null) return Activity_Types_Enum.RatingAdded;
                    if (newV == null) return Activity_Types_Enum.RatingDeleted;
                    return Activity_Types_Enum.RatingChanged;
                }
            },
            {
                name: 'status',
                getType: (oldV, newV) => {
                    if (oldV === newV) return null;
                    if (oldV == null) return Activity_Types_Enum.StatusAdded;
                    if (newV == null) return Activity_Types_Enum.StatusDeleted;
                    return Activity_Types_Enum.StatusChanged;
                }
            },
            {
                name: 'review',
                getType: (oldV, newV) => {
                    if (oldV === newV) return null;
                    if (oldV == null) return Activity_Types_Enum.ReviewAdded;
                    if (newV == null) return Activity_Types_Enum.ReviewDeleted;
                    return Activity_Types_Enum.ReviewChanged;
                }
            },
            {
                name: 'favourited',
                getType: (oldV, newV) => {
                    if (oldV === newV) return null;
                    return newV ? Activity_Types_Enum.Favourited : Activity_Types_Enum.Unfavourited;
                }
            }
        ];

        const activitiesToLog = changeDefinitions
            .map(({ name, getType }) => getType(old[name], newData[name]))
            .filter((t): t is Activity_Types_Enum => t !== null);

        if (activitiesToLog.length === 0) {
            return res.status(200).json({ success: true, message: 'No user-visible changes.' });
        }

        for (const activityType of activitiesToLog) {
            await client.request<InsertUserActivityMutation, InsertUserActivityMutationVariables>(
                InsertUserActivityDocument,
                {
                    object: {
                        object_id: newData.movie_id,
                        object_title: movieTitle,
                        object_type: Object_Types_Enum.Movie,
                        user_id: newData.user_id,
                        activity_type: activityType,
                        details: {
                            rating: newData.rating,
                            status: newData.status,
                            review: newData.review
                        }
                    },
                    on_conflict: {
                        constraint: User_Activities_Constraint.UserActivityPkey,
                        update_columns: []
                    }
                }
            );
        }

        return res.status(200).json({ success: true, logged: activitiesToLog.length });
    } catch (err: any) {
        console.error('log_user_activity error:', err);
        return res.status(500).json({ error: err.message || 'Internal Error' });
    }
}
