import { siGoogle } from 'simple-icons/icons';

export default function GoogleIcon({ className }: { className?: string }) {
    return (
        <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className={className}>
            <title>{siGoogle.title}</title>
            <path d={siGoogle.path} fill='currentColor' />
        </svg>
    );
}
