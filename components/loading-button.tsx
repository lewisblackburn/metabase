import { Button } from './ui/button'
import { Spinner } from './ui/spinner'

interface LoadingButtonProps {
    loading: boolean
    children: React.ReactNode
}

export default function LoadingButton({ loading, children }: LoadingButtonProps) {
    return (
        <Button className="flex items-center gap-2" type="submit" disabled={loading}>
            {loading && <Spinner />}
            {children}
        </Button>
    )
}
