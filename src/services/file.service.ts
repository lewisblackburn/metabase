import { GetFilesDocument } from '@/generated/graphql';
import { nhost } from '@/lib/nhost';

export class FileService {
    static async computeFileHash(file: File) {
        const buffer = await file.arrayBuffer();
        const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
        return Array.from(new Uint8Array(hashBuffer))
            .map((b) => b.toString(16).padStart(2, '0'))
            .join('');
    }

    static async uploadFile(path: string, type: string): Promise<{ url: string; id: string } | null> {
        const response = await fetch(path);
        if (!response.ok) return null;

        const blob = await response.blob();
        const mimeType = blob.type;
        const extension = mimeType.split('/')[1];
        const file = new File([blob], `${path}.${extension}`, {
            type: mimeType
        });

        const hash = await this.computeFileHash(file);

        // NOTE: Do not upload the same file multiple times
        const existingFile = await nhost.graphql.request(GetFilesDocument, {
            where: {
                name: {
                    _eq: hash
                }
            }
        });

        if (existingFile.data.files.length > 0) {
            const url = nhost.storage.getPublicUrl({
                fileId: existingFile.data.files[0].id
            });

            return { url, id: existingFile.data.files[0].id };
        } else {
            const { fileMetadata } = await nhost.storage.upload({
                bucketId: type,
                name: hash,
                file
            });

            if (!fileMetadata) return null;

            const url = nhost.storage.getPublicUrl({ fileId: fileMetadata.id });
            return { url, id: fileMetadata.id };
        }
    }
}
