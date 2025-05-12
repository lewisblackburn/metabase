import { siMeta } from 'simple-icons/icons';

export default function MetaIcon({ className }: { className?: string }) {
    return (
        <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className={className}>
            <title>{siMeta.title}</title>
            <path d={siMeta.path} fill='currentColor' />
        </svg>
    );
}
