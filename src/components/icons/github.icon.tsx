import { siGithub } from 'simple-icons/icons';

export default function GitHubIcon({ className }: { className?: string }) {
    return (
        <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className={className}>
            <title>{siGithub.title}</title>
            <path d={siGithub.path} fill='currentColor' />
        </svg>
    );
}
