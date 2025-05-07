import { LucideIconOrFC } from '@/constants/icons.constant';

import { CustomBadge } from '../ui/custom-badge';

export default function ItemInformation({
    icon: Icon,
    label,
    children
}: {
    icon: LucideIconOrFC;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <div className='flex items-center justify-between'>
            <h6>{label}</h6>
            <CustomBadge icon={Icon} className='capitalize'>
                {children}
            </CustomBadge>
        </div>
    );
}
