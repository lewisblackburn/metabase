import {
    Award,
    Book,
    Briefcase,
    Camera,
    Flag,
    Gamepad,
    Headphones,
    Layers,
    MessagesSquare,
    Music,
    Tv,
    User,
    Video
} from 'lucide-react';

export const OBJECT_TYPE = {
    MOVIE: {
        type: 'movie',
        name: 'Movie',
        plural: 'Movies',
        background: 'bg-green-300/20',
        foreground: 'text-green-800',
        border: 'border-green-400/60',
        icon: Video
    },
    TV: {
        type: 'tv',
        name: 'TV Show',
        plural: 'TV Shows',
        background: 'bg-blue-300/20',
        foreground: 'text-blue-800',
        border: 'border-blue-400/60',
        icon: Tv
    },
    PERSON: {
        type: 'person',
        name: 'Person',
        plural: 'People',
        background: 'bg-purple-300/20',
        foreground: 'text-purple-800',
        border: 'border-purple-400/60',
        icon: User
    },
    SONG: {
        type: 'song',
        name: 'Song',
        plural: 'Songs',
        background: 'bg-teal-300/20',
        foreground: 'text-teal-800',
        border: 'border-teal-400/60',
        icon: Headphones
    },
    SOUNDTRACK: {
        type: 'soundtrack',
        name: 'Sountrack',
        plural: 'Soundtracks',
        background: 'bg-pink-300/20',
        foreground: 'text-pink-800',
        border: 'border-pink-400/60',
        icon: Music
    },
    BOOK: {
        type: 'book',
        name: 'Book',
        plural: 'Books',
        background: 'bg-indigo-300/20',
        foreground: 'text-indigo-800',
        border: 'border-indigo-400/60',
        icon: Book
    },
    GAME: {
        type: 'game',
        name: 'Game',
        plural: 'Games',
        background: 'bg-red-300/20',
        foreground: 'text-red-800',
        border: 'border-red-400/60',
        icon: Gamepad
    },
    REVIEW: {
        type: 'review',
        name: 'Review',
        plural: 'Reviews',
        background: 'bg-yellow-300/20',
        foreground: 'text-yellow-800',
        border: 'border-yellow-400/60',
        icon: MessagesSquare
    },
    CAST: {
        type: 'cast',
        name: 'Cast',
        plural: 'Cast Members',
        background: 'bg-gray-300/20',
        foreground: 'text-gray-800',
        border: 'border-gray-400/60',
        icon: User
    },
    CREW: {
        type: 'crew',
        name: 'Crew',
        plural: 'Crew Members',
        background: 'bg-gray-300/20',
        foreground: 'text-gray-800',
        border: 'border-gray-400/60',
        icon: User
    },
    COLLECTION: {
        type: 'collection',
        name: 'Collection',
        plural: 'Collections',
        background: 'bg-yellow-300/20',
        foreground: 'text-yellow-800',
        border: 'border-yellow-400/60',
        icon: Layers
    },
    COMPANY: {
        type: 'company',
        name: 'Company',
        plural: 'Companies',
        background: 'bg-orange-300/20',
        foreground: 'text-orange-800',
        border: 'border-orange-400/60',
        icon: Briefcase
    },
    MEDIUM: {
        type: 'medium',
        name: 'Medium',
        plural: 'Media',
        background: 'bg-blue-300/20',
        foreground: 'text-blue-800',
        border: 'border-blue-400/60',
        icon: Camera
    },
    REPORT: {
        type: 'report',
        name: 'Report',
        plural: 'Reports',
        background: 'bg-red-300/20',
        foreground: 'text-red-800',
        border: 'border-red-400/60',
        icon: Flag
    },
    AWARD: {
        type: 'award',
        name: 'Award',
        plural: 'Awards',
        background: 'bg-yellow-300/20',
        foreground: 'text-yellow-800',
        border: 'border-yellow-400/60',
        icon: Award
    }
};
