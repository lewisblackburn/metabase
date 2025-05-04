import { GetFilesDocument, useGetFilesQuery } from '@/generated/graphql';
import { nhostAdmin } from '@/lib/nhost-admin';
import { nhostPublic } from '@/lib/nhost-public';

import crypto from 'crypto';

export interface UploadFileOptions {
    url: string;
    bucketId?: string;
    fileName?: string;
}

export const uploadFile = async ({ url, bucketId = 'default', fileName }: UploadFileOptions) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch file from URL: ${response.statusText}`);
        }

        const blob = await response.blob();
        const buffer = await blob.arrayBuffer();
        const hash = crypto.createHash('sha256').update(Buffer.from(buffer)).digest('hex');
        const finalFileName = hash;

        const existingFile = await nhostPublic.graphql.request(GetFilesDocument, {
            where: {
                name: {
                    _eq: hash
                }
            }
        });

        if (existingFile?.data?.files && existingFile.data.files.length > 0) {
            return existingFile.data.files[0];
        }

        const file = new File([blob], finalFileName, {
            type: blob.type
        });

        const { fileMetadata, error: uploadError } = await nhostPublic.storage.upload({
            file,
            bucketId
        });

        if (uploadError) {
            throw uploadError;
        }

        return fileMetadata;
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
    }
};
