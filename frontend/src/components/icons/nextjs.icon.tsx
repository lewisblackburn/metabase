import { siNextdotjs } from 'simple-icons/icons';

export default function NextJSIcon({ className }: { className?: string }) {
    return (
        <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className={className}>
            <title>{siNextdotjs.title}</title>
            <path d={siNextdotjs.path} fill='currentColor' />
        </svg>
    );
}
