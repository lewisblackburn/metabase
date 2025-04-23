import { Badge } from '@/registry/new-york-v4/ui/badge';

const faqs = [
    {
        question: 'What is the goal of this media platform?',
        answer: 'To create a unified online database that aggregates movies, books, music, TV series, and games into one relational system, enabling seamless discovery and cross-media exploration.'
    },
    {
        question: 'Which media types does the platform support?',
        answer: 'It supports multiple formats—movies, series, books, music tracks, and games—and allows you to navigate relationships between them, like finding the movies a song appears in or the books adapted into movies.'
    },
    {
        question: 'How does data integration work?',
        answer: 'We ingest metadata from external APIs (IMDb, TMDb, Goodreads, etc.) and combine it with user-generated content. A normalisation layer ensures that all media types share common entities (e.g., people, genres, keywords) for cross-linking.'
    },
    {
        question: 'What technologies are used under the hood?',
        answer: 'The backend uses PostgreSQL for a fully normalised relational schema with indexing and caching optimisations. The frontend is built in React (Next.js), and recommendation engines are prototyped in Python with industry-standard libraries.'
    }
];

const FAQ = () => {
    return (
        <section className='py-32'>
            <div className='container'>
                <div className='text-center'>
                    <Badge className='text-xs font-medium'>FAQ</Badge>
                    <h1 className='mt-4 text-4xl font-semibold'>Project FAQ</h1>
                    <p className='text-muted-foreground mt-6 font-medium'>
                        Answers to common questions about the multi-source media database platform.
                    </p>
                </div>
                <div className='mx-auto mt-14 max-w-screen-lg'>
                    {faqs.map((faq, index) => (
                        <div key={index} className='mb-8 flex gap-4'>
                            <span className='bg-secondary text-primary flex size-6 shrink-0 items-center justify-center rounded-sm font-mono text-xs'>
                                {index + 1}
                            </span>
                            <div>
                                <div className='mb-2 flex items-center justify-between'>
                                    <h3 className='font-medium'>{faq.question}</h3>
                                </div>
                                <p className='text-muted-foreground text-sm'>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
