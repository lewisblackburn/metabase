'use client';

import { ReactNode, useState } from 'react';

import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/registry/new-york-v4/ui/dialog';
import {
    Sheet,
    SheetContent,
    SheetContentWithoutClose,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/registry/new-york-v4/ui/sheet';

interface ResponsiveDialogProps {
    trigger: ReactNode;
    children: ReactNode;
    title?: string;
    className?: string;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    titleClassName?: string;
    hasVisibleTitle?: boolean;
}

export default function ResponsiveDialog({
    trigger,
    children,
    title,
    className = '',
    open: controlledOpen,
    onOpenChange: controlledOnOpenChange,
    titleClassName = '',
    hasVisibleTitle = false
}: ResponsiveDialogProps) {
    const isMobile = useIsMobile();
    const [internalOpen, setInternalOpen] = useState(false);

    const isControlled = controlledOpen !== undefined && controlledOnOpenChange !== undefined;
    const open = isControlled ? controlledOpen : internalOpen;
    const onOpenChange = isControlled ? controlledOnOpenChange : (newOpen: boolean) => setInternalOpen(newOpen);

    const titleClasses = hasVisibleTitle ? titleClassName : 'sr-only';

    if (isMobile) {
        return (
            <Sheet open={open} onOpenChange={onOpenChange}>
                <SheetTrigger asChild>{trigger}</SheetTrigger>
                <SheetContentWithoutClose side='bottom' className={`h-auto max-h-[90vh] rounded-t-lg p-4 ${className}`}>
                    <SheetHeader className='p-0'>
                        <SheetTitle className={cn('text-lg', titleClasses)}>{title || 'Dialog'}</SheetTitle>
                    </SheetHeader>
                    <div className='overflow-auto'>{children}</div>
                </SheetContentWithoutClose>
            </Sheet>
        );
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className={`sm:max-w-lg ${className}`}>
                <DialogHeader>
                    <DialogTitle className={titleClasses}>{title || 'Dialog'}</DialogTitle>
                </DialogHeader>
                <div className='overflow-auto'>{children}</div>
            </DialogContent>
        </Dialog>
    );
}
