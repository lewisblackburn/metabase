'use client';

import Link from 'next/link';

import InstagramIcon from '@/components/icons/instagram.icon';
import XIcon from '@/components/icons/x.icon';
import ActionButton from '@/components/shared/action-button';
import HeroCardLayout from '@/components/shared/hero-layout';
import ItemInformation from '@/components/shared/item-information';
import { CustomBadge } from '@/components/ui/custom-badge';
import { toggleEditDialogOpenState } from '@/features/edit-dailog/store/edit-dialog.slice';
import PersonBio from '@/features/people/components/person-bio';
import PersonMedia from '@/features/people/components/person-media';
import { PersonProvider, usePerson } from '@/features/people/components/person-provider';
import { Object_Types_Enum } from '@/generated/graphql';
import { Progress } from '@/registry/new-york-v4/ui/progress';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/registry/new-york-v4/ui/tooltip';

import { format } from 'date-fns';
import { Calendar, Edit, TrendingUp, User, UserCheck, VenusAndMars } from 'lucide-react';
import { useDispatch } from 'react-redux';

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
                                dispatch(
                                    toggleEditDialogOpenState({
                                        objectType: Object_Types_Enum.Person,
                                        objectId: person.id
                                    })
                                )
                            }>
                            Edit
                        </ActionButton>
                    </div>

                    <PersonBio />

                    <div className='mt-5 flex flex-col gap-4'>
                        <ItemInformation icon={User} label='Known for'>
                            {person.known_for_department ?? 'Unknown'}
                        </ItemInformation>
                        <ItemInformation icon={UserCheck} label='Credited in'>
                            54
                        </ItemInformation>
                        <ItemInformation icon={VenusAndMars} label='Gender'>
                            {person.gender ?? 'Unknown'}
                        </ItemInformation>
                        <ItemInformation icon={Calendar} label='Birthdate'>
                            <div className='flex items-center gap-1'>
                                {person.birth_date ? (
                                    <span>{format(new Date(person.birth_date), 'MMMM do, yyyy')}</span>
                                ) : (
                                    <span>Unknown</span>
                                )}
                                {person.death_date ? (
                                    <>
                                        <span>-</span>
                                        <span>{format(new Date(person.death_date), 'MMMM do, yyyy')}</span>
                                    </>
                                ) : null}
                            </div>
                        </ItemInformation>
                        <ItemInformation icon={TrendingUp} label='Content Score'>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className='flex items-center gap-2'>
                                        <Progress value={0} className='min-w-24' />
                                        <span>{0}%</span>
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>Click to compute the content score</TooltipContent>
                            </Tooltip>
                        </ItemInformation>
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
                    <PersonMedia />
                </div>
            </div>
        </HeroCardLayout>
    );
}
