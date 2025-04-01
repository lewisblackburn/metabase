import { Fragment, ReactNode } from 'react';

import { AppSidebar } from '@/components/app-sidebar';
import CommandPanel from '@/components/command-panel/command-panel';
import { SettingsDialog } from '@/components/settings-dialog/settings-dialog';
import Breadcrumbs from '@/features/dashboard/components/breadcrumbs';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/registry/new-york-v4/ui/sidebar';

const DashboardLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <Fragment>
            <CommandPanel />
            <SidebarProvider>
                <AppSidebar />
                <SettingsDialog />
                <SidebarInset>
                    <header className='bg-background sticky top-0 flex shrink-0 items-center gap-2 border-b p-4'>
                        <SidebarTrigger className='-ml-1 cursor-pointer' />
                        <Separator orientation='vertical' className='mr-2 data-[orientation=vertical]:h-4' />
                        <Breadcrumbs />
                    </header>
                    <div>{children}</div>
                </SidebarInset>
            </SidebarProvider>
        </Fragment>
    );
};

export default DashboardLayout;
