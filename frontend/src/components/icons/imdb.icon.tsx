import { siImdb } from 'simple-icons/icons';

export default function IMDBIcon({ className }: { className?: string }) {
    return (
        <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className={className}>
            <title>{siImdb.title}</title>
            <path d={siImdb.path} fill='currentColor' />
        </svg>
    );
}
