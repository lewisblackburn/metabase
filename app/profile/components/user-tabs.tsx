import {
    ActivityIcon,
    ArchiveIcon,
    BarChart3Icon,
    ListIcon,
    MessageSquareIcon,
    TrophyIcon,
} from 'lucide-react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const tabs = [
    {
        name: 'Activity',
        value: 'activity',
        icon: ActivityIcon,
        content: (
            <>
                See your recent <span className="text-foreground font-semibold">activity</span>{' '}
                including ratings, watches, and other interactions.
            </>
        ),
    },
    {
        name: 'Collection',
        value: 'collection',
        icon: ArchiveIcon,
        content: (
            <>
                Browse your personal{' '}
                <span className="text-foreground font-semibold">collection</span> of saved media.
            </>
        ),
    },
    {
        name: 'Lists',
        value: 'lists',
        icon: ListIcon,
        content: (
            <>
                View and manage your{' '}
                <span className="text-foreground font-semibold">custom lists</span> of movies,
                shows, and books.
            </>
        ),
    },
    {
        name: 'Reviews',
        value: 'reviews',
        icon: MessageSquareIcon,
        content: (
            <>
                Read and edit your <span className="text-foreground font-semibold">reviews</span>{' '}
                across all titles.
            </>
        ),
    },
    {
        name: 'Statistics',
        value: 'statistics',
        icon: BarChart3Icon,
        content: (
            <>
                Explore your viewing{' '}
                <span className="text-foreground font-semibold">statistics</span> and insights.
            </>
        ),
    },
    {
        name: 'Achievements',
        value: 'achievements',
        icon: TrophyIcon,
        content: (
            <>
                See your unlocked{' '}
                <span className="text-foreground font-semibold">achievements</span> and progress.
            </>
        ),
    },
]

export default function UserTabs() {
    return (
        <Tabs defaultValue="activity" className="gap-1">
            <ScrollArea>
                <TabsList className="mb-3">
                    {tabs.map(({ icon: Icon, name, value }) => (
                        <TabsTrigger
                            key={value}
                            value={value}
                            className="flex items-center gap-1 px-2.5 sm:px-3"
                        >
                            <Icon />
                            {name}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>

            {tabs.map(tab => (
                <TabsContent key={tab.value} value={tab.value}>
                    <p className="text-muted-foreground text-sm">{tab.content}</p>
                </TabsContent>
            ))}
        </Tabs>
    )
}
