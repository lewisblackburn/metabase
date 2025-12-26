'use client'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetPanel,
    SheetTitle,
} from '../ui/sheet'
import { ImportForm } from './import-form'

interface MobileImportDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function MobileImportDialog({ open, onOpenChange }: MobileImportDialogProps) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="bottom" className="max-h-[90vh]">
                <SheetHeader>
                    <SheetTitle>Import Media</SheetTitle>
                    <SheetDescription>
                        Choose a source and media type to import media to our library
                    </SheetDescription>
                </SheetHeader>
                <SheetPanel>
                    <ImportForm onOpenChange={onOpenChange} />
                </SheetPanel>
            </SheetContent>
        </Sheet>
    )
}
