import { PencilIcon } from 'lucide-react'

import { Button } from '../ui/button'

export function UpdateStatusButton() {
    return (
        <Button aria-label="Update status" variant="outline">
            <PencilIcon className="size-4" />
            <span className="font-medium">Update status</span>
        </Button>
    )
}
