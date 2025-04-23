import { siTypescript } from 'simple-icons/icons';

export default function TypeScriptIcon({ className }: { className?: string }) {
    return (
        <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className={className}>
            <title>{siTypescript.title}</title>
            <path d={siTypescript.path} fill='currentColor' />
        </svg>
    );
}
