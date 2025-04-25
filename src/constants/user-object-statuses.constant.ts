import { generateOptions, mergeCommonInAll } from '@/utils/generate-options';

import { BookMarked, BookOpen, CheckCircle, Clock, List, Star, X } from 'lucide-react';

export const USER_OBJECT_STATUS_ICONS = {
    dropped: X,

    watchlist: List,
    watched: CheckCircle,
    watching: Clock,

    readlist: BookMarked,
    read: CheckCircle,
    reading: BookOpen
};

export const DEFAULT_USER_OBJECT_CATEGORY_ICONS = {
    movie: Star,
    book: BookOpen,
    common: List
};

export const USER_OBJECT_STATUS = {
    common: {
        dropped: 'Dropped'
    },
    movie: {
        watchlist: 'Watchlist',
        watched: 'Watched',
        watching: 'Watching'
    },
    book: {
        readlist: 'Readlist',
        read: 'Read',
        reading: 'Reading'
    }
};

const mergedItemTypes = mergeCommonInAll(USER_OBJECT_STATUS);

const options = generateOptions(mergedItemTypes);

export const { common: COMMON_OBJECT_STATUS_OPTIONS, movie: MOVIE_OBJECT_STATUS_OPTIONS } = options;
