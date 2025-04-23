import Link from 'next/link';

import { Button } from '@/registry/new-york-v4/ui/button';

import GitHubIcon from './icons/github.icon';
import { GlobeIcon } from 'lucide-react';

const Footer = () => {
    return (
        <section className='bg-background'>
            <footer className=''>
                <div className='text-muted-foreground mt-20 flex flex-col items-start justify-between gap-4 pt-8 text-center text-sm font-medium lg:flex-row lg:items-center'>
                    <ul className='flex justify-center gap-4 lg:justify-start'>
                        <li>
                            <p className='text-gray-400'>© 2024 Metabase.app. All rights reserved.</p>
                        </li>
                    </ul>
                    <ul className='flex items-center justify-center gap-4 lg:justify-start'>
                        <li>
                            <p className='text-black'>Follow us:</p>
                        </li>
                        <li>
                            <Link href='https://lewisblackburn.me' target='_blank'>
                                <Button className='gap-2 rounded-full' variant='outline'>
                                    <GlobeIcon className='h-4 w-4' />
                                    Personal Website
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Link href='https://github.com/lewisblackburn/metabase' target='_blank'>
                                <Button className='gap-2 rounded-full' variant='outline'>
                                    <GitHubIcon className='h-4 w-4' />
                                    GitHub
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </section>
    );
};

export { Footer };
