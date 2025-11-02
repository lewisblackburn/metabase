import { Pen } from 'lucide-react'

import { Button } from '../ui/button'

export function UpdateStatusButton() {
    return (
        <Button aria-label="Update Status" variant="outline" size="sm" className="text-xs">
            <Pen className="size-4" />
            Update Status
        </Button>
    )
}
