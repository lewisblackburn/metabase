// https://lwmecktyyhputyqkdigy.functions.eu-west-2.nhost.run/v1/on_new_user_activity
// NOTE: This function is triggered when a new activity is inserted into the database by a Hasura event trigger.
// NOTE: It is used to create notifications for the followers of the user who created the activity.
import {
    UpsertNotificationsDocument,
    UpsertNotificationsMutation,
    UpsertNotificationsMutationVariables
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

const FOLLOWERS_QUERY = gql`
    query GetFollowers($user_id: uuid!) {
        follows(where: { followee_id: { _eq: $user_id } }) {
            follower_id
        }
    }
`;

export default async function (req: Request, res: Response) {
    try {
        const activity = req.body.event.data.new;

        const { follows } = await client.request<{
            follows: { follower_id: string }[];
        }>(FOLLOWERS_QUERY, { user_id: activity.user_id });

        if (follows.length === 0) {
            return res.status(200).json({ success: true, inserted: 0 });
        }

        const notifications = follows.map((f) => ({
            recipient_id: f.follower_id,
            actor_id: activity.user_id,
            activity_id: activity.id
        }));

        const upsertResult = await client.request<UpsertNotificationsMutation, UpsertNotificationsMutationVariables>(
            UpsertNotificationsDocument,
            {
                objects: notifications
            }
        );

        return res.status(200).json({
            success: true,
            inserted: notifications.length,
            upserted: upsertResult.insert_notifications?.affected_rows
        });
    } catch (err: any) {
        console.error('on_new_user_activity error:', err);
        return res.status(500).json({ error: err.message || 'Internal Error' });
    }
}
