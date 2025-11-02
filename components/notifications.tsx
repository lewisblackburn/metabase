import { Bell, MailCheckIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Notifications() {
    return (
        <Button variant="outline" size="sm">
            <Bell />
            <span className="hidden sm:block">Notifications</span>
            <Badge variant="destructive" className="rounded-full px-1.5 py-px">
                99+
            </Badge>
        </Button>
    )
}
