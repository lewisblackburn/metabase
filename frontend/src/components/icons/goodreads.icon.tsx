import { siGoodreads } from 'simple-icons/icons';

export default function GoodreadsIcon({ className }: { className?: string }) {
    return (
        <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className={className}>
            <title>{siGoodreads.title}</title>
            <path d={siGoodreads.path} fill='currentColor' />
        </svg>
    );
}
