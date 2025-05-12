import { siTailwindcss } from 'simple-icons/icons';

export default function TailwindIcon({ className }: { className?: string }) {
    return (
        <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className={className}>
            <title>{siTailwindcss.title}</title>
            <path d={siTailwindcss.path} fill='currentColor' />
        </svg>
    );
}
