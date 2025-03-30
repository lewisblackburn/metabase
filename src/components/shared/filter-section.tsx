import { Separator } from '@/registry/new-york-v4/ui/separator';

export default function FilterSection({ children, isLast }: { children: React.ReactNode; isLast?: boolean }) {
    return (
        <>
            <div className='px-5'>{children}</div>
            {!isLast && <Separator />}
        </>
    );
}
