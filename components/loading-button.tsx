import { cn } from '@/lib/utils'

import { Button } from './ui/button'
import { Spinner } from './ui/spinner'

interface LoadingButtonProps {
    loading: boolean
    className?: string
    children: React.ReactNode
}

export default function LoadingButton({ loading, className, children }: LoadingButtonProps) {
    return (
        <Button
            className={cn('flex items-center gap-2 transition-none', className)}
            type="submit"
            disabled={loading}
        >
            {loading && <Spinner />}
            {children}
        </Button>
    )
}
