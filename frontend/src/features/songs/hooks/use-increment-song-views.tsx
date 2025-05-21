import { useIncrementSongViewsMutation } from '@/generated/graphql';
import { useQueryClient } from '@tanstack/react-query';

export function useIncrementSongViews(songId: string) {
    const queryClient = useQueryClient();

    return useIncrementSongViewsMutation({
        onMutate: async () => {
            await queryClient.cancelQueries({ queryKey: ['song', songId] });
            const previous = queryClient.getQueryData<{ view_count: number }>(['song', songId]);
            if (previous) {
                queryClient.setQueryData(['song', songId], (old: any) => ({
                    ...old!,
                    view_count: old!.view_count + 1
                }));
            }
            const list = queryClient.getQueryData<Array<{ id: string; view_count: number }>>(['songs']);

            if (list) {
                queryClient.setQueryData(
                    ['songs'],
                    list.map((s) => (s.id === songId ? { ...s, view_count: s.view_count + 1 } : s))
                );
            }
            return { previous, previousList: list };
        },
        onError: (_err, _vars, context: any) => {
            if (context?.previous) {
                queryClient.setQueryData(['song', songId], context.previous);
            }
            if (context?.previousList) {
                queryClient.setQueryData(['songs'], context.previousList);
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['song', songId] });
            queryClient.invalidateQueries({ queryKey: ['GetSongs.infinite'] });
        }
    });
}
