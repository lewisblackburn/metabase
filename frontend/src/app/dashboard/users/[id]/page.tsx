'use client';

import { useMemo } from 'react';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import InstagramIcon from '@/components/icons/instagram.icon';
import XIcon from '@/components/icons/x.icon';
import ActionButton from '@/components/shared/action-button';
import DefaultLoading from '@/components/shared/default-loading';
import HeroCardLayout from '@/components/shared/hero-layout';
import ProBadge from '@/components/shared/pro-badge';
import ScrollableTabs from '@/components/shared/scrollable-tabs';
import VerifiedBadge from '@/components/shared/verified-badge';
import Collections from '@/features/users/components/collections/collections';
import FollowButton from '@/features/users/components/follow-button';
import FollowersDialog from '@/features/users/components/followers-dialog';
import FollowingDialog from '@/features/users/components/following-dialog';
import { Recommendations } from '@/features/users/components/recommendations/recommendations';
import UserActivity from '@/features/users/components/user-activity';
import UserReviews from '@/features/users/components/user-reviews';
import { useGetProfileQuery } from '@/generated/graphql';
import { Badge } from '@/registry/new-york-v4/ui/badge';
import { TabsContent } from '@/registry/new-york-v4/ui/tabs';
import { useUserId } from '@nhost/nextjs';

import { format, formatDistanceToNow } from 'date-fns';
import { Activity, Crown, Folder, Lightbulb, List, Star, Verified } from 'lucide-react';

const tabItems = [
    { value: 'activity', icon: Activity, label: 'Activity' },
    { value: 'collections', icon: Folder, label: 'Collections' },
    { value: 'reviews', icon: Star, label: 'Reviews' },
    { value: 'recommendations', icon: Lightbulb, label: 'Recs', responsiveLabel: 'Recommendations' }
];

const tabContents = {
    activity: { content: <UserActivity /> },
    collections: { content: <Collections /> },
    reviews: { content: <UserReviews /> },
    recommendations: { content: <Recommendations /> }
};

export default function ProfilePage() {
    const params = useParams<{ id: string }>();
    const userId = params?.id;
    const currentUserId = useUserId();
    const isCurrentUser = currentUserId === userId;
    const { data, isLoading } = useGetProfileQuery(
        { id: userId || '' },
        {
            queryKey: ['user', userId],
            enabled: !!userId
        }
    );

    const userInfo = useMemo(() => {
        if (!data?.user) return null;

        const { displayName, metadata, avatarUrl, createdAt, emailVerified, followers_aggregate, followees_aggregate } =
            data.user;
        const joined = createdAt ? format(new Date(createdAt), 'MMMM do, yyyy') : 'Unknown';
        const joinedAgo = createdAt ? formatDistanceToNow(new Date(createdAt), { addSuffix: true }) : '';

        return {
            displayName,
            avatarUrl,
            metadata: metadata || { bio: 'This user has not set a bio.' },
            joined,
            joinedAgo,
            emailVerified,
            followersCount: followers_aggregate?.aggregate?.count || 0,
            followingCount: followees_aggregate?.aggregate?.count || 0
        };
    }, [data]);

    if (isLoading) return <DefaultLoading />;
    if (!userInfo) return null;

    return (
        <HeroCardLayout
            backdropImage='https://placehold.co/1920x1080'
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

                    <p className='mt-1 text-sm sm:text-base'>{userInfo.metadata.bio}</p>

                    <div className='flex flex-col space-y-2'>
                        <div className='mb-4 flex items-center gap-4'>
                            <FollowersDialog
                                trigger={
                                    <div className='flex cursor-pointer items-center gap-1 hover:underline'>
                                        <span className='font-semibold'>{userInfo.followersCount}</span>
                                        <span className='text-muted-foreground text-sm'>Followers</span>
                                    </div>
                                }
                            />
                            <FollowingDialog
                                trigger={
                                    <div className='flex cursor-pointer items-center gap-1 hover:underline'>
                                        <span className='font-semibold'>{userInfo.followingCount}</span>
                                        <span className='text-muted-foreground text-sm'>Following</span>
                                    </div>
                                }
                            />
                            {!isCurrentUser && (
                                <FollowButton
                                    isFollowing={data?.user?.is_following || false}
                                    userId={userId || ''}
                                    currentUserId={currentUserId || ''}
                                />
                            )}
                        </div>
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
