import { useIncrementMovieViewsMutation } from '@/generated/graphql';
import { useQueryClient } from '@tanstack/react-query';

export function useIncrementMovieViews(movieId: string) {
    const queryClient = useQueryClient();

    return useIncrementMovieViewsMutation({
        // NOTE: Update the cache optimistically before the mutation
        onMutate: async () => {
            await queryClient.cancelQueries({ queryKey: ['movie', movieId] });
            const previous = queryClient.getQueryData<{ view_count: number }>(['movie', movieId]);
            if (previous) {
                queryClient.setQueryData(['movie', movieId], (old: any) => ({
                    ...old!,
                    view_count: old!.view_count + 1
                }));
            }
            const list = queryClient.getQueryData<Array<{ id: string; view_count: number }>>(['movies']);

            if (list) {
                queryClient.setQueryData(
                    ['movies'],
                    list.map((m) => (m.id === movieId ? { ...m, view_count: m.view_count + 1 } : m))
                );
            }
            return { previous, previousList: list };
        },
        // NOTE: Revert the optimistic update if the mutation fails
        onError: (_err, _vars, context: any) => {
            if (context?.previous) {
                queryClient.setQueryData(['movie', movieId], context.previous);
            }
            if (context?.previousList) {
                queryClient.setQueryData(['movies'], context.previousList);
            }
        },
        // NOTE: Invalidate cache after mutation
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['movie', movieId] });
            // NOTE: The movies query doesn't have a query key yet
            // queryClient.invalidateQueries({ queryKey: ['movies'] });
        }
    });
}
