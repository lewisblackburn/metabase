import { AlertCircle, Baby, Lock, Tag, User } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

export default function CertificationBadge({
    certification,
}: {
    certification: string | null | undefined
}) {
    const config = {
        U: { color: 'bg-green-500', icon: Baby },
        PG: { color: 'bg-yellow-500', icon: AlertCircle },
        '12': { color: 'bg-orange-500', icon: User },
        '12A': { color: 'bg-orange-500', icon: User },
        '15': { color: 'bg-red-500', icon: Lock },
        '18': { color: 'bg-rose-600', icon: Lock },
    }[certification ?? 'PG']

    const Icon = config?.icon ?? Tag

    return (
        <Badge
            variant="secondary"
            className={`${config?.color} text-white flex text-md items-center gap-1`}
        >
            <Icon className="size-3" />
            {certification}
        </Badge>
    )
}
