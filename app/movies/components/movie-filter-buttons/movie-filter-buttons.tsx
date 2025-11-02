'use client'
import { Grid2x2Icon, Grid3x3Icon, SquareIcon } from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useLayoutStore } from '@/lib/stores/layout.store'

export default function MovieFilterButtons() {
    const { posterSize, setPosterSize } = useLayoutStore()

    return (
        <ToggleGroup type="single" value={posterSize} onValueChange={setPosterSize}>
            <ToggleGroupItem value="lg" variant="outline">
                <SquareIcon className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="md" variant="outline">
                <Grid2x2Icon className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="sm" variant="outline">
                <Grid3x3Icon className="size-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    )
}
