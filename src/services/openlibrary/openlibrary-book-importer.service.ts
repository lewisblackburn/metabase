import { BUCKET } from '@/constants/media.constant';
import {
    Book_Media_Constraint,
    Book_Release_Status_Types_Enum,
    Books_Insert_Input,
    Credits_Arr_Rel_Insert_Input,
    Credits_Constraint,
    Credits_Insert_Input,
    GetBookByOpenLibrary_IdDocument,
    GetBookByOpenLibrary_IdQuery,
    GetBookByOpenLibrary_IdQueryVariables,
    InputMaybe,
    InsertBookDocument,
    InsertBookMutation,
    InsertBookMutationVariables,
    Object_Types_Enum,
    People_Constraint,
    People_Update_Column,
    Person_Media_Constraint
} from '@/generated/graphql';
import { nhost } from '@/lib/nhost';
import { OpenLibraryWork } from '@/types/openlibrary.type';

import { FileService } from '../file.service';
import { OpenLibraryService } from './openlibrary.service';

export class OpenLibraryBookImporterService extends OpenLibraryService {
    private getDefaultStatus(): Book_Release_Status_Types_Enum {
        return Book_Release_Status_Types_Enum.Published;
    }
    private async buildCredits(book: OpenLibraryWork): Promise<Credits_Arr_Rel_Insert_Input | undefined> {
        if (!book.authors?.length) return undefined;

        const authorPromises = book.authors.map(async (authorObject) => {
            const authorId = authorObject.author.key.replace('/authors/', '');
            const author = await this.getAuthor(authorId);

            return {
                id: authorId,
                name: author.name,
                profile_path: author.photos?.[0],
                credit_type: 'author',
                role: 'author',
                details: { department: 'writing' }
            };
        });

        const authors = await Promise.all(authorPromises);

        const uploadPromises = authors.map((author) => {
            const path = author.profile_path;
            return path ? FileService.uploadImage(path.toString(), BUCKET.HEADSHOT, this.getCoverImage) : null;
        });

        const uploads = await Promise.all(uploadPromises);

        const data: Credits_Insert_Input[] = authors.map((author, i) => {
            const file = uploads[i];

            return {
                credit_type: author.credit_type,
                object_type: Object_Types_Enum.Book,
                role: author.role,
                details: author.details,
                person: {
                    data: {
                        openlibrary_id: author.id,
                        name: author.name,
                        headshot: file?.url,
                        person_media: file
                            ? {
                                  data: [
                                      {
                                          media_type: BUCKET.HEADSHOT,
                                          media_url: file.url,
                                          media_id: file.id
                                      }
                                  ],
                                  on_conflict: {
                                      constraint: Person_Media_Constraint.PersonMediaPkey
                                  }
                              }
                            : undefined
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

    async isExisting(openLibraryWorkId: string): Promise<boolean> {
        try {
            const { data, error } = await nhost.graphql.request<
                GetBookByOpenLibrary_IdQuery,
                GetBookByOpenLibrary_IdQueryVariables
            >(GetBookByOpenLibrary_IdDocument, { openlibrary_id: openLibraryWorkId });

            if (error) {
                const message = Array.isArray(error) ? error.map((e) => e.message).join('; ') : error.message;
                throw new Error(`Failed to check if book exists: ${message}`);
            }

            return data.books.length > 0;
        } catch (error) {
            console.error('Error checking if book exists:', error);
            throw error;
        }
    }

    async save(input: Books_Insert_Input): Promise<InsertBookMutation> {
        try {
            const { data, error } = await nhost.graphql.request<InsertBookMutation, InsertBookMutationVariables>(
                InsertBookDocument,
                { object: input }
            );

            if (error) {
                const message = Array.isArray(error) ? error.map((e) => e.message).join('; ') : error.message;
                throw new Error(`Failed to save book: ${message}`);
            }

            return data;
        } catch (error) {
            console.error('Error saving book:', error);
            throw error;
        }
    }

    async import(openLibraryWorkKey: string): Promise<InsertBookMutation | boolean> {
        try {
            const openLibraryWorkId = openLibraryWorkKey.replace('/works/', '');

            const exists = await this.isExisting(openLibraryWorkId);
            if (exists) return true;

            const book = await this.getWork(openLibraryWorkId);
            if (!book) return false;

            const coverId = book.covers?.[0];
            const coverFile = coverId
                ? await FileService.uploadImage(coverId.toString(), BUCKET.BACKDROP, this.getCoverImage)
                : null;

            const payload = await this.save({
                title: book.title,
                overview: book.description?.value,
                publish_date: book.created,
                status: this.getDefaultStatus(),
                credits: await this.buildCredits(book),
                cover: coverFile?.url,
                openlibrary_id: openLibraryWorkId,
                book_media: coverFile
                    ? {
                          data: [
                              {
                                  bucket: BUCKET.COVER,
                                  file_url: coverFile.url,
                                  media_id: coverFile.id
                              }
                          ],
                          on_conflict: {
                              constraint: Book_Media_Constraint.BookMediaPkey
                          }
                      }
                    : undefined
            });

            return payload;
        } catch (error) {
            console.error('Error importing book:', error);
            throw error;
        }
    }
}

export const openLibraryBookImporterService = new OpenLibraryBookImporterService();
