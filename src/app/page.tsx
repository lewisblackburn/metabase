import FAQ from '@/features/landing/components/faq';
import Features from '@/features/landing/components/features';
import { Hero } from '@/features/landing/components/hero';
import Integrations from '@/features/landing/components/integrations';

const Page = () => {
    return (
        <div className='flex flex-col'>
            <Hero />
            <Features />
            <Integrations />
            <FAQ />
        </div>
    );
};

export default Page;
