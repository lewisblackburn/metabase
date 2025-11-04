'use client'
import {
    ChevronDown,
    ExternalLink,
    Facebook,
    Github,
    Linkedin,
    MonitorCog,
    Moon,
    Sun,
    Twitter,
} from 'lucide-react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

import SiteStatusButton from './site-status-button'

type linkType = 'DROPDOWN' | 'LINK' | 'EXTERNAL_LINK'

interface NavigationLink {
    type?: linkType
    name: string
    href?: string
    links?: Omit<NavigationLink, 'type'>[]
}

interface Navigation {
    title: string
    links: NavigationLink[]
}

const NAVIGATION: Array<Navigation> = [
    {
        title: 'Solutions',
        links: [
            {
                type: 'LINK',
                name: 'Machine Learning',
                href: '#',
            },
            {
                type: 'LINK',
                name: 'Cloud Services',
                href: '#',
            },
            {
                type: 'LINK',
                name: 'Edge Computing',
                href: '#',
            },
            {
                type: 'LINK',
                name: 'Web Frameworks',
                href: '#',
            },
            {
                type: 'LINK',
                name: 'Data Analytics',
                href: '#',
            },
            {
                type: 'LINK',
                name: 'CI/CD',
                href: '#',
            },
            {
                type: 'LINK',
                name: 'Load Balancing',
                href: '#',
            },
            {
                type: 'LINK',
                name: 'Encryption',
                href: '#',
            },
            {
                type: 'LINK',
                name: 'Performance Boost',
                href: '#',
            },
            {
                type: 'EXTERNAL_LINK',
                name: 'API',
                href: '#',
            },
        ],
    },
    {
        title: 'Help',
        links: [
            {
                type: 'EXTERNAL_LINK',
                name: 'Community Forum',
                href: '#',
            },
            {
                type: 'LINK',
                name: 'API Docs',
                href: '#',
            },
            {
                type: 'LINK',
                name: 'Setup Guide',
                href: '#',
            },
            {
                type: 'LINK',
                name: 'FAQ',
                href: '#',
            },
            {
                type: 'LINK',
                name: 'Partners',
                href: '#',
            },
            {
                type: 'LINK',
                name: 'Contact Support',
                href: '#',
            },
            {
                type: 'LINK',
                name: 'Pricing Info',
                href: '#',
            },
            {
                type: 'LINK',
                name: 'System Status',
                href: '#',
            },
            {
                type: 'LINK',
                name: 'Security Notices',
                href: '#',
            },
        ],
    },
    {
        title: 'Company',
        links: [
            {
                type: 'LINK',
                name: 'About Us',
                href: '#',
            },
            {
                type: 'LINK',
                name: 'Newsroom',
                href: '#',
            },
            {
                type: 'LINK',
                name: 'Jobs',
                href: '#',
            },
            {
                type: 'LINK',
                name: 'Events',
                href: '#',
            },
            {
                type: 'LINK',
                name: 'Press Releases',
                href: '#',
            },
            {
                type: 'LINK',
                name: 'Partners',
                href: '#',
            },
            {
                type: 'LINK',
                name: 'Investor Relations',
                href: '#',
            },
            {
                type: 'DROPDOWN',
                name: 'Legal',
                links: [
                    {
                        name: 'Cookie Preferences',
                        href: '#',
                    },
                    {
                        name: 'Terms of Use',
                        href: '#',
                    },
                    {
                        name: 'GDPR Compliance',
                        href: '#',
                    },
                    {
                        name: 'Data Protection',
                        href: '#',
                    },
                    {
                        name: 'Accessibility Statement',
                        href: '#',
                    },
                ],
            },
        ],
    },
]

const SOCIAL_LINKS = [
    {
        icon: Github,
        name: 'Github',
        href: '#',
    },
    {
        icon: Linkedin,
        name: 'LinkedIn',
        href: '#',
    },
    {
        icon: Facebook,
        name: 'Facebook',
        href: '#',
    },
    {
        icon: Twitter,
        name: 'Twitter',
        href: '#',
    },
]

const HOME_LINK = '#'

