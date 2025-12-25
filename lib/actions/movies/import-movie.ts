'use server'

import { TMDBMovieImporter } from '@/lib/importer'
import { createNhostClient } from '@/lib/nhost/server'

export async function importMovie(externalId: string) {
    const nhost = await createNhostClient()
    const importer = new TMDBMovieImporter(nhost)
    return importer.import(externalId)
}
