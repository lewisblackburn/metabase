import { useUpdateSongMutation } from '@/generated/graphql';
import { Progress } from '@/registry/new-york-v4/ui/progress';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/registry/new-york-v4/ui/tooltip';
import { ContentQualityService } from '@/services/content-quality.service';
import { useQueryClient } from '@tanstack/react-query';

import { useSong } from './song-provider';

export default function SongContentScore() {
    const { song } = useSong();
    const queryClient = useQueryClient();

    const updateSong = useUpdateSongMutation();

    if (!song || !song.spotify_id) return null;

    const handleClick = async () => {
        const score = await ContentQualityService.checkSongQuality(song.id);
        await updateSong.mutateAsync({
            pk_columns: {
                id: song.id
            },
            set: {
                content_score: score
            },
            inc: {}
        });
        queryClient.invalidateQueries({ queryKey: ['song', song.id] });
    };

    return (
        <Tooltip>
            {/* NOTE: TabIndex stops tooltip from opening when Sheets component is opened */}
            <TooltipTrigger tabIndex={-1}>
                <div className='flex items-center gap-2' onClick={handleClick}>
                    <Progress value={song.content_score} className='min-w-24' />
                    <span>{song.content_score}%</span>
                </div>
            </TooltipTrigger>
            <TooltipContent>Click to compute the content score</TooltipContent>
        </Tooltip>
    );
}
