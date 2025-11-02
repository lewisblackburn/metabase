'use client'

import Image from 'next/image'
import { useState } from 'react'

import { createNhostClientSingleton } from '@/lib/nhost/client'
import { posterSizeClasses, useLayoutStore } from '@/lib/stores/layout.store'
import { cn } from '@/lib/utils'

import MoviePosterSkeleton from './movie-poster-skeleton'

interface MoviePosterProps {
    posterId: string | null
    posterSize?: keyof typeof posterSizeClasses
}

export default function MoviePoster({ posterId, posterSize }: MoviePosterProps) {
    const { posterSize: currentPosterSize } = useLayoutStore()
    const [isLoading, setIsLoading] = useState(true)

    const nhost = createNhostClientSingleton()
    const url = `${nhost.storage.baseURL}/${posterId}`
    const size = posterSize ?? currentPosterSize

    // For grid layouts, use w-full to fill container. For specific sizes (like detail pages), use posterSizeClasses
    const sizeClass = posterSize ? posterSizeClasses[size] : 'w-full'

    return (
        <div className={cn('relative aspect-poster', sizeClass)}>
            {isLoading && <MoviePosterSkeleton />}
            <Image
                src={url}
                alt="Movie Poster"
                sizes="100%"
                fill
                className="object-cover bg-muted rounded-md border"
                loading="eager"
                onLoad={() => setIsLoading(false)}
            />
        </div>
    )
}
