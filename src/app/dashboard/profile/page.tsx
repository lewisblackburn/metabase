'use client';

import DefaultLoading from '@/components/shared/default-loading';
import { Container } from '@/components/ui/container';
import { useGetProfileQuery } from '@/generated/graphql';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { useUserId } from '@nhost/nextjs';

import { format, formatDistanceToNow } from 'date-fns';
import { Calendar, Clock, Mail, User } from 'lucide-react';

export default function ProfilePage() {
    const userId = useUserId();

    const { data, isLoading } = useGetProfileQuery(
        {
            id: userId
        },
        {
            queryKey: ['profile', userId],
            enabled: !!userId
        }
    );

    if (isLoading) return <DefaultLoading />;

    const { displayName, email, avatarUrl, createdAt, lastSeen } = data?.user || {};
    const joined = createdAt ? format(new Date(createdAt), 'MMMM d, yyyy') : 'Unknown';
    const seenAgo = lastSeen ? formatDistanceToNow(new Date(lastSeen), { addSuffix: true }) : 'Unknown';

    return (
        <Container size='full'>
            <div className='mb-8 flex flex-col items-start gap-4 md:flex-row md:items-center'>
                {avatarUrl ? (
                    <img
                        src={avatarUrl}
                        alt={`${displayName}'s profile`}
                        className='h-20 w-20 rounded-full object-cover'
                    />
                ) : (
                    <div className='flex h-20 w-20 items-center justify-center rounded-full bg-gray-200'>
                        <User size={32} className='text-gray-400' />
                    </div>
                )}

                <div>
                    <h1 className='text-2xl font-bold'>{displayName || 'User Dashboard'}</h1>
                    <div className='mt-2 flex flex-wrap gap-x-6 gap-y-2 text-gray-600'>
                        <div className='flex items-center'>
                            <Mail size={16} className='mt-0.5 mr-1.5' />
                            <span>{email || 'No email provided'}</span>
                        </div>

                        <div className='flex items-center'>
                            <Calendar size={16} className='mt-0.5 mr-1.5' />
                            <span>Joined {joined}</span>
                        </div>

                        <div className='flex items-center'>
                            <Clock size={16} className='mt-0.5 mr-1.5' />
                            <span>Last seen {seenAgo}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Separator />
        </Container>
    );
}
