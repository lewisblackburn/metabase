import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/registry/new-york-v4/ui/button';

import { ExternalLink } from 'lucide-react';

const Hero = () => {
    return (
        <section className='relative overflow-hidden py-32'>
            <div className='absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100'>
                <img
                    alt='background'
                    src='/images/square-alt-grid.svg'
                    className='opacity-90 [mask-image:radial-gradient(75%_75%_at_center,white,transparent)]'
                />
            </div>
            <div className='relative z-10 container'>
                <div className='mx-auto flex max-w-5xl flex-col items-center'>
                    <div className='flex flex-col items-center gap-6 text-center'>
                        <div className='bg-background/30 rounded-xl p-4 shadow-sm backdrop-blur-sm'>
                            <img src='/images/logo/logo-light-streamline.png' alt='logo' className='h-16' />
                        </div>
                        <div>
                            <h1 className='mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl'>
                                A database to track your <span className='text-primary'>Metadata</span>
                            </h1>
                            <p className='text-muted-foreground mx-auto max-w-3xl lg:text-xl'>
                                Tracking media is hard. We make it easy. With our database, you can track your media,
                                get recommendations, and discover new content.
                            </p>
                        </div>
                        <div className='mt-6 flex justify-center gap-3'>
                            <Button className='shadow-sm transition-shadow hover:shadow'>Get Started</Button>
                            <Button variant='outline' className='group'>
                                Learn more{' '}
                                <ExternalLink className='ml-2 h-4 transition-transform group-hover:translate-x-0.5' />
                            </Button>
                        </div>
                        <div className='mt-20 flex flex-col items-center gap-5'>
                            <p className='text-muted-foreground font-medium lg:text-left'>
                                Built with open-source technologies
                            </p>
                            <div className='flex flex-wrap items-center justify-center gap-4'>
                                <a
                                    href='#'
                                    className={cn(
                                        buttonVariants({ variant: 'outline' }),
                                        'group flex aspect-square h-12 items-center justify-center p-0'
                                    )}>
                                    <img
                                        src='https://shadcnblocks.com/images/block/logos/shadcn-ui-icon.svg'
                                        alt='shadcn/ui logo'
                                        className='h-6 saturate-0 transition-all group-hover:saturate-100'
                                    />
                                </a>
                                <a
                                    href='#'
                                    className={cn(
                                        buttonVariants({ variant: 'outline' }),
                                        'group flex aspect-square h-12 items-center justify-center p-0'
                                    )}>
                                    <img
                                        src='https://shadcnblocks.com/images/block/logos/typescript-icon.svg'
                                        alt='TypeScript logo'
                                        className='h-6 saturate-0 transition-all group-hover:saturate-100'
                                    />
                                </a>

                                <a
                                    href='#'
                                    className={cn(
                                        buttonVariants({ variant: 'outline' }),
                                        'group flex aspect-square h-12 items-center justify-center p-0'
                                    )}>
                                    <img
                                        src='https://shadcnblocks.com/images/block/logos/react-icon.svg'
                                        alt='React logo'
                                        className='h-6 saturate-0 transition-all group-hover:saturate-100'
                                    />
                                </a>
                                <a
                                    href='#'
                                    className={cn(
                                        buttonVariants({ variant: 'outline' }),
                                        'group flex aspect-square h-12 items-center justify-center p-0'
                                    )}>
                                    <img
                                        src='https://shadcnblocks.com/images/block/logos/tailwind-icon.svg'
                                        alt='Tailwind CSS logo'
                                        className='h-6 saturate-0 transition-all group-hover:saturate-100'
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Hero };
