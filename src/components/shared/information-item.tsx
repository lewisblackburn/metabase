import React from 'react';

import { Badge } from '@/registry/new-york-v4/ui/badge';

import { LucideIcon } from 'lucide-react';

type InformationItemProps = {
    icon?: LucideIcon;
    label: string;
    badges: string | string[];
};

const InformationItem: React.FC<InformationItemProps> = ({ icon: Icon, label, badges }) => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2 text-sm'>
                {Icon && <Icon size='1em' />}
                <span>{label}</span>
            </div>
            <div className='flex items-center gap-2'>
                {typeof badges === 'string' ? (
                    <Badge variant='outline'>{badges}</Badge>
                ) : (
                    badges.map((badge) => (
                        <Badge key={badge} variant='outline'>
                            {badge}
                        </Badge>
                    ))
                )}
            </div>
        </div>
    );
};

export default InformationItem;
