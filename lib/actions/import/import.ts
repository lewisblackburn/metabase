'use server'

import { revalidatePath } from 'next/cache'

import { MediaType, Source } from '@/lib/helpers/graphql-enums'
import { TMDBMovieImporter, TMDBPersonImporter } from '@/lib/importer'
import { createNhostClient } from '@/lib/nhost/server'
import { ImportValues } from '@/lib/validations/import.schema'

export async function importMedia(values: ImportValues) {
    if (!values.externalId?.trim()) {
        throw new Error('External ID is required')
    }

    const nhost = await createNhostClient()
    switch (values.mediaType) {
        case MediaType.MOVIE: {
            const importer = new TMDBMovieImporter(nhost)
            const result = await importer.import(values.externalId)
            revalidatePath('/movies')
            return {
                success: true,
                message: `Successfully imported ${values.mediaType} from ${Source.TMDB}`,
                entityId: result.entityId,
                action: result.action,
            }
        }
        case MediaType.PERSON: {
            const importer = new TMDBPersonImporter(nhost)
            const result = await importer.import(values.externalId)
            revalidatePath('/people')
            return {
                success: true,
                message: `Successfully imported ${values.mediaType} from ${Source.TMDB}`,
                entityId: result.entityId,
                action: result.action,
            }
        }
        default:
            throw new Error(`Import not yet implemented for ${values.mediaType}`)
    }
}
