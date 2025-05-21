import { useIncrementBookViewsMutation } from '@/generated/graphql';
import { useQueryClient } from '@tanstack/react-query';

export function useIncrementBookViews(bookId: string) {
    const queryClient = useQueryClient();

    return useIncrementBookViewsMutation({
        onMutate: async () => {
            await queryClient.cancelQueries({ queryKey: ['book', bookId] });
            const previous = queryClient.getQueryData<{ view_count: number }>(['book', bookId]);
            if (previous) {
                queryClient.setQueryData(['book', bookId], (old: any) => ({
                    ...old!,
                    view_count: old!.view_count + 1
                }));
            }
            const list = queryClient.getQueryData<Array<{ id: string; view_count: number }>>(['books']);

            if (list) {
                queryClient.setQueryData(
                    ['books'],
                    list.map((b) => (b.id === bookId ? { ...b, view_count: b.view_count + 1 } : b))
                );
            }
            return { previous, previousList: list };
        },
        onError: (_err, _vars, context: any) => {
            if (context?.previous) {
                queryClient.setQueryData(['book', bookId], context.previous);
            }
            if (context?.previousList) {
                queryClient.setQueryData(['books'], context.previousList);
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['book', bookId] });
            queryClient.invalidateQueries({ queryKey: ['GetBooks.infinite'] });
        }
    });
}
