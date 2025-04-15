import { generateOptions, mergeCommonInAll } from '@/utils/generate-options';

export const CERTIFICATIONS = {
    common: {
        g: 'G',
        pg: 'PG',
        'pg-13': 'PG-13',
        r: 'R',
        'nc-17': 'NC-17'
    },
    movies: {
        u: 'U',
        '12a': '12A',
        '15': '15',
        '18': '18',
        unrated: 'Unrated',
        nr: 'NR',
        'tv-g': 'TV-G'
    },
    tvShows: {
        'tv-y': 'TV-Y',
        'tv-y7': 'TV-Y7',
        'tv-g': 'TV-G',
        'tv-pg': 'TV-PG',
        'tv-14': 'TV-14',
        'tv-ma': 'TV-MA'
    },
    songs: {
        explicit: 'Explicit',
        clean: 'Clean'
    },
    books: {
        children: 'Children',
        'middle grade': 'Middle Grade',
        'young adult': 'Young Adult',
        adult: 'Adult',
        mature: 'Mature'
    },
    games: {
        ec: 'EC', // Early Childhood (ESRB)
        e: 'E', // Everyone
        'e10+': 'E10+', // Everyone 10+
        t: 'T', // Teen
        m: 'M', // Mature
        ao: 'AO', // Adults Only
        rp: 'RP' // Rating Pending
    }
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
