'use client'

import { useLayoutStore } from '@/lib/stores/layout.store'
import { cn } from '@/lib/utils'

interface MediaGridProps {
    children: React.ReactNode
    className?: string
}

export default function MediaGrid({ children, className }: MediaGridProps) {
    const { posterSize } = useLayoutStore()

    // Map poster sizes to min width for auto-fit
    const minWidthMap = {
        sm: '6rem',
        md: '8rem',
        lg: '10rem',
    } as const

    const minWidth = minWidthMap[posterSize]

    return (
        <div
            className={cn('grid place-items-center mx-auto w-full gap-4', className)}
            style={{
                gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, 1fr))`,
            }}
        >
            {children}
        </div>
    )
}
