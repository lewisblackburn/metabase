import { generateOptions, mergeCommonInAll } from '@/utils/generate-options';

export const AVAILABILITIES = {
    common: ['Free', 'Ads', 'Rent', 'Buy', 'Subscription', 'Stream', 'Offline', 'Limited Time'],
    movies: ['In Cinemas', 'DVD', 'Blu-ray', 'Digital'],
    tvShows: ['Live TV', 'Catch-Up', 'Box Set'],
    songs: ['Streaming', 'Download', 'Vinyl', 'CD', 'Radio'],
    books: ['Ebook', 'Audiobook', 'Print', 'Library'],
    games: ['Digital', 'Physical', 'Early Access', 'Beta', 'Demo', 'Game Pass']
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