const getLink = ({ type, href, name, links }: NavigationLink) => {
    if (type == 'EXTERNAL_LINK') {
        return (
            <a
                href={href}
                className="text-muted-foreground hover:text-foreground inline-flex cursor-pointer items-center gap-0.5 text-sm leading-5"
            >
                <div>{name}</div>
                <ExternalLink className="size-3.5" />
            </a>
        )
    }

    if (type == 'DROPDOWN') {
        return (
            <>
                <div className="block md:hidden">
                    <Drawer>
                        <DrawerTrigger className="text-muted-foreground hover:text-foreground inline-flex cursor-pointer items-center gap-0.5 text-sm leading-5">
                            {name}
                            <ChevronDown className="size-3.5" />
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>{name}</DrawerTitle>
                                <div>
                                    {links?.map(link => (
                                        <a
                                            href={link.href}
                                            className="text-sm! hover:bg-muted block cursor-pointer rounded-lg px-2 py-2.5"
                                            key={`drawer-footer-1-${link.name}`}
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </DrawerHeader>
                            <DrawerFooter>
                                <DrawerClose asChild>
                                    <Button variant="outline">Close</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
                <div className="hidden md:block">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="text-muted-foreground hover:text-foreground inline-flex cursor-pointer items-center gap-0.5 text-sm leading-5">
                                {name}
                                <ChevronDown className="size-3.5" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            {links?.map(link => (
                                <DropdownMenuItem
                                    className="text-sm! cursor-pointer rounded-lg py-2.5"
                                    asChild
                                    key={`dropdown-footer-1-${link.name}`}
                                >
                                    <a href={link.href}>{link.name}</a>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </>
        )
    }

    return (
        <a
            href={href}
            className="text-muted-foreground hover:text-foreground cursor-pointer text-sm leading-5"
        >
            {name}
        </a>
    )
}

export default function Footer() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // TODO: We need to find a better way to do this.
    useEffect(() => {
        setTimeout(() => {
            setMounted(true)
        }, 0)
    }, [])

    const onThemeChange = (value: 'light' | 'dark' | 'system') => {
        if (value == 'system') {
            if (window.matchMedia) {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    setTheme('dark')
                } else {
                    setTheme('light')
                }
            }
        } else {
            setTheme(value)
        }
    }

    return (
        <section className="bg-background">
            <footer className="max-w-7xl mx-auto p-5">
                <div className="flex w-full flex-col gap-8">
                    <div className="grid w-full grid-cols-[repeat(2,minmax(auto,15rem))] gap-8 md:grid-cols-[repeat(4,1fr)_5rem] md:gap-0">
                        {NAVIGATION.map(section => (
                            <div key={`${section.title}`}>
                                <h2 className="text-foreground mb-3 text-sm font-medium">
                                    {section.title}
                                </h2>
                                <ul>
                                    {section.links.map((link, i) => (
                                        <li key={`${link.name}-${i}`} className="py-1.5">
                                            {getLink({
                                                name: link.name,
                                                href: link.href,
                                                type: link?.type,
                                                links: link?.links,
                                            })}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div>
                            <h2 className="text-foreground mb-3 text-sm font-medium">Social</h2>
                            <ul>
                                {SOCIAL_LINKS.map((link, i) => (
                                    <li className="py-1.5" key={`social-links-footer-${i}`}>
                                        <a
                                            href={link.href}
                                            className="text-muted-foreground hover:text-foreground inline-flex cursor-pointer items-center gap-2 text-sm leading-5"
                                        >
                                            <link.icon className="size-3.5" />
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a
                            href={HOME_LINK}
                            className="row-1 col-[1/3] block size-9 md:col-[5/6] md:justify-self-end"
                        >
                            <div className="relative size-9">
                                <Image
                                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                                    alt="Logo"
                                    className="object-cover object-center"
                                    width={36}
                                    height={36}
                                    style={
                                        mounted && theme === 'dark'
                                            ? { filter: 'invert(100%)' }
                                            : undefined
                                    }
                                />
                            </div>
                        </a>
                    </div>
                    <div className="mt-8 flex w-full flex-wrap items-center justify-between gap-4">
                        <SiteStatusButton />
                        {mounted && (
                            <div>
                                <ToggleGroup
                                    value={theme}
                                    onValueChange={onThemeChange}
                                    type="single"
                                    className="rounded-full border"
                                >
                                    <ToggleGroupItem
                                        value="system"
                                        aria-label="Toggle system"
                                        className="rounded-full! size-6"
                                    >
                                        <MonitorCog className="stroke-foreground size-3" />
                                    </ToggleGroupItem>
                                    <ToggleGroupItem
                                        value="light"
                                        aria-label="Toggle light"
                                        className="size-6 rounded-full"
                                    >
                                        <Sun className="stroke-foreground size-3" />
                                    </ToggleGroupItem>
                                    <ToggleGroupItem
                                        value="dark"
                                        aria-label="Toggle dark"
                                        className="rounded-full! size-6"
                                    >
                                        <Moon className="stroke-foreground size-3" />
                                    </ToggleGroupItem>
                                </ToggleGroup>
                            </div>
                        )}
                    </div>
                </div>
            </footer>
        </section>
    )
}
