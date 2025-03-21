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
        <div className='flex gap-1'>
            {Array.from({ length: stars }).map((_, index) => (
                <Star key={index} className='!size-4 fill-yellow-500 text-yellow-500' />
            ))}
            {/* NOTE: StarHalf is literally a half star, there it has no full outline. This solves that. */}
            {halfStar && (
                <div className='relative !size-4'>
                    <Star className='absolute inset-0 !size-4 text-yellow-500' />
                    <StarHalf className='absolute inset-0 !size-4 fill-yellow-500 text-yellow-500' />
                </div>
            )}
            {Array.from({ length: emptyStars }).map((_, index) => (
                <Star key={index} className='!size-4 fill-transparent text-yellow-500' />
            ))}
        </div>
    );
}
