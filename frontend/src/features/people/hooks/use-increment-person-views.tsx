import { useIncrementPersonViewsMutation } from '@/generated/graphql';
import { useQueryClient } from '@tanstack/react-query';

export function useIncrementPersonViews(personId: string) {
    const queryClient = useQueryClient();

    return useIncrementPersonViewsMutation({
        // NOTE: Update the cache optimistically before the mutation
        onMutate: async () => {
            await queryClient.cancelQueries({ queryKey: ['person', personId] });
            const previous = queryClient.getQueryData<{ view_count: number }>(['person', personId]);
            if (previous) {
                queryClient.setQueryData(['person', personId], (old: any) => ({
                    ...old!,
                    view_count: old!.view_count + 1
                }));
            }
            const list = queryClient.getQueryData<Array<{ id: string; view_count: number }>>(['people']);

            if (list) {
                queryClient.setQueryData(
                    ['people'],
                    list.map((p) => (p.id === personId ? { ...p, view_count: p.view_count + 1 } : p))
                );
            }
            return { previous, previousList: list };
        },
        // NOTE: Revert the optimistic update if the mutation fails
        onError: (_err, _vars, context: any) => {
            if (context?.previous) {
                queryClient.setQueryData(['person', personId], context.previous);
            }
            if (context?.previousList) {
                queryClient.setQueryData(['people'], context.previousList);
            }
        },
        // NOTE: Invalidate cache after mutation
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['person', personId] });
            queryClient.invalidateQueries({ queryKey: ['GetPeople.infinite'] });
        }
    });
}
