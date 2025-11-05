'use client'

import { Pen } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useDeviceDetection } from '@/hooks/use-device-detection'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { StatusForm } from './status-form'

interface DesktopStatusDropdownProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

const DesktopStatusDropdown = ({ open, onOpenChange }: DesktopStatusDropdownProps) => {
    return (
        <DropdownMenu open={open} onOpenChange={onOpenChange}>
            <DropdownMenuTrigger asChild>
                <Button aria-label="Update Status" variant="outline" size="sm" className="text-xs">
                    <Pen className="size-4" />
                    Update Status
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Update Status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <StatusForm onOpenChange={onOpenChange} />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

interface MobileStatusSheetProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

const MobileStatusSheet = ({ open, onOpenChange }: MobileStatusSheetProps) => {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetTrigger asChild>
                <Button aria-label="Update Status" variant="outline" size="sm" className="text-xs">
                    <Pen className="size-4" />
                    Update Status
                </Button>
            </SheetTrigger>
            <SheetContent side="bottom">
                <SheetHeader>
                    <SheetTitle>Update Status</SheetTitle>
                </SheetHeader>
                <div className="px-4 py-2">
                    <StatusForm onOpenChange={onOpenChange} />
                </div>
            </SheetContent>
        </Sheet>
    )
}

function StatusDialog() {
    const { device } = useDeviceDetection()
    const [open, setOpen] = useState(false)

    return device === 'mobile' ? (
        <MobileStatusSheet open={open} onOpenChange={setOpen} />
    ) : (
        <DesktopStatusDropdown open={open} onOpenChange={setOpen} />
    )
}

export default StatusDialog
