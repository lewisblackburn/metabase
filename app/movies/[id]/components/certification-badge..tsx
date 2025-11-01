import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export default function CertificationBadge({
    certification,
}: {
    certification: string | null | undefined
}) {
    const config = {
        U: { color: 'bg-green-500 text-white' },
        PG: { color: 'bg-yellow-500 text-white' },
        '12': { color: 'bg-orange-500 text-white' },
        '12A': { color: 'bg-orange-500 text-white' },
        '15': { color: 'bg-red-500 text-white' },
        '18': { color: 'bg-rose-600 text-white' },
        R: { color: 'bg-background text-foreground' },
    }[certification ?? 'PG']

    return (
        <Badge className={cn('rounded-sm min-w-10 font-bold', config?.color)}>
            {certification}
        </Badge>
    )
}
