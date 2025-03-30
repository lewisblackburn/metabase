import { Badge } from '@/registry/new-york-v4/ui/badge';

const InformationItem = ({
    icon,
    children,
    badge
}: Readonly<{ icon: React.ReactNode; children: React.ReactNode; badge: string | string[] }>) => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2 text-sm'>
                {icon}
                <span>{children}</span>
            </div>
            <div className='flex items-center gap-2'>
                {typeof badge === 'string' ? (
                    <Badge variant='outline'>{badge}</Badge>
                ) : (
                    (badge as string[]).map((b) => (
                        <Badge key={b} variant='outline'>
                            {b}
                        </Badge>
                    ))
                )}
            </div>
        </div>
    );
};

export default InformationItem;
