import MostRecentReviews from '@/features/dashboard/components/most-recent-reviews';
import PopularObjects from '@/features/dashboard/components/popular-objects';

export default function DashboardPage() {
    return (
        <div className='bg-background min-h-screen'>
            <div className='container mx-auto px-4 py-4'>
                <div className='grid grid-cols-1 gap-6 lg:grid-cols-12'>
                    <div className='lg:col-span-7'>
                        <MostRecentReviews />
                    </div>
                    <div className='lg:col-span-5'>
                        <PopularObjects />
                    </div>
                </div>
            </div>
        </div>
    );
}
