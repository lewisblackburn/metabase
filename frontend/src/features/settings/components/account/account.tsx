import { Separator } from '@/registry/new-york-v4/ui/separator';

import DeleteAccount from './delete-account';
import DisableAccount from './disable-account';
import DisplayNameForm from './display-name-form';
import ResetPassword from './reset-password';
import UploadAvatar from './upload-avatar';

export default function Account() {
    return (
        <div className='space-y-6'>
            <div className='flex items-start gap-6'>
                <UploadAvatar />
                <div className='flex-1 space-y-4'>
                    <DisplayNameForm />
                </div>
            </div>
            <Separator />
            <ResetPassword />
            <Separator />
            <DisableAccount />
            <DeleteAccount />
        </div>
    );
}
