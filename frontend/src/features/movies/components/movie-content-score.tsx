import { OBJECT_TYPE } from '@/constants/objects.constant';
import { useUpdateMovieMutation } from '@/generated/graphql';
import { Progress } from '@/registry/new-york-v4/ui/progress';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/registry/new-york-v4/ui/tooltip';
import { contentQualityService } from '@/services/content-quality.service';
import { useQueryClient } from '@tanstack/react-query';

import { useMovie } from './movie-provider';

export default function MovieContentScore() {
    const { movie } = useMovie();
    const queryClient = useQueryClient();

    const updateMovie = useUpdateMovieMutation();

    if (!movie || !movie.tmdb_id) return null;

    const handleClick = async () => {
        const score = await contentQualityService.check(OBJECT_TYPE.MOVIE, movie.id, movie.tmdb_id!);
        await updateMovie.mutateAsync({
            id: movie.id,
            inc: {},
            set: {
                content_score: score
            }
        });
        queryClient.invalidateQueries({ queryKey: ['movie', movie.id] });
    };

    return (
        <Tooltip>
            {/* NOTE: TabIndex stops tooltip from opening when Sheets component is opened */}
            <TooltipTrigger tabIndex={-1}>
                <div className='flex items-center gap-2' onClick={handleClick}>
                    <Progress value={movie.content_score} className='min-w-24' />
                    <span>{movie.content_score}%</span>
                </div>
            </TooltipTrigger>
            <TooltipContent>Click to compute the content score</TooltipContent>
        </Tooltip>
    );
}
