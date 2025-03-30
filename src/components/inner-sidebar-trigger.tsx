import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import { useSidebar } from '@/registry/new-york-v4/ui/sidebar';

import { ChevronLeft, ChevronRight, Info } from 'lucide-react';

export function InnerSidebarTrigger({ className, onClick, ...props }: React.ComponentProps<typeof Button>) {
    const { open, toggleSidebar } = useSidebar();
    const isMobile = useIsMobile();

    return (
        <Button
            data-sidebar='trigger'
            data-slot='sidebar-trigger'
            variant='ghost'
            size='icon'
            className={cn('text-muted-foreground h-7 w-7 cursor-pointer', className)}
            onClick={(event) => {
                onClick?.(event);
                toggleSidebar();
            }}
            {...props}>
            {!isMobile ? open ? <ChevronLeft /> : <ChevronRight /> : <Info />}
            <span className='sr-only'>Toggle Sidebar</span>
        </Button>
    );
}
