import DialogContentNoClose from '@/components/shared/dialog-content-no-close';
import { ShortcutDisplay } from '@/features/shortcuts/components/shortcut-display';
import { useShortcut } from '@/features/shortcuts/hooks/useShortcut';
import { Command } from '@/registry/new-york-v4/ui/command';
import { Dialog, DialogDescription, DialogHeader, DialogTitle } from '@/registry/new-york-v4/ui/dialog';

export default function CommandDialog({
    title = 'Command Panel',
    description = 'Search for a command to run...',
    children,
    ...props
}: React.ComponentProps<typeof Dialog> & {
    title?: string;
    description?: string;
}) {
    const openCommandPanel = useShortcut('openCommandPanel');
    const navigateUp = useShortcut('navigateUp');
    const navigateDown = useShortcut('navigateDown');

    const shortcuts = [openCommandPanel, navigateUp, navigateDown];

    return (
        <Dialog {...props}>
            <DialogHeader className='sr-only'>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <DialogContentNoClose className='overflow-hidden p-0'>
                <Command className='[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>
                    {children}
                    <div className='border-border flex items-center gap-5 border-t p-2'>
                        {shortcuts.map((shortcut, index) => (
                            <div key={index} className='flex items-center gap-2 text-xs'>
                                <ShortcutDisplay combo={shortcut.key} />
                                <span className='text-muted-foreground'>{shortcut.title}</span>
                            </div>
                        ))}
                    </div>
                </Command>
            </DialogContentNoClose>
        </Dialog>
    );
}
