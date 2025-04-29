'use client';

import { useEffect, useState } from 'react';

import { OBJECT_TYPE } from '@/constants/objects.constant';
import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/registry/new-york-v4/ui/carousel';

// This is modified from: https://shadcnblocks.com/

const features = [
    {
        id: 'feature-1',
        title: 'Unified Media Library',
        description:
            'Access films, books, music, series, and games all in one place—no more switching between platforms.',
        icon: OBJECT_TYPE.book.icon,
        image: 'https://placehold.co/200x300?text=Unified+Media+Library'
    },
    {
        id: 'feature-2',
        title: 'Cross‑Media Discovery',
        description:
            'Explore connections—find which soundtracks appear in films, or books adapted into series, with one click.',
        icon: OBJECT_TYPE.movie.icon,
        image: 'https://placehold.co/200x300?text=Cross-Media+Discovery'
    },
    {
        id: 'feature-3',
        title: 'Hybrid Recommendations',
        description:
            'Get personalized suggestions across all media types using a mix of content‑based and collaborative filtering.',
        icon: OBJECT_TYPE.song.icon,
        image: 'https://placehold.co/200x300?text=Hybrid+Recommendations'
    },
    {
        id: 'feature-4',
        title: 'User‑Driven Curation',
        description: 'Contribute ratings, reviews, and new entries with a verification system to ensure data accuracy.',
        icon: OBJECT_TYPE.game.icon,
        image: 'https://placehold.co/200x300?text=User-Driven+Curation'
    }
];

