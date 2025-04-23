'use client';

import DefaultError from '@/components/shared/default-error';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    return <DefaultError error={error} resetErrorBoundary={reset} />;
}
