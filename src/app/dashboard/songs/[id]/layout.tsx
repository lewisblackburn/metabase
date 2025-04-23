import { ReactNode } from 'react';

import { Container } from '@/components/ui/container';

const SongLayout = ({ children }: { children: ReactNode }) => {
    return <main className='h-[calc(100vh-4rem)] w-full overflow-auto'>{children}</main>;
};

export default SongLayout;
