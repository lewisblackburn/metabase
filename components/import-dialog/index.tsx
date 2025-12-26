'use client'

import { useDeviceDetection } from '@/hooks/use-device-detection'

import { DesktopImportDialog } from './desktop-import-dialog'
import { MobileImportDialog } from './mobile-import-dialog'

interface ImportDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export default function ImportDialog({ open, onOpenChange }: ImportDialogProps) {
    const { device } = useDeviceDetection()

    switch (device) {
        case 'mobile':
            return <MobileImportDialog open={open} onOpenChange={onOpenChange} />
        default:
            return <DesktopImportDialog open={open} onOpenChange={onOpenChange} />
    }
}
