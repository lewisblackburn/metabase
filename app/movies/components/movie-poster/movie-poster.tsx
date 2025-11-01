'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Skeleton } from '@/components/ui/skeleton'
import { createNhostClientSingleton } from '@/lib/nhost/client'
import { posterSizeClasses, useLayoutStore } from '@/lib/stores/layout.store'
import { cn } from '@/lib/utils'

import MoviePosterSkeleton from './movie-poster-skeleton'

interface MoviePosterProps {
    posterId: string | null
    posterSize?: 'sm' | 'md' | 'lg' | 'full'
}

export default function MoviePoster({ posterId, posterSize }: MoviePosterProps) {
    const { posterSize: currentPosterSize } = useLayoutStore()
    const [isLoading, setIsLoading] = useState(true)

    const nhost = createNhostClientSingleton()
    const url = `${nhost.storage.baseURL}/${posterId}`
    const size = posterSize ?? currentPosterSize

    return (
        <div className={cn('relative aspect-poster', posterSizeClasses[size])}>
            {isLoading && <MoviePosterSkeleton />}
            <Image
                src={url}
                alt="Movie Poster"
                sizes="100%"
                fill
                className="object-cover bg-muted rounded-md"
                loading="eager"
                onLoad={() => setIsLoading(false)}
            />
        </div>
    )
}
