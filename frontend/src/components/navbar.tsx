'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { LucideIconOrFC } from '@/constants/icons.constant';
import { NAVIGATION } from '@/constants/navigation.constant';
import { OBJECT_TYPE } from '@/constants/objects.constant';
import { toggleCommandPanelOpenState } from '@/features/command-panel/store/command-panel.slice';
import { ShortcutDisplay } from '@/features/shortcuts/components/shortcut-display';
import { useShortcut } from '@/features/shortcuts/hooks/useShortcut';
import { useGetFeaturedItemsQuery } from '@/generated/graphql';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/registry/new-york-v4/ui/accordion';
import { Button } from '@/registry/new-york-v4/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from '@/registry/new-york-v4/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/registry/new-york-v4/ui/sheet';
import { useUserData } from '@nhost/nextjs';

import { NavUser } from './nav-user';
import Notifications from './notifications/notifications';
import Artwork, { ArtworkSkeleton } from './shared/artwork';
import Cover, { CoverSkeleton } from './shared/cover';
import Headshot, { HeadshotSkeleton } from './shared/headshot';
import ImageWithSkeleton from './shared/image-with-skeleton';
import Poster, { PosterSkeleton } from './shared/poster';
import { Container } from './ui/container';
import { Home, MenuIcon, Search } from 'lucide-react';
import { useDispatch } from 'react-redux';

interface ListItemProps extends React.ComponentPropsWithoutRef<'a'> {
    icon: LucideIconOrFC;
    title: string;
}

const ListItem = React.forwardRef<React.ComponentRef<'a'>, ListItemProps>(
    ({ className, icon: Icon, title, children, href, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <Link
                        href={href ?? ''}
                        className={cn(
                            'block h-full rounded-md p-3 leading-none no-underline transition-colors outline-none select-none',
                            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                            className
                        )}
                        {...props}>
                        <div className='flex items-center gap-1.5 text-sm leading-none font-semibold'>
                            <Icon className='mt-0.5 size-3' />
                            <span>{title}</span>
                        </div>
                        <p className='text-muted-foreground line-clamp-2 text-sm leading-snug'>{children}</p>
                    </Link>
                </NavigationMenuLink>
            </li>
        );
    }
);
ListItem.displayName = 'ListItem';

