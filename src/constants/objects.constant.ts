import { Object_Types_Enum } from '@/generated/graphql';

import { Book, Clapperboard, Gamepad, Headphones, LucideIcon, Tv, User } from 'lucide-react';

export type ObjectType = (typeof OBJECT_TYPE)[keyof typeof OBJECT_TYPE];
export type ObjectTypeKey = keyof typeof OBJECT_TYPE;

interface ObjectTypeData {
    type: Object_Types_Enum;
    name: string;
    plural: string;
    path: string;
    background: string;
    foreground: string;
    border: string;
    icon: LucideIcon;
}

export const OBJECT_TYPE: Record<Object_Types_Enum, ObjectTypeData> = {
    movie: {
        type: Object_Types_Enum.Movie,
        name: 'Movie',
        plural: 'Movies',
        path: 'movies',
        background: 'bg-green-300/20',
        foreground: 'text-green-800',
        border: 'border-green-400/60',
        icon: Clapperboard
    },
    tv: {
        type: Object_Types_Enum.Tv,
        name: 'TV Show',
        plural: 'TV Shows',
        path: 'tv',
        background: 'bg-blue-300/20',
        foreground: 'text-blue-800',
        border: 'border-blue-400/60',
        icon: Tv
    },
    person: {
        type: Object_Types_Enum.Person,
        name: 'Person',
        plural: 'People',
        path: 'people',
        background: 'bg-purple-300/20',
        foreground: 'text-purple-800',
        border: 'border-purple-400/60',
        icon: User
    },
    song: {
        type: Object_Types_Enum.Song,
        name: 'Song',
        plural: 'Songs',
        path: 'songs',
        background: 'bg-teal-300/20',
        foreground: 'text-teal-800',
        border: 'border-teal-400/60',
        icon: Headphones
    },
    book: {
        type: Object_Types_Enum.Book,
        name: 'Book',
        plural: 'Books',
        path: 'books',
        background: 'bg-indigo-300/20',
        foreground: 'text-indigo-800',
        border: 'border-indigo-400/60',
        icon: Book
    },
    game: {
        type: Object_Types_Enum.Game,
        name: 'Game',
        plural: 'Games',
        path: 'games',
        background: 'bg-red-300/20',
        foreground: 'text-red-800',
        border: 'border-red-400/60',
        icon: Gamepad
    }
};
