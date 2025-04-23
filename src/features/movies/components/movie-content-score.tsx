import { useState } from 'react';

import ProgressItem from '@/components/shared/progress-item';
import { OBJECT_TYPE } from '@/constants/objects.constant';
import { useUpdateMovieMutation } from '@/generated/graphql';
import { contentQualityService } from '@/services/content-quality.service';
import { useQueryClient } from '@tanstack/react-query';

import { useMovie } from './movie-provider';
import { TrendingUp } from 'lucide-react';

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
        <ProgressItem
            icon={TrendingUp}
            label='Content Score'
            score={movie.content_score}
            onClick={handleClick}
            loading={updateMovie.isPending}
        />
    );
}
