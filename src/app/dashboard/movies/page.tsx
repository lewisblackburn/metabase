import { Fragment } from 'react';

import Link from 'next/link';

import Grid from '@/components/grid';
import Poster from '@/components/poster';
import { Container } from '@/components/ui/container';
import MovieSidebar from '@/features/movies/components/movie-sidebar';
import { Sidebar, SidebarContent, SidebarProvider, SidebarTrigger } from '@/registry/new-york-v4/ui/sidebar';

const MOVIES_DATA = [
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

export default function MoviePage() {
    return (
        <MovieSidebar>
            <Container size='full'>
                <Grid>
                    {MOVIES_DATA.map((movie) => (
                        <Link key={movie.id} href={`movies/${movie.id}`}>
                            <Poster title={movie.title} image={movie.poster} />
                        </Link>
                    ))}
                </Grid>
            </Container>
        </MovieSidebar>
    );
}
