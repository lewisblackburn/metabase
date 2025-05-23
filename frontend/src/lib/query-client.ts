import { GC_TIME, STALE_TIME } from '@/constants/api.constant';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            throwOnError: false,
            staleTime: STALE_TIME,
            gcTime: GC_TIME,
            retry: 3,
            retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
            refetchOnWindowFocus: false,
            refetchOnMount: true,
            refetchOnReconnect: true
        },
        mutations: {
            throwOnError: false,
            retry: 3,
            retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000)
        }
    }
});
