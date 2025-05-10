import { OBJECT_TYPE } from './objects.constant';
import { Calendar, Heart, Play, Plus, Sparkle, Sparkles, Star } from 'lucide-react';

export const NAVIGATION = {
    home: {},
    movies: {
        cards: [
            {
                icon: Sparkles,
                name: 'Discover',
                description: 'Explore a wide-range of movies with filters and sorting options.',
                path: '/dashboard/movies'
            },
            {
                icon: Heart,
                name: 'Popular',
                description: "See what's trending right now.",
                path: '',
                disabled: true
            },
            {
                icon: Calendar,
                name: 'Upcoming',
                description: "See what's coming soon.",
                path: '',
                disabled: true
            },
            {
                icon: Play,
                name: 'Now Playing',
                description: "See what's playing in theaters now.",
                path: '',
                disabled: true
            },
            {
                icon: Star,
                name: 'Top Rated',
                description: "See what's most popular.",
                path: '',
                disabled: true
            },
            {
                icon: Plus,
                name: 'Add New',
                description: 'Add a new movie to the database.',
                path: '/dashboard/movies/new'
            }
        ],
        type: OBJECT_TYPE.MOVIE
    },
    series: {
        type: OBJECT_TYPE.TV,
        cards: [
            {
                icon: Sparkles,
                name: 'Discover',
                description: 'Explore a wide-range of series with filters and sorting options.',
                path: ''
            }
        ],
        disabled: true
    },
    people: {
        cards: [
            {
                icon: Sparkles,
                name: 'Discover',
                description: 'Explore a wide-range of people with filters and sorting options.',
                path: ''
            },
            {
                icon: Plus,
                name: 'Add New',
                description: 'Add a new person to the database.',
                path: '/dashboard/people/new'
            }
        ],
        type: OBJECT_TYPE.PERSON
    },
    songs: {
        type: OBJECT_TYPE.SONG,
        cards: [
            {
                icon: Sparkles,
                name: 'Discover',
                description: 'Explore a wide-range of songs with filters and sorting options.',
                path: '/dashboard/songs'
            },
            {
                icon: Plus,
                name: 'Add New',
                description: 'Add a new song to the database.',
                path: '/dashboard/songs/new'
            }
        ]
    },
    books: {
        type: OBJECT_TYPE.BOOK,
        cards: [
            {
                icon: Sparkles,
                name: 'Discover',
                description: 'Explore a wide-range of books with filters and sorting options.',
                path: '/dashboard/books'
            },
            {
                icon: Plus,
                name: 'Add New',
                description: 'Add a new book to the database.',
                path: '/dashboard/books/new'
            }
        ],
        disabled: true
    },
    games: {
        id: 'games',
        type: OBJECT_TYPE.GAME,
        cards: [
            {
                icon: Sparkles,
                name: 'Discover',
                description: 'Explore a wide-range of games with filters and sorting options.',
                path: ''
            }
        ],
        disabled: true
    }
};
