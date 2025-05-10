import { NewPersonForm } from '@/features/people/components/new-person-form';

export default function NewPerson() {
    return (
        <div className='container mx-auto py-6'>
            <div className='mb-6 flex items-center justify-between'>
                <h1 className='text-2xl font-bold'>New Person</h1>
            </div>
            <NewPersonForm />
        </div>
    );
}
