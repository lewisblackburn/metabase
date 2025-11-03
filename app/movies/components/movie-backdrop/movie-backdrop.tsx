'use client'

import Image from 'next/image'

import { createNhostClientSingleton } from '@/lib/nhost/client'

interface MovieBackdropProps {
    backdropId: string | null
}

export default function MovieBackdrop({ backdropId }: MovieBackdropProps) {
    const nhost = createNhostClientSingleton()
    const url = `${nhost.storage.baseURL}/${backdropId}`

    return (
        <div className="relative w-full h-[50vh] overflow-hidden">
            <Image
                src={url}
                alt="Movie Backdrop"
                sizes="100%"
                fill
                className="object-cover bg-muted"
                loading="eager"
                priority
            />

            {/* Fade overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
        </div>
    )
}
