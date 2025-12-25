'use client'
import { Button } from '@/components/ui/button'
import { importMovie } from '@/lib/actions/movies/import-movie'

export default function ImportPage() {
    return <Button onClick={() => importMovie('83533-avatar-fire-and-ash')}>Import Movie</Button>
}
