import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import { useSidebar } from '@/registry/new-york-v4/ui/sidebar';

import { Filter } from 'lucide-react';

export default function FilterSidebarTrigger({ className, onClick, ...props }: React.ComponentProps<typeof Button>) {
    const { toggleSidebar } = useSidebar();

    return (
        <Button
            data-sidebar='trigger'
            data-slot='sidebar-trigger'
            variant='ghost'
            className={cn('text-muted-foreground cursor-pointer', className)}
            onClick={(event) => {
                onClick?.(event);
                toggleSidebar();
            }}
            {...props}>
            <Filter />
            Filters
            <span className='sr-only'>Toggle Sidebar</span>
        </Button>
    );
}
