import Link from 'next/link';

import Grid from '@/components/shared/grid';
import Poster from '@/components/shared/poster';
import { Container } from '@/components/ui/container';
import { MOVIES_DATA } from '@/constants/fakedb.constant';
import MoviesSidebar from '@/features/movies/components/movies-sidebar';

export default function MoviePage() {
    return (
        <MoviesSidebar>
            <Container size='full'>
                <Grid>
                    {MOVIES_DATA.map((movie) => (
                        <Link key={movie.id} href={`movies/${movie.id}`}>
                            <Poster title={movie.title} image={movie.poster} />
                        </Link>
                    ))}
                </Grid>
            </Container>
        </MoviesSidebar>
    );
}
