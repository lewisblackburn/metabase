import { siX } from 'simple-icons/icons';

export default function XIcon({ className }: { className?: string }) {
    return (
        <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className={className}>
            <title>{siX.title}</title>
            <path d={siX.path} fill='currentColor' />
        </svg>
    );
}
