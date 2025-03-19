import { Fragment, ReactNode } from 'react';

import { AppSidebar } from '@/components/app-sidebar';
import CommandPanel from '@/components/command-panel/command-panel';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@/registry/new-york-v4/ui/breadcrumb';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/registry/new-york-v4/ui/sidebar';

const DashboardLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <Fragment>
            <CommandPanel />
            <SidebarProvider
                style={
                    {
                        '--sidebar-width': '350px'
                    } as React.CSSProperties
                }>
                <AppSidebar />
                <SidebarInset>
                    <header className='bg-background sticky top-0 flex shrink-0 items-center gap-2 border-b p-4'>
                        <SidebarTrigger className='-ml-1 cursor-pointer' />
                        <Separator orientation='vertical' className='mr-2 data-[orientation=vertical]:h-4' />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className='hidden md:block'>
                                    <BreadcrumbLink href='#'>Movies</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className='hidden md:block' />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>About Time</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </header>
                    <div>{children}</div>
                </SidebarInset>
            </SidebarProvider>
        </Fragment>
    );
};

export default DashboardLayout;
