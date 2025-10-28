'use client'

import { usePathname } from 'next/navigation'
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

import { isUuid } from '@/lib/helpers/strings/strings'
import { capitalize } from '@/lib/utils'

export interface Breadcrumb {
    label: string
    href: string
    isLast: boolean
}

interface BreadcrumbsContextValue {
    breadcrumbs: Breadcrumb[]
    replaceBreadcrumbs: (labels: string[]) => void
}

const BreadcrumbsContext = createContext<BreadcrumbsContextValue | undefined>(undefined)

function getHref(pathSegments: string[], index: number) {
    return `/${pathSegments.slice(0, index + 1).join('/')}`
}

function isLastSegment(index: number, pathSegments: string[]) {
    return index === pathSegments.length - 1
}

export function BreadcrumbsProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const [customLabels, setCustomLabels] = useState<string[]>([])

    const replaceBreadcrumbs = useCallback((labels: string[]) => {
        setCustomLabels(labels)
    }, [])

    const breadcrumbs = useMemo(() => {
        const pathSegments = pathname.split('/').filter(Boolean)
        let labelIndex = 0

        return pathSegments.map((path, index) => {
            const href = getHref(pathSegments, index)
            let label = capitalize(path)

            // Replace UUIDs with custom labels
            if (isUuid(path) && labelIndex < customLabels.length) {
                label = customLabels[labelIndex]
                labelIndex++
            }

            const isLast = isLastSegment(index, pathSegments)

            return { label, href, isLast }
        })
    }, [pathname, customLabels])

    return (
        <BreadcrumbsContext.Provider value={{ breadcrumbs, replaceBreadcrumbs }}>
            {children}
        </BreadcrumbsContext.Provider>
    )
}

export function useBreadcrumbs(labels: string[]) {
    const context = useContext(BreadcrumbsContext)

    if (context === undefined) {
        throw new Error('useBreadcrumbs must be used within a BreadcrumbsProvider')
    }

    useEffect(() => {
        context.replaceBreadcrumbs(labels)
        return () => context.replaceBreadcrumbs([])
    }, [labels, context])
}

export function useBreadcrumbsValue() {
    const context = useContext(BreadcrumbsContext)

    if (context === undefined) {
        throw new Error('useBreadcrumbsValue must be used within a BreadcrumbsProvider')
    }

    return context.breadcrumbs
}
