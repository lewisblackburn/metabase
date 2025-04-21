'use client';

import DefaultLoading from '@/components/shared/default-loading';
import { Container } from '@/components/ui/container';
import { useGetProfileQuery } from '@/generated/graphql';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york-v4/ui/avatar';
import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { useUserId } from '@nhost/nextjs';

import { languages } from 'countries-list';
import { format, formatDistanceToNow } from 'date-fns';
import { CalendarDays, Mail } from 'lucide-react';

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

    const { displayName, email, avatarUrl, createdAt, emailVerified, disabled, locale } = data?.user || {};
    const joined = createdAt ? format(new Date(createdAt), 'MMMM d, yyyy') : 'Unknown';
    const joinedAgo = createdAt ? formatDistanceToNow(new Date(createdAt), { addSuffix: true }) : '';

    const language = languages[locale ?? 'en'].name;
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const getInitials = (name: string | undefined) => {
        if (!name) return 'U';
        return name
            .split(' ')
            .map((part) => part[0])
            .join('')
            .toUpperCase()
            .substring(0, 2);
    };

    return (
        <Container size='full'>
            <div className='grid grid-cols-1 gap-6 2xl:grid-cols-3'>
                {/* User Info Card */}
                <Card className='2xl:col-span-1'>
                    <CardHeader className='flex flex-row items-center gap-3'>
                        <Avatar className='h-16 w-16'>
                            <AvatarImage src={avatarUrl} alt={displayName} />
                            <AvatarFallback>{getInitials(displayName)}</AvatarFallback>
                        </Avatar>
                        <div className='flex flex-col'>
                            <CardTitle className='text-xl'>{displayName || 'User'}</CardTitle>
                            <CardDescription className='text-muted-foreground ellipses w-4/5 truncate text-sm sm:w-full'>
                                {userId}
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className='space-y-4'>
                            <div className='flex flex-col gap-1'>
                                <div className='flex items-center gap-3 pt-2'>
                                    <Mail className='text-muted-foreground h-4 w-4' />
                                    <div className='flex items-center gap-2'>
                                        <p className='text-muted-foreground text-sm'>{email}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3 pt-2'>
                                    <CalendarDays className='text-muted-foreground h-4 w-4' />
                                    <div className='flex items-center gap-2'>
                                        <p className='text-sm font-medium'>Member since</p>
                                        <p className='text-muted-foreground text-sm'>{joined}</p>
                                        <p className='text-muted-foreground text-xs'>({joinedAgo})</p>
                                    </div>
                                </div>
                            </div>
                            <Separator />
                            <div className='pt-2'>
                                <p className='mb-2 text-sm font-medium'>Account Status</p>
                                <div className='flex flex-wrap gap-2'>
                                    <Badge
                                        variant='outline'
                                        className={cn(
                                            !disabled
                                                ? 'bg-green-50 text-green-700 hover:bg-green-50'
                                                : 'bg-red-50 text-red-700 hover:bg-red-50'
                                        )}>
                                        {!disabled ? 'Active' : 'Inactive'}
                                    </Badge>
                                    <Badge
                                        variant='outline'
                                        className={cn(
                                            emailVerified
                                                ? 'bg-blue-50 text-blue-700 hover:bg-blue-50'
                                                : 'bg-yellow-50 text-yellow-700 hover:bg-yellow-50'
                                        )}>
                                        {emailVerified ? 'Verified' : 'Not Verified'}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <div className='2xl:col-span-2'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Account Details</CardTitle>
                            <CardDescription>Detailed information about your account</CardDescription>
                        </CardHeader>
                        <CardContent className='space-y-6'>
                            <div>
                                <h6 className='mb-2'>User Information</h6>
                                <div className='bg-muted/50 grid grid-cols-1 gap-4 rounded-lg p-4 2xl:grid-cols-2'>
                                    <div>
                                        <p className='text-muted-foreground text-xs'>Display Name</p>
                                        <p className='text-sm font-medium'>{displayName || 'Not set'}</p>
                                    </div>
                                    <div>
                                        <p className='text-muted-foreground text-xs'>Email Address</p>
                                        <p className='text-sm font-medium'>{email || 'Not set'}</p>
                                    </div>
                                    <div>
                                        <p className='text-muted-foreground text-xs'>User ID</p>
                                        <p className='truncate text-sm font-medium'>{userId || 'Not available'}</p>
                                    </div>
                                    <div>
                                        <p className='text-muted-foreground text-xs'>Account Created</p>
                                        <p className='text-sm font-medium'>{joined}</p>
                                    </div>
                                </div>
                            </div>
                            <Separator />
                            <div>
                                <h6 className='mb-2'>Account Settings</h6>
                                <div className='bg-muted/50 rounded-lg p-4'>
                                    <div className='grid grid-cols-1 gap-4 2xl:grid-cols-2'>
                                        <div>
                                            <p className='text-muted-foreground text-xs'>Language</p>
                                            <p className='text-sm font-medium'>{language}</p>
                                        </div>
                                        <div>
                                            <p className='text-muted-foreground text-xs'>Time Zone</p>
                                            <p className='text-sm font-medium'>{timeZone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Container>
    );
}
