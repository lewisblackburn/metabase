import { NhostClient } from '@nhost/nhost-js'
import { uuidv4 } from 'zod'

import downloadFile from './download-file'

/**
 * Downloads a TMDB image and uploads it to Nhost
 * @param {NhostClient} nhost - Nhost instance
 * @param {string} imagePath - TMDB image path (e.g., "/abc123.jpg")
 * @param {TMDBImageSize} size - Image size
 * @returns {Promise<string | null>} Nhost file ID
 */
export default async function uploadFile(
    nhost: NhostClient,
    url: string | null | undefined,
): Promise<string | null> {
    if (!url) return null

    // Download the image
    const buffer = await downloadFile(url)

    // Extract filename from path
    const filename = url.split('/').pop() || `${uuidv4()}.jpg`

    // Create a File object from the buffer
    const file = new File([buffer], filename, { type: 'image/jpeg' })

    // Upload to Nhost using uploadFiles
    const uploadResp = await nhost.storage.uploadFiles({
        'file[]': [file],
    })

    const fileMetadata = uploadResp.body?.processedFiles?.[0]

    if (!fileMetadata?.id) {
        throw new Error('Failed to upload to Nhost or retrieve file ID')
    }

    return fileMetadata.id
}
