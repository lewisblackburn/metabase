'use client';

import Link from 'next/link';

import InstagramIcon from '@/components/icons/instagram.icon';
import XIcon from '@/components/icons/x.icon';
import ActionButton from '@/components/shared/action-button';
import AuditLogs from '@/components/shared/audit-logs';
import DefaultLoading from '@/components/shared/default-loading';
import NotFound from '@/components/shared/default-not-found';
import HeroCardLayout from '@/components/shared/hero-layout';
import ItemInformation from '@/components/shared/item-information';
import ReportObjectDialog from '@/components/shared/report-object-dialog';
import ReportsTable from '@/components/shared/reports-table';
import ScrollableTabs from '@/components/shared/scrollable-tabs';
import { toggleEditDialogOpenState } from '@/features/edit-dailog/store/edit-dialog.slice';
import PersonBio from '@/features/people/components/person-bio';
import PersonCredits from '@/features/people/components/person-credits';
import PersonMedia from '@/features/people/components/person-media';
import PersonOverview from '@/features/people/components/person-overview';
import { PersonProvider, usePerson } from '@/features/people/components/person-provider';
import { Object_Types_Enum } from '@/generated/graphql';
import { TabsContent } from '@/registry/new-york-v4/ui/tabs';

import { Calendar, Edit, Flag, ImageIcon, TrendingUp, User, UserCheck, VenusAndMars } from 'lucide-react';

export default function PersonPage() {
    return (
        <PersonProvider>
            <PersonPageContent />
        </PersonProvider>
    );
}

const tabItems = [
    { value: 'overview', icon: User, label: 'Overview' },
    { value: 'media', icon: ImageIcon, label: 'Media' },
    { value: 'changes', icon: Edit, label: 'Changes' },
    { value: 'reports', icon: Flag, label: 'Reports' }
];

function PersonPageContent() {
    const { person, isLoading } = usePerson();

    if (isLoading) return <DefaultLoading />;
    if (!person) return <NotFound />;

    const tabContents = {
        overview: {
            content: <PersonOverview />
        },
        media: { content: <PersonMedia /> },
        changes: { content: <AuditLogs tableName='people' entityId={person?.id} /> },
        reports: { content: <ReportsTable objectType={Object_Types_Enum.Person} /> }
    };

    return (
        <HeroCardLayout
            backdropImage={person.backdrop}
            backdropAlt={`${person.name} backdrop`}
            avatarImage={person.headshot}
            avatarAlt={`${person.name} avatar`}>
            <ScrollableTabs defaultValue='overview' tabs={tabItems}>
                {Object.entries(tabContents).map(([key, { content }]) => (
                    <TabsContent key={key} value={key} className='px-1'>
                        {content}
                    </TabsContent>
                ))}
            </ScrollableTabs>
        </HeroCardLayout>
    );
}
