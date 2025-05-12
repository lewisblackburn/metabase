import { siHasura } from 'simple-icons/icons';

export default function HasuraIcon({ className }: { className?: string }) {
    return (
        <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className={className}>
            <title>{siHasura.title}</title>
            <path d={siHasura.path} fill='currentColor' />
        </svg>
    );
}
