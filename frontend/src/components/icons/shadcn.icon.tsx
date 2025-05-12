import { siShadcnui } from 'simple-icons/icons';

export default function ShadcnIcon({ className }: { className?: string }) {
    return (
        <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className={className}>
            <title>{siShadcnui.title}</title>
            <path d={siShadcnui.path} fill='currentColor' />
        </svg>
    );
}
