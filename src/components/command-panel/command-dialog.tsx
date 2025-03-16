import { SHORTCUTS } from '@/constants/shortcuts';
import { Command } from '@/registry/new-york-v4/ui/command';
import { Dialog, DialogDescription, DialogHeader, DialogTitle } from '@/registry/new-york-v4/ui/dialog';

import DialogContent from './dialog-content';

export default function CommandDialog({
    title = 'Command Palette',
    description = 'Search for a command to run...',
    children,
    ...props
}: React.ComponentProps<typeof Dialog> & {
    title?: string;
    description?: string;
}) {
    return (
        <Dialog {...props}>
            <DialogHeader className='sr-only'>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <DialogContent className='overflow-hidden p-0'>
                <Command className='[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>
                    {children}
                    <div className='border-border flex items-center gap-5 border-t px-2 py-1'>
                        {SHORTCUTS.COMMAND_PANEL.map((item, index) => (
                            <div key={index} className='text-muted-foreground flex items-center gap-1 text-xs'>
                                <div className='text-primary flex items-center'>
                                    {item.keys.map((key, keyIndex) => {
                                        if (typeof key === 'string') {
                                            return <span key={keyIndex}>{key}</span>;
                                        }

                                        if (typeof key === 'object') {
                                            const KeyComponent = key as React.ElementType;

                                            return <KeyComponent key={keyIndex} className='!mt-0.5 !size-2.5' />;
                                        }

                                        return null;
                                    })}
                                </div>
                                <span>{item.short}</span>
                            </div>
                        ))}
                    </div>
                </Command>
            </DialogContent>
        </Dialog>
    );
}
