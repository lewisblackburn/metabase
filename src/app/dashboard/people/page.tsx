import Link from 'next/link';

import Grid from '@/components/shared/grid';
import Poster from '@/components/shared/poster';
import { Container } from '@/components/ui/container';
import { PEOPLE_DATA } from '@/constants/fakedb.constant';
import PeopleSidebar from '@/features/people/components/people-sidebar';

export default function PeoplePage() {
    return (
        <PeopleSidebar>
            <Grid>
                {PEOPLE_DATA.map((person) => (
                    <Link key={person.id} href={`people/${person.id}`}>
                        <Poster title={person.name} image={person.headshot} />
                    </Link>
                ))}
            </Grid>
        </PeopleSidebar>
    );
}
