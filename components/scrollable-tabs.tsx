'use client'

import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export interface Tab {
    name: string
    value: string
    icon: LucideIcon
}

interface ScrollableTabsProps {
    tabs: Tab[]
    defaultValue: string
    children: ReactNode
    className?: string
}

export default function ScrollableTabs({
    tabs,
    defaultValue,
    children,
    className = 'gap-1',
}: ScrollableTabsProps) {
    return (
        <Tabs defaultValue={defaultValue} className={className}>
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

            {children}
        </Tabs>
    )
}
