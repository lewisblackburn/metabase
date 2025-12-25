import {
    CreatePersonDocument,
    CreatePersonMutation,
    CreatePersonMutationVariables,
} from '@/generated/graphql'
import { Gender, MediaType } from '@/lib/helpers/graphql-enums'
import { NormalisedData } from '@/lib/types/importer'
import { handleGraphQLError } from '@/lib/utils/error-handler'
import { Person } from '@/lib/validations/people/person.schema'

import { TMDBImporter } from './tmdb.importer'

export class TMDBPersonImporter extends TMDBImporter {
    mediaType = MediaType.PERSON

    async fetch(tmdbId: string) {
        return this.fetchFromTMDB(`person/${tmdbId}`)
    }

    // TODO: Fix the any type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    normalise(raw: any): NormalisedData<Person> {
        return {
            entity: {
                name: raw.name,
                birthdate: raw.birthday ? new Date(raw.birthday).toISOString() : undefined,
                // Note: gender is required but not available from TMDB
                // Default to Gender.OTHER during entity creation
            },
        }
    }

    protected async createEntity(data: Partial<Person>): Promise<string> {
        const result = await this.nhost.graphql
            .request<CreatePersonMutation, CreatePersonMutationVariables>(CreatePersonDocument, {
                object: {
                    name: data.name,
                    birthdate: data.birthdate ?? undefined,
                    gender: data.gender || Gender.OTHER,
                },
                on_conflict: {
                    constraint: 'people_pkey',
                    update_columns: [],
                },
            })
            .catch(handleGraphQLError)

        const personId = result?.body.data?.insert_people_one?.id
        if (!personId) throw new Error('Failed to create person')
        return personId
    }

    // TODO: Implement
    async findSimilar(raw: unknown): Promise<unknown[]> {
        return []
    }

    // TODO: Implement
    async merge(raw: unknown, existing: unknown): Promise<unknown> {
        return existing
    }

    async search(query: string) {
        const data = (await this.fetchFromTMDB(
            `search/person?query=${encodeURIComponent(query)}`,
        )) as { results?: unknown[] }
        return data.results ?? []
    }
}
