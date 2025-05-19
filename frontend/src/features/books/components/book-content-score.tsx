import { useUpdateBookMutation } from '@/generated/graphql';
import { Progress } from '@/registry/new-york-v4/ui/progress';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/registry/new-york-v4/ui/tooltip';
import { ContentQualityService } from '@/services/content-quality.service';
import { useQueryClient } from '@tanstack/react-query';

import { useBook } from './book-provider';

export default function BookContentScore() {
    const { book } = useBook();
    const queryClient = useQueryClient();

    const updateBook = useUpdateBookMutation();

    if (!book) return null;

    const handleClick = async () => {
        const score = await ContentQualityService.checkBookQuality(book.id);
        await updateBook.mutateAsync({
            pk_columns: {
                id: book.id
            },
            set: {
                content_score: score
            },
            inc: {}
        });
        queryClient.invalidateQueries({ queryKey: ['book', book.id] });
    };

    return (
        <Tooltip>
            {/* NOTE: TabIndex stops tooltip from opening when Sheets component is opened */}
            <TooltipTrigger tabIndex={-1}>
                <div className='flex items-center gap-2' onClick={handleClick}>
                    <Progress value={book.content_score} className='min-w-24' />
                    <span>{book.content_score}%</span>
                </div>
            </TooltipTrigger>
            <TooltipContent>Click to compute the content score</TooltipContent>
        </Tooltip>
    );
}
