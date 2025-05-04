'use client';

import { useState } from 'react';

import { Button } from '@/registry/new-york-v4/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/registry/new-york-v4/ui/popover';

import Notification from './notification';
import { Badge, BellIcon } from 'lucide-react';

const initialNotifications = [
    {
        id: 1,
        image: '/avatar-80-01.jpg',
        user: 'Chris Tompson',
        action: 'requested review on',
        target: 'PR #42: Feature implementation',
        timestamp: '15 minutes ago',
        unread: true
    },
    {
        id: 2,
        image: '/avatar-80-02.jpg',
        user: 'Emma Davis',
        action: 'shared',
        target: 'New component library',
        timestamp: '45 minutes ago',
        unread: true
    },
    {
        id: 3,
        image: '/avatar-80-03.jpg',
        user: 'James Wilson',
        action: 'assigned you to',
        target: 'API integration task',
        timestamp: '4 hours ago',
        unread: false
    },
    {
        id: 4,
        image: '/avatar-80-04.jpg',
        user: 'Alex Morgan',
        action: 'replied to your comment in',
        target: 'Authentication flow',
        timestamp: '12 hours ago',
        unread: false
    },
    {
        id: 5,
        image: '/avatar-80-05.jpg',
        user: 'Sarah Chen',
        action: 'commented on',
        target: 'Dashboard redesign',
        timestamp: '2 days ago',
        unread: false
    },
    {
        id: 6,
        image: '/avatar-80-06.jpg',
        user: 'Miky Derya',
        action: 'mentioned you in',
        target: 'Origin UI open graph image',
        timestamp: '2 weeks ago',
        unread: false
    }
];

export default function Notifications() {
    const [notifications, setNotifications] = useState(initialNotifications);
    const unreadCount = notifications.filter((n) => n.unread).length;

    const handleMarkAllAsRead = () => {
        setNotifications(
            notifications.map((notification) => ({
                ...notification,
                unread: false
            }))
        );
    };

    const handleNotificationClick = (id: number) => {
        setNotifications(
            notifications.map((notification) =>
                notification.id === id ? { ...notification, unread: false } : notification
            )
        );
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button size='icon' variant='outline' className='relative' aria-label='Open notifications'>
                    <BellIcon size={16} aria-hidden='true' />
                    {unreadCount > 0 && (
                        <Badge className='absolute -top-2 left-full min-w-5 -translate-x-1/2 px-1'>
                            {unreadCount > 99 ? '99+' : unreadCount}
                        </Badge>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-80 p-1'>
                <div className='flex items-baseline justify-between gap-4 px-3 py-2'>
                    <div className='text-sm font-semibold'>Notifications</div>
                    {unreadCount > 0 && (
                        <button className='text-xs font-medium hover:underline' onClick={handleMarkAllAsRead}>
                            Mark all as read
                        </button>
                    )}
                </div>
                <div role='separator' aria-orientation='horizontal' className='bg-border -mx-1 my-1 h-px'></div>
                {notifications.map((notification) => (
                    <Notification
                        key={notification.id}
                        notification={notification}
                        onClick={() => handleNotificationClick(notification.id)}
                    />
                ))}
            </PopoverContent>
        </Popover>
    );
}
