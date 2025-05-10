import { ArtworkSkeleton } from '@/components/shared/artwork';
import Grid from '@/components/shared/grid';
import List from '@/components/shared/list';
import { MAX_LIMIT } from '@/constants/api.constant';
import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';

function SongListSkeleton() {
    return (
        <List>
            {Array.from({ length: MAX_LIMIT }).map((_, index) => (
                <div key={index} className='flex items-center gap-4 rounded-lg border p-4'>
                    <div className='relative aspect-[2/3] w-24 shrink-0 overflow-hidden rounded-md'>
                        <ArtworkSkeleton />
                    </div>
                    <div className='min-w-0 flex-1'>
                        <Skeleton className='h-6 w-48' />
                        <Skeleton className='mt-1 h-4 w-full' />
                        <Skeleton className='mt-1 h-4 w-3/4' />
                    </div>
                </div>
            ))}
        </List>
    );
}

export default function SongsSkeleton({ viewMode = 'grid' }: { viewMode?: 'grid' | 'list' }) {
    if (viewMode === 'list') {
        return <SongListSkeleton />;
    }

    return (
        <Grid>
            {Array.from({ length: MAX_LIMIT }).map((_, index) => (
                <ArtworkSkeleton key={index} />
            ))}
        </Grid>
    );
}
