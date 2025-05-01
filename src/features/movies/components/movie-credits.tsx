'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import ImageWithSkeleton from '@/components/shared/image-with-skeleton';
import { useGetCreditsQuery } from '@/generated/graphql';
import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';

const SmallAvatar = ({ image, alt }: { image: string; alt: string }) => (
    <div className='relative aspect-square h-8 w-8'>
        <ImageWithSkeleton
            src={image}
            alt={alt}
            fill
            wrapperClassName='absolute inset-0'
            imageClassName='object-cover object-center border-2 border-white rounded-md'
        />
    </div>
);

type CreditMemberProps = {
    id: string;
    image: string;
    name: string;
    description: string;
};

function CreditMember({ id, image, name, description }: CreditMemberProps) {
    return (
        <div className='flex items-center justify-between border-b py-3'>
            <Link href={`/dashboard/people/${id}`} className='flex items-center gap-2'>
                <SmallAvatar image={image} alt={name} />
                <span className='text-sm'>{name}</span>
            </Link>
            <span className='text-xs text-gray-500 capitalize'>{description}</span>
        </div>
    );
}

function CreditMemberSkeleton() {
    return (
        <div className='flex items-center justify-between border-b py-3'>
            <div className='flex items-center gap-2'>
                <Skeleton className='h-8 w-8 rounded-md' />
                <Skeleton className='h-4 w-24' />
            </div>
            <Skeleton className='h-3 w-20' />
        </div>
    );
}

function CreditsSection({ title, members, isLoading }: { title: string; members?: any[]; isLoading: boolean }) {
    return (
        <div>
            <h5>{title}</h5>
            {isLoading ? (
                Array(3)
                    .fill(0)
                    .map((_, index) => <CreditMemberSkeleton key={index} />)
            ) : members?.length ? (
                members.map((member) => (
                    <CreditMember
                        key={member.id}
                        id={member.person.id}
                        image={member.person.headshot}
                        name={member.person.name}
                        description={member.details.character || member.details.job}
                    />
                ))
            ) : (
                <p className='py-2 text-sm text-gray-500'>No {title.toLowerCase()} members found</p>
            )}
        </div>
    );
}

export default function MovieCredits() {
    const params = useParams<{ id: string }>();
    const { data, isLoading } = useGetCreditsQuery(
        {
            where: {
                object_id: {
                    _eq: params?.id
                }
            }
        },
        {
            enabled: !!params?.id
        }
    );

    const { credits } = data || {};
    const cast = credits?.filter((credit) => credit.credit_type === 'cast');
    const crew = credits?.filter((credit) => credit.credit_type === 'crew');

    return (
        <div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
            <CreditsSection title='Cast' members={cast} isLoading={isLoading} />
            <CreditsSection title='Crew' members={crew} isLoading={isLoading} />
        </div>
    );
}
