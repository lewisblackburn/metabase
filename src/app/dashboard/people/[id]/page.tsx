'use client';

import Link from 'next/link';

import InstagramIcon from '@/components/icons/instagram.icon';
import XIcon from '@/components/icons/x.icon';
import ActionButton from '@/components/shared/action-button';
import HeroCardLayout from '@/components/shared/hero-layout';
import { CustomBadge } from '@/components/ui/custom-badge';
import { toggleEditDialogOpenState } from '@/features/edit-dailog/store/edit-dialog.slice';
import { PersonProvider, usePerson } from '@/features/people/components/person-provider';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/registry/new-york-v4/ui/select';

import { format } from 'date-fns';
import { Calendar, Edit, LucideIcon, User, UserCheck, VenusAndMars } from 'lucide-react';
import { useDispatch } from 'react-redux';

function PersonInformation({
    icon: Icon,
    label,
    children
}: {
    icon: LucideIcon;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <div className='flex items-center justify-between'>
            <h6>{label}</h6>
            <CustomBadge icon={Icon}>{children}</CustomBadge>
        </div>
    );
}

export default function PersonPage() {
    return (
        <PersonProvider>
            <PersonPageContent />
        </PersonProvider>
    );
}

function PersonPageContent() {
    const dispatch = useDispatch();
    const { person } = usePerson();

    if (!person) return null;

    return (
        <HeroCardLayout
            backdropImage={person.backdrop}
            backdropAlt={`${person.name} backdrop`}
            avatarImage={person.headshot}
            avatarAlt={`${person.name} avatar`}>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6'>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-bold sm:text-xl md:text-2xl'>{person.name}</h2>
                        <ActionButton
                            icon={Edit}
                            size='sm'
                            onClick={() =>
                                dispatch(toggleEditDialogOpenState({ objectType: 'PERSON', objectId: person.id }))
                            }>
                            Edit
                        </ActionButton>
                    </div>

                    <p className='text-muted-foreground mt-1 text-sm sm:text-base'>{person.bio}</p>

                    <div className='mt-5 flex flex-col gap-4'>
                        <PersonInformation icon={User} label='Known for'>
                            {person.known_for ?? 'Unknown'}
                        </PersonInformation>
                        <PersonInformation icon={UserCheck} label='Credited in'>
                            54
                        </PersonInformation>
                        <PersonInformation icon={VenusAndMars} label='Gender'>
                            {person.gender ?? 'Unknown'}
                        </PersonInformation>
                        <PersonInformation icon={Calendar} label='Birthdate'>
                            <div className='flex items-center gap-1'>
                                {person.birth_date ? (
                                    <span>{format(new Date(person.birth_date), 'MMMM Do, yyyy')}</span>
                                ) : (
                                    <span>Unknown</span>
                                )}
                                {person.death_date ? (
                                    <>
                                        <span>-</span>
                                        <span>{format(new Date(person.death_date), 'MMMM Do, yyyy')}</span>
                                    </>
                                ) : null}
                            </div>
                        </PersonInformation>
                    </div>

                    <div className='mt-5 flex flex-wrap items-center gap-2'>
                        <Link href={'#'}>
                            <ActionButton icon={InstagramIcon} size='sm'>
                                Instagram
                            </ActionButton>
                        </Link>
                        <Link href={'#'}>
                            <ActionButton icon={XIcon} size='sm'>
                                Twitter
                            </ActionButton>
                        </Link>
                    </div>
                </div>

                <div className='md:col-span-2'>
                    <Select defaultValue='actor'>
                        <SelectTrigger className='w-[180px]'>
                            <SelectValue placeholder='Select a role' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value='actor'>Actor</SelectItem>
                                <SelectItem value='producer'>Producer</SelectItem>
                                <SelectItem value='author'>Author</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </HeroCardLayout>
    );
}
