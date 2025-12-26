import { NhostClient } from '@nhost/nhost-js'

import downloadFile from './download-file'
import uploadFile from './upload-file'

/**
 * Downloads a file from a URL and uploads it to Nhost
 * @param {NhostClient} nhost - Nhost instance
 * @param {string} url - URL of the file to download
 * @returns {Promise<string | null>} Nhost file ID
 */
export default async function downloadAndUploadFile(
    nhost: NhostClient,
    url: string | null | undefined,
): Promise<string | null> {
    if (!url) return null

    // Download the file
    const buffer = await downloadFile(url)

    // Extract filename from URL
    const filename = url.split('/').pop() || 'downloaded-file'

    // Convert Buffer to Uint8Array (browser-compatible)
    const uint8Array = new Uint8Array(buffer)

    // Create File object from Uint8Array
    const file = new File([uint8Array], filename)

    // Upload the file
    return await uploadFile(nhost, file)
}
