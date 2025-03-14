import { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { Badge, badgeVariants } from '@/registry/new-york-v4/ui/badge';

import { VariantProps } from 'class-variance-authority';
import { Icon, LucideIcon, Video } from 'lucide-react';

const COLORS = {
    green: 'border-green-400/60 bg-green-300/20 text-green-800',
    blue: 'border-blue-400/60 bg-blue-300/20 text-blue-800',
    red: 'border-red-400/60 bg-red-300/20 text-red-800',
    orange: 'border-orange-400/60 bg-orange-300/20 text-orange-800',
    yellow: 'border-yellow-400/60 bg-yellow-300/20 text-yellow-800',
    purple: 'border-purple-400/60 bg-purple-300/20 text-purple-800',
    pink: 'border-pink-400/60 bg-pink-300/20 text-pink-800',
    gray: 'border-gray-400/60 bg-gray-300/20 text-gray-800',
    indigo: 'border-indigo-400/60 bg-indigo-300/20 text-indigo-800',
    teal: 'border-teal-400/60 bg-teal-300/20 text-teal-800',
    cyan: 'border-cyan-400/60 bg-cyan-300/20 text-cyan-800',
    lime: 'border-lime-400/60 bg-lime-300/20 text-lime-800',
    emerald: 'border-emerald-400/60 bg-emerald-300/20 text-emerald-800',
    amber: 'border-amber-400/60 bg-amber-300/20 text-amber-800',
    rose: 'border-rose-400/60 bg-rose-300/20 text-rose-800',
    fuchsia: 'border-fuchsia-400/60 bg-fuchsia-300/20 text-fuchsia-800',
    violet: 'border-violet-400/60 bg-violet-300/20 text-violet-800',
    sky: 'border-sky-400/60 bg-sky-300/20 text-sky-800',
    black: 'border-black/60 bg-black/20 text-black',
    white: 'border-white/60 bg-white/20 text-white',
    transparent: 'border-transparent bg-transparent hover:border-gray-300/60 hover:bg-gray-200/20 text-gray-800'
};

export const CustomBadge = ({
    icon: Icon,
    children,
    colour
}: {
    icon: LucideIcon;
    children: ReactNode;
    colour: keyof typeof COLORS;
}) => {
    return (
        <Badge
            variant='outline'
            className={cn('gap-2 py-1 transition-colors delay-0 duration-75', COLORS[colour] || COLORS.green)}>
            <Icon className='!h-4 !w-4' />
            <span>{children}</span>
        </Badge>
    );
};
