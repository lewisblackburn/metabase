import { VoteStatus } from '@/features/reviews/components/vote-buttons';

export const MOVIE_DATA = {
    title: 'About Time',
    year: 2013,
    releaseDate: '8 August 2013',
    genre: ['Romance', 'Comedy', 'Drama'],
    duration: '2h 3m',
    status: 'Released',
    director: 'Richard Curtis',
    revenue: '$87.1 million',
    budget: '$12 million',
    trailer: 'https://www.youtube.com/watch?v=T7A810duHvw',
    overview: `At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.`,
    tagline: `A new funny film about love. With a bit of time travel.`,
    poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ls6zswrOZVhCXQBh96DlbnLBajM.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/ppWSi3evUtz9YGNcmsnjmH3FARy.jpg',
    cast: [
        {
            id: 'cast-1',
            name: 'Domhnall Gleeson',
            character: 'Tim Lake',
            headshot: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/uDbwncuKlqL0fAuucXSvgakJDrc.jpg'
        },
        {
            id: 'cast-2',
            name: 'Rachel McAdams',
            character: 'Mary',
            headshot: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/2zyOjda95OfAAsJvuwTV0UaznPZ.jpg'
        },
        {
            id: 'cast-3',
            name: 'Bill Nighy',
            character: 'Dad',
            headshot: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/acbigDOU1L1vMWAL3Wf0r8h8qLA.jpg'
        },
        {
            id: 'cast-4',
            name: 'Lydia Wilson',
            character: 'Kit Kat',
            headshot: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/yjuJDZxNJjgX0RueQ5eY6GWhTKX.jpg'
        },
        {
            id: 'cast-5',
            name: 'Lindsay Duncan',
            character: 'Mum',
            headshot: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/sgyf4vOUs5KlRmp4Uuw7UXKjU2b.jpg'
        },
        {
            id: 'cast-6',
            name: 'Tom Hollander',
            character: 'Harry',
            headshot: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/cqZiJsImFZ6TaeShRRg49AZ9TyT.jpg'
        },
        {
            id: 'cast-7',
            name: 'Margot Robbie',
            character: 'Charlotte',
            headshot: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg'
        },
        {
            id: 'cast-8',
            name: 'Joshua McGuire',
            character: 'Rory',
            headshot: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/Oo8nFjGGqXPCHDXlTeiAwX0z7b.jpg'
        },
        {
            id: 'cast-9',
            name: 'Richard Cordery',
            character: 'Uncle D',
            headshot: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/dQXORgAzgjVXl9SXQBgsjflHZoP.jpg'
        },
        {
            id: 'cast-10',
            name: 'Tom Hughes',
            character: 'Jimmy Kincade',
            headshot: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/ykxpfnJ5Fm0Zrx3MbE7yjRzF0b4.jpg'
        }
    ],
    crew: [
        {
            id: 'crew-1',
            name: 'Richard Curtis',
            job: 'Director',
            headshot: 'https://randomuser.me/api/portraits'
        },
        {
            id: 'crew-2',
            name: 'Richard Curtis',
            job: 'Screenplay',
            headshot: 'https://randomuser.me/api/portraits'
        },
        {
            id: 'crew-3',
            name: 'John Guleserian',
            job: 'Director of Photography',
            headshot: 'https://randomuser.me/api/portraits'
        },
        {
            id: 'crew-4',
            name: 'Mark Day',
            job: 'Editor',
            headshot: 'https://randomuser.me/api/portraits'
        },
        {
            id: 'crew-5',
            name: 'Marcus Rowland',
            job: 'Production Design',
            headshot: 'https://randomuser.me/api/portraits'
        }
    ],
    rating: 7.9,
    reviews: [
        {
            user: {
                name: 'Lewis Blackburn',
                initials: 'LB',
                avatar: 'https://github.com/shadcn.png'
            },
            rating: 7,
            createdAt: new Date(),
            content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis excepturi deleniti minima aspernatur debitis itaque a sunt magnam nulla voluptatem libero tempora provident voluptate in hic enim aliquid, maiores nam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa omnis porro architecto tenetur, nihil quae inventore incidunt repudiandae quis maxime, cupiditate, veniam praesentium facilis adipisci placeat consectetur aliquam? Facilis, unde? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos esse perspiciatis corrupti at quaerat aliquid culpa eos unde exercitationem veritatis libero eligendi autem soluta officia, illum expedita impedit dolor id.`,
            votes: 5,
            voteStatus: VoteStatus.upvoted
        }
    ],
    soundtrack: [
        {
            id: 'soundtrack-1',
            title: 'All the Things She Said',
            artists: 't.A.T.u.',
            description: "In the beginning, when Tim sees a brunette at the New Year's Eve Party",
            timestamps: ['0:02'],
            spotifyId: 'spotify:track:5Q0Nhxo0l2bP3pNjpGJwV1'
        },
        {
            id: 'soundtrack-2',
            title: 'Push the Button',
            artists: 'Sugababes',
            description: "New Year's Eve Party",
            timestamps: ['0:03'],
            spotifyId: 'spotify:track:2QJmrSgbdM35R67eoGQo4j'
        },
        {
            id: 'soundtrack-3',
            title: 'Mr. Brightside',
            artists: 'The Killers',
            description: 'Just prior to the countdown for Happy New Year. Again, after traveling back in time.',
            timestamps: ['0:03', '0:08'],
            spotifyId: 'spotify:track:2QJmrSgbdM35R67eoGQo4j'
        },
        {
            id: 'soundtrack-4',
            title: 'I Will Always Love You',
            artists: 'Andrea Grant',
            description: "Just after the countdown at the New Year's Eve party",
            timestamps: ['0:03'],
            spotifyId: 'spotify:track:2QJmrSgbdM35R67eoGQo4j'
        },
        {
            id: 'soundtrack-5',
            title: 'I Will Always Love You',
            artists: 'Whitney Houston',
            description: 'Just after Happy New Year (Might not be Whitney Houston)',
            timestamps: ['0:04'],
            spotifyId: 'spotify:track:2QJmrSgbdM35R67eoGQo4j'
        },
        {
            id: 'soundtrack-6',
            title: 'At the River',
            artists: 'Groove Armada',
            description: 'Summer on the ocean, sunscreen and tennis',
            timestamps: ['0:11'],
            spotifyId: 'spotify:track:2QJmrSgbdM35R67eoGQo4j'
        }
    ]
};
