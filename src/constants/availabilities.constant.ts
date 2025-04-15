import { generateOptions, mergeCommonInAll } from '@/utils/generate-options';

export const AVAILABILITIES = {
    common: {
        free: 'Free',
        ads: 'Ads',
        rent: 'Rent',
        buy: 'Buy',
        subscription: 'Subscription',
        stream: 'Stream',
        offline: 'Offline',
        limitedTime: 'Limited Time'
    },
    movies: {
        inCinemas: 'In Cinemas',
        dvd: 'DVD',
        bluRay: 'Blu-ray',
        digital: 'Digital'
    },
    tvShows: {
        liveTV: 'Live TV',
        catchUp: 'Catch-Up',
        boxSet: 'Box Set'
    },
    songs: {
        streaming: 'Streaming',
        download: 'Download',
        vinyl: 'Vinyl',
        cd: 'CD',
        radio: 'Radio'
    },
    books: {
        ebook: 'Ebook',
        audiobook: 'Audiobook',
        print: 'Print',
        library: 'Library'
    },
    games: {
        digital: 'Digital',
        physical: 'Physical',
        earlyAccess: 'Early Access',
        beta: 'Beta',
        demo: 'Demo',
        gamePass: 'Game Pass'
    }
};

const mergedAvailabilities = mergeCommonInAll(AVAILABILITIES);
const options = generateOptions(mergedAvailabilities);

export const {
    common: AVAILABILITY_OPTIONS,
    movies: MOVIE_AVAILABILITY_OPTIONS,
    tvShows: TV_SHOW_AVAILABILITY_OPTIONS,
    songs: SONG_AVAILABILITY_OPTIONS,
    books: BOOK_AVAILABILITY_OPTIONS,
    games: GAME_AVAILABILITY_OPTIONS
} = options;
