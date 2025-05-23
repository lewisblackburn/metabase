import Link from 'next/link';

import GraphQLIcon from '@/components/icons/graphql.icon';
import HasuraIcon from '@/components/icons/hasura.icon';
import NextJSIcon from '@/components/icons/nextjs.icon';
import PostgeSQLIcon from '@/components/icons/postgresql.icon';
import ShadcnIcon from '@/components/icons/shadcn.icon';
import TailwindIcon from '@/components/icons/tailwind.icon';
import TypeScriptIcon from '@/components/icons/typescript.icon';
import { BorderBeam } from '@/components/magicui/border-beam';
import { TextAnimate } from '@/components/magicui/text-animate';
import ImageWithSkeleton from '@/components/shared/image-with-skeleton';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/registry/new-york-v4/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/registry/new-york-v4/ui/tooltip';

import { ExternalLink } from 'lucide-react';

// This code was modified from: https://www.shadcnblocks.com

const Hero = () => {
    const technologies = [
        {
            name: 'shadcn/ui',
            icon: <ShadcnIcon />,
            description: 'Beautifully designed components built with Radix UI and Tailwind CSS',
            link: 'https://ui.shadcn.com/'
        },
        {
            name: 'TypeScript',
            icon: <TypeScriptIcon />,
            description: 'Strongly typed programming language that builds on JavaScript',
            link: 'https://www.typescriptlang.org/'
        },
        {
            name: 'GraphQL',
            icon: <GraphQLIcon />,
            description: 'Query language for APIs and runtime for fulfilling those queries',
            link: 'https://graphql.org/'
        },
        {
            name: 'Hasura',
            icon: <HasuraIcon />,
            description: 'Instant GraphQL APIs for your data',
            link: 'https://hasura.io/ddn'
        },
        {
            name: 'Next.js',
            icon: <NextJSIcon />,
            description: 'React framework for production-grade applications',
            link: 'https://nextjs.org/'
        },
        {
            name: 'PostgreSQL',
            icon: <PostgeSQLIcon />,
            description: 'Advanced open source relational database',
            link: 'https://www.postgresql.org/'
        },
        {
            name: 'Tailwind CSS',
            icon: <TailwindIcon />,
            description: 'Utility-first CSS framework for rapid UI development',
            link: 'https://tailwindcss.com/'
        }
    ];

    return (
        <section className='relative overflow-hidden py-32'>
            <div className='absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100'>
                <img
                    alt='background'
                    src='/images/square-alt-grid.svg'
                    className='[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90'
                />
            </div>
            <div className='relative z-10 container'>
                <div className='mx-auto flex max-w-5xl flex-col items-center'>
                    <div className='flex flex-col items-center gap-6 text-center'>
                        <div className='bg-background/30 rounded-xl p-4 shadow-sm backdrop-blur-sm'>
                            <ImageWithSkeleton
                                src='/images/logo/logo-light-streamline.png'
                                alt='logo'
                                className='h-16'
                                width={64}
                                height={64}
                            />
                            <BorderBeam
                                duration={3}
                                size={100}
                                className='from-transparent via-green-500 to-transparent'
                            />
                        </div>
                        <div>
                            <TextAnimate
                                animation='blurIn'
                                as='h1'
                                className='mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl'>
                                A database to track your metadata
                            </TextAnimate>
                            <TextAnimate
                                animation='fadeIn'
                                by='line'
                                as='p'
                                className='text-muted-foreground mx-auto max-w-3xl lg:text-xl'>
                                Tracking media is hard. We make it easy. With our database, you can track your media,
                                get recommendations, and discover new content.
                            </TextAnimate>
                        </div>
                        <div className='mt-6 flex justify-center gap-3'>
                            <Link href='/dashboard'>
                                <Button className='shadow-sm transition-shadow hover:shadow'>Get Started</Button>
                            </Link>
                            <Button variant='outline' className='group' disabled>
                                Learn more{' '}
                                <ExternalLink className='ml-2 h-4 transition-transform group-hover:translate-x-0.5' />
                            </Button>
                        </div>
                        <div className='mt-20 flex flex-col items-center gap-5'>
                            <p className='text-muted-foreground font-medium lg:text-left'>
                                Built with open-source technologies
                            </p>
                            <div className='flex flex-wrap items-center justify-center gap-4'>
                                <TooltipProvider>
                                    {technologies.map((tech, index) => (
                                        <Tooltip key={index}>
                                            <TooltipTrigger asChild>
                                                <Link
                                                    href={tech.link}
                                                    target='_blank'
                                                    className={cn(
                                                        buttonVariants({ variant: 'outline' }),
                                                        'group flex aspect-square h-12 items-center justify-center p-0'
                                                    )}
                                                    aria-label={tech.name}>
                                                    {tech.icon}
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{tech.description}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    ))}
                                </TooltipProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Hero };
