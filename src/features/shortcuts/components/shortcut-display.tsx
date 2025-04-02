import { cn } from '@/lib/utils';

type InlineShortcutProps = {
    combo: string;
    className?: string;
};

export const ShortcutDisplay = ({ combo, className }: InlineShortcutProps) => {
    const keys = combo.toLowerCase().split('+');

    return (
        <kbd
            className={cn(
                'bg-muted text-muted-foreground flex items-center gap-1 rounded border p-1 font-mono text-[8px]',
                className
            )}>
            {keys.map((key, i) => (
                <span key={i} className='uppercase'>
                    {key}
                </span>
            ))}
        </kbd>
    );
};
