import { BucketType } from '@/constants/media.constant';
import { GetFilesDocument, GetFilesQuery, GetFilesQueryVariables } from '@/generated/graphql';
import { nhost } from '@/lib/nhost';

export interface UploadResult {
    fileId: string;
    fileUrl: string;
}

export class FileService {
    private async fetchFileFromUrl(url: string): Promise<File> {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch file from URL: ${response.statusText}`);
        }
        const blob = await response.blob();
        const filename = url.split('/').pop() || 'downloaded-file';
        return new File([blob], filename, { type: blob.type });
    }

    private async calculateHash(file: File): Promise<string> {
        const arrayBuffer = await file.arrayBuffer();
        const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
    }

    public async uploadFileFromUrl(url: string, bucketId: BucketType): Promise<UploadResult> {
        const file = await this.fetchFileFromUrl(url);
        const hash = await this.calculateHash(file);

        const existingFile = await nhost.graphql.request<GetFilesQuery, GetFilesQueryVariables>(GetFilesDocument, {
            where: {
                name: {
                    _eq: hash
                }
            }
        });

        const existingFileId = existingFile.data?.files[0]?.id;
        if (existingFileId) {
            const publicURL = nhost.storage.getPublicUrl({ fileId: existingFileId });
            return { fileId: existingFileId, fileUrl: publicURL };
        }

        const { fileMetadata, error } = await nhost.storage.upload({
            file,
            bucketId,
            name: hash
        });
        if (error) {
            throw error;
        }

        const fileUrl = nhost.storage.getPublicUrl({ fileId: fileMetadata.id });
        return { fileId: fileMetadata.id, fileUrl };
    }
}
