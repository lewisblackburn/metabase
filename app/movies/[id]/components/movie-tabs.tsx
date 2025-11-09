import {
    ImageIcon,
    MessageSquareIcon,
    PlayCircleIcon,
    StarIcon,
    UsersIcon,
    VideoIcon,
} from 'lucide-react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const tabs = [
    {
        name: 'Reviews',
        value: 'reviews',
        icon: MessageSquareIcon,
        content: (
            <>
                Read audience and critic{' '}
                <span className="text-foreground font-semibold">reviews</span> to see what people
                think about this title.
            </>
        ),
    },
    {
        name: 'Where to Watch',
        value: 'where-to-watch',
        icon: PlayCircleIcon,
        content: (
            <>
                Find out{' '}
                <span className="text-foreground font-semibold">where to stream, rent, or buy</span>{' '}
                this movie or show across your favourite platforms.
            </>
        ),
    },
    {
        name: 'Credits',
        value: 'credits',
        icon: UsersIcon,
        content: (
            <>
                Explore the full{' '}
                <span className="text-foreground font-semibold">cast and crew</span> behind the
                production.
            </>
        ),
    },
    {
        name: 'Recommendations',
        value: 'recommendations',
        icon: StarIcon,
        content: (
            <>
                Discover <span className="text-foreground font-semibold">recommended titles</span>{' '}
                based on your interests and viewing history.
            </>
        ),
    },
    {
        name: 'Images',
        value: 'images',
        icon: ImageIcon,
        content: (
            <>
                View official{' '}
                <span className="text-foreground font-semibold">images, stills, and posters</span>{' '}
                from the film or series.
            </>
        ),
    },
    {
        name: 'Videos',
        value: 'videos',
        icon: VideoIcon,
        content: (
            <>
                Watch{' '}
                <span className="text-foreground font-semibold">
                    trailers, clips, and behind-the-scenes
                </span>{' '}
                footage.
            </>
        ),
    },
]

export default function MovieTabs() {
    return (
        <Tabs defaultValue="reviews" className="gap-1">
            {/* // ! TODO: The width of the scroll area is not working as expected */}
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
