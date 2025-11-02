import { Plus } from 'lucide-react'

import { Button } from '../ui/button'

export function AddToListButton() {
    return (
        <Button aria-label="Add to list" variant="outline" size="sm" className="text-xs">
            <Plus className="size-4" />
            Add to list
        </Button>
    )
}
