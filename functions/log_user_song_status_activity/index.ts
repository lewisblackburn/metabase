// https://lwmecktyyhputyqkdigy.functions.eu-west-2.nhost.run/v1/log_user_song_status_activity
import {
    Activity_Types_Enum,
    GetSongNameDocument,
    GetSongNameQuery,
    GetSongNameQueryVariables,
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
    song_id: string;
    user_id: string;
    rating: number | null;
    review: string | null;
    favourited: boolean;
};

export default async function (req: Request, res: Response) {
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
            song_id: newData.song_id,
            user_id: newData.user_id,
            rating: null,
            review: null,
            favourited: false
        };

        const { songs } = await client.request<GetSongNameQuery, GetSongNameQueryVariables>(GetSongNameDocument, {
            song_id: newData.song_id
        });
        const songName = songs[0]?.name;
        if (!songName) return res.status(404).json({ error: 'Song not found' });

        const changeDefinitions: {
            name: keyof Pick<DataRow, 'rating' | 'review' | 'favourited'>;
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
                        object_id: newData.song_id,
                        object_title: songName,
                        object_type: Object_Types_Enum.Song,
                        user_id: newData.user_id,
                        activity_type: activityType,
                        details: {
                            rating: newData.rating,
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
        console.error('log_user_song_status_activity error:', err);
        return res.status(500).json({ error: err.message || 'Internal Error' });
    }
}
