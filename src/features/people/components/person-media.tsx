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

function MediaSkeleton() {
    return Array(6)
        .fill(0)
        .map((_, i) => <div key={i} className='aspect-[2/3] w-full animate-pulse rounded bg-gray-200' />);
}

function MediaItem({ credit }) {
    if (credit.type === 'movie') {
        return (
            <div key={credit.id}>
                <Link href={`/dashboard/movies/${credit.media_id}`} scroll={false}>
                    <Poster image={credit.image} title={credit.title} />
                </Link>
            </div>
        );
    }

    if (credit.type === 'song') {
        return (
            <div key={credit.id}>
                <Link href={`/dashboard/music/${credit.media_id}`} scroll={false}>
                    <Artwork image={credit.image} title={credit.title} />
                </Link>
            </div>
        );
    }

    return null;
}

export default function PersonMedia() {
    const params = useParams<{ id: string }>();
    const [creditRole, setCreditRole] = useState('');
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    const { person, isLoading: isPersonLoading } = usePerson({
        id: params?.id,
        credit_where: {
            role: {
                _eq: creditRole
            }
        }
    });

    const { data: roles, isLoading: isRolesLoading } = useGetPersonRolesQuery(
        { pid: person?.id },
        { enabled: !!person?.id }
    );

    const isLoading = isPersonLoading || isRolesLoading;

    useEffect(() => {
        if (roles && roles.credits.length > 0 && isFirstLoad) {
            setCreditRole(roles.credits[0]?.role);
            setIsFirstLoad(false);
        }
    }, [roles, isFirstLoad]);

    const flattenedRoles = roles?.credits.flat() || [];

    const allCredits =
        person?.credits.map((credit) => ({
            id: credit.id,
            media_id: credit.media_id,
            title: credit.movie_credit?.title ?? credit.song_credit?.name,
            image: credit.movie_credit?.poster ?? credit.song_credit?.album.artwork,
            type: credit.movie_credit ? 'movie' : credit.song_credit ? 'song' : 'unknown'
        })) || [];

    function RoleSelector() {
        return (
            <Select
                value={creditRole}
                onValueChange={setCreditRole}
                disabled={isLoading || flattenedRoles.length === 0}>
                <SelectTrigger className='w-[180px] capitalize'>
                    <SelectValue placeholder={isRolesLoading ? 'Loading roles...' : 'Select a role'} />
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
        );
    }

    function MediaContent() {
        if (isLoading) {
            return <MediaSkeleton />;
        }

        return allCredits.map((credit) => <MediaItem key={credit.id} credit={credit} />);
    }

    return (
        <div className='flex flex-col gap-4'>
            <RoleSelector />
            <Grid>
                <MediaContent />
            </Grid>
        </div>
    );
}
