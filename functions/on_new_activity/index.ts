// https://lwmecktyyhputyqkdigy.functions.eu-west-2.nhost.run/v1/on_new_activity
// NOTE: This function is triggered when a new activity is inserted into the database by a Hasura event trigger.
import {
    GetFollowersDocument,
    GetFollowersQuery,
    GetFollowersQueryVariables,
    UpsertNotificationsDocument,
    UpsertNotificationsMutation,
    UpsertNotificationsMutationVariables
} from '@/generated/graphql';
import { nhost } from '@/lib/nhost';

import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
    const activity = req.body.event.data.new;

    const followers = await nhost.graphql.request<GetFollowersQuery, GetFollowersQueryVariables>(GetFollowersDocument, {
        user_id: activity.user_id
    });

    const notifications = followers.data?.user?.followers.map((follower) => ({
        recipient_id: follower.follower.id,
        actor_id: activity.user_id,
        activity_id: activity.id
    }));

    res.status(200).send(JSON.stringify(notifications));

    // if (!notifications) {
    //     res.status(200).send('No notifications to insert');
    //     return;
    // }

    // await nhost.graphql.request<UpsertNotificationsMutation, UpsertNotificationsMutationVariables>(
    //     UpsertNotificationsDocument,
    //     {
    //         objects: notifications
    //     }
    // );

    // res.status(200).send('OK');
};
