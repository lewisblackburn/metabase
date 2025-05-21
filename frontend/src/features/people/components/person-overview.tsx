import Link from 'next/link';

import NotFound from '@/app/not-found';
import InstagramIcon from '@/components/icons/instagram.icon';
import XIcon from '@/components/icons/x.icon';
import ActionButton from '@/components/shared/action-button';
import DefaultLoading from '@/components/shared/default-loading';
import ItemInformation from '@/components/shared/item-information';
import ReportObjectDialog from '@/components/shared/report-object-dialog';
import { toggleEditDialogOpenState } from '@/features/edit-dailog/store/edit-dialog.slice';
import PersonBio from '@/features/people/components/person-bio';
import PersonCredits from '@/features/people/components/person-credits';
import { Object_Types_Enum } from '@/generated/graphql';

import { usePerson } from './person-provider';
import { format } from 'date-fns';
import { Calendar, Edit, User, UserCheck, VenusAndMars } from 'lucide-react';
import { useDispatch } from 'react-redux';

export default function PersonOverview() {
    const dispatch = useDispatch();
    const { person, isLoading } = usePerson();

    if (isLoading) return <DefaultLoading />;
    if (!person) return <NotFound />;

    return (
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
                </div>

                <div className='mt-5 flex flex-wrap items-center gap-2'>
                    <ReportObjectDialog
                        objectId={person.id}
                        objectType={Object_Types_Enum.Person}
                        queryKey={['GetReports', person.id]}
                    />
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
                <PersonCredits />
            </div>
        </div>
    );
}
