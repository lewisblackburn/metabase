import Link from 'next/link';

import Grid from '@/components/shared/grid';
import PeopleSidebar from '@/features/people/components/people-sidebar';

export default function PeoplePage() {
    return (
        <PeopleSidebar>
            <Grid>
                <div>
                    <h1>People</h1>
                </div>
            </Grid>
        </PeopleSidebar>
    );
}
