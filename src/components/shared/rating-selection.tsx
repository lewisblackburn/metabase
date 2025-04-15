import { useState } from 'react';

import { Star, StarHalf } from 'lucide-react';

interface RatingSelectionProps {
    initialRating: number;
    onRatingChange: (rating: number) => void;
}

export default function RatingSelection({ initialRating = 0, onRatingChange }: RatingSelectionProps) {
    const [rating, setRating] = useState(initialRating);
    const [hoverRating, setHoverRating] = useState(0);

    const handleRatingChange = (value: number) => {
        // NOTE: Toggle rating if the same value is clicked
        if (rating === value) {
            setRating(0);
            onRatingChange(0);
        } else {
            setRating(value);
            onRatingChange(value);
        }
    };

    const activeRating = hoverRating > 0 ? hoverRating : rating;

    return (
        <div className='flex items-center gap-1'>
            {[0, 1, 2, 3, 4].map((index) => {
                const starPosition = index + 1;
                const fullValue = starPosition * 2; // NOTE: 2, 4, 6, 8, 10
                const halfValue = fullValue - 1; // NOTE: 1, 3, 5, 7, 9

                let starDisplay;
                if (activeRating >= fullValue) {
                    starDisplay = <Star className='size-4 text-yellow-500' fill='#eab308' />;
                } else if (activeRating >= halfValue) {
                    starDisplay = <StarHalf className='size-4 text-yellow-500' fill='#eab308' />;
                } else {
                    starDisplay = <Star className='size-4 text-gray-300' />;
                }

                return (
                    <div key={index} className='relative'>
                        <div className='cursor-pointer'>{starDisplay}</div>
                        <div
                            className='absolute top-0 left-0 h-4 w-2 cursor-pointer'
                            onMouseEnter={() => setHoverRating(halfValue)}
                            onMouseLeave={() => setHoverRating(0)}
                            onClick={() => handleRatingChange(halfValue)}
                        />
                        <div
                            className='absolute top-0 right-0 h-4 w-2 cursor-pointer'
                            onMouseEnter={() => setHoverRating(fullValue)}
                            onMouseLeave={() => setHoverRating(0)}
                            onClick={() => handleRatingChange(fullValue)}
                        />
                    </div>
                );
            })}
        </div>
    );
}
