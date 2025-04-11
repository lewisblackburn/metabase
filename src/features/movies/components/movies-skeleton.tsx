import Grid from '@/components/shared/grid';
import { PosterSkeleton } from '@/components/shared/poster';
import { Container } from '@/components/ui/container';

export default function MoviesSkeleton() {
    return (
        <Container size='full'>
            <Grid>
                {Array.from({ length: 10 }).map((_, index) => (
                    <PosterSkeleton key={index} />
                ))}
            </Grid>
        </Container>
    );
}
