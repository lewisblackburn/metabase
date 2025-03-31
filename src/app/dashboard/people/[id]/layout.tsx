import { ReactNode } from 'react';

import { Container } from '@/components/ui/container';

const PersonLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='h-[calc(100vh-4rem)] w-full overflow-auto'>
            <Container>{children}</Container>
        </main>
    );
};

export default PersonLayout;
