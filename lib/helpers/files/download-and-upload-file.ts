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

    // Create File object from buffer
    const file = new File([buffer], filename)

    // Upload the file
    return await uploadFile(nhost, file)
}
