import { BUCKET } from '@/constants/media.constant';
import { nhost } from '@/lib/nhost';

import {
    Book_Media_Constraint,
    Book_Media_Update_Column,
    Books_Insert_Input,
    Credit_Types_Enum,
    Credits_Insert_Input,
    Department_Types_Enum,
    GetBookByGoogleBooksIdDocument,
    GetBookByGoogleBooksIdQuery,
    GetBookByGoogleBooksIdQueryVariables,
    InsertBookDocument,
    InsertBookMutation,
    InsertBookMutationVariables,
    Job_Types_Enum,
    Object_Types_Enum
} from '../../generated/graphql';
import { fetcher } from '../../lib/graphql-client';
import { GoogleBooksVolume } from '../../types/googlebooks.types';
import { FileService } from '../file.service';
import { googleBooksService } from './googlebooks.service';

export async function importBookFromGoogleBooks(
    volumeId: string
): Promise<InsertBookMutation['insert_books_one'] | { message: string }> {
    const fileService = new FileService();

    try {
        const existingBook = await fetcher<GetBookByGoogleBooksIdQuery, GetBookByGoogleBooksIdQueryVariables>(
            GetBookByGoogleBooksIdDocument,
            { googlebooks_id: volumeId }
        )();

        if (existingBook?.books && existingBook.books.length > 0) {
            console.log(`Book with Google Books ID ${volumeId} already exists.`);
            return { message: `Book with Google Books ID ${volumeId} already exists.` };
        }
    } catch (error) {
        console.error('Error checking for existing book:', error);
        return { message: 'Error checking for existing book.' };
    }

    let bookData: GoogleBooksVolume;
    try {
        bookData = await googleBooksService.getVolume(volumeId);
    } catch (error) {
        console.error('Error fetching book details from Google Books:', error);
        return { message: `Error fetching book details for Google Books ID ${volumeId}.` };
    }

    const coverUrl = bookData.volumeInfo.imageLinks
        ? googleBooksService.getThumbnailImage(bookData.volumeInfo.imageLinks)
        : undefined;

    let cover;
    if (coverUrl) {
        cover = await fileService.uploadFileFromUrl(coverUrl, BUCKET.COVER);
    }

    const credits: Promise<Credits_Insert_Input[]> = Promise.all(
        bookData.volumeInfo.authors?.map(async (author, index) => {
            return {
                object_type: Object_Types_Enum.Book,
                department: Department_Types_Enum.Writing,
                job: Job_Types_Enum.Writer,
                credit_type: Credit_Types_Enum.Author,
                order: index + 1,
                person: {
                    data: {
                        name: author
                    }
                }
            } as Credits_Insert_Input;
        }) ?? []
    );

    // Get ISBN identifiers
    // const isbn10 = bookData.volumeInfo.industryIdentifiers?.find((id) => id.type === 'ISBN_10')?.identifier;
    // const isbn13 = bookData.volumeInfo.industryIdentifiers?.find((id) => id.type === 'ISBN_13')?.identifier;

    try {
        const bookInsertInput: Books_Insert_Input = {
            title: bookData.volumeInfo.title,
            // subtitle: bookData.volumeInfo.subtitle,
            googlebooks_id: bookData.id,
            overview: bookData.volumeInfo.description,
            // publisher: bookData.volumeInfo.publisher,
            published_date: bookData.volumeInfo.publishedDate ? new Date(bookData.volumeInfo.publishedDate) : undefined,
            // page_count: bookData.volumeInfo.pageCount,
            // language: bookData.volumeInfo.language,
            cover: cover ? cover.fileUrl : undefined,
            book_media: {
                data: [
                    {
                        file_id: cover?.fileId
                    }
                ],
                on_conflict: {
                    constraint: Book_Media_Constraint.BookMediaPkey,
                    update_columns: [Book_Media_Update_Column.FileId]
                }
            },
            credits: {
                data: await credits
            }
            //     book_genres: bookData.volumeInfo.categories
            //         ? {
            //               data: bookData.volumeInfo.categories.map((category) => ({
            //                   genre: mapGoogleBooksCategoryToGenreType(category)
            //               }))
            //           }
            //         : undefined
        };

        const result = await fetcher<InsertBookMutation, InsertBookMutationVariables>(InsertBookDocument, {
            object: bookInsertInput
        })();

        if (!result.insert_books_one) {
            return { message: 'Failed to insert book into database.' };
        }

        return result.insert_books_one;
    } catch (error) {
        console.error('Error inserting book:', error);
        return { message: 'Error inserting book into database.' };
    }
}
