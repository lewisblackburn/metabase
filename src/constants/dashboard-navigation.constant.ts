import { OBJECT_TYPE } from './objects.constant';
import { Book, Music, Tv, User, Video } from 'lucide-react';

export const DASHBOARD_NAVIGATION = [
    {
        id: 'movies',
        type: OBJECT_TYPE.MOVIE
    },
    {
        id: 'series',
        type: OBJECT_TYPE.TV,
        disabled: true
    },
    {
        id: 'songs',
        type: OBJECT_TYPE.SONG,
        disabled: true
    },
    {
        id: 'books',
        type: OBJECT_TYPE.BOOK,
        disabled: true
    },
    {
        id: 'games',
        type: OBJECT_TYPE.GAME,
        disabled: true
    },
    {
        id: 'people',
        type: OBJECT_TYPE.PERSON
    }
];
