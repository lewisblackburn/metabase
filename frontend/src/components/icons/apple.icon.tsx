import { siApple } from 'simple-icons/icons';

export default function AppleIcon({ className }: { className?: string }) {
    return (
        <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className={className}>
            <title>{siApple.title}</title>
            <path d={siApple.path} fill='currentColor' />
        </svg>
    );
}
