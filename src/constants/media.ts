import { Book, Briefcase, Film, Gamepad, Layers, Tv, User, Video } from 'lucide-react';

export const MEDIA_TYPE = {
    MOVIE: {
        type: 'movie',
        name: 'Movie',
        background: 'bg-green-300/20',
        foreground: 'text-green-800',
        border: 'border-green-400/60',
        icon: Video
    },
    TV: {
        type: 'tv',
        name: 'TV Show',
        background: 'bg-blue-300/20',
        foreground: 'text-blue-800',
        border: 'border-blue-400/60',
        icon: Tv
    },
    PERSON: {
        type: 'person',
        name: 'Person',
        background: 'bg-purple-300/20',
        foreground: 'text-purple-800',
        border: 'border-purple-400/60',
        icon: User
    },
    BOOK: {
        type: 'book',
        name: 'Book',
        background: 'bg-indigo-300/20',
        foreground: 'text-indigo-800',
        border: 'border-indigo-400/60',
        icon: Book
    },
    GAME: {
        type: 'game',
        name: 'Game',
        background: 'bg-red-300/20',
        foreground: 'text-red-800',
        border: 'border-red-400/60',
        icon: Gamepad
    },
    COLLECTION: {
        type: 'collection',
        name: 'Collection',
        background: 'bg-yellow-300/20',
        foreground: 'text-yellow-800',
        border: 'border-yellow-400/60',
        icon: Layers
    },
    COMPANY: {
        type: 'company',
        name: 'Company',
        background: 'bg-orange-300/20',
        foreground: 'text-orange-800',
        border: 'border-orange-400/60',
        icon: Briefcase
    }
};
