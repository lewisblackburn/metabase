import { SidebarItem } from '@/components/shared/sidebar-dialog';
import { Input } from '@/registry/new-york-v4/ui/input';
import { Label } from '@/registry/new-york-v4/ui/label';
import { Separator } from '@/registry/new-york-v4/ui/separator';

import UploadAvatar from './upload-avatar';

interface AccountProps {
    item: SidebarItem;
}

export default function Account({ item }: AccountProps) {
    return (
        <div className='space-y-6'>
            <div className='flex items-start gap-6'>
                <UploadAvatar />
                <div className='flex-1 space-y-4'>
                    <div className='space-y-2'>
                        <Label htmlFor='displayName'>Display Name</Label>
                        <Input id='displayName' placeholder='Enter your display name' />
                    </div>
                </div>
            </div>
            <Separator />
        </div>
    );
}
