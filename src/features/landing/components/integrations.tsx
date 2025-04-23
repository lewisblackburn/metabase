'use client';

import { forwardRef, useRef } from 'react';

import GoodreadsIcon from '@/components/icons/goodreads.icon';
import IMDBIcon from '@/components/icons/imdb.icon';
import SpotifyIcon from '@/components/icons/spotify.icon';
import TMDBIcon from '@/components/icons/tmdb.icon';
import { AnimatedBeam } from '@/components/magicui/animated-beam';
import { cn } from '@/lib/utils';
import { Badge } from '@/registry/new-york-v4/ui/badge';

import { User } from 'lucide-react';

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
    ({ className, children }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
                    className
                )}>
                {children}
            </div>
        );
    }
);

Circle.displayName = 'Circle';

const Integrations = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);

    return (
        <section className='py-12 md:py-24 lg:py-32'>
            <div className='container mx-auto px-4'>
                <div className='mb-8 text-center md:mb-12'>
                    <Badge variant='outline' className='mb-3'>
                        Integrations
                    </Badge>
                    <h2 className='text-3xl leading-tight font-bold md:text-4xl lg:text-5xl'>
                        Integrate with your favorite tools and platforms
                    </h2>
                    <p className='text-muted-foreground mx-auto mt-3 max-w-2xl text-sm md:mt-4 md:text-base'>
                        Our platform seamlessly integrates with a wide range of tools and platforms, making it easy to
                        connect your existing workflows and systems.
                    </p>
                </div>
                <div className='grid place-items-center'>
                    <div
                        className='relative flex w-full max-w-[500px] items-center justify-center overflow-hidden p-10'
                        ref={containerRef}>
                        <div className='flex size-full flex-col items-stretch justify-between gap-10'>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-col gap-40'>
                                    <Circle ref={div1Ref}>
                                        <TMDBIcon />
                                    </Circle>
                                    <Circle ref={div2Ref}>
                                        <SpotifyIcon />
                                    </Circle>
                                </div>
                                <div className='flex flex-col gap-40'>
                                    <Circle ref={div4Ref}>
                                        <IMDBIcon />
                                    </Circle>
                                    <Circle ref={div5Ref}>
                                        <GoodreadsIcon />
                                    </Circle>
                                </div>
                            </div>
                        </div>

                        <Circle ref={div3Ref} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <User />
                        </Circle>

                        <AnimatedBeam
                            duration={3}
                            delay={0.5}
                            containerRef={containerRef}
                            fromRef={div1Ref}
                            toRef={div3Ref}
                        />
                        <AnimatedBeam
                            duration={3}
                            delay={1}
                            containerRef={containerRef}
                            fromRef={div2Ref}
                            toRef={div3Ref}
                        />
                        <AnimatedBeam
                            duration={3}
                            delay={1.5}
                            containerRef={containerRef}
                            fromRef={div4Ref}
                            toRef={div3Ref}
                            reverse
                        />
                        <AnimatedBeam
                            duration={3}
                            delay={2}
                            containerRef={containerRef}
                            fromRef={div5Ref}
                            toRef={div3Ref}
                            reverse
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Integrations;
