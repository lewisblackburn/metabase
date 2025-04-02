import {
    Bell,
    CircleHelp,
    Code,
    CreditCard,
    HardDrive,
    LanguagesIcon,
    Lock,
    LucideIcon,
    Paintbrush,
    Plug,
    User
} from 'lucide-react';

export const ICONS = {
    CircleHelp,
    Bell,
    Code,
    CreditCard,
    HardDrive,
    LanguagesIcon,
    Lock,
    Paintbrush,
    Plug,
    User
} as const satisfies Record<string, LucideIcon>;

export type IconType = keyof typeof ICONS;

export const getIconComponent = (icon: IconType): LucideIcon => ICONS[icon];
