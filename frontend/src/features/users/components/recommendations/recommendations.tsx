import { useParams } from 'next/navigation';

import { Object_Types_Enum } from '@/generated/graphql';
import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';
import { Recommendation } from '@/types/recommendations.types';
import { useQuery } from '@tanstack/react-query';

import RecommendationCard from './recommendation-card';

const RecommendationsSkeleton = () => (
    <div className='flex flex-col gap-2 rounded-md border p-2'>
        <div className='relative aspect-[3/4] w-full overflow-hidden rounded'>
            <Skeleton className='h-full w-full' />
        </div>
        <div className='min-w-0'>
            <Skeleton className='h-4 w-3/4' />
            <Skeleton className='mt-1 h-3 w-1/2' />
        </div>
    </div>
);

export function Recommendations() {
    const { id: userId } = useParams<{ id: string }>();

    const {
        data: recommendations,
        isLoading,
        error
    } = useQuery({
        queryKey: ['recommendations', userId],
        throwOnError: false,
        queryFn: async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_RECOMMENDATION_API_URL}/recommend/${userId}`);
            if (!response.ok) throw new Error('Error fetching recommendations');

            const data = await response.json();
            if (!data) throw new Error('No recommendations found');

            return Object.entries(data).map(([id, recommendation]) => ({
                id,
                ...(recommendation as Recommendation),
                type: (recommendation as Recommendation).type.toUpperCase() as Object_Types_Enum
            }));
        }
    });

    if (isLoading)
        return (
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                {[...Array(10)].map((_, i) => (
                    <RecommendationsSkeleton key={i} />
                ))}
            </div>
        );
    if (error) return <div className='text-red-500'>Error loading recommendations: {(error as Error).message}</div>;
    if (!recommendations?.length) return <div className='text-gray-500'>No recommendations available</div>;

    return (
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {recommendations.map((recommendation) => (
                <RecommendationCard key={recommendation.id} recommendation={recommendation} />
            ))}
        </div>
    );
}
