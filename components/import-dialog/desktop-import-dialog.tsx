'use client'

import {
    Dialog,
    DialogDescription,
    DialogHeader,
    DialogPanel,
    DialogPopup,
    DialogTitle,
} from '../ui/dialog'
import { ImportForm } from './import-form'

interface DesktopImportDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function DesktopImportDialog({ open, onOpenChange }: DesktopImportDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogPopup>
                <DialogHeader>
                    <DialogTitle>Import Media</DialogTitle>
                    <DialogDescription>
                        Choose a source and media type to import media to our library
                    </DialogDescription>
                </DialogHeader>
                <DialogPanel>
                    <ImportForm onOpenChange={onOpenChange} />
                </DialogPanel>
            </DialogPopup>
        </Dialog>
    )
}
