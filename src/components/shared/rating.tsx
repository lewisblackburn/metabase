import { Star, StarHalf } from 'lucide-react';

export type RatingProps = {
    rating: number;
};

export default function Rating({ rating }: RatingProps) {
    if (rating < 0 || rating > 10) return null;

    const stars = Math.floor(rating / 2);
    const halfStar = rating % 2 === 1;
    const emptyStars = 5 - stars - (halfStar ? 1 : 0);

    return (
        <div className='flex gap-0.5'>
            {Array.from({ length: stars }).map((_, index) => (
                <Star key={index} className='!size-3 fill-yellow-400 text-yellow-400' />
            ))}
            {/* NOTE: StarHalf is literally a half star, there it has no full outline. This solves that. */}
            {halfStar && (
                <div className='relative !size-3'>
                    <Star className='absolute inset-0 !size-3 text-yellow-400' />
                    <StarHalf className='absolute inset-0 !size-3 fill-yellow-400 text-yellow-400' />
                </div>
            )}
            {Array.from({ length: emptyStars }).map((_, index) => (
                <Star key={index} className='!size-3 fill-transparent text-yellow-400' />
            ))}
        </div>
    );
}
