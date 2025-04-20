import Grid from '@/components/shared/grid';
import { PosterSkeleton } from '@/components/shared/poster';
import { Container } from '@/components/ui/container';
import { MAX_LIMIT } from '@/constants/api.constant';

export default function MoviesSkeleton() {
    return (
        <Container size='full'>
            <Grid>
                {Array.from({ length: MAX_LIMIT }).map((_, index) => (
                    <PosterSkeleton key={index} />
                ))}
            </Grid>
        </Container>
    );
}
