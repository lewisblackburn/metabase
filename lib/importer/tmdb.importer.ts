import { NhostClient } from '@nhost/nhost-js'

import { env } from '@/env'
import { Sources_Enum } from '@/generated/graphql'

import downloadAndUploadFile from '../helpers/files/download-and-upload-file'
import getTMDBFile from '../helpers/files/get-tmdb-file'
import { BaseImporter } from './base.importer'

export abstract class TMDBImporter extends BaseImporter {
    source = Sources_Enum.Tmdb

    constructor(
        nhost: NhostClient,
        protected apiKey: string = (env.TMDB_API_KEY as string | undefined) ?? '',
    ) {
        super(nhost)
    }

    protected async fetchFromTMDB(endpoint: string): Promise<unknown> {
        if (!this.apiKey) {
            throw new Error(
                'TMDB API key is not available. Use this importer in server actions or API routes.',
            )
        }
        const separator = endpoint.includes('?') ? '&' : '?'
        const url = `https://api.themoviedb.org/3/${endpoint}${separator}api_key=${this.apiKey}`
        const res = await fetch(url)
        if (!res.ok) {
            const errorText = await res.text().catch(() => 'Unknown error')
            throw new Error(`TMDB fetch failed: ${res.status} - ${errorText}`)
        }
        return res.json()
    }

    protected async uploadImage(imageId?: string | null) {
        if (!imageId) return undefined
        return downloadAndUploadFile(this.nhost, getTMDBFile(imageId))
    }
}
