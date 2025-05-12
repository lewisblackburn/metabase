import Link from 'next/link';

import Artwork from '@/components/shared/artwork';
import Cover from '@/components/shared/cover';
import Poster from '@/components/shared/poster';
import { OBJECT_TYPE } from '@/constants/objects.constant';
import { Object_Types_Enum } from '@/generated/graphql';
import { Progress } from '@/registry/new-york-v4/ui/progress';
import { Recommendation } from '@/types/recommendations.types';

interface RecommendationCardProps {
    recommendation: Recommendation & { id: string; type: Object_Types_Enum };
}
export default function RecommendationCard({ recommendation }: RecommendationCardProps) {
    return (
        <Link href={`/dashboard/${OBJECT_TYPE[recommendation.type].path}/${recommendation.id}`} scroll={false}>
            <div className='hover:bg-muted/50 flex flex-col gap-2 rounded-md border p-2 transition-colors'>
                <div className='relative aspect-[3/4] w-full overflow-hidden rounded'>
                    <div className='bg-muted/10 absolute inset-0 flex items-center justify-center'>
                        {recommendation.type === Object_Types_Enum.Movie && (
                            <div className='h-full w-full'>
                                <Poster title={recommendation.title} image={recommendation.image} />
                            </div>
                        )}
                        {recommendation.type === Object_Types_Enum.Song && (
                            <div className='h-full w-full'>
                                <Artwork title={recommendation.title} image={recommendation.image} />
                            </div>
                        )}
                        {recommendation.type === Object_Types_Enum.Book && (
                            <div className='h-full w-full'>
                                <Cover title={recommendation.title} image={recommendation.image} />
                            </div>
                        )}
                    </div>
                </div>
                <div className='min-w-0'>
                    <h3 className='truncate text-sm font-medium'>{recommendation.title}</h3>
                    <div className='mt-1 flex items-center gap-2'>
                        <Progress value={recommendation.score * 10} className='h-1' />
                        <span className='text-muted-foreground text-xs'>{Math.round(recommendation.score * 10)}%</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
