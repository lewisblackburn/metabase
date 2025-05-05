// https://lwmecktyyhputyqkdigy.functions.eu-west-2.nhost.run/v1/log_user_activity
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

const LOG_USER_ACTIVITY_QUERY = gql`
    mutation LogUserActivity($user_id: uuid!, $activity: String!) {
        insert_user_activity(objects: { user_id: $user_id, activity: $activity }) {
            affected_rows
        }
    }
`;

export default async (req: Request, res: Response) => {
    try {
        const { event } = req.body;
        const { op, data, table } = event;
        const OLD = event.old || {};
        const NEW = event.new;

        res.status(200).json({ success: true, event });
    } catch (err: any) {
        console.error('log_user_activity error:', err);
        return res.status(500).json({ error: err.message || 'Internal Error' });
    }
};
