import {
    ArrowDown,
    Bell,
    CircleHelp,
    Clapperboard,
    Code,
    CreditCard,
    Download,
    FileText,
    HardDrive,
    Hash,
    Image,
    Languages,
    LanguagesIcon,
    Lock,
    LucideIcon,
    Music,
    Paintbrush,
    Plug,
    Tags,
    User,
    UserCog,
    Users
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
    User,
    Image,
    FileText,
    Languages,
    Users,
    UserCog,
    Music,
    Tags,
    Hash,
    Clapperboard,
    Download
} as const satisfies Record<string, LucideIcon>;

export type IconType = keyof typeof ICONS;

export const getIconComponent = (icon: IconType): LucideIcon => ICONS[icon];
