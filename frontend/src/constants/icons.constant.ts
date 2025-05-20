import {
    Bell,
    CircleHelp,
    Clapperboard,
    Code,
    CreditCard,
    Download,
    FilePlus,
    FileText,
    Globe,
    HardDrive,
    Hash,
    Image,
    Import,
    Languages,
    LanguagesIcon,
    Lock,
    LucideIcon,
    Music,
    Paintbrush,
    Plug,
    Tags,
    Trophy,
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
    Download,
    Globe,
    FilePlus,
    Import,
    Trophy
} as const satisfies Record<string, LucideIcon>;

export type IconType = keyof typeof ICONS;
export type LucideIconOrFC = LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;

export const getIconComponent = (icon: IconType): LucideIcon => ICONS[icon];
