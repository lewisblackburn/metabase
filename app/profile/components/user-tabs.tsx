'use client'

import {
    ActivityIcon,
    ArchiveIcon,
    BarChart3Icon,
    ListIcon,
    MessageSquareIcon,
    TrophyIcon,
} from 'lucide-react'
import { ReactNode } from 'react'

import ScrollableTabs, { Tab } from '@/components/scrollable-tabs'

const tabs: Tab[] = [
    { name: 'Activity', value: 'activity', icon: ActivityIcon },
    { name: 'Collection', value: 'collection', icon: ArchiveIcon },
    { name: 'Lists', value: 'lists', icon: ListIcon },
    { name: 'Reviews', value: 'reviews', icon: MessageSquareIcon },
    { name: 'Statistics', value: 'statistics', icon: BarChart3Icon },
    { name: 'Achievements', value: 'achievements', icon: TrophyIcon },
]

export default function UserTabs({ children }: { children: ReactNode }) {
    return (
        <ScrollableTabs tabs={tabs} defaultValue="activity">
            {children}
        </ScrollableTabs>
    )
}
