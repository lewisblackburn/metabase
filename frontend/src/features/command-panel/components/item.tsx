import { ACTION_TYPE } from '@/constants/actions.constant';
import { cn } from '@/lib/utils';
import { Badge } from '@/registry/new-york-v4/ui/badge';
import { CommandItem, CommandShortcut } from '@/registry/new-york-v4/ui/command';

export type ItemType = {
    id: string;
    title: string;
    description?: string;
    type: {
        type: string;
        name: string;
        background: string;
        foreground: string;
        border: string;
        icon: React.ComponentType<{ className?: string }>;
    };
    shortcut?: string;
    lastOpened?: string;
};

interface ItemProps {
    item: ItemType;
    onSelect?: () => void;
}

export default function Item({ item, onSelect }: Readonly<ItemProps>) {
    const hasBadge = item.shortcut || item.type.type === ACTION_TYPE.OPEN.type;
    const hasShortcut = item.shortcut;

    return (
        <CommandItem key={item.id} className='text-xs' onSelect={onSelect} value={`${item.title}-${item.id}`}>
            <div className={cn(item.type.background, 'p-1', { 'self-start': item.description })}>
                <item.type.icon className={cn(item.type.foreground, '!size-3')} />
            </div>
            <div>
                <span>{item.title}</span>
                {item.description && <p className='text-muted-foreground'>{item.description}</p>}
            </div>
            <Badge
                className={cn(
                    item.type.background,
                    item.type.foreground,
                    item.type.border,
                    'ml-auto flex items-center rounded-sm',
                    {
                        hidden: hasBadge,
                        'self-start': item.description
                    }
                )}>
                <item.type.icon className={cn(item.type.foreground, '!mt-0.5 !size-2.5')} />
                <span>{item.type.name}</span>
            </Badge>
            {hasShortcut && <CommandShortcut>{item.shortcut}</CommandShortcut>}
        </CommandItem>
    );
}
