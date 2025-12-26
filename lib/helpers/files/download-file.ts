/**
 * Downloads a file from a URL and returns the buffer
 * @param {string} url - The URL of the file to download
 * @returns {Promise<Buffer>} File buffer
 */
export default async function downloadFile(url: string): Promise<Buffer> {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`)
    }
    const arrayBuffer = await response.arrayBuffer()
    return Buffer.from(arrayBuffer)
}
