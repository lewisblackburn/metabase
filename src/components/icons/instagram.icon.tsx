import { siInstagram } from 'simple-icons/icons';

export default function InstagramIcon({ className }: { className?: string }) {
    return (
        <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className={className}>
            <title>{siInstagram.title}</title>
            <path d={siInstagram.path} fill='currentColor' />
        </svg>
    );
}
