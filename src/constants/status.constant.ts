import { generateOptions, mergeCommonInAll } from '@/utils/generate-options';

export const STATUS = {
    common: {
        rumored: 'Rumored',
        planned: 'Planned',
        inProduction: 'In Production',
        postProduction: 'Post Production',
        released: 'Released',
        cancelled: 'Cancelled'
    },
    movies: {},
    tvShows: {
        returningSeries: 'Returning Series',
        ended: 'Ended'
    },
    songs: {},
    books: {},
    games: {}
};

const mergedStatuses = mergeCommonInAll(STATUS);
const options = generateOptions(mergedStatuses);

export const {
    common: STATUS_OPTIONS,
    movies: MOVIE_STATUS_OPTIONS,
    tvShows: TV_SHOW_STATUS_OPTIONS,
    songs: SONG_STATUS_OPTIONS,
    books: BOOK_STATUS_OPTIONS,
    games: GAME_STATUS_OPTIONS
} = options;
