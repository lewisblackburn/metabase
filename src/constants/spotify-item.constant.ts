import { generateOptions, mergeCommonInAll } from '@/utils/generate-options';

export const SPOTIFY_ITEM_TYPES = {
    common: {},
    search_result: {
        album: 'Album',
        artist: 'Artist',
        playlist: 'Playlist',
        track: 'Track',
        show: 'Show',
        episode: 'Episode',
        audiobook: 'Audiobook'
    },
    album: {
        album: 'Album',
        single: 'Single',
        compilation: 'Compilation'
    },
    track: {
        track: 'Track'
    }
};

const mergedItemTypes = mergeCommonInAll(SPOTIFY_ITEM_TYPES);

const options = generateOptions(mergedItemTypes);

export const {
    common: COMMON_ITEM_TYPE_OPTIONS,
    search_result: SEARCH_RESULT_ITEM_TYPE_OPTIONS,
    album: ALBUM_ITEM_TYPE_OPTIONS,
    track: TRACK_ITEM_TYPE_OPTIONS
} = options;
