// https://lwmecktyyhputyqkdigy.functions.eu-west-2.nhost.run/v1/on_new_activity
// NOTE: This function is triggered when a new activity is inserted into the database by a Hasura event trigger.
import { nhost } from '@/lib/nhost';

import { Request, Response } from 'express';
import { gql } from 'graphql-request';

const followersQuery = gql`
    query GetFollowers($user_id: uuid!) {
        user(id: $user_id) {
            followers {
                follower {
                    user_activities {
                        id
                    }
                }
            }
        }
    }
`;

export default async (req: Request, res: Response) => {
    const activity = req.body.event.data.new;

    const followers = await nhost.graphql.request(followersQuery, {
        user_id: activity.user_id
    });

    res.status(200).send(JSON.stringify(followers));

    // const notifications = followers.data?.user?.followers.map((follower: any) => ({
    //     recipient_id: follower.follower.id,
    //     actor_id: activity.user_id,
    //     activity_id: activity.id
    // }));

    // res.status(200).send(JSON.stringify(notifications));

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
