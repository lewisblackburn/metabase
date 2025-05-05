// https://lwmecktyyhputyqkdigy.functions.eu-west-2.nhost.run/v1/on_follow
// NOTE: This function is triggered when a new follow is inserted into the database by a Hasura event trigger.
// NOTE: It creates a notification for the user being followed e.g. the follower.
import {
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

        const notification = {
            recipient_id: follow.followee_id,
            actor_id: follow.follower_id
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
