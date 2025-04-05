import { VoteStatus } from '@/features/reviews/components/vote-buttons';

import { OBJECT_TYPE } from './objects.constant';

export const MOVIES_DATA = [
    {
        id: 'movie-1',
        title: 'About Time',
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ls6zswrOZVhCXQBh96DlbnLBajM.jpg'
    },
    {
        id: 'movie-2',
        title: 'The Shawshank Redemption',
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'
    },
    {
        id: 'movie-3',
        title: 'The Godfather',
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg'
    },
    {
        id: 'movie-4',
        title: 'The Dark Knight',
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
    },
    {
        id: 'movie-5',
        title: 'Pulp Fiction',
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg'
    },
    {
        id: 'movie-6',
        title: "Schindler's List",
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c8Ass7acuOe4za6DhSattE359gr.jpg'
    },
    {
        id: 'movie-7',
        title: 'The Lord of the Rings: The Return of the King',
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg'
    },
    {
        id: 'movie-8',
        title: 'Forrest Gump',
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/saHP97rTPS5eLmrLQEcANmKrsFl.jpg'
    },
    {
        id: 'movie-9',
        title: 'Inception',
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg'
    },
    {
        id: 'movie-10',
        title: 'Fight Club',
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg'
    },
    {
        id: 'movie-12',
        title: 'Goodfellas',
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg'
    },
    {
        id: 'movie-13',
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg'
    },
    {
        id: 'movie-14',
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7BuH8itoSrLExs2YZSsM01Qk2no.jpg'
    },
    {
        id: 'movie-15',
        title: 'Interstellar',
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'
    },
    {
        id: 'movie-17',
        title: 'Spirited Away',
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg'
    },
    {
        id: 'movie-18',
        title: 'Saving Private Ryan',
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1wY4psJ5NVEhCuOYROwLH2XExM2.jpg'
    },
    {
        id: 'movie-19',
        title: 'The Green Mile',
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/velWPhVMQeQKcxggNEU8YmIo52R.jpg'
    },
    {
        id: 'movie-20',
        title: 'Life Is Beautiful',
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/74hLDKjD5aGYOotO6esUVaeISa2.jpg'
    },
    {
        id: 'movie-21',
        title: 'Se7en',
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/69Sns8WoET6CfaYlIkHbla4l7nC.jpg'
    },
    {
        id: 'movie-22',
        title: 'The Silence of the Lambs',
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg'
    },
    {
        id: 'movie-23',
        title: "It's a Wonderful Life",
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bUPmtQzrRhzqYySeiMpv7GurAfm.jpg'
    }
];

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
    contentScore: 0.8,
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
    awards: [
        {
            id: 'award-1',
            award: 'Best Picture',
            year: 2013,
            event: 'Academy Awards',
            type: OBJECT_TYPE.MOVIE
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

export const PEOPLE_DATA = [
    {
        id: 'person-1',
        name: 'Domhnall Gleeson',
        role: 'Actor',
        headshot: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uDbwncuKlqL0fAuucXSvgakJDrc.jpg'
    },
    {
        id: 'person-2',
        name: 'Rachel McAdams',
        role: 'Actor',
        headshot: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2zyOjda95OfAAsJvuwTV0UaznPZ.jpg'
    },
    {
        id: 'person-3',
        name: 'Bill Nighy',
        role: 'Actor',
        headshot: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/acbigDOU1L1vMWAL3Wf0r8h8qLA.jpg'
    },
    {
        id: 'person-4',
        name: 'Lydia Wilson',
        role: 'Actor',
        headshot: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yjuJDZxNJjgX0RueQ5eY6GWhTKX.jpg'
    },
    {
        id: 'person-5',
        name: 'Lindsay Duncan',
        role: 'Actor',
        headshot: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sgyf4vOUs5KlRmp4Uuw7UXKjU2b.jpg'
    },
    {
        id: 'person-6',
        name: 'Tom Hollander',
        role: 'Actor',
        headshot: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cqZiJsImFZ6TaeShRRg49AZ9TyT.jpg'
    },
    {
        id: 'person-7',
        name: 'Margot Robbie',
        role: 'Actor',
        headshot: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg'
    },
    {
        id: 'person-8',
        name: 'Joshua McGuire',
        role: 'Actor',
        headshot: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/Oo8nFjGGqXPCHDXlTe'
    }
];

export const PERSON_DATA = {
    id: 'person-1',
    name: 'Domhnall Gleeson',
    headshot: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uDbwncuKlqL0fAuucXSvgakJDrc.jpg',
    biography: `Domhnall Gleeson is an Irish actor, director, and writer. He is the son of actor Brendan Gleeson, alongside whom he has appeared in several films and theatre projects. He received a Bachelor of Arts in Media Arts from Dublin Institute of Technology.`,
    birthdate: new Date('1983-05-12'),
    birthplace: 'Dublin, Ireland',
    gender: 'Male',
    deathdate: null,
    contentScore: 0.67,
    knownFor: 'Acting',
    knownForTitles: [
        {
            id: 'known-for-1',
            title: 'Ex Machina',
            poster: 'https://www.themoviedb.org/t/p/w1280/dmJW8IAKHKxFNiUnoDR7JfsK7Rp.jpg',
            type: OBJECT_TYPE.MOVIE
        },
        {
            id: 'known-for-2',
            title: 'About Time',
            poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ls6zswrOZVhCXQBh96DlbnLBajM.jpg',
            type: OBJECT_TYPE.MOVIE
        },
        {
            id: 'known-for-3',
            title: 'Star Wars: The Force Awakens',
            poster: 'https://www.themoviedb.org/t/p/w1280/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg',
            type: OBJECT_TYPE.MOVIE
        },
        {
            id: 'known-for-4',
            title: 'Black Mirror',
            poster: 'https://www.themoviedb.org/t/p/w1280/5UaYsGZOFhjFDwQh6GuLjjA1WlF.jpg',
            type: OBJECT_TYPE.TV
        }
    ],
    social: {
        twitter: 'https://twitter.com/domhnallgleeson',
        instagram: 'https://www.instagram.com/domhnallgleeson_/',
        facebook: 'https://www.facebook.com/DomhnallGleesonOfficial/'
    },
    awards: [
        {
            id: 'award-1',
            award: 'Best Actor',
            title: 'Frank',
            year: 2015,
            event: 'Irish Film and Television Awards',
            type: OBJECT_TYPE.MOVIE
        },
        {
            id: 'award-2',
            award: 'Best Actor',
            year: 2015,
            event: 'Irish Film and Television Awards',
            title: 'Ex Machina',
            type: OBJECT_TYPE.MOVIE
        },
        {
            id: 'award-3',
            title: 'About Time',
            year: 2015,
            event: 'Irish Film and Television Awards',
            award: 'Best Actor',
            type: OBJECT_TYPE.MOVIE
        }
    ]
};