const Features = () => {
    const [selection, setSelection] = useState(0);
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();

    const handleSelection = (index: number) => {
        setSelection(index);
        const mobileCarousel = document.querySelector('.snap-x.snap-mandatory');
        if (mobileCarousel) {
            const slides = Array.from(mobileCarousel.children);
            if (slides[index]) {
                slides[index].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    };

    useEffect(() => {
        if (!carouselApi) return;
        carouselApi.scrollTo(selection);
    }, [carouselApi, selection]);

    useEffect(() => {
        if (!carouselApi) return;
        const updateSelection = () => {
            setSelection(carouselApi.selectedScrollSnap());
        };
        carouselApi.on('select', updateSelection);
        return () => {
            carouselApi.off('select', updateSelection);
        };
    }, [carouselApi]);

    return (
        <section className='py-12 md:py-24 lg:py-32'>
            <div className='container mx-auto px-4'>
                <div className='mb-8 text-center md:mb-12'>
                    <Badge variant='outline' className='mb-3'>
                        Core Features
                    </Badge>
                    <h2 className='text-3xl leading-tight font-bold md:text-4xl lg:text-5xl'>
                        Building a Unified Media Experience
                    </h2>
                    <p className='text-muted-foreground mx-auto mt-3 max-w-2xl text-sm md:mt-4 md:text-base'>
                        Our application integrates multiple media formats into a single platform, enhancing discovery
                        and engagement.
                    </p>
                </div>

                <div className='overflow-visible'>
                    <div className='mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:gap-8 lg:gap-16'>
                        <div className='scrollbar-none flex snap-x snap-mandatory gap-3 overflow-x-auto md:hidden [&::-webkit-scrollbar]:hidden'>
                            {features.map((feature, i) => (
                                <div
                                    key={feature.id}
                                    className='border-border relative h-[min(30rem,65vh)] w-[min(100%,100vw)] flex-shrink-0 cursor-pointer snap-center overflow-hidden rounded-xl border'
                                    onClick={() => handleSelection(i)}>
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className='h-full w-full object-cover object-center'
                                    />
                                    <div className='from-background/95 via-background/70 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent px-4 py-5'>
                                        <div className='flex items-center gap-3'>
                                            <div className='bg-primary text-primary-foreground flex size-10 items-center justify-center rounded-lg p-2'>
                                                <feature.icon className='size-5' />
                                            </div>
                                            <div>
                                                <h3 className='text-foreground text-lg font-semibold'>
                                                    {feature.title}
                                                </h3>
                                                <p className='text-muted-foreground mt-1 line-clamp-2 text-xs'>
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='mb-4 flex justify-center gap-2 md:hidden'>
                            {features.map((_, i) => (
                                <button
                                    key={i}
                                    className={`size-2 rounded-full transition-all ${
                                        selection === i ? 'bg-primary w-6' : 'bg-muted hover:bg-muted-foreground/50'
                                    }`}
                                    onClick={() => handleSelection(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>

                        <div className='md:w-1/2 lg:w-2/5'>
                            <ul className='grid grid-cols-1 gap-3 md:flex md:flex-col md:gap-2'>
                                {features.map((feature, i) => {
                                    const isSelected = selection === i;
                                    return (
                                        <li
                                            key={feature.id}
                                            className={`group relative flex cursor-pointer rounded-xl border px-4 py-3 transition-all duration-300 md:px-5 md:py-4 ${
                                                isSelected
                                                    ? 'border-border bg-accent shadow-sm'
                                                    : 'hover:border-border hover:bg-accent/30 border-transparent'
                                            }`}
                                            data-open={isSelected ? 'true' : undefined}
                                            onClick={() => handleSelection(i)}>
                                            <div className='flex w-full items-start gap-3 md:gap-4'>
                                                <div
                                                    className={`flex aspect-square w-9 shrink-0 items-center justify-center rounded-lg transition-colors md:w-10 ${
                                                        isSelected
                                                            ? 'bg-primary text-primary-foreground'
                                                            : 'bg-muted text-muted-foreground'
                                                    }`}>
                                                    <feature.icon className='size-4 md:size-5' />
                                                </div>
                                                <div className='min-w-0 flex-1'>
                                                    <h3
                                                        className={`mb-1 text-sm font-semibold transition-colors md:text-base lg:text-lg ${
                                                            isSelected ? 'text-foreground' : 'text-muted-foreground'
                                                        }`}>
                                                        {feature.title}
                                                    </h3>
                                                    <p className='text-muted-foreground line-clamp-2 text-xs transition-all md:text-sm md:group-data-[open]:opacity-100 lg:text-sm'>
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className='relative hidden md:block md:w-1/2 lg:w-3/5'>
                            <div className='border-border overflow-hidden rounded-xl border shadow-sm'>
                                <Carousel
                                    setApi={setCarouselApi}
                                    className='aspect-[4/5] max-h-[500px] w-full md:aspect-[3/4] lg:aspect-[4/5] [&>div]:h-full'
                                    opts={{ loop: true }}>
                                    <CarouselContent className='mx-0 h-full w-full'>
                                        {features.map((feature) => (
                                            <CarouselItem key={feature.id} className='px-0'>
                                                <div className='relative h-full w-full overflow-hidden'>
                                                    <img
                                                        src={feature.image}
                                                        alt={feature.title}
                                                        className='h-full w-full object-cover object-center transition-transform duration-500'
                                                    />
                                                    <div className='from-background/80 via-background/40 absolute right-0 bottom-0 left-0 bg-gradient-to-t to-transparent p-6'>
                                                        <div className='flex items-center gap-3'>
                                                            <div className='bg-primary text-primary-foreground flex aspect-square w-10 items-center justify-center rounded-lg'>
                                                                <feature.icon className='size-5' />
                                                            </div>
                                                            <h3 className='text-foreground text-xl font-semibold'>
                                                                {feature.title}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                </Carousel>
                            </div>

                            <div className='mt-4 flex justify-center gap-2'>
                                {features.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`size-2 rounded-full transition-all ${
                                            selection === i ? 'bg-primary w-6' : 'bg-muted hover:bg-muted-foreground/50'
                                        }`}
                                        onClick={() => handleSelection(i)}
                                        aria-label={`Go to slide ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
