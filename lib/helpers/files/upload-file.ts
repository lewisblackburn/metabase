import { NhostClient } from '@nhost/nhost-js'

export default async function uploadFile(nhost: NhostClient, file: File): Promise<string | null> {
    const uploadResp = await nhost.storage.uploadFiles({
        'file[]': [file],
    })

    const fileMetadata = uploadResp.body?.processedFiles?.[0]

    if (!fileMetadata?.id) {
        throw new Error('Failed to upload to Nhost or retrieve file ID')
    }

    return fileMetadata.id
}
