import { ListPlusIcon } from 'lucide-react'

import { Button } from '../ui/button'

export function AddToListButton() {
    return (
        <Button aria-label="Add to list" variant="outline">
            <ListPlusIcon className="size-4" />
            <span className="font-medium">Add to list</span>
        </Button>
    )
}
