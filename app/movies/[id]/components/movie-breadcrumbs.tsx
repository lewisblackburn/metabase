'use client'

import { useBreadcrumbs } from '@/lib/providers/breadcrumbs-provider'

export function MovieBreadcrumbs({ movieTitle }: { movieTitle: string }) {
    useBreadcrumbs([movieTitle])
    return null
}
