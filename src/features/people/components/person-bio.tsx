import { useState } from 'react';

import ResponsiveDialog from '@/components/shared/responsive-dailog';
import { Button } from '@/registry/new-york-v4/ui/button';

import { usePerson } from './person-provider';

export default function PersonBio() {
    const { person } = usePerson();
    const [open, setOpen] = useState(false);

    if (!person) return null;
    if (!person.bio) return null;

    return (
        <ResponsiveDialog
            open={open}
            onOpenChange={setOpen}
            title={person.name}
            hasVisibleTitle
            trigger={
                <div>
                    <p className='text-muted-foreground mt-1 line-clamp-3 text-sm sm:text-base'>{person.bio}</p>
                    <Button variant='link' size='sm' className='justify-start p-0 text-xs'>
                        See more
                    </Button>
                </div>
            }>
            <p className='text-muted-foreground max-h-96 text-sm sm:text-base'>{person.bio}</p>
        </ResponsiveDialog>
    );
}
