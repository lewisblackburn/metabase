'use client';

import { useMemo } from 'react';

import Link from 'next/link';

import InstagramIcon from '@/components/icons/instagram.icon';
import XIcon from '@/components/icons/x.icon';
import ActionButton from '@/components/shared/action-button';
import DefaultLoading from '@/components/shared/default-loading';
import HeroCardLayout from '@/components/shared/hero-layout';
import ScrollableTabs from '@/components/shared/scrollable-tabs';
import Collections from '@/features/profile/components/collections/collections';
import UserActivity from '@/features/profile/components/user-activity';
import { useGetProfileQuery } from '@/generated/graphql';
import { Badge } from '@/registry/new-york-v4/ui/badge';
import { TabsContent } from '@/registry/new-york-v4/ui/tabs';
import { Tooltip } from '@/registry/new-york-v4/ui/tooltip';
import { useUserId } from '@nhost/nextjs';
import { TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';

import { format, formatDistanceToNow } from 'date-fns';
import { Activity, Crown, Folder, Lightbulb, List, Star, Verified } from 'lucide-react';

const VerifiedBadge = () => (
    <Tooltip>
        <TooltipTrigger>
            <Verified className='mt-0.5 size-4 fill-green-500 text-white sm:size-5' />
        </TooltipTrigger>
        <TooltipContent className='flex items-center gap-2 rounded-md border bg-white p-1'>
            <Verified className='size-5 fill-green-500 text-white' />
            <span className='text-sm font-semibold'>Verified</span>
        </TooltipContent>
    </Tooltip>
);

const ProBadge = () => (
    <Badge variant='outline' className='w-fit gap-1 px-2 py-1 transition-colors delay-0 duration-75'>
        <Crown className='mb-0.5 !size-3 text-yellow-600 sm:!size-3.5' />
        <span>PRO</span>
    </Badge>
);

const tabItems = [
    { value: 'activity', icon: Activity, label: 'Activity' },
    { value: 'collections', icon: Folder, label: 'Collections' },
    { value: 'lists', icon: List, label: 'Lists' },
    { value: 'reviews', icon: Star, label: 'Reviews' },
    { value: 'recommendations', icon: Lightbulb, label: 'Recs', responsiveLabel: 'Recommendations' }
];

const tabContents = {
    activity: { content: <UserActivity /> },
    collections: { content: <Collections /> },
    lists: { content: "You haven't created any lists yet." },
    reviews: { content: "You haven't written any reviews yet." },
    recommendations: { content: 'No recommendations available.' }
};

export default function ProfilePage() {
    const userId = useUserId();
    const { data, isLoading } = useGetProfileQuery(
        { id: userId },
        {
            queryKey: ['profile', userId],
            enabled: !!userId
        }
    );

    const userInfo = useMemo(() => {
        if (!data?.user) return null;

        const { displayName, avatarUrl, createdAt, emailVerified } = data.user;
        const joined = createdAt ? format(new Date(createdAt), 'MMMM do, yyyy') : 'Unknown';
        const joinedAgo = createdAt ? formatDistanceToNow(new Date(createdAt), { addSuffix: true }) : '';

        return {
            displayName,
            avatarUrl,
            joined,
            joinedAgo,
            emailVerified
        };
    }, [data]);

    if (isLoading) return <DefaultLoading />;
    if (!userInfo) return null;

    return (
        <HeroCardLayout
            backdropImage='https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/fzZmcKQv7ZTGIiPvocPhNs3wUyK.jpg'
            backdropAlt={userInfo.displayName}
            avatarImage={userInfo.avatarUrl}
            avatarAlt={userInfo.displayName}>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6'>
                <div className='mb-5 flex flex-col gap-2'>
                    <h2 className='flex items-center gap-1 text-lg font-bold sm:text-xl md:text-2xl'>
                        {userInfo.displayName}
                        {userInfo.emailVerified && <VerifiedBadge />}
                    </h2>

                    <p className='text-muted-foreground text-xs sm:text-sm'>
                        Member since {userInfo.joined}
                        <span className='hidden text-xs sm:inline'> ({userInfo.joinedAgo})</span>
                    </p>

                    <p className='mt-1 text-sm sm:text-base'>
                        "I'd rather die drunk, broke at 34 and have people at a dinner table talk about me than live to
                        be rich and sober at 90 and nobody remembered who I was."
                    </p>

                    <div className='mt-2 flex flex-col gap-2 sm:mt-3 sm:gap-3'>
                        <ProBadge />
                        <div className='flex flex-wrap items-center gap-2'>
                            <Link href=''>
                                <ActionButton icon={InstagramIcon} size='sm'>
                                    Instagram
                                </ActionButton>
                            </Link>
                            <Link href=''>
                                <ActionButton icon={XIcon} size='sm'>
                                    Twitter
                                </ActionButton>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='md:col-span-2'>
                    <ScrollableTabs defaultValue='activity' tabs={tabItems}>
                        {Object.entries(tabContents).map(([key, { content }]) => (
                            <TabsContent key={key} value={key} className='px-1'>
                                {content}
                            </TabsContent>
                        ))}
                    </ScrollableTabs>
                </div>
            </div>
        </HeroCardLayout>
    );
}
