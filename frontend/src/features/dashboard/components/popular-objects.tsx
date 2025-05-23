'use client';

import DefaultLoading from '@/components/shared/default-loading';
import ScrollableTabs from '@/components/shared/scrollable-tabs';
import { BookCard } from '@/features/books/components/book-card';
import { MovieCard } from '@/features/movies/components/movie-card';
import { SongCard } from '@/features/songs/components/song-card';
import { Object_Types_Enum, useGetPopularObjectsQuery } from '@/generated/graphql';
import { TabsContent } from '@/registry/new-york-v4/ui/tabs';

import { Book, Film, Music } from 'lucide-react';

export default function PopularObjects() {
    const { data, isLoading } = useGetPopularObjectsQuery();

    if (isLoading) return <DefaultLoading />;
    if (!data) return <div>No data</div>;

    const popularMovies = data.movies.map((movie) => ({
        id: movie.id,
        title: movie.title,
        image: movie.poster,
        vote_average: movie.vote_average,
        type: Object_Types_Enum.Movie
    }));

    const popularBooks = data.books.map((book) => ({
        id: book.id,
        title: book.title,
        image: book.cover,
        vote_average: book.vote_average,
        type: Object_Types_Enum.Book
    }));

    const popularSongs = data.songs.map((song) => ({
        id: song.id,
        title: song.name,
        image: song.album?.artwork,
        vote_average: song.vote_average,
        type: Object_Types_Enum.Song
    }));

    const tabs = [
        { value: 'movies', icon: Film, label: 'Popular Movies' },
        { value: 'books', icon: Book, label: 'Popular Books' },
        { value: 'songs', icon: Music, label: 'Popular Songs' }
    ];

    return (
        <div>
            <ScrollableTabs defaultValue='movies' tabs={tabs} tabsListClassName='mb-2'>
                <TabsContent value='movies'>
                    <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3'>
                        {popularMovies.map((movie) => (
                            <div key={movie.id} className='transform transition-all hover:scale-[1.02]'>
                                <div className='w-full'>
                                    <MovieCard movie={{ ...movie, poster: movie.image ?? '' }} viewMode='grid' />
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value='books'>
                    <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3'>
                        {popularBooks.map((book) => (
                            <div key={book.id} className='transform transition-all hover:scale-[1.02]'>
                                <div className='w-full'>
                                    <BookCard book={{ ...book, cover: book.image ?? '' }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value='songs'>
                    <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3'>
                        {popularSongs.map((song) => (
                            <div key={song.id} className='transform transition-all hover:scale-[1.02]'>
                                <div className='w-full'>
                                    <SongCard
                                        song={{
                                            ...song,
                                            name: song.title,
                                            album: { artwork: song.image ?? '' },
                                            credits: []
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>
            </ScrollableTabs>
        </div>
    );
}
