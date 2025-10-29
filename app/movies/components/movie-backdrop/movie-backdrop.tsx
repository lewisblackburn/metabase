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
        <div className="relative w-full h-full filter brightness-25">
            <Image
                src={url}
                alt="Movie Backdrop"
                fill
                className="object-cover bg-muted rounded-md"
                loading="eager"
            />
        </div>
    )
}
