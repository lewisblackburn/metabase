import fs from 'fs'
import path from 'path'

/**
 * Writes content to a file
 *
 * @param content - The content to write
 * @param outputPath - Relative path from project root (e.g., ['lib', 'types', 'enums.ts'])
 * @returns Absolute path to the written file
 */
export function writeFile(content: string, outputPath: string[]): string {
    const absolutePath = path.join(process.cwd(), ...outputPath)
    fs.writeFileSync(absolutePath, content, 'utf-8')
    return absolutePath
}
