import { useState } from 'react';
import * as React from 'react';

import { userBookStatusOptions } from '@/features/books/constants/book-enums';
import { userMovieStatusOptions } from '@/features/movies/constants/movie-enums';
import {
    Books_Bool_Exp,
    InputMaybe,
    Movies_Bool_Exp,
    User_Book_Status_Types_Enum,
    User_Movie_Status_Types_Enum,
    useGetBooksQuery,
    useGetMoviesQuery
} from '@/generated/graphql';
import { useUserId } from '@nhost/nextjs';

import { List } from 'lucide-react';

const statusOptions = {
    movies: [
        {
            label: 'All',
            value: 'all',
            icon: List
        },
        ...userMovieStatusOptions
    ],
    books: [
        {
            label: 'All',
            value: 'all',
            icon: List
        },
        ...userBookStatusOptions
    ]
};

export default function Collections() {
    const userId = useUserId();
    const [mediaType, setMediaType] = useState('movies');
    const [movieStatus, setMovieStatus] = useState<User_Movie_Status_Types_Enum | null>(null);
    const [bookStatus, setBookStatus] = useState<User_Book_Status_Types_Enum | null>(null);

    // Set up movie query
    const movieWhere: InputMaybe<Movies_Bool_Exp> | undefined =
        movieStatus !== null
            ? {
                  user_movie_statuses: {
                      user_id: { _eq: userId },
                      status: { _eq: movieStatus }
                  }
              }
            : {};

    // Set up book query
    const bookWhere: InputMaybe<Books_Bool_Exp> | undefined =
        bookStatus !== null
            ? {
                  user_book_statuses: {
                      user_id: { _eq: userId },
                      status: { _eq: bookStatus }
                  }
              }
            : {};

    const { data: moviesData, isLoading: isMoviesLoading } = useGetMoviesQuery(
        { where: movieWhere },
        { enabled: !!userId && mediaType === 'movies' }
    );

    const { data: booksData, isLoading: isBooksLoading } = useGetBooksQuery(
        { where: bookWhere },
        { enabled: !!userId && mediaType === 'books' }
    );

    return <div>test</div>;
}
