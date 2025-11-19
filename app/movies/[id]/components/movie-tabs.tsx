'use client'

import {
    HistoryIcon,
    ImageIcon,
    MessageSquareIcon,
    PlayCircleIcon,
    StarIcon,
    UsersIcon,
    VideoIcon,
} from 'lucide-react'
import { ReactNode } from 'react'

import ScrollableTabs, { Tab } from '@/components/scrollable-tabs'

const tabs: Tab[] = [
    {
        name: 'Reviews',
        value: 'reviews',
        icon: MessageSquareIcon,
    },
    {
        name: 'Where to Watch',
        value: 'where-to-watch',
        icon: PlayCircleIcon,
    },
    {
        name: 'Credits',
        value: 'credits',
        icon: UsersIcon,
    },
    {
        name: 'Recommendations',
        value: 'recommendations',
        icon: StarIcon,
    },
    {
        name: 'Images',
        value: 'images',
        icon: ImageIcon,
    },
    {
        name: 'Videos',
        value: 'videos',
        icon: VideoIcon,
    },
    {
        name: 'Audit Logs',
        value: 'audit-logs',
        icon: HistoryIcon,
    },
]

export default function MovieTabs({ children }: { children: ReactNode }) {
    return (
        <ScrollableTabs tabs={tabs} defaultValue="reviews">
            {children}
        </ScrollableTabs>
    )
}
