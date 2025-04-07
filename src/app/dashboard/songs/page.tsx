import Link from 'next/link';

import Artwork from '@/components/shared/artwork';
import Grid from '@/components/shared/grid';
import { Container } from '@/components/ui/container';
import { SONGS_DATA } from '@/constants/fakedb.constant';
import SongsSidebar from '@/features/songs/components/songs-sidebar';

export default function SongsPage() {
    return (
        <SongsSidebar>
            <Container size='full'>
                <Grid>
                    {SONGS_DATA.map((song) => (
                        <Link key={song.id} href={`songs/${song.id}`}>
                            <Artwork title={song.title} image={song.artwork} />
                        </Link>
                    ))}
                </Grid>
            </Container>
        </SongsSidebar>
    );
}
