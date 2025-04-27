import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import Artwork from '@/components/shared/artwork';
import Grid from '@/components/shared/grid';
import Poster from '@/components/shared/poster';
import { useGetPersonRolesQuery } from '@/generated/graphql';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/registry/new-york-v4/ui/select';

import { usePerson } from './person-provider';

export default function PersonMedia() {
    const params = useParams<{ id: string }>();
    const [creditRole, setCreditRole] = useState('');

    const { person } = usePerson({
        id: params?.id,
        credit_where: {
            role: {
                _eq: creditRole
            }
        }
    });

    const { data: roles } = useGetPersonRolesQuery({ pid: person?.id }, { enabled: !!person?.id });

    useEffect(() => {
        if (roles) setCreditRole(roles.credits[0]?.role);
    }, [roles]);

    if (!person || !roles) return null;

    const flattenedRoles = roles.credits.flat();

    const allCredits = person.credits.map((credit) => ({
        id: credit.id,
        media_id: credit.media_id,
        title: credit.movie_credit?.title ?? credit.song_credit?.name,
        image: credit.movie_credit?.poster ?? credit.song_credit?.album.artwork,
        type: credit.movie_credit ? 'movie' : credit.song_credit ? 'song' : 'unknown'
    }));

    return (
        <div className='flex flex-col gap-4'>
            <Select value={creditRole} onValueChange={setCreditRole} defaultValue={creditRole || undefined}>
                <SelectTrigger className='w-[180px] capitalize'>
                    <SelectValue placeholder='Select a role' />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {flattenedRoles.map((role) => (
                            <SelectItem key={role.role} value={role.role}>
                                <span className='capitalize'>{role.role}</span>
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Grid>
                {allCredits.map((credit) => {
                    if (credit.type === 'movie') {
                        return (
                            <div key={credit.id}>
                                <Link href={`/dashboard/movies/${credit.media_id}`} scroll={false}>
                                    <Poster image={credit.image!} title={credit.title!} />
                                </Link>
                            </div>
                        );
                    }

                    if (credit.type === 'song') {
                        return (
                            <div key={credit.id}>
                                <Link href={`/dashboard/music/${credit.media_id}`} scroll={false}>
                                    <Artwork image={credit.image!} title={credit.title!} />
                                </Link>
                            </div>
                        );
                    }

                    return null;
                })}
            </Grid>
        </div>
    );
}
