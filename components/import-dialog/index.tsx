'use client'

import { useDeviceDetection } from '@/hooks/use-device-detection'

import LoadingButton from '../loading-button'
import { Button } from '../ui/button'
import {
    Dialog,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogPanel,
    DialogPopup,
    DialogTitle,
} from '../ui/dialog'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetPanel,
    SheetTitle,
} from '../ui/sheet'
import ImportFormFields from './import-form-fields'
import useImportForm from './use-import-form'

interface ImportDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

// Desktop implementation
function DesktopImportDialog({ open, onOpenChange }: ImportDialogProps) {
    const { form, searchResults, isSearching, performSearch } = useImportForm(() =>
        onOpenChange(false),
    )

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogPopup>
                <form
                    id="import-form"
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault()
                        e.stopPropagation()
                        form.handleSubmit()
                    }}
                    className="flex flex-col gap-4"
                >
                    <DialogHeader>
                        <DialogTitle>Import Media</DialogTitle>
                        <DialogDescription>
                            Choose a source and media type to import media to our library
                        </DialogDescription>
                    </DialogHeader>
                    <DialogPanel>
                        <ImportFormFields
                            form={form}
                            performSearch={performSearch}
                            searchResults={searchResults}
                            isSearching={isSearching}
                        />
                    </DialogPanel>
                    <DialogFooter>
                        <form.Subscribe selector={state => [state.isSubmitting]}>
                            {([isSubmitting]) => (
                                <div className="flex justify-end gap-2">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => onOpenChange(false)}
                                        disabled={isSubmitting}
                                    >
                                        Cancel
                                    </Button>
                                    <LoadingButton loading={isSubmitting}>
                                        {isSubmitting ? 'Importing...' : 'Import'}
                                    </LoadingButton>
                                </div>
                            )}
                        </form.Subscribe>
                    </DialogFooter>
                </form>
            </DialogPopup>
        </Dialog>
    )
}

export function MobileImportDialog({ open, onOpenChange }: ImportDialogProps) {
    const { form, searchResults, isSearching, performSearch } = useImportForm(() =>
        onOpenChange(false),
    )

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="bottom" className="max-h-[90vh]">
                <form
                    id="import-form-mobile"
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault()
                        e.stopPropagation()
                        form.handleSubmit()
                    }}
                    className="flex flex-col gap-4"
                >
                    <SheetHeader>
                        <SheetTitle>Import Media</SheetTitle>
                        <SheetDescription>
                            Choose a source and media type to import media to our library
                        </SheetDescription>
                    </SheetHeader>
                    <SheetPanel>
                        <ImportFormFields
                            form={form}
                            performSearch={performSearch}
                            searchResults={searchResults}
                            isSearching={isSearching}
                        />
                    </SheetPanel>
                    <SheetFooter>
                        <form.Subscribe selector={state => [state.isSubmitting]}>
                            {([isSubmitting]) => (
                                <div className="flex w-full gap-2">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => onOpenChange(false)}
                                        disabled={isSubmitting}
                                        className="flex-1"
                                    >
                                        Cancel
                                    </Button>
                                    <LoadingButton loading={isSubmitting} className="flex-1">
                                        {isSubmitting ? 'Importing...' : 'Import'}
                                    </LoadingButton>
                                </div>
                            )}
                        </form.Subscribe>
                    </SheetFooter>
                </form>
            </SheetContent>
        </Sheet>
    )
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
