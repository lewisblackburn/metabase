import { generateOptions, mergeCommonInAll } from '@/utils/generate-options';

export const CERTIFICATIONS = {
    common: ['G', 'PG', 'PG-13', 'R', 'NC-17'],
    movies: ['U', '12A', '15', '18', 'Unrated', 'NR', 'TV-G'],
    tvShows: ['TV-Y', 'TV-Y7', 'TV-G', 'TV-PG', 'TV-14', 'TV-MA'],
    songs: ['Explicit', 'Clean'],
    books: ['Children', 'Middle Grade', 'Young Adult', 'Adult', 'Mature'],
    games: [
        'EC', // Early Childhood (ESRB)
        'E', // Everyone
        'E10+', // Everyone 10+
        'T', // Teen
        'M', // Mature
        'AO', // Adults Only
        'RP' // Rating Pending
    ]
};

const mergedCertifications = mergeCommonInAll(CERTIFICATIONS);
const options = generateOptions(mergedCertifications);

export const {
    common: CERTIFICATION_OPTIONS,
    movies: MOVIE_CERTIFICATION_OPTIONS,
    tvShows: TV_SHOW_CERTIFICATION_OPTIONS,
    songs: SONG_CERTIFICATION_OPTIONS,
    books: BOOK_CERTIFICATION_OPTIONS,
    games: GAME_CERTIFICATION_OPTIONS
} = options;
