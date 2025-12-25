import { NhostClient } from '@nhost/nhost-js'

import { Source } from '../helpers/graphql-enums'
import { BaseImporter } from './base.importer'

export abstract class TMDBImporter extends BaseImporter {
    source = Source.TMDB

    constructor(
        nhost: NhostClient,
        protected apiKey: string,
    ) {
        super(nhost)
    }

    protected async fetchFromTMDB(endpoint: string): Promise<unknown> {
        const separator = endpoint.includes('?') ? '&' : '?'
        const url = `https://api.themoviedb.org/3/${endpoint}${separator}api_key=${this.apiKey}`
        const res = await fetch(url)
        if (!res.ok) throw new Error(`TMDB fetch failed: ${res.status}`)
        return res.json()
    }
}
