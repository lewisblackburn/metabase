// https://lwmecktyyhputyqkdigy.functions.eu-west-2.nhost.run/v1/cleanup_file_for_deleted_media
// NOTE: This function is triggered when a DELETE occurs on any *_media table.
// NOTE: It deletes the corresponding storage.files row for OLD.file_id.
import { DeleteFilesDocument, DeleteFilesMutation, DeleteFilesMutationVariables } from '@/generated/graphql';

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
        const payload = (req.body ?? req.body) as {
            event: {
                data: { old?: Record<string, any>; new?: Record<string, any> };
            };
        };
        const { data } = payload.event;

        const oldRow = data.old || {};
        const fileId = oldRow.file_id;

        if (!fileId) {
            return res.status(200).json({ skipped: 'no file_id to delete' });
        }

        await client.request<DeleteFilesMutation, DeleteFilesMutationVariables>(DeleteFilesDocument, { ids: [fileId] });

        return res.status(200).json({ success: true, deleted_file_id: fileId });
    } catch (err: any) {
        console.error('cleanup_file_for_deleted_media error:', err);
        return res.status(500).json({ error: err.message || 'Internal Error' });
    }
}
