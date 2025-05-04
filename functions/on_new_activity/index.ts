// https://lwmecktyyhputyqkdigy.functions.eu-west-2.nhost.run/v1/on_new_activity
// NOTE: This function is triggered when a new activity is inserted into the database by a Hasura event trigger.
// NOTE: It is used to create notifications for the followers of the user who created the activity.
import {
    UpsertNotificationsDocument,
    UpsertNotificationsMutation,
    UpsertNotificationsMutationVariables
} from '@/generated/graphql';
import { nhostAdmin } from '@/lib/nhost-admin';

import { Request, Response } from 'express';
import { gql } from 'graphql-request';

const followersQuery = gql`
    query GetFollowers($user_id: uuid!) {
        user(id: $user_id) {
            followers {
                follower {
                    id
                }
            }
        }
    }
`;

export default async (req: Request, res: Response) => {
    const activity = req.body.event.data.new;

    const followers = await nhostAdmin.graphql.request(followersQuery, {
        user_id: activity.user_id
    });

    const notifications = followers.data?.user?.followers.map((follower: any) => ({
        recipient_id: follower.follower.id,
        actor_id: activity.user_id,
        activity_id: activity.id
    }));

    if (!notifications) {
        res.status(200).send('No notifications to insert');
        return;
    }

    await nhostAdmin.graphql.request<UpsertNotificationsMutation, UpsertNotificationsMutationVariables>(
        UpsertNotificationsDocument,
        {
            objects: notifications
        }
    );

    res.status(200).send('OK');
};
