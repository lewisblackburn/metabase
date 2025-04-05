import { generateOptions, mergeCommonInAll } from '@/utils/generate-options';

export const GENRES = {
    common: [
        'Action',
        'Adventure',
        'Comedy',
        'Drama',
        'Fantasy',
        'Horror',
        'Mystery',
        'Romance',
        'Sci-Fi',
        'Thriller',
        'Crime'
    ],
    songs: [
        'Pop',
        'Rock',
        'Hip-Hop',
        'R&B',
        'Jazz',
        'Classical',
        'Electronic',
        'Country',
        'Reggae',
        'Folk',
        'Metal',
        'Blues',
        'K-Pop',
        'Indie'
    ],
    movies: ['Animation', 'Documentary', 'Family', 'Musical', 'War', 'Western', 'Historical', 'Superhero'],
    tvShows: ['Reality', 'Talk Show', 'News', 'Soap', 'Sitcom', 'Game Show', 'Teen', 'Anthology'],
    books: [
        'Biography',
        'Memoir',
        'Self-Help',
        'Philosophy',
        'Poetry',
        'Young Adult',
        'Historical Fiction',
        'Science',
        'Essay'
    ],
    games: [
        'RPG',
        'Shooter',
        'Platformer',
        'Puzzle',
        'Fighting',
        'Simulation',
        'Strategy',
        'Sports',
        'Racing',
        'MMO',
        'Survival',
        'Visual Novel',
        'Rhythm'
    ]
};

const mergedGenres = mergeCommonInAll(GENRES);
const options = generateOptions(mergedGenres);

export const {
    common: GENRE_OPTIONS,
    songs: SONG_GENRE_OPTIONS,
    movies: MOVIE_GENRE_OPTIONS,
    tvShows: TV_SHOW_GENRE_OPTIONS,
    books: BOOK_GENRE_OPTIONS,
    games: GAME_GENRE_OPTIONS
} = options;