const Navbar: React.FC = () => {
    const user = useUserData();
    const dispatch = useDispatch();
    const searchShortcut = useShortcut('openCommandPanel');

    const { data: featuredItemsData, isLoading: isFeaturedItemsLoading } = useGetFeaturedItemsQuery(
        {},
        {
            queryKey: ['featuredItems']
        }
    );

    const featuredMovie = featuredItemsData?.featuredMovie[0] ?? null;
    const featuredSong = featuredItemsData?.featuredSong[0] ?? null;
    const featuredBook = featuredItemsData?.featuredBook[0] ?? null;
    const featuredPerson = featuredItemsData?.featuredPerson[0] ?? null;

    const handleOpenCommandPanel = () => {
        dispatch(toggleCommandPanelOpenState());
    };

    return (
        <Container>
            <nav className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <Link href='/' className='flex w-8 items-center'>
                        <ImageWithSkeleton
                            src='/images/logo/logo-light-streamline.png'
                            className='max-h-8'
                            width={32}
                            height={32}
                            alt='Logo'
                            priority
                        />
                    </Link>

                    <NavigationMenu className='hidden lg:block'>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href='/dashboard'
                                        className={cn(
                                            'block h-full rounded-md p-3 leading-none no-underline transition-colors outline-none select-none',
                                            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                        )}>
                                        <div className='flex items-center gap-1.5 font-semibold'>
                                            <Home className='font-semibol mt-0.5 size-3' />
                                            <span>Home</span>
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className='flex items-center gap-1.5'>
                                    <OBJECT_TYPE.MOVIE.icon className='mt-0.5 size-3' />
                                    <span>{OBJECT_TYPE.MOVIE.plural}</span>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className='w-[700px] p-2'>
                                        <div className='grid grid-cols-[.75fr_1fr_1fr] gap-2'>
                                            <div className='col-span-1 row-span-3'>
                                                <div className='p-1'>
                                                    {featuredMovie && !isFeaturedItemsLoading ? (
                                                        <Link
                                                            href={`/dashboard/movies/${featuredMovie.id}`}
                                                            className='block h-full'>
                                                            <Poster
                                                                image={featuredMovie.poster}
                                                                title={featuredMovie.title}
                                                            />
                                                        </Link>
                                                    ) : (
                                                        <PosterSkeleton />
                                                    )}
                                                </div>
                                            </div>
                                            <div className='col-span-2'>
                                                <ul className='grid grid-cols-2 gap-3'>
                                                    {NAVIGATION.movies.cards.map((item) => (
                                                        <ListItem
                                                            key={item.name}
                                                            href={item.path}
                                                            title={item.name}
                                                            icon={item.icon}>
                                                            {item.description}
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className='flex items-center gap-1.5' disabled={true}>
                                    <OBJECT_TYPE.TV.icon className='mt-0.5 size-3' />
                                    <span>{OBJECT_TYPE.TV.plural}</span>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className='w-[700px] p-2'>
                                        <div className='grid grid-cols-[.75fr_1fr_1fr] gap-2'>
                                            <div className='col-span-1 row-span-3'>
                                                <div className='p-1'>
                                                    <PosterSkeleton />
                                                </div>
                                            </div>
                                            <div className='col-span-2'>
                                                <ul className='grid grid-cols-2 gap-3'>
                                                    {NAVIGATION.series.cards.map((item) => (
                                                        <ListItem
                                                            key={item.name}
                                                            href={item.path}
                                                            title={item.name}
                                                            icon={item.icon}>
                                                            {item.description}
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className='flex items-center gap-1.5'>
                                    <OBJECT_TYPE.PERSON.icon className='mt-0.5 size-3' />
                                    <span>{OBJECT_TYPE.PERSON.plural}</span>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className='w-[700px] p-2'>
                                        <div className='grid grid-cols-[.75fr_1fr_1fr] gap-2'>
                                            <div className='col-span-1 row-span-3'>
                                                <div className='p-1'>
                                                    {featuredPerson && !isFeaturedItemsLoading ? (
                                                        <Link
                                                            href={`/dashboard/people/${featuredPerson.id}`}
                                                            className='block h-full'>
                                                            <Headshot
                                                                image={featuredPerson.headshot}
                                                                title={featuredPerson.name}
                                                            />
                                                        </Link>
                                                    ) : (
                                                        <HeadshotSkeleton />
                                                    )}
                                                </div>
                                            </div>
                                            <div className='col-span-2'>
                                                <ul className='grid grid-cols-2 gap-3'>
                                                    {NAVIGATION.people.cards.map((item) => (
                                                        <ListItem
                                                            key={item.name}
                                                            href={item.path}
                                                            title={item.name}
                                                            icon={item.icon}>
                                                            {item.description}
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className='flex items-center gap-1.5'>
                                    <OBJECT_TYPE.BOOK.icon className='mt-0.5 size-3' />
                                    <span>{OBJECT_TYPE.BOOK.plural}</span>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className='w-[700px] p-2'>
                                        <div className='grid grid-cols-[.75fr_1fr_1fr] gap-2'>
                                            <div className='col-span-1 row-span-3'>
                                                <div className='p-1'>
                                                    {featuredBook && !isFeaturedItemsLoading ? (
                                                        <Link
                                                            href={`/dashboard/books/${featuredBook.id}`}
                                                            className='block h-full'>
                                                            <Cover
                                                                image={featuredBook.cover}
                                                                title={featuredBook.title}
                                                            />
                                                        </Link>
                                                    ) : (
                                                        <CoverSkeleton />
                                                    )}
                                                </div>
                                            </div>
                                            <div className='col-span-2'>
                                                <ul className='grid grid-cols-2 gap-3'>
                                                    {NAVIGATION.books.cards.map((item) => (
                                                        <ListItem
                                                            key={item.name}
                                                            href={item.path}
                                                            title={item.name}
                                                            icon={item.icon}>
                                                            {item.description}
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className='flex items-center gap-1.5'>
                                    <OBJECT_TYPE.SONG.icon className='mt-0.5 size-3' />
                                    <span>{OBJECT_TYPE.SONG.plural}</span>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className='w-[700px] p-2'>
                                        <div className='grid grid-cols-[.75fr_1fr_1fr] gap-2'>
                                            <div className='col-span-1 row-span-3'>
                                                <div className='p-1'>
                                                    {featuredSong && !isFeaturedItemsLoading ? (
                                                        <Link
                                                            href={`/dashboard/${OBJECT_TYPE.SONG.path}/${featuredSong.id}`}
                                                            className='block h-full'>
                                                            <Artwork
                                                                image={
                                                                    featuredSong.album?.artwork ??
                                                                    'https://placehold.co/128x128.png'
                                                                }
                                                                title={featuredSong.name}
                                                            />
                                                        </Link>
                                                    ) : (
                                                        <ArtworkSkeleton />
                                                    )}
                                                </div>
                                            </div>
                                            <div className='col-span-2'>
                                                <ul className='grid grid-cols-2 gap-3'>
                                                    {NAVIGATION.songs.cards.map((item) => (
                                                        <ListItem
                                                            key={item.name}
                                                            href={item.path}
                                                            title={item.name}
                                                            icon={item.icon}>
                                                            {item.description}
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className='flex items-center gap-1.5' disabled={true}>
                                    <OBJECT_TYPE.GAME.icon className='mt-0.5 size-3' />
                                    <span>{OBJECT_TYPE.GAME.plural}</span>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className='w-[700px] p-2'>
                                        <div className='grid grid-cols-[.75fr_1fr_1fr] gap-2'>
                                            <div className='col-span-1 row-span-3'>
                                                <div className='p-1'>
                                                    <PosterSkeleton />
                                                </div>
                                            </div>
                                            <div className='col-span-2'>
                                                <ul className='grid grid-cols-2 gap-3'>
                                                    {NAVIGATION.games.cards.map((item) => (
                                                        <ListItem
                                                            key={item.name}
                                                            href={item.path}
                                                            title={item.name}
                                                            icon={item.icon}>
                                                            {item.description}
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className='mr-2 flex w-full items-center justify-end gap-4 lg:mr-0'>
                    <Button
                        className='text-muted-foreground flex items-center gap-2'
                        variant='outline'
                        onClick={handleOpenCommandPanel}>
                        <Search className='size-4' />
                        <span className='font-mono text-xs'>Search anything</span>
                        <ShortcutDisplay combo={searchShortcut.key} />
                    </Button>

                    {user && <Notifications />}

                    <div className='hidden lg:block'>
                        <NavUser user={user} />
                    </div>
                </div>

                <Sheet>
                    <SheetTrigger asChild className='lg:hidden'>
                        <Button variant='outline' size='icon' aria-label='Menu'>
                            <MenuIcon className='h-4 w-4' />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side='right' className='max-h-screen w-full overflow-auto sm:w-80'>
                        <SheetHeader className='mb-4 flex flex-row items-center justify-between border-b pb-4'>
                            <SheetTitle>
                                <Link href='/' className='flex items-center gap-2'>
                                    <Image
                                        src='/images/logo/logo-light-streamline.png'
                                        className='max-h-8'
                                        width={32}
                                        height={32}
                                        alt='Logo'
                                    />
                                    <span className='text-sm font-semibold tracking-tighter'>Metabase</span>
                                </Link>
                            </SheetTitle>
                            {user && <NavUser user={user} />}
                        </SheetHeader>

                        <div className='space-y-6'>
                            <div className='space-y-1'>
                                <Link href='/dashboard' className='px-1'>
                                    <Button variant='ghost' className='w-full justify-start'>
                                        <Home className='size-4' />
                                        Home
                                    </Button>
                                </Link>
                                <Accordion type='single' className='w-full'>
                                    <AccordionItem value='movies' className='border-b-0'>
                                        <AccordionTrigger className='hover:bg-muted/50 rounded-md px-4 py-2 hover:no-underline'>
                                            <div className='flex items-center'>
                                                <OBJECT_TYPE.MOVIE.icon className='mr-2 size-4' />
                                                {OBJECT_TYPE.MOVIE.plural}
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className='space-y-1 pl-6'>
                                                {NAVIGATION.movies.cards.map((item) => (
                                                    <Link href={item.path} key={item.name}>
                                                        <Button variant='ghost' className='w-full justify-start'>
                                                            <item.icon className='mr-2 size-4' />
                                                            {item.name}
                                                        </Button>
                                                    </Link>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value='tv' className='border-b-0' disabled={true}>
                                        <AccordionTrigger className='hover:bg-muted/50 rounded-md px-4 py-2 hover:no-underline'>
                                            <div className='flex items-center'>
                                                <OBJECT_TYPE.TV.icon className='mr-2 size-4' />
                                                {OBJECT_TYPE.TV.plural}
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <AccordionContent>
                                                <div className='space-y-1 pl-6'>
                                                    {NAVIGATION.series.cards.map((item) => (
                                                        <Link href={item.path} key={item.name}>
                                                            <Button variant='ghost' className='w-full justify-start'>
                                                                <item.icon className='mr-2 size-4' />
                                                                {item.name}
                                                            </Button>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </AccordionContent>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value='person' className='border-b-0'>
                                        <AccordionTrigger className='hover:bg-muted/50 rounded-md px-4 py-2 hover:no-underline'>
                                            <div className='flex items-center'>
                                                <OBJECT_TYPE.PERSON.icon className='mr-2 size-4' />
                                                {OBJECT_TYPE.PERSON.plural}
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className='space-y-1 pl-6'>
                                                {NAVIGATION.people.cards.map((item) => (
                                                    <Link href={item.path} key={item.name}>
                                                        <Button variant='ghost' className='w-full justify-start'>
                                                            <item.icon className='mr-2 size-4' />
                                                            {item.name}
                                                        </Button>
                                                    </Link>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value='book' className='border-b-0'>
                                        <AccordionTrigger className='hover:bg-muted/50 rounded-md px-4 py-2 hover:no-underline'>
                                            <div className='flex items-center'>
                                                <OBJECT_TYPE.BOOK.icon className='mr-2 size-4' />
                                                {OBJECT_TYPE.BOOK.plural}
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className='space-y-1 pl-6'>
                                                {NAVIGATION.books.cards.map((item) => (
                                                    <Link href={item.path} key={item.name}>
                                                        <Button variant='ghost' className='w-full justify-start'>
                                                            <item.icon className='mr-2 size-4' />
                                                            {item.name}
                                                        </Button>
                                                    </Link>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value='song' className='border-b-0'>
                                        <AccordionTrigger className='hover:bg-muted/50 rounded-md px-4 py-2 hover:no-underline'>
                                            <div className='flex items-center'>
                                                <OBJECT_TYPE.SONG.icon className='mr-2 size-4' />
                                                {OBJECT_TYPE.SONG.plural}
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className='space-y-1 pl-6'>
                                                {NAVIGATION.songs.cards.map((item) => (
                                                    <Link href={item.path} key={item.name}>
                                                        <Button variant='ghost' className='w-full justify-start'>
                                                            <item.icon className='mr-2 size-4' />
                                                            {item.name}
                                                        </Button>
                                                    </Link>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value='game' className='border-b-0' disabled={true}>
                                        <AccordionTrigger className='hover:bg-muted/50 rounded-md px-4 py-2 hover:no-underline'>
                                            <div className='flex items-center'>
                                                <OBJECT_TYPE.GAME.icon className='mr-2 size-4' />
                                                {OBJECT_TYPE.GAME.plural}
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className='space-y-1 pl-6'>
                                                {NAVIGATION.games.cards.map((item) => (
                                                    <Link href={item.path} key={item.name}>
                                                        <Button variant='ghost' className='w-full justify-start'>
                                                            <item.icon className='mr-2 size-4' />
                                                            {item.name}
                                                        </Button>
                                                    </Link>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            {!user && (
                                <div className='border-t pt-4'>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <Button variant='outline'>Sign in</Button>
                                        <Button>Join now</Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </Container>
    );
};

export default Navbar;
