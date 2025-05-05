// https://lwmecktyyhputyqkdigy.functions.eu-west-2.nhost.run/v1/cleanup_credits
// NOTE: Triggered on DELETE of anything with credits.
import {
    DeleteCreditsDocument,
    DeleteCreditsMutation,
    DeleteCreditsMutationVariables,
    Object_Types_Enum
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

export default async function handler(req: Request, res: Response) {
    try {
        const payload = req.body as {
            event: {
                op: string;
                data: { old?: Record<string, any> };
            };
        };
        const { data } = payload.event;

        const oldRow = data.old || {};
        const id = oldRow.id;
        const table = (req.body.payload ?? req.body).table.name;

        if (!id) {
            return res.status(200).json({ skipped: 'no id in old row' });
        }

        const object_type =
            table === 'movies' ? Object_Types_Enum.Movie : table === 'books' ? Object_Types_Enum.Book : null;

        if (!object_type) {
            return res.status(200).json({ skipped: `unsupported table ${table}` });
        }

        const result = await client.request<DeleteCreditsMutation, DeleteCreditsMutationVariables>(
            DeleteCreditsDocument,
            {
                where: {
                    object_type: { _eq: object_type },
                    object_id: { _eq: id }
                }
            }
        );

        return res.status(200).json({
            success: true,
            deleted: result.delete_credits?.affected_rows
        });
    } catch (err: any) {
        console.error('cleanup_credits error:', err);
        return res.status(500).json({ error: err.message || 'Internal Error' });
    }
}
