import { siGraphql } from 'simple-icons/icons';

export default function GraphQLIcon({ className }: { className?: string }) {
    return (
        <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className={className}>
            <title>{siGraphql.title}</title>
            <path d={siGraphql.path} fill='currentColor' />
        </svg>
    );
}
