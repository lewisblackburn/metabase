import { BUCKET } from '@/constants/media.constant';
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
    Person_Media_Constraint
} from '@/generated/graphql';
import { nhost } from '@/lib/nhost';
import { TMDBPerson } from '@/types/tmdb.type';

import { FileService } from '../file.service';
import { TMDBService } from './tmdb.service';

const genderMap = {
    0: 'Unknown',
    1: 'Female',
    2: 'Male',
    3: 'Non-binary'
};

export class TMDBPersonImporterService extends TMDBService {
    async isExisting(tmdbPersonId: TMDBPerson['id']): Promise<GetPersonByTmdb_IdQuery['people']> {
        const { data, error } = await nhost.graphql.request<GetPersonByTmdb_IdQuery, GetPersonByTmdb_IdQueryVariables>(
            GetPersonByTmdb_IdDocument,
            { tmdb_id: tmdbPersonId.toString() }
        );
        if (error) throw new Error(Array.isArray(error) ? error.map((e) => e.message).join('; ') : error.message);
        return data.people;
    }

    async save(input: People_Insert_Input, on_conflict: People_On_Conflict): Promise<InsertPersonMutation> {
        const { data, error } = await nhost.graphql.request<InsertPersonMutation, InsertPersonMutationVariables>(
            InsertPersonDocument,
            { object: input, on_conflict }
        );
        if (error) throw new Error(Array.isArray(error) ? error.map((e) => e.message).join('; ') : error.message);
        return data;
    }

    async import(tmdbPersonId: TMDBPerson['id'], override: boolean = false): Promise<InsertPersonMutation | boolean> {
        if (!override) {
            const existing = await this.isExisting(tmdbPersonId);
            if (existing.length) return true;
        }

        const person = await this.getEntity<TMDBPerson>('person', tmdbPersonId, '');
        if (!person) return false;

        const [profileFile] = await Promise.all([
            FileService.uploadImage(person.profile_path, BUCKET.HEADSHOT, this.getProfileImage)
        ]);

        const hasProfile = !!person.profile_path;

        const personMedia = hasProfile
            ? {
                  data: [
                      {
                          media_type: BUCKET.HEADSHOT,
                          media_url: profileFile?.url,
                          media_id: profileFile?.id
                      }
                  ],
                  on_conflict: {
                      constraint: Person_Media_Constraint.PersonMediaPkey,
                      update_columns: []
                  }
              }
            : { data: [], on_conflict: null };

        const payload = await this.save(
            {
                name: person.name,
                bio: person.biography,
                birth_date: person.birthday,
                death_date: person.deathday,
                gender: genderMap[person.gender as keyof typeof genderMap],
                tmdb_id: person.id.toString(),
                // imdb_id: person.imdb_id?.toString(),
                headshot: profileFile?.url,
                person_media: personMedia
            },
            {
                constraint: People_Constraint.PeopleTmdbIdKey,
                // NOTE: Override all columns
                update_columns: (Object.values(People_Update_Column) as People_Update_Column[]).filter(
                    (col) => col !== People_Update_Column.CreatedAt && col !== People_Update_Column.Id
                ),
                where: { tmdb_id: { _eq: person.id.toString() } }
            }
        );
        return payload;
    }
}

export const tmdbPersonImporterService = new TMDBPersonImporterService();
