import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import Artwork from '@/components/shared/artwork';
import Grid from '@/components/shared/grid';
import Poster from '@/components/shared/poster';
import { OBJECT_TYPE } from '@/constants/objects.constant';
import {
    Credits,
    Cron_Job_Select_Column,
    Department_Types_Enum,
    Object_Types_Enum,
    People,
    useGetPersonDetailsQuery
} from '@/generated/graphql';
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

function MediaItem({
    credit
}: {
    credit: Pick<Credits, 'id' | 'object_type' | 'object_id'> & {
        movie_credit?: { title: string; poster: string } | null;
        book_credit?: { title: string; cover: string } | null;
        song_credit?: { name: string; album?: { artwork: string } | null } | null;
    };
}) {
    if (credit.object_type === Object_Types_Enum.Movie) {
        return (
            <div key={credit.id}>
                <Link href={`/dashboard/${OBJECT_TYPE.MOVIE.path}/${credit.object_id}`} scroll={false}>
                    <Poster image={credit.movie_credit?.poster ?? ''} title={credit.movie_credit?.title ?? ''} />
                </Link>
            </div>
        );
    }

    if (credit.object_type === Object_Types_Enum.Book) {
        return (
            <div key={credit.id}>
                <Link href={`/dashboard/${OBJECT_TYPE.BOOK.path}/${credit.object_id}`} scroll={false}>
                    <Poster image={credit.book_credit?.cover ?? ''} title={credit.book_credit?.title ?? ''} />
                </Link>
            </div>
        );
    }

    if (credit.object_type === Object_Types_Enum.Song) {
        return (
            <div key={credit.id}>
                <Link href={`/dashboard/${OBJECT_TYPE.SONG.path}/${credit.object_id}`} scroll={false}>
                    <Artwork image={credit.song_credit?.album?.artwork ?? ''} title={credit.song_credit?.name ?? ''} />
                </Link>
            </div>
        );
    }

    return null;
}

export default function PersonMedia() {
    const params = useParams<{ id: string }>();
    const [creditDepartment, setCreditDepartment] = useState<Department_Types_Enum>();
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    const { person, isLoading: isPersonLoading } = usePerson({
        id: params?.id,
        credit_where: {
            department: {
                _eq: creditDepartment
            }
        }
    });

    const { data: credits, isLoading: isDepartmentsLoading } = useGetPersonDetailsQuery(
        { pid: person?.id },
        { enabled: !!person?.id }
    );

    const isLoading = isPersonLoading || isDepartmentsLoading;

    useEffect(() => {
        if (credits && credits.credits.length > 0 && isFirstLoad) {
            setCreditDepartment(credits.credits[0]?.department ?? undefined);
            setIsFirstLoad(false);
        }
    }, [credits, isFirstLoad]);

    const flattenedCredits = credits?.credits.flat().filter((credit) => credit.department !== null) || [];

    function DepartmentSelector() {
        return (
            <Select
                value={creditDepartment}
                onValueChange={(value) => setCreditDepartment(value as Department_Types_Enum)}
                disabled={isLoading || flattenedCredits.length === 0}>
                <SelectTrigger className='w-[180px] capitalize'>
                    <SelectValue
                        placeholder={isDepartmentsLoading ? 'Loading departments...' : 'Select a department'}
                    />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {flattenedCredits.map((credit) => (
                            <SelectItem key={credit.department} value={credit.department!}>
                                <span className='capitalize'>{credit.department}</span>
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

        if (!creditDepartment) {
            return null;
        }

        return person?.credits?.map((credit) => <MediaItem key={credit.id} credit={credit} />);
    }

    return (
        <div className='flex flex-col gap-4'>
            <DepartmentSelector />
            <Grid>
                <MediaContent />
            </Grid>
        </div>
    );
}
