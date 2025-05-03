import { useState } from 'react';

import ResponsiveDialog from '@/components/shared/responsive-dailog';
import { Button } from '@/registry/new-york-v4/ui/button';

interface ObjectOverviewProps {
    title: string;
    text: string;
}

export default function ObjectOverview({ title, text }: ObjectOverviewProps) {
    const [open, setOpen] = useState(false);

    return (
        <ResponsiveDialog
            open={open}
            onOpenChange={setOpen}
            title={title}
            hasVisibleTitle
            trigger={
                <div>
                    <p className='text-muted-foreground mt-1 line-clamp-3 text-sm sm:text-base'>{text}</p>
                    <Button variant='link' size='sm' className='justify-start p-0 text-xs'>
                        See more
                    </Button>
                </div>
            }>
            <p className='text-muted-foreground max-h-96 text-sm sm:text-base'>{text}</p>
        </ResponsiveDialog>
    );
}
