import { CommandItem } from '@/registry/new-york-v4/ui/command';
import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';

export default function CommandPanelSkeleton() {
    return (
        <>
            {Array.from({ length: 5 }).map((_, index) => (
                <CommandItem key={index} className='text-xs'>
                    <div className='bg-muted p-1'>
                        <Skeleton className='size-3' />
                    </div>
                    <div>
                        <Skeleton className='h-4 w-32' />
                        <Skeleton className='mt-1 h-3 w-48' />
                    </div>
                    <div className='ml-auto flex items-center gap-1'>
                        <Skeleton className='size-2.5' />
                        <Skeleton className='h-3 w-16' />
                    </div>
                </CommandItem>
            ))}
        </>
    );
}
