import Grid from '@/components/shared/grid';
import { PosterSkeleton } from '@/components/shared/poster';
import { MAX_LIMIT } from '@/constants/api.constant';

export default function MoviesSkeleton() {
    return (
        <Grid>
            {Array.from({ length: MAX_LIMIT }).map((_, index) => (
                <PosterSkeleton key={index} />
            ))}
        </Grid>
    );
}
