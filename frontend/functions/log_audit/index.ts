// https://lwmecktyyhputyqkdigy.functions.eu-west-2.nhost.run/v1/log_audit
// NOTE: This function is triggered when an UPDATE occurs on movies, people, books, etc.
// NOTE: It computes a JSON diff (excluding `view_count` for movies/books) and writes to `audit_logs`.
import {
    InsertAuditLogsDocument,
    InsertAuditLogsMutation,
    InsertAuditLogsMutationVariables
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
        const payload = req.body as {
            event: {
                op: string;
                data: { old?: Record<string, any>; new: Record<string, any> };
                session_variables?: Record<string, string>;
            };
            table: { name: string; schema: string };
        };

        const { event, table } = payload;
        const { op, data } = event;
        const OLD = data.old || {};
        const NEW = data.new;
        const tableName = table.name;

        const diff: Record<string, [any, any]> = {};
        const keys = new Set<string>([...Object.keys(OLD), ...Object.keys(NEW)]);
        for (const key of keys) {
            // NOTE: We don't want to log changes to view_count, vote_count, or vote_average
            // NOTE: These are done automatically and do not have a user associated with them
            if (key === 'view_count') {
                continue;
            }
            if (key === 'vote_count') {
                continue;
            }
            if (key === 'vote_average') {
                continue;
            }
            const oldVal = OLD[key];
            const newVal = NEW[key];
            if (oldVal !== newVal) {
                diff[key] = [oldVal, newVal];
            }
        }

        if (Object.keys(diff).length === 0) {
            return res.status(200).json({ skipped: 'only view_count changed or no change' });
        }

        // NOTE: At the moment, we assume that the primary key is `id`, not a composite key
        const pk = { id: NEW.id ?? OLD.id };

        const sessionVars = event.session_variables || {};
        const userId = sessionVars['x-hasura-user-id'] || null;

        const objects = [
            {
                table_name: tableName,
                pk,
                operation: op,
                user_id: userId,
                diff
            }
        ];

        const result = await client.request<InsertAuditLogsMutation, InsertAuditLogsMutationVariables>(
            InsertAuditLogsDocument,
            { objects }
        );

        return res.status(200).json({
            success: true,
            inserted: result.insert_audit_logs?.affected_rows
        });
    } catch (err: any) {
        console.error('log_audit error:', err);
        return res.status(500).json({ error: err.message || 'Internal Error' });
    }
}
