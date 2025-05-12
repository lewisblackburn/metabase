import { siPostgresql } from 'simple-icons/icons';

export default function PostgeSQLIcon({ className }: { className?: string }) {
    return (
        <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className={className}>
            <title>{siPostgresql.title}</title>
            <path d={siPostgresql.path} fill='currentColor' />
        </svg>
    );
}
