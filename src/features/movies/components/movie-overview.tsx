import { useState } from 'react';

import ResponsiveDialog from '@/components/shared/responsive-dailog';
import { Button } from '@/registry/new-york-v4/ui/button';

import { useMovie } from './movie-provider';

export default function MovieOverview() {
    const { movie } = useMovie();
    const [open, setOpen] = useState(false);

    if (!movie) return null;
    if (!movie.overview) return null;

    return (
        <ResponsiveDialog
            open={open}
            onOpenChange={setOpen}
            title={movie.title}
            hasVisibleTitle
            trigger={
                <div>
                    <p className='text-muted-foreground mt-1 line-clamp-3 text-sm sm:text-base'>{movie.overview}</p>
                    <Button variant='link' size='sm' className='justify-start p-0 text-xs'>
                        See more
                    </Button>
                </div>
            }>
            <p className='text-muted-foreground max-h-96 text-sm sm:text-base'>{movie.overview}</p>
        </ResponsiveDialog>
    );
}
