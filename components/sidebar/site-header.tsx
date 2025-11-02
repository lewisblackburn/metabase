'use client'

import { SidebarIcon } from 'lucide-react'
import { Fragment } from 'react'

import { SearchForm } from '@/components/search-form'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useSidebar } from '@/components/ui/sidebar'
import { useBreadcrumbsValue } from '@/lib/providers/breadcrumbs-provider'

import ActionsPanel from '../actions-panel'
import Notifications from '../notifications'

export function SiteHeader() {
    const { toggleSidebar } = useSidebar()
    const breadcrumbs = useBreadcrumbsValue()

    return (
        <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
            <div className="flex h-(--header-height) w-full items-center gap-2 px-4 overflow-hidden">
                {/* Sidebar toggle */}
                <Button
                    className="h-8 w-8 shrink-0"
                    variant="ghost"
                    size="icon"
                    onClick={toggleSidebar}
                >
                    <SidebarIcon />
                </Button>
                <Separator orientation="vertical" className="mr-2 h-4 shrink-0" />

                {/* Breadcrumbs */}
                <div className="flex min-w-0 flex-1 items-center overflow-hidden whitespace-nowrap">
                    <Breadcrumb className="hidden min-w-0 flex-1 sm:block">
                        <BreadcrumbList className="truncate">
                            {breadcrumbs.map(breadcrumb => (
                                <Fragment key={breadcrumb.href}>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href={breadcrumb.href} className="truncate">
                                            {breadcrumb.label}
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    {!breadcrumb.isLast && <BreadcrumbSeparator />}
                                </Fragment>
                            ))}
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                {/* Right-side controls */}
                <div className="flex shrink-0 items-center gap-2">
                    <SearchForm className="w-48 sm:w-64" />
                    <Notifications />
                    <ActionsPanel />
                </div>
            </div>
        </header>
    )
}
