import { GC_TIME, STALE_TIME } from '@/constants/api.constant';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            throwOnError: true,
            staleTime: STALE_TIME,
            gcTime: GC_TIME,
            retry: false
        }
    }
});
