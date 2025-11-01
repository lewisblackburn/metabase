import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export default function CertificationBadge({
    certification,
}: {
    certification: string | null | undefined
}) {
    const config = {
        U: { color: 'bg-green-500' },
        PG: { color: 'bg-yellow-500' },
        '12': { color: 'bg-orange-500' },
        '12A': { color: 'bg-orange-500' },
        '15': { color: 'bg-red-500' },
        '18': { color: 'bg-rose-600' },
        R: { color: 'bg-gray-500' },
    }[certification ?? 'PG']

    return (
        <Badge className={cn('rounded-sm min-w-10 text-white font-bold', config?.color)}>
            {certification}
        </Badge>
    )
}
