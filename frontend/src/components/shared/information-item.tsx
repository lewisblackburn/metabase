import React from 'react';

import { LucideIconOrFC } from '@/constants/icons.constant';
import { Badge } from '@/registry/new-york-v4/ui/badge';

type InformationItemProps = {
    icon?: LucideIconOrFC;
    label: string;
    badges?: string | string[] | undefined;
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
                    <div className='flex flex-wrap gap-2'>
                        {badges?.map((badge) => (
                            <Badge key={badge} variant='outline'>
                                {badge}
                            </Badge>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InformationItem;
