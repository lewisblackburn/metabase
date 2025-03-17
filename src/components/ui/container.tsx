import { ReactNode } from 'react';

export function Container({ children }: { children: ReactNode }) {
    return <div className='mx-auto w-full px-5 py-10 sm:max-w-7xl'>{children}</div>;
}
