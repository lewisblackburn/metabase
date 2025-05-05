// https://lwmecktyyhputyqkdigy.functions.eu-west-2.nhost.run/v1/on_follow
// NOTE: This function is triggered when a new follow is inserted into the database by a Hasura event trigger.
// It inserts a follow activity into the user_activities table and creates a notification for the user being followed e.g. the follower.
import {
    Activity_Types_Enum,
    GetUserDisplayNameDocument,
    GetUserDisplayNameQuery,
    GetUserDisplayNameQueryVariables,
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

export default async function (req: Request, res: Response) {
    try {
        const follow = req.body.event.data.new;

        const { user } = await client.request<GetUserDisplayNameQuery, GetUserDisplayNameQueryVariables>(
            GetUserDisplayNameDocument,
            {
                user_id: follow.follower_id
            }
        );
        const userName = user?.displayName;
        if (!userName) return res.status(404).json({ error: 'User not found' });

        const result = await client.request<InsertUserActivityMutation, InsertUserActivityMutationVariables>(
            InsertUserActivityDocument,
            {
                object: {
                    user_id: follow.followee_id,
                    object_id: follow.follower_id,
                    object_title: userName,
                    object_type: Object_Types_Enum.User,
                    activity_type: Activity_Types_Enum.Follow,
                    hidden: true
                },
                on_conflict: {
                    constraint: User_Activities_Constraint.UserActivityPkey,
                    update_columns: []
                }
            }
        );

        return res.status(200).json({ success: true, inserted: result.insert_user_activities_one?.id });
    } catch (err: any) {
        console.error('on_follow error:', err);
        return res.status(500).json({ error: err.message || 'Internal Error' });
    }
}
