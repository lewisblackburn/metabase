// https://lwmecktyyhputyqkdigy.functions.eu-west-2.nhost.run/v1/on_follow
// NOTE: This function is triggered when a new follow is inserted into the database by a Hasura event trigger.
// It inserts a follow activity into the user_activities table and creates a notification for the user being followed e.g. the follower.
import {
    Activity_Types_Enum,
    InsertUserActivityDocument,
    InsertUserActivityMutation,
    InsertUserActivityMutationVariables,
    Mutation_RootInsert_NotificationsArgs,
    NotificationFragment,
    Object_Types_Enum,
    UpsertNotificationsDocument,
    UpsertNotificationsMutation,
    UpsertNotificationsMutationVariables
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

        await client.request<InsertUserActivityMutation, InsertUserActivityMutationVariables>(
            InsertUserActivityDocument,
            {
                object: {
                    user_id: follow.followee_id,
                    object_id: follow.follower_id,
                    object_type: Object_Types_Enum.User,
                    object_title: follow.follower.displayName,
                    activity_type: Activity_Types_Enum.Follow
                }
            }
        );

        const notification: Mutation_RootInsert_NotificationsArgs['objects'][number] = {
            recipient_id: follow.followee_id,
            actor_id: follow.follower_id,
            activity_id: follow.id
        };

        const result = await client.request<UpsertNotificationsMutation, UpsertNotificationsMutationVariables>(
            UpsertNotificationsDocument,
            {
                objects: [notification]
            }
        );

        return res.status(200).json({
            success: true,
            inserted: result.insert_notifications?.affected_rows
        });
    } catch (err: any) {
        console.error('on_follow error:', err);
        return res.status(500).json({ error: err.message || 'Internal Error' });
    }
}
