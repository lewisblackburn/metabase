import { BUCKET } from '@/constants/media.constant';
import {
    Book_Media_Constraint,
    Book_Release_Status_Types_Enum,
    Books_Insert_Input,
    Credits_Arr_Rel_Insert_Input,
    Credits_Constraint,
    Credits_Insert_Input,
    GetBookByOpenLibrary_IdQuery,
    GetBookByOpenLibrary_IdQueryVariables,
    GetMovieByTmdb_IdDocument,
    InputMaybe,
    InsertBookDocument,
    InsertBookMutation,
    InsertBookMutationVariables,
    Object_Types_Enum,
    People_Constraint,
    People_Update_Column
} from '@/generated/graphql';
import { nhost } from '@/lib/nhost';
import { OpenLibraryWork } from '@/types/openlibrary.type';

import { FileService } from '../file.service';
import { OpenLibraryService } from './openlibrary.service';

export class OpenLibraryBookImporterService extends OpenLibraryService {
    private buildStatus(): InputMaybe<Book_Release_Status_Types_Enum> | undefined {
        return Book_Release_Status_Types_Enum.Published;
    }

    private async buildCredits(book: OpenLibraryWork): Promise<InputMaybe<Credits_Arr_Rel_Insert_Input> | undefined> {
        const authors = book.authors.map((author) => ({
            id: author.key.replace('/authors/', ''),
            name: author.name,
            // profile_path: author.photos?.[0],
            credit_type: 'author' as const,
            role: 'author' as const,
            details: { department: 'writing' as const }
        }));

        // const uploads = await Promise.all(
        //     rawCredits.map((rc) => FileService.uploadImage(rc.profile_path, BUCKET.HEADSHOT, this.getProfileImage))
        // );

        const data: Credits_Insert_Input[] = authors.map((author, i) => {
            // const file = uploads[i];
            // const personMedia = file
            //     ? {
            //           data: [
            //               {
            //                   media_type: BUCKET.HEADSHOT,
            //                   media_url: file.url,
            //                   media_id: file.id
            //               }
            //           ],
            //           on_conflict: {
            //               constraint: Person_Media_Constraint.PersonMediaPkey
            //           }
            //       }
            //     : undefined;

            return {
                credit_type: author.credit_type,
                object_type: Object_Types_Enum.Book,
                role: author.role,
                details: author.details,
                person: {
                    data: {
                        tmdb_id: author.id.toString(),
                        name: author.name
                        // headshot: file?.url,
                        // person_media: personMedia
                    },
                    on_conflict: {
                        constraint: People_Constraint.PeopleOpenlibraryIdKey,
                        update_columns: [People_Update_Column.Headshot]
                    }
                }
            };
        });

        return {
            data,
            on_conflict: {
                constraint: Credits_Constraint.CreditsPkey,
                update_columns: []
            }
        };
    }

    async isExisting(openLibraryWorkId: string): Promise<GetBookByOpenLibrary_IdQuery['books']> {
        const { data, error } = await nhost.graphql.request<
            GetBookByOpenLibrary_IdQuery,
            GetBookByOpenLibrary_IdQueryVariables
        >(GetMovieByTmdb_IdDocument, { openlibrary_id: openLibraryWorkId.toString() });
        if (error) throw new Error(Array.isArray(error) ? error.map((e) => e.message).join('; ') : error.message);
        return data.books;
    }

    async save(input: Books_Insert_Input): Promise<InsertBookMutation> {
        const { data, error } = await nhost.graphql.request<InsertBookMutation, InsertBookMutationVariables>(
            InsertBookDocument,
            { object: input }
        );
        if (error) throw new Error(Array.isArray(error) ? error.map((e) => e.message).join('; ') : error.message);
        return data;
    }

    async import(openLibraryWorkKey: OpenLibraryWork['key']): Promise<InsertBookMutation | boolean> {
        const openLibraryWorkId = openLibraryWorkKey.replace('/works/', '');
        const existing = await this.isExisting(openLibraryWorkId);
        if (existing.length) return true;

        const book = await this.getWork(openLibraryWorkId);
        if (!book) return false;

        const coverId = book.covers?.[0];
        const path = coverId ? coverId.toString() : null;
        const urlFn = (path: string) => this.getCoverImage(path);
        const [coverFile] = await Promise.all([FileService.uploadImage(path, BUCKET.BACKDROP, urlFn)]);

        const payload = await this.save({
            title: book.title,
            overview: book.description.value,
            release_date: book.created.value,
            status: this.buildStatus(),
            credits: await this.buildCredits(book),
            cover: coverFile?.url,
            openlibrary_id: openLibraryWorkId,
            book_media: {
                data: [{ bucket: BUCKET.COVER, file_url: coverFile?.url, media_id: coverFile?.id }],
                on_conflict: { constraint: Book_Media_Constraint.BookMediaPkey }
            }
        });

        return payload;
    }
}

export const openLibraryBookImporterService = new OpenLibraryBookImporterService();
