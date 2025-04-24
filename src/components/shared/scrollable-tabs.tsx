'use client';

import React from 'react';

import { Tabs, TabsList, TabsTrigger } from '@/registry/new-york-v4/ui/tabs';

interface ScrollableTabsProps {
    defaultValue: string;
    children: React.ReactNode;
    tabs: Array<{
        value: string;
        icon?: React.ElementType;
        label: string;
        responsiveLabel?: string;
    }>;
    className?: string;
    tabsListClassName?: string;
    tabTriggerClassName?: string;
    showIcons?: boolean;
    responsiveLabels?: boolean;
    onChange?: (value: string) => void;
}

export default function ScrollableTabs({
    defaultValue,
    children,
    tabs,
    className = '',
    tabsListClassName = '',
    tabTriggerClassName = '',
    showIcons = true,
    responsiveLabels = true,
    onChange
}: ScrollableTabsProps) {
    return (
        <Tabs defaultValue={defaultValue} className={`w-full ${className}`} onValueChange={onChange}>
            <div className='scrollbar-hide overflow-x-auto pb-1'>
                <TabsList className={`bg-muted flex w-max space-x-1 ${tabsListClassName}`}>
                    {tabs.map(({ value, icon: Icon, label, responsiveLabel }) => (
                        <TabsTrigger
                            key={value}
                            value={value}
                            className={`data-[state=active]:text-primary text-muted-foreground inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium whitespace-nowrap ${tabTriggerClassName}`}>
                            {showIcons && Icon && <Icon className='size-3.5' />}
                            {responsiveLabels ? (
                                <>
                                    <span className='sm:hidden'>{label}</span>
                                    <span className='hidden sm:inline'>{responsiveLabel || label}</span>
                                </>
                            ) : (
                                <span>{label}</span>
                            )}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </div>
            {children}
        </Tabs>
    );
}
