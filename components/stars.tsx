import { Star } from 'lucide-react'

export default function Stars({ stars }: { stars: number }) {
    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: stars }).map((_, index) => (
                <Star key={index} className="size-3.5 fill-yellow-500 text-yellow-500" />
            ))}
        </div>
    )
}
