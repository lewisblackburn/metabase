import { BUCKET } from '@/constants/media.constant';
import { TMDB_GENDER_MAP } from '@/constants/tmdb.constant';
import {
    GetPersonByTmdb_IdDocument,
    GetPersonByTmdb_IdQuery,
    GetPersonByTmdb_IdQueryVariables,
    InsertPersonDocument,
    InsertPersonMutation,
    InsertPersonMutationVariables,
    People_Constraint,
    People_Insert_Input,
    People_On_Conflict,
    People_Update_Column,
    Person_Media_Constraint,
    Person_Media_Update_Column
} from '@/generated/graphql';
import { fetcher } from '@/lib/graphql-client';
import { nhost } from '@/lib/nhost';
import type { TmdbPersonDetails } from '@/types/tmdb.types';

import { uploadFile } from '../file.service';
import { tmdbService } from './tmdb.service';

export async function importPersonFromTmdb(
    tmdbId: number,
    override: boolean = false
): Promise<InsertPersonMutation['insert_people_one'] | { message: string }> {
    try {
        const existingPerson = await fetcher<GetPersonByTmdb_IdQuery, GetPersonByTmdb_IdQueryVariables>(
            GetPersonByTmdb_IdDocument,
            { tmdb_id: tmdbId.toString() }
        )();

        if (existingPerson?.people && existingPerson.people.length > 0 && !override) {
            console.log(`Person with TMDB ID ${tmdbId} already exists.`);
            return { message: `Person with TMDB ID ${tmdbId} already exists.` };
        }
    } catch (error) {
        console.error('Error checking for existing person:', error);
        return { message: 'Error checking for existing person.' };
    }

    let personData: TmdbPersonDetails;
    try {
        personData = await tmdbService.getEntity<TmdbPersonDetails>('person', tmdbId, '');
    } catch (error) {
        console.error('Error fetching person details from TMDB:', error);
        return { message: `Error fetching person details for TMDB ID ${tmdbId}.` };
    }

    let profileFile;
    if (personData.profile_path) {
        try {
            profileFile = await uploadFile({
                url: tmdbService.getProfileImage(personData.profile_path),
                bucketId: BUCKET.HEADSHOT
            });
        } catch (error) {
            console.error('Error uploading profile image:', error);
        }
    }

    try {
        const personInsertInput: People_Insert_Input = {
            name: personData.name,
            bio: personData.biography,
            birth_date: personData.birthday,
            death_date: personData.deathday,
            gender: TMDB_GENDER_MAP[personData.gender as keyof typeof TMDB_GENDER_MAP],
            tmdb_id: personData.id.toString(),
            headshot: profileFile ? nhost.storage.getPublicUrl({ fileId: profileFile.id }) : undefined,
            person_media: profileFile
                ? {
                      data: [
                          {
                              file_id: profileFile.id
                          }
                      ],
                      on_conflict: {
                          constraint: Person_Media_Constraint.PersonMediaPkey,
                          update_columns: [Person_Media_Update_Column.FileId]
                      }
                  }
                : undefined
        };

        const onConflict: People_On_Conflict = {
            constraint: People_Constraint.PeopleTmdbIdKey,
            update_columns: Object.values(People_Update_Column).filter(
                (col) => col !== People_Update_Column.CreatedAt && col !== People_Update_Column.Id
            )
        };

        const result = await fetcher<InsertPersonMutation, InsertPersonMutationVariables>(InsertPersonDocument, {
            object: personInsertInput,
            on_conflict: override ? onConflict : undefined
        })();

        if (!result.insert_people_one) {
            return { message: 'Failed to insert person into database.' };
        }

        console.log(`Successfully imported person: ${result.insert_people_one.name}`);
        return result.insert_people_one;
    } catch (error) {
        console.error(`Error mapping TMDB data or inserting person (TMDB ID: ${tmdbId}):`, error);
        if (error instanceof Error) {
            console.error('Detailed Error:', error.message, error.stack);
        }
        return { message: `Error importing person with TMDB ID ${tmdbId}. Check server logs.` };
    }
}
