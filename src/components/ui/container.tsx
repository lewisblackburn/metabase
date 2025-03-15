import { ReactNode } from 'react';

export function Container({ children }: { children: ReactNode }) {
    return <div className='mx-auto w-full max-w-6xl py-20'>{children}</div>;
}
